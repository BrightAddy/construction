import React from "react";
import Link from "next/link";
import { ShieldCheck, Scale, Building2, FileText, Phone, Mail } from "lucide-react";
import GlassNavbar from "@/components/GlassNavbar";
import MeierLogo from "@/components/MeierLogo";
import styles from "./impressum.module.css";

export const metadata = {
  title: "Impressum | MEIER GMBH BAUUNTERNEHMEN",
  description: "Gesetzliche Anbieterkennzeichnung und rechtliche Hinweise der Meier GmbH Bauunternehmen gemäß § 5 DDG.",
};

export default function ImpressumPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* 1. HERO */}
      <section className={styles.heroWrapper} aria-label="Impressum Header">
        <GlassNavbar />
        <div className={styles.heroTag}>
          <Scale size={14} />
          <span>Gesetzliche Anbieterkennzeichnung</span>
        </div>
        <h1 className={styles.heroTitle}>IMPRESSUM</h1>
        <p className={styles.heroSubtitle}>
          Rechtliche Angaben und Pflichtangaben nach § 5 Digitale-Dienste-Gesetz (DDG).
        </p>
      </section>

      {/* 2. LEGAL CONTENT */}
      <main className={styles.contentSection}>
        <div className={styles.legalCard}>
          {/* Angaben nach § 5 DDG */}
          <div className={styles.legalBlock}>
            <h2 className={styles.blockTitle}>
              <Building2 size={20} color="#FF8024" />
              <span>Angaben gemäß § 5 DDG</span>
            </h2>
            <div className={styles.blockText}>
              <p>
                <strong>MEIER GMBH BAUUNTERNEHMEN</strong><br />
                Kurfürstendamm 182<br />
                10707 Berlin<br />
                Deutschland
              </p>
            </div>
          </div>

          {/* Vertretungsberechtigte Geschäftsführer */}
          <div className={styles.legalBlock}>
            <h2 className={styles.blockTitle}>
              <ShieldCheck size={20} color="#FF8024" />
              <span>Vertretungsberechtigte Geschäftsführer</span>
            </h2>
            <div className={styles.blockText}>
              <p>
                Dipl.-Ing. Thomas Meier (Vorsitzender der Geschäftsführung)<br />
                Dr.-Ing. Elena Richter (Technische Geschäftsführung)<br />
                Dipl.-Kfm. Markus Bergmann (Kaufmännische Geschäftsführung)
              </p>
            </div>
          </div>

          {/* Kontakt */}
          <div className={styles.legalBlock}>
            <h2 className={styles.blockTitle}>
              <Phone size={20} color="#FF8024" />
              <span>Kontakt</span>
            </h2>
            <div className={styles.blockText}>
              <p>
                Telefon: +49 (0) 30 8920-400<br />
                Telefax: +49 (0) 30 8920-499<br />
                E-Mail: info@meier-bauunternehmen.de<br />
                Internet: www.meier-bauunternehmen.de
              </p>
            </div>
          </div>

          {/* Registereintrag */}
          <div className={styles.legalBlock}>
            <h2 className={styles.blockTitle}>
              <FileText size={20} color="#FF8024" />
              <span>Registereintrag &amp; Umsatzsteuer-ID</span>
            </h2>
            <div className={styles.blockText}>
              <p>
                Eintragung im Handelsregister.<br />
                Registergericht: Amtsgericht Charlottenburg (Berlin)<br />
                Registernummer: <strong>HRB 148922 B</strong>
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                <strong>DE 123 456 789</strong>
              </p>
            </div>
          </div>

          {/* Aufsichtsbehörde & Kammer */}
          <div className={styles.legalBlock}>
            <h2 className={styles.blockTitle}>
              <Scale size={20} color="#FF8024" />
              <span>Zuständige Kammer &amp; Berufsbezeichnung</span>
            </h2>
            <div className={styles.blockText}>
              <p>
                <strong>Baukammer Berlin</strong> (Körperschaft des öffentlichen Rechts)<br />
                Karl-Marx-Allee 78, 10243 Berlin
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                Gesetzliche Berufsbezeichnung: <strong>Bauingenieur / Beratender Ingenieur</strong><br />
                Verliehen in der Bundesrepublik Deutschland.
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                Berufsrechtliche Regelungen: Berliner Architekten- und Baukammergesetz (ABKG) sowie HOAI.
              </p>
            </div>
          </div>

          {/* Berufshaftpflichtversicherung */}
          <div className={styles.legalBlock}>
            <h2 className={styles.blockTitle}>
              <ShieldCheck size={20} color="#FF8024" />
              <span>Berufshaftpflichtversicherung</span>
            </h2>
            <div className={styles.blockText}>
              <p>
                Allianz Versicherungs-Aktiengesellschaft<br />
                Königinstraße 28, 80802 München<br />
                Räumlicher Geltungsbereich: Deutschland und das europäische Ausland.
              </p>
            </div>
          </div>

          {/* Streitschlichtung */}
          <div className={styles.legalBlock}>
            <h2 className={styles.blockTitle}>
              <Scale size={20} color="#FF8024" />
              <span>Streitschlichtung</span>
            </h2>
            <div className={styles.blockText}>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkAccent}
                >
                  https://ec.europa.eu/consumers/odr
                </a>.
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* 3. FOOTER */}
      <footer
        style={{
          background: "#061126",
          color: "#FFFFFF",
          padding: "4rem 3rem 2.5rem",
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
            <p style={{ color: "#94A3B8", fontSize: "0.88rem", marginTop: "0.8rem", maxWidth: "440px" }}>
              MEIER GMBH Bauunternehmen · Führende Baukompetenz für Hoch-, Tief- und Ingenieurbau in ganz Deutschland.
            </p>
          </div>

          <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>Startseite</Link>
            <Link href="/uber-uns" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>Über uns</Link>
            <Link href="/leistungen" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>Leistungen</Link>
            <Link href="/referenzen" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>Referenzen</Link>
            <Link href="/technologie" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>Technologie</Link>
            <Link href="/karriere" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>Karriere</Link>
            <Link href="/kontakt" style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 700 }}>Kontakt</Link>
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
            <Link href="/impressum" style={{ color: "#FF8024", textDecoration: "underline" }}>Impressum</Link>
            <Link href="/datenschutz" style={{ color: "#64748B", textDecoration: "underline" }}>Datenschutzerklärung</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
