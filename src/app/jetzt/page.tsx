import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, Clock, ShieldCheck, Award } from "lucide-react";
import GlassNavbar from "@/components/GlassNavbar";
import MeierLogo from "@/components/MeierLogo";
import JetztClient from "./JetztClient";
import styles from "./jetzt.module.css";

export const metadata = {
  title: "Jetzt Angebot anfordern | MEIER GMBH BAUUNTERNEHMEN – Baukostenrechner",
  description:
    "Berechnen Sie live die Baukosten für Ihr Vorhaben: Hochbau, Wohnungsbau, Hallenbau und Tiefbau. Fordern Sie jetzt Ihr verbindliches Festpreisangebot der Meier GmbH an.",
};

export default function JetztPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroWrapper} aria-label="Jetzt Angebot anfordern Hero">
        <GlassNavbar />

        <Image
          src="/images/hero-frankfurt.jpg"
          alt="Baukran und Skyline-Großbaustelle der Meier GmbH"
          fill
          priority
          className={styles.heroBgImage}
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <div className={styles.heroTag}>
            <Zap size={14} />
            <span>Online-Baukostenrechner &amp; Schnellangebot</span>
          </div>

          <h1 className={styles.heroTitle}>JETZT ANGEBOT ANFORDERN</h1>

          <p className={styles.heroSubtitle}>
            Ermitteln Sie mit unserem interaktiven Baukostenrechner in wenigen Klicks
            den indikativen Kostenrahmen für Ihr Vorhaben und erhalten Sie innerhalb von 24 Stunden
            ein maßgeschneidertes Festpreisangebot unserer Baudirektion.
          </p>

          {/* Key Metrics Counter Strip */}
          <div className={styles.heroStatsStrip}>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>24 Std.</span>
              <span className={styles.heroStatLabel}>Reaktionszeit</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>100%</span>
              <span className={styles.heroStatLabel}>Kostenlose Kalkulation</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>VOB / BGB</span>
              <span className={styles.heroStatLabel}>Verbindliche Festpreise</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>DGNB &amp; TÜV</span>
              <span className={styles.heroStatLabel}>Geprüfte Qualität</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE CALCULATOR */}
      <JetztClient />

      {/* 3. FOOTER */}
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
              mit verlässlichen Festpreisen und deutscher Ingenieurspräzision.
            </p>
          </div>

          <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>
              Startseite
            </Link>
            <Link href="/uber-uns" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>
              Über uns
            </Link>
            <Link href="/leistungen" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>
              Leistungen
            </Link>
            <Link href="/referenzen" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>
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
            <Link href="/jetzt" style={{ color: "#FF8024", fontSize: "0.9rem", fontWeight: 700 }}>
              Jetzt Angebot anfordern
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
