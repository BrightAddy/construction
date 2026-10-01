import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Activity,
  Trees,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import GlassNavbar from "@/components/GlassNavbar";
import MeierLogo from "@/components/MeierLogo";
import TechnologieClient from "./TechnologieClient";
import styles from "./technologie.module.css";

export const metadata = {
  title: "Technologie & Innovation | MEIER GMBH BAUUNTERNEHMEN – Bauen 4.0",
  description:
    "Erfahren Sie, wie die Meier GmbH durch 5D-BIM, Drohnen-LiDAR, smarte Baustellensensorik und zirkuläre Baustoffe höchste deutsche Ingenieurspräzision und Termintreue garantiert.",
};

export default function TechnologiePage() {
  return (
    <div className={styles.pageWrapper}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroWrapper} aria-label="Technologie Hero">
        <GlassNavbar />

        <Image
          src="/images/engineers-berlin.jpg"
          alt="Ingenieure der Meier GmbH mit digitalem Tablet auf einer Hightech-Baustelle"
          fill
          priority
          className={styles.heroBgImage}
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <div className={styles.heroTag}>
            <Cpu size={14} />
            <span>Bauen 4.0 · Digitalisierung &amp; Präzision</span>
          </div>

          <h1 className={styles.heroTitle}>TECHNOLOGIE &amp; INNOVATION</h1>

          <p className={styles.heroSubtitle}>
            Von modellbasiertem 5D-BIM und digitalen Zwillingen bis hin zu sensorischer
            Echtzeit-Bauüberwachung – wir verbinden handwerkliche Bautradition mit zukunftsweisender
            deutscher Ingenieurstechnologie.
          </p>

          {/* Key Metrics Counter Strip */}
          <div className={styles.heroStatsStrip}>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>5D-BIM</span>
              <span className={styles.heroStatLabel}>Vollständig integriert</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>-40%</span>
              <span className={styles.heroStatLabel}>Planungskollisionen</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>100%</span>
              <span className={styles.heroStatLabel}>Termintreue</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>ISO 9001</span>
              <span className={styles.heroStatLabel}>Zertifizierte Prozesse</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PILLARS OF INNOVATION */}
      <section className={styles.pillarsSection} aria-label="Technologiesäulen">
        <div className={styles.pillarsGrid}>
          {/* Pillar 1 */}
          <div className={styles.pillarCard}>
            <div className={styles.pillarIconBox}>
              <Layers size={26} />
            </div>
            <div className={styles.pillarTag}>Säule 01</div>
            <h3 className={styles.pillarTitle}>5D-BIM &amp; Digital Twin</h3>
            <p className={styles.pillarDesc}>
              Virtuelle 3D-Vorabsimulation aller Bauteile, 4D-Termintaktung und direkte 5D-Kostenkopplung für 100% Transparenz.
            </p>
            <div className={styles.pillarKeyVal}>
              <CheckCircle2 size={16} color="#0052CC" />
              <span>IFC 4.3 OpenBIM Standard</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className={styles.pillarCard}>
            <div className={styles.pillarIconBox}>
              <Activity size={26} />
            </div>
            <div className={styles.pillarTag}>Säule 02</div>
            <h3 className={styles.pillarTitle}>Smarte IoT-Sensorik</h3>
            <p className={styles.pillarDesc}>
              Drahtlose Funkmessung von Betonreifegrad, Grundwasserständen und Schwingungen für sichere Bauabläufe.
            </p>
            <div className={styles.pillarKeyVal}>
              <CheckCircle2 size={16} color="#0052CC" />
              <span>24/7 Telemetrie-Alarmierung</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className={styles.pillarCard}>
            <div className={styles.pillarIconBox}>
              <Trees size={26} />
            </div>
            <div className={styles.pillarTag}>Säule 03</div>
            <h3 className={styles.pillarTitle}>Zirkuläres Bauen</h3>
            <p className={styles.pillarDesc}>
              Low-Carbon-Zemente, ressourcenschonender R-Beton und kreislauffähige Holz-Hybrid-Tragwerke.
            </p>
            <div className={styles.pillarKeyVal}>
              <CheckCircle2 size={16} color="#0052CC" />
              <span>Bis zu -60% CO₂-Footprint</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className={styles.pillarCard}>
            <div className={styles.pillarIconBox}>
              <Cpu size={26} />
            </div>
            <div className={styles.pillarTag}>Säule 04</div>
            <h3 className={styles.pillarTitle}>Drohnen &amp; LiDAR</h3>
            <p className={styles.pillarDesc}>
              Autonome Drohnenvermessung und 3D-Punktwolkenabgleich zur millimetergenauen Soll-Ist-Dokumentation.
            </p>
            <div className={styles.pillarKeyVal}>
              <CheckCircle2 size={16} color="#0052CC" />
              <span>± 2 mm Messgenauigkeit</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE DEEP DIVE, COMPARISON TABLE & CERTS */}
      <TechnologieClient />

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
              mit deutscher Präzision und modernster digitaler BIM-Technologie.
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
            <Link href="/technologie" style={{ color: "#38BDF8", fontSize: "0.9rem", fontWeight: 700 }}>
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
