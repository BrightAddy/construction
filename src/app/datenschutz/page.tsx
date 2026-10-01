import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, Database, Server } from "lucide-react";
import GlassNavbar from "@/components/GlassNavbar";
import MeierLogo from "@/components/MeierLogo";
import styles from "./datenschutz.module.css";

export const metadata = {
  title: "Datenschutzerklärung | MEIER GMBH BAUUNTERNEHMEN",
  description: "Datenschutzerklärung der Meier GmbH Bauunternehmen gemäß der EU-Datenschutz-Grundverordnung (DSGVO).",
};

export default function DatenschutzPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* 1. HERO */}
      <section className={styles.heroWrapper} aria-label="Datenschutz Header">
        <GlassNavbar />
        <div className={styles.heroTag}>
          <Lock size={14} />
          <span>DSGVO-Konformität</span>
        </div>
        <h1 className={styles.heroTitle}>DATENSCHUTZERKLÄRUNG</h1>
        <p className={styles.heroSubtitle}>
          Informationen über die Verarbeitung Ihrer personenbezogenen Daten bei der Nutzung unserer Website.
        </p>
      </section>

      {/* 2. LEGAL CONTENT */}
      <main className={styles.contentSection}>
        <div className={styles.legalCard}>
          {/* Verantwortliche Stelle */}
          <div className={styles.legalBlock}>
            <h2 className={styles.blockTitle}>
              <ShieldCheck size={20} color="#FF8024" />
              <span>1. Name und Kontaktdaten des Verantwortlichen</span>
            </h2>
            <div className={styles.blockText}>
              <p>
                Verantwortlicher im Sinne der EU-Datenschutz-Grundverordnung (DSGVO) und anderer
                nationaler Datenschutzgesetze der Mitgliedstaaten sowie sonstiger datenschutzrechtlicher
                Bestimmungen ist die:
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                <strong>MEIER GMBH BAUUNTERNEHMEN</strong><br />
                Kurfürstendamm 182, 10707 Berlin<br />
                Telefon: +49 (0) 30 8920-400<br />
                E-Mail: datenschutz@meier-bauunternehmen.de
              </p>
            </div>
          </div>

          {/* Datenerfassung */}
          <div className={styles.legalBlock}>
            <h2 className={styles.blockTitle}>
              <Server size={20} color="#FF8024" />
              <span>2. Bereitstellung der Website und Server-Logfiles</span>
            </h2>
            <div className={styles.blockText}>
              <p>
                Beim Aufrufen unserer Website erfasst der Webserver automatisch technische Informationen,
                die Ihr Browser an unseren Server übermittelt:
              </p>
              <ul>
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Abrufs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser und Betriebssystem</li>
              </ul>
              <p style={{ marginTop: "0.5rem" }}>
                Rechtsgrundlage für diese Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung
                der Systemsicherheit und Fehleranalyse.
              </p>
            </div>
          </div>

          {/* Kontaktformular & Expressbewerbung */}
          <div className={styles.legalBlock}>
            <h2 className={styles.blockTitle}>
              <Database size={20} color="#FF8024" />
              <span>3. Kontaktaufnahme, Bauanfragen &amp; Bewerbungen</span>
            </h2>
            <div className={styles.blockText}>
              <p>
                Wenn Sie uns per Kontaktformular, Bauanfrage-Rechner oder 60-Sekunden-Expressbewerbung
                Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen
                dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
                bei uns gespeichert (Art. 6 Abs. 1 lit. b DSGVO zur Durchführung vorvertraglicher Maßnahmen).
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                Diese Daten geben wir niemals ohne Ihre ausdrückliche Einwilligung an unbefugte Dritte weiter.
              </p>
            </div>
          </div>

          {/* SSL / TLS Verschlüsselung */}
          <div className={styles.legalBlock}>
            <h2 className={styles.blockTitle}>
              <Lock size={20} color="#FF8024" />
              <span>4. SSL- bzw. TLS-Verschlüsselung</span>
            </h2>
            <div className={styles.blockText}>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte,
                wie zum Beispiel Baupläne, Angebote oder Anfragen, eine moderne SSL/TLS-Verschlüsselung.
                Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
                „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>
          </div>

          {/* Rechte der Betroffenen */}
          <div className={styles.legalBlock}>
            <h2 className={styles.blockTitle}>
              <Eye size={20} color="#FF8024" />
              <span>5. Ihre Rechte als betroffene Person</span>
            </h2>
            <div className={styles.blockText}>
              <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
              <ul>
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </ul>
              <p style={{ marginTop: "0.75rem" }}>
                Zur Ausübung Ihrer Rechte genügt eine formlose E-Mail an:{" "}
                <a href="mailto:datenschutz@meier-bauunternehmen.de" style={{ color: "#0052CC", fontWeight: 700 }}>
                  datenschutz@meier-bauunternehmen.de
                </a>.
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
            <Link href="/impressum" style={{ color: "#64748B", textDecoration: "underline" }}>Impressum</Link>
            <Link href="/datenschutz" style={{ color: "#FF8024", textDecoration: "underline" }}>Datenschutzerklärung</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
