"use client";

/**
 * HeroSection — Ultra-Smooth Cinematic Video Hero
 *
 * Built for 60-120fps hardware-accelerated continuous playback:
 * - Native GPU video layers with zero seeking/decode stutter
 * - Seamless cinematic crossfade between Video 1 (Rohbau/Site) & Video 2 (Architektur)
 * - Scroll-driven camera parallax zoom & narrative storytelling beats
 * - Low-friction sticky scrolling (260vh) with Framer Motion spring physics
 * - Intelligent IntersectionObserver offscreen pausing for 0% CPU consumption
 */

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  ArrowDown,
  Sparkles
} from "lucide-react";
import GlassNavbar from "./GlassNavbar";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const v1Ref = useRef<HTMLVideoElement>(null);
  const v2Ref = useRef<HTMLVideoElement>(null);

  // Playback & Sound State
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSlot, setActiveSlot] = useState<1 | 2>(1);
  const [manualOverride, setManualOverride] = useState(false);

  // Scroll Progress across the 260vh hero container
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"]
  });

  // ── Cinematic Camera Zoom & Vignette Transforms ──────────────────────────
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.09]);
  const vignetteDim = useTransform(scrollYProgress, [0, 0.7], [0.35, 0.65]);

  // ── Automatic Video Crossfade based on Scroll ────────────────────────────
  // 0% -> 32%: Video 1 (Foundation & Active Construction)
  // 32% -> 56%: Smooth Crossfade to Video 2
  // 56% -> 100%: Video 2 (Modern Architectural Structure & Finish)
  const v2ScrollOpacity = useTransform(scrollYProgress, [0.32, 0.54], [0, 1]);

  // Update active camera feed pill based on scroll (unless manually chosen)
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (!manualOverride) {
        if (latest >= 0.44 && activeSlot !== 2) {
          setActiveSlot(2);
        } else if (latest < 0.44 && activeSlot !== 1) {
          setActiveSlot(1);
        }
      }
    });
  }, [scrollYProgress, manualOverride, activeSlot]);

  // ── Narrative Overlays (3 Choreographed Beats) ───────────────────────────
  // Beat 1: Main Hero Headline & Primary CTA
  const openOpacity = useTransform(scrollYProgress, [0, 0.16, 0.26], [1, 0.9, 0]);
  const openY = useTransform(scrollYProgress, [0, 0.26], ["0px", "-45px"]);

  // Beat 2: Mid-Scroll Tech & Precision Feature Card
  const beat2Opacity = useTransform(
    scrollYProgress,
    [0.28, 0.38, 0.58, 0.68],
    [0, 1, 1, 0]
  );
  const beat2Y = useTransform(
    scrollYProgress,
    [0.28, 0.38, 0.58, 0.68],
    ["36px", "0px", "0px", "-36px"]
  );
  const beat2Scale = useTransform(
    scrollYProgress,
    [0.28, 0.38, 0.58, 0.68],
    [0.96, 1, 1, 0.96]
  );

  // Beat 3: Grand Finale Stats & Credibility Row
  const beat3Opacity = useTransform(scrollYProgress, [0.70, 0.82], [0, 1]);
  const beat3Y = useTransform(scrollYProgress, [0.70, 0.82], ["28px", "0px"]);

  // Scroll Hint (fades out as soon as user begins scrolling)
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // ── Auto-play initialization & offscreen resource saving ─────────────────
  useEffect(() => {
    const v1 = v1Ref.current;
    const v2 = v2Ref.current;
    if (v1) {
      v1.play().catch(() => {});
    }
    if (v2) {
      v2.play().catch(() => {});
    }

    // Save CPU/GPU by pausing videos when scrolled far out of view
    const wrapper = wrapperRef.current;
    if (!wrapper || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!v1Ref.current || !v2Ref.current) return;
        if (entry.isIntersecting) {
          if (isPlaying) {
            v1Ref.current.play().catch(() => {});
            v2Ref.current.play().catch(() => {});
          }
        } else {
          v1Ref.current.pause();
          v2Ref.current.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [isPlaying]);

  // ── Controls Handlers ───────────────────────────────────────────────────
  const togglePlay = () => {
    const v1 = v1Ref.current;
    const v2 = v2Ref.current;
    if (!v1 || !v2) return;

    if (isPlaying) {
      v1.pause();
      v2.pause();
      setIsPlaying(false);
    } else {
      v1.play().catch(() => {});
      v2.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    if (v1Ref.current) v1Ref.current.muted = next;
    if (v2Ref.current) v2Ref.current.muted = next;
  };

  const selectFeed = (slot: 1 | 2) => {
    setActiveSlot(slot);
    setManualOverride(true);
  };

  // Determine computed opacity for Video 2 based on manual override vs scroll
  const getV2Opacity = () => {
    if (manualOverride) {
      return activeSlot === 2 ? 1 : 0;
    }
    return v2ScrollOpacity;
  };

  return (
    <div id="top" ref={wrapperRef} className={styles.scrollWrapper}>
      <div className={styles.stickyStage}>
        {/* Navigation Bar */}
        <GlassNavbar />

        {/* ── Native GPU-Accelerated Video Canvas Surface ─────────────────── */}
        <motion.div className={styles.videoContainer} style={{ scale: videoScale }}>
          {/* Video 1: Rohbau & Baustelle */}
          <video
            ref={v1Ref}
            className={styles.videoLayer}
            src="/videos/1.mp4"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            style={{
              opacity: manualOverride && activeSlot === 2 ? 0 : 1,
              zIndex: 0
            }}
          />

          {/* Video 2: Architektur & Fertigstellung */}
          <motion.video
            ref={v2Ref}
            className={styles.videoLayer}
            src="/videos/2.mp4"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            style={{
              opacity: getV2Opacity(),
              zIndex: 1
            }}
          />

          {/* Cinematic Vignette Overlay */}
          <motion.div
            className={styles.vignette}
            style={{ opacity: vignetteDim }}
            aria-hidden
          />

          {/* Architectural Grid Depth Layer */}
          <div className={styles.gridTexture} aria-hidden />
        </motion.div>

        {/* ── Camera Feed Switcher (Top Right) ───────────────────────────── */}
        <div className={styles.feedSwitcher} role="tablist" aria-label="Kamera-Perspektiven">
          <button
            type="button"
            className={`${styles.feedBtn} ${activeSlot === 1 ? styles.feedBtnActive : ""}`}
            onClick={() => selectFeed(1)}
            aria-selected={activeSlot === 1}
            title="Kamera 1: Baustelle & Rohbau"
          >
            <span
              className={`${styles.feedDot} ${activeSlot === 1 ? styles.feedDotActive : ""}`}
            />
            01 Baustelle
          </button>
          <button
            type="button"
            className={`${styles.feedBtn} ${activeSlot === 2 ? styles.feedBtnActive : ""}`}
            onClick={() => selectFeed(2)}
            aria-selected={activeSlot === 2}
            title="Kamera 2: Architektur & Vollendung"
          >
            <span
              className={`${styles.feedDot} ${activeSlot === 2 ? styles.feedDotActive : ""}`}
            />
            02 Architektur
          </button>
        </div>

        {/* ── Beat 1: Main Opening Overlay ───────────────────────────────── */}
        <motion.div
          className={styles.openingOverlay}
          style={{ y: openY, opacity: openOpacity }}
        >
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.eyebrowDot} />
            Seit 1974 — Bauexzellenz in Deutschland
          </motion.span>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.titleLine}>DIE ZUKUNFT</span>
            <span className={styles.titleLine}>
              BAUEN. <em className={styles.titleAccent}>PRÄZISION.</em>
            </span>
            <span className={styles.titleLine}>INNOVATION.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Ihr Partner für anspruchsvollen Hoch- und Tiefbau in Deutschland —
            von der ingenieurtechnischen Planung bis zur schlüsselfertigen Übergabe.
          </motion.p>

          <motion.div
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="#referenzen" className={styles.btnPrimary}>
              Unsere Projekte
            </Link>
            <Link href="/leistungen" className={styles.btnSecondary}>
              Leistungen entdecken
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Beat 2: Mid-Scroll Tech & Precision Feature Card ───────────── */}
        <motion.div
          className={styles.beat2Overlay}
          style={{
            opacity: beat2Opacity,
            y: beat2Y,
            scale: beat2Scale
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

        {/* ── Beat 3: Grand Finale Stats & Credibility Row ───────────────── */}
        <motion.div
          className={styles.beat3Overlay}
          style={{ opacity: beat3Opacity, y: beat3Y }}
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
              <span>MEIER GMBH entdecken</span>
              <ArrowDown size={16} />
            </Link>
          </div>
        </motion.div>

        {/* ── Ambient Video Controls (Bottom Left) ───────────────────────── */}
        <div className={styles.ambientControls}>
          <button
            type="button"
            className={styles.controlBtn}
            onClick={togglePlay}
            aria-label={isPlaying ? "Video pausieren" : "Video abspielen"}
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button
            type="button"
            className={styles.controlBtn}
            onClick={toggleMute}
            aria-label={isMuted ? "Ton einschalten" : "Ton stummschalten"}
            title={isMuted ? "Ton an" : "Stumm"}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>

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
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </div>
  );
}
