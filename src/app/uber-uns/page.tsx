import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  HardHat,
  Leaf,
  CheckCircle2,
  Clock,
  ArrowRight
} from "lucide-react";
import GlassNavbar from "@/components/GlassNavbar";
import MeierLogo from "@/components/MeierLogo";
import UberUnsClient from "./UberUnsClient";
import styles from "./uber-uns.module.css";

export const metadata = {
  title: "Über uns & Historie | MEIER GMBH BAUUNTERNEHMEN – Seit 1974",
  description:
    "Erfahren Sie mehr über die Meier GmbH: 50 Jahre deutsche Bautradition, über 1.200 Mitarbeiter, eigene Baugeräte und zukunftsweisende Ingenieursbau-Kompetenz.",
};

export default function UberUnsPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroWrapper} aria-label="Über uns Hero">
        <GlassNavbar />

        <Image
          src="/images/engineers-berlin.jpg"
          alt="Ingenieure und Baudirektion der Meier GmbH"
          fill
          priority
          className={styles.heroBgImage}
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <div className={styles.heroTag}>
            <ShieldCheck size={14} />
            <span>Tradition &amp; Baukunst seit 1974</span>
          </div>

          <h1 className={styles.heroTitle}>ÜBER MEIER GMBH BAUUNTERNEHMEN</h1>

          <p className={styles.heroSubtitle}>
            Seit über fünf Jahrzehnten verbinden wir als inhabergeführtes deutsches Bauunternehmen
            meisterhaftes Handwerk mit digitaler BIM-Präzision, absoluter Termintreue
            und verlässlichen Werten auf Augenhöhe.
          </p>

          {/* Key Figures Strip */}
          <div className={styles.heroStatsStrip}>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>50+</span>
              <span className={styles.heroStatLabel}>Jahre Bautradition</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>1.200</span>
              <span className={styles.heroStatLabel}>Mitarbeiter &amp; Experten</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>850+</span>
              <span className={styles.heroStatLabel}>Realisierte Bauwerke</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>100%</span>
              <span className={styles.heroStatLabel}>Inhabergeführt &amp; Unabhängig</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUES & MISSION */}
      <section className={styles.valuesSection} aria-label="Unsere Werte">
        <div className={styles.valuesGrid}>
          {/* Value 1 */}
          <div className={styles.valueCard}>
            <div className={styles.valueIconBox}>
              <HardHat size={26} />
            </div>
            <h3 className={styles.valueTitle}>Echte Eigenleistung</h3>
            <p className={styles.valueDesc}>
              Wir bauen mit eigenen Fachkräften und eigenem modernen Maschinenpark, statt Verantwortung abzuwälzen. Das sichert Qualität und Verlässlichkeit.
            </p>
          </div>

          {/* Value 2 */}
          <div className={styles.valueCard}>
            <div className={styles.valueIconBox}>
              <Clock size={26} />
            </div>
            <h3 className={styles.valueTitle}>Verbindlichkeit &amp; Termine</h3>
            <p className={styles.valueDesc}>
              Ein gegebenes Wort gilt. Wir garantieren vertragliche Festpreise und Fertigstellungstermine mit 100% Termintreue nach DIN ISO 9001.
            </p>
          </div>

          {/* Value 3 */}
          <div className={styles.valueCard}>
            <div className={styles.valueIconBox}>
              <Award size={26} />
            </div>
            <h3 className={styles.valueTitle}>Pioniergeist &amp; BIM</h3>
            <p className={styles.valueDesc}>
              Modernste 5D-BIM-Planung, Drohnenvermessung und smarte IoT-Sensorik bringen maximale Planungssicherheit vor dem ersten Spatenstich.
            </p>
          </div>

          {/* Value 4 */}
          <div className={styles.valueCard}>
            <div className={styles.valueIconBox}>
              <Leaf size={26} />
            </div>
            <h3 className={styles.valueTitle}>Zukunft &amp; Nachhaltigkeit</h3>
            <p className={styles.valueDesc}>
              Führend in der Umsetzung von Holz-Beton-Hybridbauten, Low-Carbon-Betonen und DGNB-Zertifizierungen für einen minimalen CO₂-Fußabdruck.
            </p>
          </div>
        </div>
      </section>

      {/* 3. HISTORICAL TIMELINE & LEADERSHIP (Client Component) */}
      <UberUnsClient />

      {/* 4. FOOTER */}
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
              mit deutscher Präzision und über 50 Jahren Bauerfahrung.
            </p>
          </div>

          <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>
              Startseite
            </Link>
            <Link href="/uber-uns" style={{ color: "#FF8024", fontSize: "0.9rem", fontWeight: 700 }}>
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
            <Link href="/#impressum" style={{ color: "#64748B", textDecoration: "underline" }}>
              Impressum
            </Link>
            <Link href="/#datenschutz" style={{ color: "#64748B", textDecoration: "underline" }}>
              Datenschutzerklärung
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
