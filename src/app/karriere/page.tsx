import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HardHat,
  HeartHandshake,
  Car,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Award,
  Clock,
  ArrowRight
} from "lucide-react";
import GlassNavbar from "@/components/GlassNavbar";
import MeierLogo from "@/components/MeierLogo";
import KarriereClient from "./KarriereClient";
import styles from "./karriere.module.css";

export const metadata = {
  title: "Karriere & Jobs | MEIER GMBH BAUUNTERNEHMEN – Bauen Sie Ihre Zukunft",
  description:
    "Starten Sie Ihre Karriere bei der Meier GmbH: Überdurchschnittliche Vergütung, 30 Tage Urlaub, Firmenwagen, modernste Hilti/BIM-Ausstattung und familiärer Zusammenhalt.",
};

export default function KarrierePage() {
  return (
    <div className={styles.pageWrapper}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroWrapper} aria-label="Karriere Hero">
        <GlassNavbar />

        <Image
          src="/images/hero-clean.jpg"
          alt="Baustellenteam und Baukräne der Meier GmbH"
          fill
          priority
          className={styles.heroBgImage}
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <div className={styles.heroTag}>
            <HardHat size={15} />
            <span>Top-Arbeitgeber Bau 2026</span>
          </div>

          <h1 className={styles.heroTitle}>BAUEN SIE MIT UNS DIE ZUKUNFT</h1>

          <p className={styles.heroSubtitle}>
            Werden Sie Teil unseres starken Teams aus über 350 Baufachkräften. Bei der Meier GmbH
            erwarten Sie erstklassige Bezahlung nach Tarif, modernstes Profi-Equipment und
            echter Respekt für Ihr Handwerk.
          </p>

          {/* Key Metrics Counter Strip */}
          <div className={styles.heroStatsStrip}>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>350+</span>
              <span className={styles.heroStatLabel}>Mitarbeiter bundesweit</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>30 Tage</span>
              <span className={styles.heroStatLabel}>Bezahlter Jahresurlaub</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>100%</span>
              <span className={styles.heroStatLabel}>Unbefristete Festanstellung</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>4.8 / 5</span>
              <span className={styles.heroStatLabel}>Kununu Mitarbeiter-Score</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EMPLOYEE BENEFITS & CULTURE GRID */}
      <section className={styles.benefitsSection} aria-label="Mitarbeiter-Vorteile">
        <div className={styles.benefitsGrid}>
          {/* Benefit 1 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIconBox}>
              <TrendingUp size={26} />
            </div>
            <h3 className={styles.benefitTitle}>Top-Vergütung &amp; Boni</h3>
            <p className={styles.benefitDesc}>
              Attraktive Bezahlung über Bau-Tarif, Urlaubs- und Weihnachtsgeld, projektbezogene Erfolgsprämien und betriebliche Altersvorsorge mit 20% Arbeitgeberzuschuss.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIconBox}>
              <Car size={26} />
            </div>
            <h3 className={styles.benefitTitle}>Modernster Fuhrpark &amp; Werkzeug</h3>
            <p className={styles.benefitDesc}>
              Eigener Firmenwagen (Audi / BMW / VW) inkl. Tankkarte auch zur privaten Nutzung für Bauleiter sowie kabellose Profi-Werkzeuge von Hilti &amp; Leica.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIconBox}>
              <GraduationCap size={26} />
            </div>
            <h3 className={styles.benefitTitle}>Meier Bauakademie</h3>
            <p className={styles.benefitDesc}>
              Gezielte Förderung Ihrer Weiterbildung: Meisterkurse, Polierausbildung, BIM-Zertifizierungen oder Sicherheitslehrgänge – wir übernehmen 100% der Kosten.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIconBox}>
              <HeartHandshake size={26} />
            </div>
            <h3 className={styles.benefitTitle}>Familiärer Zusammenhalt</h3>
            <p className={styles.benefitDesc}>
              Flache Hierarchien, offene Türen bei der Geschäftsführung, jährliche Teamevents, Sommerfeste und echte Wertschätzung auf Augenhöhe.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIconBox}>
              <Clock size={26} />
            </div>
            <h3 className={styles.benefitTitle}>Gesunde Work-Life-Balance</h3>
            <p className={styles.benefitDesc}>
              Regionale Baustelleneinsätze mit planbarem Feierabend, minutengenaue Erfassung aller Überstunden und flexibles Freizeitausgleichskonto.
            </p>
          </div>

          {/* Benefit 6 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIconBox}>
              <ShieldCheck size={26} />
            </div>
            <h3 className={styles.benefitTitle}>Sicherheit &amp; Gesundheit</h3>
            <p className={styles.benefitDesc}>
              Höchste Arbeitssicherheitsstandards (DIN ISO 45001), hochwertige Engelbert-Strauss Schutzkleidung, JobRad-Leasing und betriebsärztliche Vorsorge.
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE JOB BOARD & QUICK APPLY */}
      <KarriereClient />

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
              mit deutscher Präzision und erstklassigen Karrierechancen.
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
            <Link href="/karriere" style={{ color: "#FF8024", fontSize: "0.9rem", fontWeight: 700 }}>
              Karriere
            </Link>
            <Link href="/#kontakt" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>
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
