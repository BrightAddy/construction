import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, ArrowRight } from "lucide-react";
import GlassNavbar from "@/components/GlassNavbar";
import MeierLogo from "@/components/MeierLogo";
import ReferenzenClient from "./ReferenzenClient";
import styles from "./referenzen.module.css";

export const metadata = {
  title: "Referenzen & Großprojekte | MEIER GMBH BAUUNTERNEHMEN",
  description:
    "Erleben Sie herausragende Referenzprojekte der Meier GmbH: Schlüsselfertiger Hochbau, anspruchsvoller Tunnel- & Brückenbau, moderne Wohnquartiere und Holz-Hybridbauwerke deutschlandweit.",
};

export default function ReferenzenPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* 1. HERO SECTION WITH CINEMATIC BACKGROUND */}
      <section className={styles.heroWrapper} aria-label="Referenzen Hero">
        <GlassNavbar />

        <Image
          src="/images/referenzen-hero.jpg"
          alt="Baukran und Skyline einer deutschen Großbaustelle der Meier GmbH"
          fill
          priority
          className={styles.heroBgImage}
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <div className={styles.heroTag}>
            <Award size={15} />
            <span>Vorzeigeprojekte deutscher Ingenieurskunst</span>
          </div>

          <h1 className={styles.heroTitle}>REFERENZEN &amp; BAUWERKE</h1>

          <p className={styles.heroSubtitle}>
            Von markanten Skyline-Bürotürmen und nachhaltigen Holzquartieren bis hin zu
            präzisen Fernbahntunneln – entdecken Sie unser Portfolio bundesweit realisierter Großprojekte.
          </p>

          {/* Key Metrics Counter Strip */}
          <div className={styles.heroStatsStrip}>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>120+</span>
              <span className={styles.heroStatLabel}>Realisierte Großprojekte</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>480 Mio. €</span>
              <span className={styles.heroStatLabel}>Betreutes Bauvolumen</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>100%</span>
              <span className={styles.heroStatLabel}>Termintreue</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>DGNB Platin</span>
              <span className={styles.heroStatLabel}>Zertifizierte Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE PORTFOLIO & SPOTLIGHT (Client Component) */}
      <ReferenzenClient />

      {/* 3. PREMIUM FOOTER */}
      <footer
        style={{
          background: "#061126",
          color: "#FFFFFF",
          padding: "4.5rem 3rem 2.5rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <div>
            <MeierLogo />
            <p
              style={{
                color: "#94A3B8",
                fontSize: "0.88rem",
                marginTop: "0.8rem",
                maxWidth: "440px",
                lineHeight: 1.6,
              }}
            >
              MEIER GMBH Bauunternehmen · Führende Baukompetenz für Hoch-, Tief- und Ingenieurbau
              mit deutscher Präzision und nachhaltigen Baustandards.
            </p>
          </div>

          <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>
              Startseite
            </Link>
            <Link href="/leistungen" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>
              Leistungen
            </Link>
            <Link href="/referenzen" style={{ color: "#FF8024", fontSize: "0.9rem", fontWeight: 700 }}>
              Referenzen
            </Link>
            <Link href="/technologie" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>
              Technologie
            </Link>
            <Link href="/karriere" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>
              Karriere
            </Link>
            <Link href="/kontakt" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>
              Kontakt
            </Link>
          </div>
        </div>

        <div
          style={{
            maxWidth: "1440px",
            margin: "2.5rem auto 0",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.82rem",
            color: "#64748B",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>© {new Date().getFullYear()} MEIER GMBH BAUUNTERNEHMEN. Alle Rechte vorbehalten.</div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/impressum" style={{ color: "#64748B", textDecoration: "underline" }}>
              Impressum
            </Link>
            <Link href="/datenschutz" style={{ color: "#64748B", textDecoration: "underline" }}>
              Datenschutzerklärung
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
