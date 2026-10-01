import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  HardHat,
  FileCheck2,
  KeyRound,
  Compass,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck
} from "lucide-react";
import GlassNavbar from "@/components/GlassNavbar";
import MeierLogo from "@/components/MeierLogo";
import styles from "./leistungen.module.css";

export const metadata = {
  title: "Leistungen | MEIER GMBH BAUUNTERNEHMEN – Hochbau, Tiefbau & Ausbau",
  description: "Entdecken Sie die Bauleistungen der Meier GmbH: Hochbau & Gewerbebau, Wohnungsbau, Tiefbau und hochwertiger Innenausbau mit höchster deutscher Präzision.",
};

export default function LeistungenPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* 1. HERO SECTION (High-Tech Commercial Site) */}
      <section className={styles.heroWrapper} aria-label="Leistungen Hero">
        <GlassNavbar />

        <Image
          src="/images/hero-clean.jpg"
          alt="Moderne Gewerbebaustelle von Meier GmbH"
          fill
          priority
          className={styles.heroBgImage}
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <div className={styles.heroTag}>
            <ShieldCheck size={14} />
            <span>Baukompetenz nach DIN ISO 9001</span>
          </div>

          <h1 className={styles.heroTitle}>LEISTUNGEN</h1>

          <p className={styles.heroSubtitle}>
            WIR BAUEN DIE ZUKUNFT. PRÄZISION &amp; INNOVATION FÜR IHRE BAUVORHABEN.
          </p>

          <Link href="/#kontakt" className={styles.heroCtaBtn}>
            <span>Anfrage starten</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 2. STRUCTURED 3-COLUMN SERVICE GRID */}
      <section className={styles.servicesSection} aria-label="Unsere Geschäftsfelder">
        <div className={styles.servicesGrid}>
          {/* Service 1: Hochbau & Gewerbebau */}
          <div className={styles.serviceCard}>
            <div className={styles.cardImageWrapper}>
              <Image
                src="/images/hero-frankfurt.jpg"
                alt="Hochbau und Gewerbebau in Frankfurt"
                fill
                className={styles.cardImage}
              />
              <div className={styles.cardBadge}>
                <span className={styles.badgeNumber}>1.</span> Hochbau
              </div>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Hochbau &amp; Gewerbebau</h3>
              <p className={styles.cardDescription}>
                Schlüsselfertige Bürokomplexe, moderne Verwaltungsbauten und Logistikzentren nach DGNB-Gold- und KfW-40-Standards mit modernster Gebäudetechnik.
              </p>

              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <CheckCircle2 size={16} />
                  <span>Schlüsselfertige Generalübernahme</span>
                </li>
                <li className={styles.featureItem}>
                  <CheckCircle2 size={16} />
                  <span>Stahlbeton- &amp; Skelettbauweise</span>
                </li>
                <li className={styles.featureItem}>
                  <CheckCircle2 size={16} />
                  <span>KfW-Effizienzhaus 40 Standard</span>
                </li>
              </ul>

              <Link href="/#kontakt" className={styles.cardLink}>
                <span>Mehr erfahren</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Service 2: Wohnungsbau & Tiefbau */}
          <div className={styles.serviceCard}>
            <div className={styles.cardImageWrapper}>
              <Image
                src="/images/timber-holzbau.jpg"
                alt="Wohnungsbau und Holzhybridarchitektur"
                fill
                className={styles.cardImage}
              />
              <div className={styles.cardBadge}>
                <span className={styles.badgeNumber}>2.</span> Wohnungsbau
              </div>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Wohnungsbau &amp; Tiefbau</h3>
              <p className={styles.cardDescription}>
                Nachhaltige Mehrfamilienhäuser, moderne Holz-Hybrid-Wohnquartiere sowie innerstädtische Baugrubensicherung und Pfahlgründungen aus Expertenhand.
              </p>

              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <CheckCircle2 size={16} />
                  <span>Klimafreundlicher Holz-Hybridbau</span>
                </li>
                <li className={styles.featureItem}>
                  <CheckCircle2 size={16} />
                  <span>Spezialtiefbau &amp; schwere Erdarbeiten</span>
                </li>
                <li className={styles.featureItem}>
                  <CheckCircle2 size={16} />
                  <span>Vollständige Erschließung</span>
                </li>
              </ul>

              <Link href="/#kontakt" className={styles.cardLink}>
                <span>Mehr erfahren</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Service 3: Innenausbau & Sanierung */}
          <div className={styles.serviceCard}>
            <div className={styles.cardImageWrapper}>
              <Image
                src="/images/interior-fitout.jpg"
                alt="Moderner Innenausbau und Konferenzräume"
                fill
                className={styles.cardImage}
              />
              <div className={styles.cardBadge}>
                <span className={styles.badgeNumber}>3.</span> Innenausbau
              </div>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Innenausbau &amp; Sanierung</h3>
              <p className={styles.cardDescription}>
                Hochwertiger Mieterausbau für Konzerne, Ganzglas-Trennwände, raumakustische Holzpaneele sowie energetische Revitalisierung historischer Bausubstanz.
              </p>

              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <CheckCircle2 size={16} />
                  <span>Exklusiver gewerblicher Ausbau</span>
                </li>
                <li className={styles.featureItem}>
                  <CheckCircle2 size={16} />
                  <span>Akustik- &amp; Brandschutzkonzepte</span>
                </li>
                <li className={styles.featureItem}>
                  <CheckCircle2 size={16} />
                  <span>Kernsanierung &amp; Denkmalschutz</span>
                </li>
              </ul>

              <Link href="/#kontakt" className={styles.cardLink}>
                <span>Mehr erfahren</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUALLY ENGAGING 4-STEP WORKFLOW INFOGRAPHIC */}
      <section className={styles.workflowSection} aria-label="Unser Projektablauf">
        <div className={styles.workflowHeader}>
          <div className={styles.workflowTag}>Strukturierter Bauprozess</div>
          <h2 className={styles.workflowTitle}>Unser Projektablauf</h2>
          <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.6, marginTop: "0.75rem" }}>
            Vom ersten Entwurf bis zur schlüsselfertigen Übergabe garantieren wir lückenlose Transparenz,
            Budgettreue und deutsche Ingenieurspräzision.
          </p>
        </div>

        <div className={styles.workflowGrid}>
          <div className={styles.timelineTrack} />

          {/* Step 1 */}
          <div className={styles.workflowStepCard}>
            <div className={styles.stepIconCircle}>
              <Compass size={28} />
            </div>
            <div className={styles.stepNumber}>Schritt 01</div>
            <h4 className={styles.stepTitle}>Planung &amp; Konzept</h4>
            <p className={styles.stepDescription}>
              Bedarfsanalyse, Machbarkeitsstudie und 3D-BIM-Modellierung für maximale Kosten- und Terminsicherheit.
            </p>
          </div>

          {/* Step 2 */}
          <div className={styles.workflowStepCard}>
            <div className={styles.stepIconCircle}>
              <FileCheck2 size={28} />
            </div>
            <div className={styles.stepNumber}>Schritt 02</div>
            <h4 className={styles.stepTitle}>Genehmigung &amp; Statik</h4>
            <p className={styles.stepDescription}>
              Erstellung prüffähiger statischer Berechnungen, Brandschutzkonzepte und behördliche Baugenehmigungen.
            </p>
          </div>

          {/* Step 3 */}
          <div className={styles.workflowStepCard}>
            <div className={styles.stepIconCircle}>
              <HardHat size={28} />
            </div>
            <div className={styles.stepNumber}>Schritt 03</div>
            <h4 className={styles.stepTitle}>Ausführung &amp; Bau</h4>
            <p className={styles.stepDescription}>
              Präzise Realisierung durch eigene Fachkräfte und modernste Baumaschinen unter ständiger TÜV-Qualitätsprüfung.
            </p>
          </div>

          {/* Step 4 */}
          <div className={styles.workflowStepCard}>
            <div className={styles.stepIconCircle}>
              <KeyRound size={28} />
            </div>
            <div className={styles.stepNumber}>Schritt 04</div>
            <h4 className={styles.stepTitle}>Übergabe &amp; Garantie</h4>
            <p className={styles.stepDescription}>
              Mängelfreie Abnahme, Übergabe des digitalen Bauwerksmodells und 5 Jahre Gewährleistung nach VOB/BGB.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer style={{ background: "#061126", color: "#FFFFFF", padding: "4rem 3rem 2.5rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <MeierLogo />
            <p style={{ color: "#94A3B8", fontSize: "0.88rem", marginTop: "0.8rem", maxWidth: "420px" }}>
              MEIER GMBH Bauunternehmen · Führende Baukompetenz für Hoch-, Tief- und Ausbau in ganz Deutschland.
            </p>
          </div>

          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <Link href="/" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>
              Startseite
            </Link>
            <Link href="/leistungen" style={{ color: "#FF8024", fontSize: "0.9rem", fontWeight: 700 }}>
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

        <div style={{ maxWidth: "1440px", margin: "2rem auto 0", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", fontSize: "0.82rem", color: "#64748B", flexWrap: "wrap", gap: "1rem" }}>
          <div>© {new Date().getFullYear()} MEIER GMBH BAUUNTERNEHMEN. Alle Rechte vorbehalten.</div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/impressum" style={{ color: "#64748B", textDecoration: "underline" }}>Impressum</Link>
            <Link href="/datenschutz" style={{ color: "#64748B", textDecoration: "underline" }}>Datenschutzerklärung</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
