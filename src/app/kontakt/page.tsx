import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneCall,
  Clock,
  ShieldCheck,
  Award,
  CheckCircle2
} from "lucide-react";
import GlassNavbar from "@/components/GlassNavbar";
import MeierLogo from "@/components/MeierLogo";
import KontaktClient from "./KontaktClient";
import styles from "./kontakt.module.css";

export const metadata = {
  title: "Kontakt & Angebot anfordern | MEIER GMBH BAUUNTERNEHMEN",
  description:
    "Fordern Sie ein kostenloses Angebot für Ihr Bauprojekt an: Hochbau, Tiefbau, Wohnungsbau und Sanierung. 24h Rückmelde-Garantie und persönliche Beratung durch unsere Projektingenieure.",
};

export default function KontaktPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroWrapper} aria-label="Kontakt Hero">
        <GlassNavbar />

        <Image
          src="/images/hero-frankfurt.jpg"
          alt="Bürokomplex und Bauleitung der Meier GmbH"
          fill
          priority
          className={styles.heroBgImage}
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <div className={styles.heroTag}>
            <PhoneCall size={14} />
            <span>Persönliche Bauherren-Beratung</span>
          </div>

          <h1 className={styles.heroTitle}>KONTAKT &amp; PROJEKTSTART</h1>

          <p className={styles.heroSubtitle}>
            Lassen Sie uns über Ihr nächstes Bauvorhaben sprechen. Ob schlüsselfertiger Hochbau,
            anspruchsvoller Tiefbau oder zirkuläre Holzquartiere – unsere Projektingenieure und
            Kalkulatoren stehen Ihnen bundesweit mit Rat und Tat zur Seite.
          </p>

          {/* Key Guarantees Counter Strip */}
          <div className={styles.heroStatsStrip}>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>24 Std.</span>
              <span className={styles.heroStatLabel}>Rückmelde-Garantie</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>100%</span>
              <span className={styles.heroStatLabel}>Kostenlose Erstberatung</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>VOB / BGB</span>
              <span className={styles.heroStatLabel}>Verbindliche Festpreise</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>ISO 9001</span>
              <span className={styles.heroStatLabel}>TÜV-geprüfte Qualität</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE INQUIRY FORM, LOCATIONS & FAQS */}
      <KontaktClient />

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
              mit deutscher Präzision und partnerschaftlicher Bauherrenbetreuung.
            </p>
          </div>

          <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>
              Startseite
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
            <Link href="/kontakt" style={{ color: "#FF8024", fontSize: "0.9rem", fontWeight: 700 }}>
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
