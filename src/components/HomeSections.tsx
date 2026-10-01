"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Compass,
  TreePine,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight
} from "lucide-react";
import confetti from "canvas-confetti";
import MeierLogo from "./MeierLogo";
import styles from "./HomeSections.module.css";

export default function HomeSections() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    description: "",
    gdprConsent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gdprConsent) {
      alert("Bitte bestätigen Sie die Datenschutzerklärung.");
      return;
    }
    setFormSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <>
      {/* =========================================
          1. ABOUT US SNAPSHOT (Über uns)
          ========================================= */}
      <section id="uber-uns" className={styles.sectionWrapper}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutContent}>
            <div className={styles.badgePill}>
              <ShieldCheck size={16} />
              <span>Über MEIER GMBH Bauunternehmen</span>
            </div>

            <h2 className={styles.sectionTitle}>
              Traditionelle Ingenieurskunst trifft moderne Bauinnovation.
            </h2>

            <p className={styles.aboutLead}>
              Seit mehr als fünf Jahrzehnten prägen wir als familiengeführtes deutsches Bauunternehmen
              anspruchsvolle Bauprojekte in ganz Deutschland.
            </p>

            <p className={styles.aboutParagraph}>
              Von der komplexen innerstädtischen Baugrube über schlüsselfertige Bürohochhäuser bis
              hin zu klimapositiven Holzhybridbauten verbinden wir meisterhaftes Handwerk mit
              zukunftssicherer BIM-Planung, absoluter Termintreue und nachhaltiger DGNB-Zertifizierung.
            </p>

            <div className={styles.aboutStatsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Jahre Erfahrung</div>
                <div className={styles.statSub}>Gegründet in Deutschland</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>850+</div>
                <div className={styles.statLabel}>Realisierte Projekte</div>
                <div className={styles.statSub}>Hoch-, Tief- &amp; Ingenieurbau</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>1.200</div>
                <div className={styles.statLabel}>Fachkräfte</div>
                <div className={styles.statSub}>Ingenieure &amp; Bauexperten</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Termintreue</div>
                <div className={styles.statSub}>Nach DIN ISO 9001:2015</div>
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <Link
                href="/uber-uns"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  background: "#0B1B3D",
                  color: "#FFFFFF",
                  padding: "0.85rem 1.8rem",
                  borderRadius: "9999px",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  boxShadow: "0 4px 15px rgba(11,27,61,0.2)",
                  transition: "all 0.2s ease"
                }}
              >
                <span>Mehr über unsere 50-jährige Geschichte erfahren</span>
                <ArrowRight size={16} color="#FF8024" />
              </Link>
            </div>
          </div>

          <div className={styles.aboutImageWrapper}>
            <Image
              src="/images/engineers-berlin.jpg"
              alt="Bauleiter und Ingenieure von Meier GmbH auf einer Großbaustelle in Berlin"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* =========================================
          2. SERVICES SUMMARY (3-Column Grid)
          ========================================= */}
      <section id="leistungen" style={{ backgroundColor: "#F8FAFC" }}>
        <div className={styles.sectionWrapper}>
          <div className={styles.sectionHeader}>
            <div className={styles.badgePill}>
              <Building2 size={16} />
              <span>Unsere Geschäftsfelder</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Umfassende Baukompetenz aus einer Hand
            </h2>
            <p className={styles.sectionSubtitle}>
              Präzise abgestimmte Bauleistungen für öffentliche Auftraggeber, Industrie,
              Gewerbe und anspruchsvolle Projektentwickler.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {/* Service 1: Hochbau */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceImageContainer}>
                <Image
                  src="/images/hero-frankfurt.jpg"
                  alt="Schlüsselfertiger Hochbau und Gewerbebau in Frankfurt"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <span className={styles.serviceTag}>Hochbau</span>
              </div>
              <div className={styles.serviceBody}>
                <h3 className={styles.serviceCardTitle}>Hoch- &amp; Gewerbebau</h3>
                <p className={styles.serviceDescription}>
                  Schlüsselfertige Bürokomplexe, anspruchsvolle Wohnanlagen nach KfW-40-Standard sowie moderne Logistik- und Industriehallen.
                </p>
                <ul className={styles.serviceFeatures}>
                  <li className={styles.serviceFeatureItem}>
                    <CheckCircle2 size={16} />
                    <span>Schlüsselfertige Generalübernahme</span>
                  </li>
                  <li className={styles.serviceFeatureItem}>
                    <CheckCircle2 size={16} />
                    <span>KfW-Effizienzhaus 40 &amp; Passivhaus</span>
                  </li>
                  <li className={styles.serviceFeatureItem}>
                    <CheckCircle2 size={16} />
                    <span>Modulare Beton- &amp; Stahlbauweise</span>
                  </li>
                </ul>
                <Link href="#kontakt" className={styles.serviceLink}>
                  <span>Leistung anfragen</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Service 2: Tiefbau */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceImageContainer}>
                <Image
                  src="/images/infrastructure-tiefbau.jpg"
                  alt="Tief- und Spezialingenieurbau Baustelle in Deutschland"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <span className={styles.serviceTag}>Tiefbau</span>
              </div>
              <div className={styles.serviceBody}>
                <h3 className={styles.serviceCardTitle}>Tief- &amp; Ingenieurbau</h3>
                <p className={styles.serviceDescription}>
                  Schwere Erdarbeiten, wasserdichte Baugrubensicherungen, Bohrpfahlgründungen sowie anspruchsvoller Brücken- und Infrastrukturbau.
                </p>
                <ul className={styles.serviceFeatures}>
                  <li className={styles.serviceFeatureItem}>
                    <CheckCircle2 size={16} />
                    <span>Spezialtiefbau &amp; Pfahlgründungen</span>
                  </li>
                  <li className={styles.serviceFeatureItem}>
                    <CheckCircle2 size={16} />
                    <span>Innerstädtische Baugrubenverbauten</span>
                  </li>
                  <li className={styles.serviceFeatureItem}>
                    <CheckCircle2 size={16} />
                    <span>Erschließung &amp; Kanalnetzbau</span>
                  </li>
                </ul>
                <Link href="#kontakt" className={styles.serviceLink}>
                  <span>Leistung anfragen</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Service 3: Nachhaltiges Bauen & BIM */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceImageContainer}>
                <Image
                  src="/images/timber-holzbau.jpg"
                  alt="Nachhaltiger Holz-Hybridbau mit DGNB-Platin-Zertifizierung"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <span className={styles.serviceTag}>Technologie &amp; BIM</span>
              </div>
              <div className={styles.serviceBody}>
                <h3 className={styles.serviceCardTitle}>Holzhybrid &amp; BIM 5D</h3>
                <p className={styles.serviceDescription}>
                  Zukunftssicheres Bauen mit CO₂-reduzierter Holz-Beton-Verbundkonstruktion und digitaler 5D-Modellierung vor dem ersten Spatenstich.
                </p>
                <ul className={styles.serviceFeatures}>
                  <li className={styles.serviceFeatureItem}>
                    <CheckCircle2 size={16} />
                    <span>DGNB-Gold- und Platin-Zertifizierung</span>
                  </li>
                  <li className={styles.serviceFeatureItem}>
                    <CheckCircle2 size={16} />
                    <span>Digitaler Zwilling &amp; BIM-Kollisionsprüfung</span>
                  </li>
                  <li className={styles.serviceFeatureItem}>
                    <CheckCircle2 size={16} />
                    <span>Kreislaufgerechte Baustoffe (Cradle-to-Cradle)</span>
                  </li>
                </ul>
                <Link href="#kontakt" className={styles.serviceLink}>
                  <span>Leistung anfragen</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. FEATURED PROJECTS (Referenzen)
          ========================================= */}
      <section id="referenzen" className={styles.sectionWrapper}>
        <div className={styles.sectionHeader}>
          <div className={styles.badgePill}>
            <Compass size={16} />
            <span>Referenzen &amp; Bauwerke</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Vorzeigeprojekte deutscher Baukunst
          </h2>
          <p className={styles.sectionSubtitle}>
            Ein Auszug aus unseren bundesweit realisierten Großbauprojekten.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {/* Project 1 */}
          <div className={styles.projectCard}>
            <Image
              src="/images/hero-frankfurt.jpg"
              alt="Frankfurt Skyline Tower Hochbau"
              fill
              className={styles.projectImage}
            />
            <div className={styles.projectOverlay} />
            <div className={styles.projectInfo}>
              <div className={styles.projectLocation}>Frankfurt am Main · Hochbau</div>
              <h3 className={styles.projectTitle}>Skyline Office Tower</h3>
              <div className={styles.projectMeta}>
                42.000 m² BGF · DGNB Platin · Bauzeit: 22 Monate
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className={styles.projectCard}>
            <Image
              src="/images/timber-holzbau.jpg"
              alt="München Timber Campus Holzhybrid"
              fill
              className={styles.projectImage}
            />
            <div className={styles.projectOverlay} />
            <div className={styles.projectInfo}>
              <div className={styles.projectLocation}>München-Bogenhausen · Holzbau</div>
              <h3 className={styles.projectTitle}>Green Wood Innovation Campus</h3>
              <div className={styles.projectMeta}>
                Holz-Beton-Hybrid · 60% CO₂-Einsparung · Fertigstellung 2025
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link
            href="/referenzen"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "#0B1B3D",
              color: "#FFFFFF",
              padding: "0.9rem 2.2rem",
              borderRadius: "9999px",
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "0.95rem",
              textDecoration: "none",
              boxShadow: "0 4px 15px rgba(11,27,61,0.2)",
              transition: "all 0.2s ease"
            }}
          >
            <span>Alle Referenzen &amp; Bauprojekte ansehen</span>
            <ArrowRight size={18} color="#FF8024" />
          </Link>
        </div>
      </section>

      {/* =========================================
          4. TRUST & CERTIFICATIONS (Zertifikate)
          ========================================= */}
      <section id="technologie" className={styles.sectionWrapper} style={{ paddingTop: 0 }}>
        <div className={styles.trustContainer}>
          <div className={styles.badgePill} style={{ margin: "0 auto 1rem" }}>
            <ShieldCheck size={16} />
            <span>Geprüfte Qualität</span>
          </div>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", fontWeight: 800, color: "#0A1E3F" }}>
            Zertifiziert nach strengsten deutschen Baunormen
          </h3>
          <p style={{ color: "#475569", maxWidth: "600px", margin: "0.5rem auto 0" }}>
            Höchste Arbeitssicherheit, erstklassige Prozessqualität und kontinuierliche Fremdüberwachung garantieren den Erfolg Ihres Bauprojekts.
          </p>

          <div className={styles.trustLogosGrid}>
            <div className={styles.trustLogoCard}>
              <ShieldCheck size={32} color="#0052CC" />
              <span className={styles.trustLogoName}>DIN EN ISO 9001</span>
              <span className={styles.trustLogoSub}>Qualitätsmanagement</span>
            </div>

            <div className={styles.trustLogoCard}>
              <ShieldCheck size={32} color="#0052CC" />
              <span className={styles.trustLogoName}>TÜV Rheinland</span>
              <span className={styles.trustLogoSub}>Bauüberwachung &amp; Sicherheit</span>
            </div>

            <div className={styles.trustLogoCard}>
              <TreePine size={32} color="#16A34A" />
              <span className={styles.trustLogoName}>DGNB Zertifikat</span>
              <span className={styles.trustLogoSub}>Nachhaltiges Bauen Gold/Platin</span>
            </div>

            <div className={styles.trustLogoCard}>
              <Building2 size={32} color="#0052CC" />
              <span className={styles.trustLogoName}>Bauindustrie</span>
              <span className={styles.trustLogoSub}>Hauptverband der Deutschen Bauindustrie</span>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link
              href="/technologie"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "#0052CC",
                color: "#FFFFFF",
                padding: "0.85rem 2rem",
                borderRadius: "9999px",
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(0, 82, 204, 0.25)",
                transition: "all 0.2s ease"
              }}
            >
              <span>Mehr über Bauen 4.0 &amp; 5D-BIM Technologie erfahren</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          5. CONTACT & QUOTE FORM (Kontakt)
          ========================================= */}
      <section id="kontakt" className={styles.sectionWrapper}>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfoGroup}>
            <div className={styles.badgePill} style={{ background: "rgba(255,255,255,0.15)", color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)" }}>
              <span>Projektstart</span>
            </div>

            <h2 className={styles.contactHeadline}>
              Lassen Sie uns Ihr nächstes Bauvorhaben verwirklichen.
            </h2>

            <p style={{ color: "#CBD5E1", fontSize: "1.05rem", lineHeight: 1.6 }}>
              Unsere Bauleiter und Ingenieure beraten Sie unverbindlich zu Machbarkeit,
              Kostenkalkulation und zeitlicher Taktung nach deutschen Qualitätsstandards.
            </p>

            <div className={styles.contactCard}>
              <div className={styles.contactIconBox}>
                <Phone size={22} />
              </div>
              <div>
                <div style={{ fontSize: "0.8rem", color: "#94A3B8", textTransform: "uppercase" }}>Zentrale Baudirektion</div>
                <a href="tel:+49308920400" style={{ fontSize: "1.15rem", fontWeight: 800, color: "#FFFFFF" }}>
                  +49 (0) 30 8920-400
                </a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactIconBox}>
                <Mail size={22} />
              </div>
              <div>
                <div style={{ fontSize: "0.8rem", color: "#94A3B8", textTransform: "uppercase" }}>Projektanfragen</div>
                <a href="mailto:kontakt@meier-bau.de" style={{ fontSize: "1.05rem", fontWeight: 700, color: "#FFFFFF" }}>
                  kontakt@meier-bau.de
                </a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactIconBox}>
                <Clock size={22} />
              </div>
              <div>
                <div style={{ fontSize: "0.8rem", color: "#94A3B8", textTransform: "uppercase" }}>Geschäftszeiten</div>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#FFFFFF" }}>
                  Mo. – Fr.: 07:00 – 18:00 Uhr
                </div>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className={styles.formContainer}>
            {formSubmitted ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <CheckCircle2 size={54} color="#16A34A" style={{ margin: "0 auto 1.5rem" }} />
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                  Vielen Dank für Ihre Anfrage!
                </h3>
                <p style={{ color: "#475569", lineHeight: 1.6, maxWidth: "420px", margin: "0 auto" }}>
                  Ein leitender Projektingenieur von MEIER GMBH wird sich innerhalb von 24 Stunden persönlich mit Ihnen in Verbindung setzen.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  style={{
                    marginTop: "2rem",
                    background: "#0052CC",
                    color: "#FFFFFF",
                    padding: "0.75rem 1.8rem",
                    borderRadius: "8px",
                    fontWeight: 700
                  }}
                >
                  Weiteres Projekt anfragen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 800, color: "#0A1E3F" }}>
                  Jetzt unverbindliches Angebot anfordern
                </h3>

                <div className={styles.formGrid}>
                  <div>
                    <label className={styles.formLabel}>Vor- &amp; Nachname *</label>
                    <input
                      type="text"
                      required
                      placeholder="z. B. Thomas Schneider"
                      className={styles.formInput}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className={styles.formLabel}>E-Mail-Adresse *</label>
                    <input
                      type="email"
                      required
                      placeholder="schneider@bau-holding.de"
                      className={styles.formInput}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className={styles.formLabel}>Telefonnummer *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+49 171 1234567"
                      className={styles.formInput}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className={styles.formLabel}>Projektstandort / Stadt</label>
                    <input
                      type="text"
                      placeholder="z. B. Berlin, München, Frankfurt"
                      className={styles.formInput}
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>
                  <div className={styles.formGroupFull}>
                    <label className={styles.formLabel}>Projektbeschreibung &amp; Eckdaten</label>
                    <textarea
                      rows={4}
                      placeholder="Art des Vorhabens (Hochbau, Tiefbau, Gewerbe), gewünschter Baubeginn und geschätztes Volumen..."
                      className={styles.formTextarea}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    id="gdpr"
                    required
                    checked={formData.gdprConsent}
                    onChange={(e) => setFormData({ ...formData, gdprConsent: e.target.checked })}
                    style={{ marginTop: "0.2rem" }}
                  />
                  <label htmlFor="gdpr">
                    Ich willige ein, dass meine Angaben zur Bearbeitung meiner Bauanfrage gemäß der{" "}
                    <Link href="#datenschutz" style={{ color: "#0052CC", textDecoration: "underline" }}>
                      Datenschutzerklärung
                    </Link>{" "}
                    verarbeitet werden.
                  </label>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Projektunterlagen einreichen
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================
          6. FOOTER WITH IMPRESSUM & DATENSCHUTZ
          ========================================= */}
      <footer className={styles.footerContainer}>
        <div className={styles.footerInner}>
          <div>
            <MeierLogo />
            <p style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: 1.6, marginTop: "1.25rem", maxWidth: "340px" }}>
              MEIER GMBH Bauunternehmen steht seit über 50 Jahren für höchste deutsche
              Ingenieurpräzision, termintreue Ausführung und nachhaltige Großbauwerke.
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem" }}>
              <span style={{ fontSize: "0.8rem", color: "#64748B" }}>
                DIN EN ISO 9001 · TÜV Süd · DGNB Mitglied
              </span>
            </div>
          </div>

          <div>
            <h4 className={styles.footerColTitle}>Geschäftsfelder</h4>
            <ul className={styles.footerLinksList}>
              <li>
                <Link href="#leistungen" className={styles.footerLink}>Hoch- &amp; Gewerbebau</Link>
              </li>
              <li>
                <Link href="#leistungen" className={styles.footerLink}>Tief- &amp; Ingenieurbau</Link>
              </li>
              <li>
                <Link href="#leistungen" className={styles.footerLink}>Holz-Hybridbau &amp; BIM</Link>
              </li>
              <li>
                <Link href="#leistungen" className={styles.footerLink}>Schlüsselfertiges Bauen</Link>
              </li>
              <li>
                <Link href="#leistungen" className={styles.footerLink}>Sanierung &amp; Denkmalschutz</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={styles.footerColTitle}>Unternehmen</h4>
            <ul className={styles.footerLinksList}>
              <li>
                <Link href="/uber-uns" className={styles.footerLink}>Über uns</Link>
              </li>
              <li>
                <Link href="/referenzen" className={styles.footerLink}>Referenzen</Link>
              </li>
              <li>
                <Link href="/technologie" className={styles.footerLink}>Qualität &amp; Zertifikate</Link>
              </li>
              <li>
                <Link href="/karriere" className={styles.footerLink}>Karriere &amp; Ausbildung</Link>
              </li>
              <li>
                <Link href="/kontakt" className={styles.footerLink}>Kontakt &amp; Standorte</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={styles.footerColTitle}>Hauptniederlassung</h4>
            <p style={{ color: "#94A3B8", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "0.75rem" }}>
              MEIER GMBH Bauunternehmen<br />
              Wilhelm-Külz-Straße 48<br />
              10117 Berlin, Deutschland
            </p>
            <p style={{ color: "#94A3B8", fontSize: "0.92rem" }}>
              Telefon: +49 (0) 30 8920-400<br />
              E-Mail: info@meier-bau.de
            </p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div>
            © {new Date().getFullYear()} MEIER GMBH Bauunternehmen. Alle Rechte vorbehalten.
          </div>

          <div className={styles.legalLinks}>
            <Link href="/impressum" style={{ color: "#94A3B8", textDecoration: "underline" }}>
              Impressum
            </Link>
            <Link href="/datenschutz" style={{ color: "#94A3B8", textDecoration: "underline" }}>
              Datenschutzerklärung
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
