"use client";

/**
 * HeroSection — Apple-Style Canvas Image Sequence Scrubbed Hero
 *
 * Architecture:
 * - 140 extracted 720p WebP frames (/hero-frames/frame_000.webp to frame_139.webp)
 * - Rendered on full-viewport HTML5 <canvas> using aspect-fill (object-fit: cover) math
 * - Frame 0 preloaded immediately for an instantaneous 0ms initial visual state
 * - Remaining frames progressively pre-cached in memory with fallback to nearest loaded frame
 * - requestAnimationFrame lerp loop: currentProgress += (targetProgress - currentProgress) * 0.12
 * - Frame index = Math.round(currentProgress * (totalFrames - 1))
 * - Buttery-smooth 60–120fps forward and backward scrubbing with zero video seek stutter
 * - Continuously calculated overlapping text state curves with zero hard component unmounts
 */

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Cpu,
  ArrowDown,
  Sparkles
} from "lucide-react";
import GlassNavbar from "./GlassNavbar";
import styles from "./HeroSection.module.css";

const TOTAL_FRAMES = 140;

const getFramePath = (index: number) =>
  `/hero-frames/frame_${String(index).padStart(3, "0")}.webp`;

export default function HeroSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // In-memory frame cache
  const imagesRef = useRef<(HTMLImageElement | null)[]>(
    new Array(TOTAL_FRAMES).fill(null)
  );
  const loadedMapRef = useRef<boolean[]>(
    new Array(TOTAL_FRAMES).fill(false)
  );

  // Hot-path animation refs (zero React re-renders during 60fps scrub loop)
  const currentProgressRef = useRef(0);
  const lastDrawnFrameRef = useRef(-1);
  const rafIdRef = useRef(0);

  // Continuous motion value for synchronized text transform curves
  const smoothProgress = useMotionValue(0);

  // ── Narrative Text State Curves (Continuous Overlapping Crossfades) ────────
  // Beat 1: Main Brand Headline & Primary CTAs (0% to ~28%)
  const beat1Opacity = useTransform(smoothProgress, [0, 0.14, 0.28], [1, 1, 0]);
  const beat1Y = useTransform(smoothProgress, [0, 0.28], ["0px", "-45px"]);
  const beat1Pointer = useTransform(smoothProgress, (v) =>
    v < 0.26 ? "auto" : "none"
  );

  // Beat 2: Mid-Scroll BIM 5D & Precision Tech Feature Card (24% to 70%)
  const beat2Opacity = useTransform(
    smoothProgress,
    [0.24, 0.36, 0.58, 0.70],
    [0, 1, 1, 0]
  );
  const beat2Y = useTransform(
    smoothProgress,
    [0.24, 0.36, 0.58, 0.70],
    ["40px", "0px", "0px", "-40px"]
  );
  const beat2Scale = useTransform(
    smoothProgress,
    [0.24, 0.36, 0.58, 0.70],
    [0.96, 1, 1, 0.96]
  );
  const beat2Pointer = useTransform(smoothProgress, (v) =>
    v >= 0.24 && v <= 0.68 ? "auto" : "none"
  );

  // Beat 3: Grand Finale Credentials & Project Transition (66% to 100%)
  const beat3Opacity = useTransform(smoothProgress, [0.66, 0.80], [0, 1]);
  const beat3Y = useTransform(smoothProgress, [0.66, 0.80], ["30px", "0px"]);
  const beat3Pointer = useTransform(smoothProgress, (v) =>
    v >= 0.66 ? "auto" : "none"
  );

  // Scroll Hint (fades out as soon as scrubbing starts)
  const scrollHintOpacity = useTransform(smoothProgress, [0, 0.08], [1, 0]);

  // ── Aspect-Fill (object-fit: cover) Canvas Math ──────────────────────────
  const drawCover = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    canvasWidth: number,
    canvasHeight: number
  ) => {
    const imgW = img.naturalWidth || 1280;
    const imgH = img.naturalHeight || 720;
    const imgRatio = imgW / imgH;
    const canvasRatio = canvasWidth / canvasHeight;

    let renderW: number;
    let renderH: number;
    let offsetX: number;
    let offsetY: number;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image: match width, crop height
      renderW = canvasWidth;
      renderH = canvasWidth / imgRatio;
      offsetX = 0;
      offsetY = (canvasHeight - renderH) / 2;
    } else {
      // Canvas is taller than image: match height, crop width
      renderW = canvasHeight * imgRatio;
      renderH = canvasHeight;
      offsetX = (canvasWidth - renderW) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
  };

  // Find target image, or fallback to the nearest available loaded frame
  const getBestFrame = (targetIndex: number): HTMLImageElement | null => {
    if (loadedMapRef.current[targetIndex] && imagesRef.current[targetIndex]) {
      return imagesRef.current[targetIndex];
    }
    // Search outwards for nearest loaded frame
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = targetIndex - offset;
      if (prev >= 0 && loadedMapRef.current[prev] && imagesRef.current[prev]) {
        return imagesRef.current[prev];
      }
      const next = targetIndex + offset;
      if (next < TOTAL_FRAMES && loadedMapRef.current[next] && imagesRef.current[next]) {
        return imagesRef.current[next];
      }
    }
    return imagesRef.current[0];
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // ── High-DPI / Retina Canvas Setup ─────────────────────────────────────
    const setupCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round(window.innerWidth * dpr);
      const h = Math.round(window.innerHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        // Redraw current frame immediately at new resolution
        const img = getBestFrame(lastDrawnFrameRef.current >= 0 ? lastDrawnFrameRef.current : 0);
        if (img) drawCover(ctx, img, canvas.width, canvas.height);
      }
    };
    setupCanvas();
    window.addEventListener("resize", setupCanvas, { passive: true });

    // ── Immediate Preload of Frame 0 (0ms Static Initial State) ───────────
    const img0 = new Image();
    img0.src = getFramePath(0);
    img0.onload = () => {
      imagesRef.current[0] = img0;
      loadedMapRef.current[0] = true;
      if (lastDrawnFrameRef.current === -1) {
        drawCover(ctx, img0, canvas.width, canvas.height);
        lastDrawnFrameRef.current = 0;
      }
    };

    // ── Progressive Pre-caching of Remaining Frames ────────────────────────
    let cancelled = false;
    const loadRemainingFrames = async () => {
      // 6 concurrent workers progressive loading pipeline
      const concurrency = 6;
      let nextIndex = 1;

      const worker = async () => {
        while (!cancelled && nextIndex < TOTAL_FRAMES) {
          const idx = nextIndex++;
          await new Promise<void>((resolve) => {
            const img = new Image();
            img.src = getFramePath(idx);
            img.onload = () => {
              if (!cancelled) {
                imagesRef.current[idx] = img;
                loadedMapRef.current[idx] = true;
              }
              resolve();
            };
            img.onerror = () => {
              resolve();
            };
          });
        }
      };

      await Promise.all(Array.from({ length: concurrency }, () => worker()));
    };

    loadRemainingFrames();

    // ── requestAnimationFrame Lerp Scrub Loop ─────────────────────────────
    const tick = () => {
      rafIdRef.current = requestAnimationFrame(tick);

      // Measure scroll position directly from DOM
      const rect = wrapper.getBoundingClientRect();
      const scrollable = wrapper.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const targetProgress =
        scrollable > 0 ? Math.min(1, Math.max(0, scrolled / scrollable)) : 0;

      // Lerp formula: currentProgress += (targetProgress - currentProgress) * 0.12
      currentProgressRef.current +=
        (targetProgress - currentProgressRef.current) * 0.12;

      // Convergence snap
      if (Math.abs(targetProgress - currentProgressRef.current) < 0.0001) {
        currentProgressRef.current = targetProgress;
      }

      const curProg = currentProgressRef.current;

      // Update Framer Motion value for synchronized text transitions
      smoothProgress.set(curProg);

      // Frame index = Math.round(currentProgress * (totalFrames - 1))
      const targetFrameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(curProg * (TOTAL_FRAMES - 1)))
      );

      // Render on canvas when frame index updates
      if (targetFrameIndex !== lastDrawnFrameRef.current) {
        const frameImg = getBestFrame(targetFrameIndex);
        if (frameImg) {
          drawCover(ctx, frameImg, canvas.width, canvas.height);
          lastDrawnFrameRef.current = targetFrameIndex;
        }
      }
    };

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("resize", setupCanvas);
    };
  }, [smoothProgress]);

  return (
    <div id="top" ref={wrapperRef} className={styles.scrollWrapper}>
      <div className={styles.stickyStage}>
        {/* Navigation Bar (Transparent throughout pinned hero, transitions to dark at boundary) */}
        <GlassNavbar />

        {/* ── Full-Viewport HTML5 Canvas (Aspect-Fill Cover) ──────────────── */}
        <canvas ref={canvasRef} className={styles.heroCanvas} />

        {/* Cinematic Vignette Overlay */}
        <div className={styles.vignette} aria-hidden />

        {/* Architectural Grid Depth Layer */}
        <div className={styles.gridTexture} aria-hidden />

        {/* ── Beat 1: Main Opening Overlay (0% to ~28%) ─────────────────── */}
        <motion.div
          className={styles.openingOverlay}
          style={{
            y: beat1Y,
            opacity: beat1Opacity,
            pointerEvents: beat1Pointer
          }}
        >
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Seit 1974 — Bauexzellenz in Deutschland
          </span>

          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine}>DIE ZUKUNFT</span>
            <span className={styles.titleLine}>
              BAUEN. <em className={styles.titleAccent}>PRÄZISION.</em>
            </span>
            <span className={styles.titleLine}>INNOVATION.</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Ihr Partner für anspruchsvollen Hoch- und Tiefbau in Deutschland —
            von der ingenieurtechnischen Planung bis zur schlüsselfertigen Übergabe.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="#referenzen" className={styles.btnPrimary}>
              Unsere Projekte
            </Link>
            <Link href="/leistungen" className={styles.btnSecondary}>
              Leistungen entdecken
            </Link>
          </div>
        </motion.div>

        {/* ── Beat 2: Mid-Scroll Tech & BIM Feature Card (24% to 70%) ───── */}
        <motion.div
          className={styles.beat2Overlay}
          style={{
            opacity: beat2Opacity,
            y: beat2Y,
            scale: beat2Scale,
            pointerEvents: beat2Pointer
          }}
          aria-hidden={false}
        >
          <div className={styles.techCard}>
            <div className={styles.techBadge}>
              <Cpu size={15} />
              <span>BIM 5D &amp; Digitale Bauleitung</span>
            </div>
            <h2 className={styles.techTitle}>
              Modernste Bautechnologie — Von der Planung bis zur schlüsselfertigen Übergabe
            </h2>
            <div className={styles.techGrid}>
              <div className={styles.techPill}>
                <ShieldCheck size={20} className={styles.techPillIcon} />
                <span className={styles.techPillText}>Präzision im Ingenieurbau</span>
              </div>
              <div className={styles.techPill}>
                <Sparkles size={20} className={styles.techPillIcon} />
                <span className={styles.techPillText}>DGNB Platin Standards</span>
              </div>
              <div className={styles.techPill}>
                <CheckCircle2 size={20} className={styles.techPillIcon} />
                <span className={styles.techPillText}>100% Termintreue</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Beat 3: Grand Finale Stats & Credibility Row (66% to 100%) ─── */}
        <motion.div
          className={styles.beat3Overlay}
          style={{
            opacity: beat3Opacity,
            y: beat3Y,
            pointerEvents: beat3Pointer
          }}
        >
          <div className={styles.statsRow}>
            <div className={styles.statsGroup}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>
                  50<span className={styles.statValueAccent}>+</span>
                </span>
                <span className={styles.statLabel}>Jahre Erfahrung</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>
                  1.200<span className={styles.statValueAccent}>+</span>
                </span>
                <span className={styles.statLabel}>Projekte realisiert</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>
                  98<span className={styles.statValueAccent}>%</span>
                </span>
                <span className={styles.statLabel}>Kundenzufriedenheit</span>
              </div>
            </div>

            <Link href="#uber-uns" className={styles.scrollDownHint}>
              <span>INZAG entdecken</span>
              <ArrowDown size={16} />
            </Link>
          </div>
        </motion.div>

        {/* ── Scroll Indicator (Bottom Center at start) ──────────────────── */}
        <motion.div
          className={styles.scrollIndicator}
          style={{ opacity: scrollHintOpacity }}
        >
          <span className={styles.scrollLabel}>Scrollen</span>
          <div className={styles.scrollLine}>
            <motion.div
              className={styles.scrollLineFill}
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* ── Top Scroll Progress Bar ────────────────────────────────────── */}
        <motion.div
          className={styles.progressBar}
          style={{ scaleX: smoothProgress }}
        />
      </div>
    </div>
  );
}
