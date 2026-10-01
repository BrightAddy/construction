"use client";

/**
 * HeroSection — Cinematic Scroll-Driven Video  (Definitive)
 *
 * Root fix: rate = smoothedVelocity × 60
 *   vel (video-seconds per frame) × 60 fps = video-seconds per real second
 *   → playbackRate tracks the scroll speed by definition, zero overshoot
 *
 * Canvas display layer removes all browser seek-flicker artifacts.
 * requestVideoFrameCallback (Chrome/Edge) paints frames at exact GPU-ready moments.
 * seeked-event draw ensures backward seeks paint only when complete.
 */

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import GlassNavbar from "./GlassNavbar";
import styles from "./HeroSection.module.css";

// ─── Tunables (adjust freely) ──────────────────────────────────────────────
const SCROLL_MULTIPLIER  = 5;     // extra viewport-heights of scroll to cover both videos
const MAX_RATE           = 8;     // cap on playbackRate when scrolling fast
const MIN_RATE           = 0.1;   // floor on playbackRate when scrolling slowly
const EMA_ALPHA          = 0.15;  // velocity smoothing: lower = smoother but more lag
const BACK_THROTTLE_MS   = 55;    // min ms between backward seeks (~18 seeks/sec max)
const IDLE_DELAY_MS      = 180;   // ms after scroll stops → precision seek to exact frame
const FWD_VEL_THRESHOLD  = 0.0005;// EMA vel above this → scrolling forward
const BACK_VEL_THRESHOLD = -0.0005;
const HARD_SYNC_GAP_S    = 1.0;   // seconds desync → immediate hard seek
const CATCH_UP_GAP_S     = 0.5;   // forward gap this large → seek to catch up
// ──────────────────────────────────────────────────────────────────────────

const HAS_RVFC =
  typeof HTMLVideoElement !== "undefined" &&
  "requestVideoFrameCallback" in HTMLVideoElement.prototype;

export default function HeroSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const v1Ref      = useRef<HTMLVideoElement>(null);
  const v2Ref      = useRef<HTMLVideoElement>(null);

  // All hot-path state in refs — zero React re-renders during animation
  const rafIdRef    = useRef(0);
  const ctxRef      = useRef<CanvasRenderingContext2D | null>(null);
  const prevTarget  = useRef(0);
  const velEMA      = useRef(0);
  const dur1        = useRef(0);
  const dur2        = useRef(0);
  const total       = useRef(0);
  const activeSlot  = useRef<1 | 2>(1);
  const isReady     = useRef(false);
  const isPlaying   = useRef(false);
  const lastBackMs  = useRef(0);
  const idleStartMs = useRef(0);

  // Framer-motion: overlay text animations only (no video involvement)
  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ["start start", "end end"] });
  const openOp  = useTransform(scrollYProgress, [0, 0.14], [1, 0]);
  const openY   = useTransform(scrollYProgress, [0, 0.14], ["0%", "-28%"]);
  const capOp   = useTransform(scrollYProgress, [0.28, 0.38, 0.62, 0.72], [0, 1, 1, 0]);
  const capY    = useTransform(scrollYProgress, [0.28, 0.38], ["18px", "0px"]);
  const endOp   = useTransform(scrollYProgress, [0.84, 0.94], [0, 1]);
  const scrollY = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas  = canvasRef.current;
    const v1      = v1Ref.current;
    const v2      = v2Ref.current;
    if (!wrapper || !canvas || !v1 || !v2) return;

    // ── Canvas: Retina-aware, covers full viewport ─────────────────────────
    const setupCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const W = window.innerWidth, H = window.innerHeight;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width  = W + "px";
      canvas.style.height = H + "px";
      const ctx = canvas.getContext("2d", { alpha: false });
      if (ctx) { ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctxRef.current = ctx; }
    };
    setupCanvas();
    window.addEventListener("resize", setupCanvas, { passive: true });

    // ── Draw: paints current video frame to canvas ────────────────────────
    const draw = (v: HTMLVideoElement) => {
      const ctx = ctxRef.current;
      if (!ctx || v.readyState < 2) return;
      ctx.drawImage(v, 0, 0, window.innerWidth, window.innerHeight);
    };

    // ── rVFC: frame-perfect draw on Chrome/Edge ───────────────────────────
    const armRVFC = (v: HTMLVideoElement) => {
      if (!HAS_RVFC) return;
      const slot = v === v1 ? 1 : 2;
      const loop = () => {
        draw(v);
        if (isPlaying.current && activeSlot.current === slot)
          (v as any).requestVideoFrameCallback(loop);
      };
      (v as any).requestVideoFrameCallback(loop);
    };

    // ── Video init ─────────────────────────────────────────────────────────
    [v1, v2].forEach(v => { v.muted = true; v.autoplay = false; v.pause(); v.currentTime = 0; });

    // ── Metadata → size wrapper, prime buffer ──────────────────────────────
    let metaCount = 0;
    const onMeta = (v: HTMLVideoElement, s: 1 | 2) => {
      if (s === 1) dur1.current = v.duration;
      else         dur2.current = v.duration;
      if (++metaCount < 2) return;

      total.current = dur1.current + dur2.current;
      const pxPerSec = Math.max(220, (window.innerHeight * SCROLL_MULTIPLIER) / total.current);
      wrapper.style.height = `calc(100vh + ${total.current * pxPerSec}px)`;

      const prime = (v: HTMLVideoElement) =>
        v.play().then(() => { v.pause(); v.currentTime = 0; }).catch(() => {});
      Promise.all([prime(v1), prime(v2)]).finally(() => {
        v1.addEventListener("seeked", () => draw(v1), { once: true });
        v1.currentTime = 0;
        isReady.current = true;
      });
    };
    const bindMeta = (v: HTMLVideoElement, s: 1 | 2) => {
      if (v.readyState >= 1) onMeta(v, s);
      else v.addEventListener("loadedmetadata", () => onMeta(v, s), { once: true });
    };
    bindMeta(v1, 1); bindMeta(v2, 2);

    // ── Helpers ────────────────────────────────────────────────────────────
    const switchTo = (s: 1 | 2) => {
      if (activeSlot.current === s) return;
      activeSlot.current = s;
      (s === 1 ? v2 : v1).pause();
      isPlaying.current = false;
    };

    const seekThen = (v: HTMLVideoElement, t: number) => {
      isPlaying.current = false;
      v.pause();
      v.currentTime = Math.max(0, Math.min(t, v.duration - 0.001));
      v.addEventListener("seeked", () => draw(v), { once: true });
    };

    // ── Main rAF tick ──────────────────────────────────────────────────────
    const tick = (now: number) => {
      rafIdRef.current = requestAnimationFrame(tick);
      if (!isReady.current) return;

      // Scroll progress — read DOM directly, no scroll listener
      const rect       = wrapper.getBoundingClientRect();
      const scrollable = wrapper.offsetHeight - window.innerHeight;
      const scrolled   = Math.max(0, -rect.top);
      const progress   = scrollable > 0 ? Math.min(1, scrolled / scrollable) : 0;

      const d1  = dur1.current;
      const d2  = dur2.current;
      const tot = total.current;
      const tgt = progress * tot;

      // EMA-smoothed velocity (video-seconds per frame)
      const rawVel = tgt - prevTarget.current;
      prevTarget.current = tgt;
      velEMA.current = velEMA.current * (1 - EMA_ALPHA) + rawVel * EMA_ALPHA;
      const vel = velEMA.current;

      // Route to the right clip
      let vid: HTMLVideoElement, localTgt: number;
      if (tgt <= d1) {
        switchTo(1);
        vid = v1; localTgt = Math.max(0, Math.min(tgt, d1 - 0.001));
      } else {
        switchTo(2);
        vid = v2; localTgt = Math.max(0, Math.min(tgt - d1, d2 - 0.001));
      }

      const diff = localTgt - vid.currentTime; // + means video is behind

      // ① Hard resync (jumped far)
      if (Math.abs(diff) > HARD_SYNC_GAP_S) {
        idleStartMs.current = 0;
        seekThen(vid, localTgt);

      // ② Scrolling forward
      } else if (vel > FWD_VEL_THRESHOLD) {
        idleStartMs.current = 0;

        // KEY FIX: rate = vel × 60 — video tracks scroll speed, no overshoot
        const rate = Math.max(MIN_RATE, Math.min(MAX_RATE, vel * 60));
        if (Math.abs(vid.playbackRate - rate) > 0.08) vid.playbackRate = rate;

        if (vid.paused) {
          vid.play().then(() => { isPlaying.current = true; armRVFC(vid); }).catch(() => {});
        }
        if (!HAS_RVFC) draw(vid); // Safari/Firefox: draw in rAF

        // If video has fallen significantly behind, seek to catch up
        if (diff > CATCH_UP_GAP_S) seekThen(vid, localTgt);

      // ③ Scrolling backward — throttled precision seeks
      } else if (vel < BACK_VEL_THRESHOLD) {
        idleStartMs.current = 0;
        if (now - lastBackMs.current >= BACK_THROTTLE_MS && Math.abs(diff) > 0.03) {
          lastBackMs.current = now;
          seekThen(vid, localTgt);
        }

      // ④ Idle — precision-seek to exact frame after brief delay
      } else {
        if (!idleStartMs.current) idleStartMs.current = now;
        if (now - idleStartMs.current >= IDLE_DELAY_MS) {
          idleStartMs.current = 0;
          if (!vid.paused) { vid.pause(); isPlaying.current = false; }
          if (Math.abs(diff) > 0.01) seekThen(vid, localTgt);
        }
      }
    };

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("resize", setupCanvas);
      [v1, v2].forEach(v => v.pause());
    };
  }, []);

  return (
    <div id="top" ref={wrapperRef} className={styles.scrollWrapper}>
      <div className={styles.stickyStage}>
        <GlassNavbar />

        {/* Canvas — sole display surface; eliminates all seek flicker */}
        <canvas ref={canvasRef} className={styles.heroCanvas} />

        {/* Videos: decode only, visually hidden (opacity 0, off-screen) */}
        <video ref={v1Ref} className={styles.hiddenVideo}
          src="/videos/1.mp4" muted playsInline preload="auto" />
        <video ref={v2Ref} className={styles.hiddenVideo}
          src="/videos/2.mp4" muted playsInline preload="auto" />

        <div className={styles.vignette} aria-hidden />

        {/* Opening overlay */}
        <motion.div className={styles.openingOverlay} style={{ y: openY, opacity: openOp }}>
          <motion.span className={styles.eyebrow}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
            <span className={styles.eyebrowDot} />
            Seit 1974 — Bauexzellenz in Deutschland
          </motion.span>
          <motion.h1 className={styles.heroTitle}
            initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}>
            <span className={styles.titleLine}>DIE ZUKUNFT</span>
            <span className={styles.titleLine}>
              BAUEN. <em className={styles.titleAccent}>PRÄZISION.</em>
            </span>
            <span className={styles.titleLine}>INNOVATION.</span>
          </motion.h1>
          <motion.p className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            Ihr Partner für anspruchsvollen Hoch- und Tiefbau in Deutschland —
            von der Planung bis zur schlüsselfertigen Übergabe.
          </motion.p>
          <motion.div className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}>
            <Link href="#referenzen" className={styles.btnPrimary}>Unsere Projekte</Link>
            <Link href="/leistungen" className={styles.btnSecondary}>Leistungen entdecken</Link>
          </motion.div>
        </motion.div>

        {/* Mid-scroll caption */}
        <motion.div className={styles.captionOverlay} style={{ opacity: capOp, y: capY }} aria-hidden>
          <p className={styles.captionText}>
            Modernste Bautechnologie — von der Planung bis zur Übergabe
          </p>
        </motion.div>

        {/* End stats */}
        <motion.div className={styles.endCard} style={{ opacity: endOp }}>
          <div className={styles.statsRow}>
            {[
              { value: "50+",    label: "Jahre Erfahrung"     },
              { value: "1.200+", label: "Projekte realisiert" },
              { value: "98%",    label: "Kundenzufriedenheit" },
            ].map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div className={styles.scrollIndicator} style={{ opacity: scrollY }}>
          <span className={styles.scrollLabel}>Scrollen</span>
          <div className={styles.scrollLine}>
            <motion.div className={styles.scrollLineFill}
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} />
          </div>
        </motion.div>

        <motion.div className={styles.progressBar} style={{ scaleX: scrollYProgress }} />
      </div>
    </div>
  );
}
