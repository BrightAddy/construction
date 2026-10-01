"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  Building2,
  FileText,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles
} from "lucide-react";
import confetti from "canvas-confetti";
import styles from "./kontakt.module.css";

const SERVICES = [
  "Hochbau & Gewerbe",
  "Tiefbau & Brücken",
  "Wohnungsbau",
  "Holz-Hybridbau",
  "Innenausbau",
  "Sanierung & Denkmal"
];

const FAQS = [
  {
    q: "Wie schnell erhalten wir eine fundierte Kostenschätzung oder ein Angebot?",
    a: "Nach Eingang Ihrer Unterlagen (Pläne, Leistungsverzeichnis oder Entwurfsskizze) meldet sich unsere Kalkulationsabteilung innerhalb von 24 Stunden persönlich bei Ihnen. Eine detaillierte indikative Kostenschätzung liegt Ihnen in der Regel innerhalb von 5 bis 7 Werktagen vor."
  },
  {
    q: "Übernehmen Sie als Generalunternehmer (GU) die schlüsselfertige Gesamtverantwortung?",
    a: "Ja, der Großteil unserer Bauprojekte wird als schlüsselfertige Generalübernahme realisiert. Wir koordinieren sämtliche Fachplaner, Nachunternehmer, Prüfstatiker und Behörden und garantieren Ihnen einen festen Übergabetermin und Kostensicherheit."
  },
  {
    q: "Arbeiten Sie mit den bestehenden BIM-Modellen unseres Planungsbüros?",
    a: "Selbstverständlich. Unsere Ingenieure arbeiten mit offenen IFC 4.3 Standards und können 3D-BIM-Daten aller gängigen CAD-Systeme (Revit, Allplan, ArchiCAD) direkt einlesen, mit 4D-Termintaktungen anreichern und zur automatisierten Kollisionsprüfung nutzen."
  },
  {
    q: "Wie werden Festpreis und Fertigstellungstermin vertraglich abgesichert?",
    a: "Wir bieten transparente VOB/BGB-Werkverträge mit klar definierten Meilensteinen und verbindlichen Fertigstellungsterminen. Eine lückenlose Bauleistungs- und Vertragserfüllungsbürgschaft deutscher Großbanken ist bei uns Standard."
  }
];

export default function KontaktClient() {
  const [selectedService, setSelectedService] = useState<string>("Hochbau & Gewerbe");
  const [scale, setScale] = useState<string>("1.000 – 5.000 m² BGF");
  const [timeline, setTimeline] = useState<string>("In 3 bis 6 Monaten");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `MEIER-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefNumber(generatedRef);
    setFormSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <>
      {/* 1. MAIN CONTACT GRID */}
      <section className={styles.mainContactSection} aria-label="Bauanfrage Formular">
        <div className={styles.contactGrid}>
          {/* Left Column: Form Card */}
          <div className={styles.formCard}>
            {formSubmitted ? (
              <div className={styles.successCard}>
                <div className={styles.successIconCircle}>
                  <CheckCircle2 size={44} />
                </div>
                <h3 className={styles.formCardTitle}>Vielen Dank für Ihre Anfrage!</h3>
                <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "520px", margin: "0 auto" }}>
                  Ihre Projektanfrage für <strong>{selectedService}</strong> in <strong>{formData.location || "Deutschland"}</strong> ist erfolgreich in unserer zentralen Baudirektion eingegangen.
                </p>

                <div className={styles.refBadge}>
                  Ihre Vorgangsnummer: <strong>{refNumber}</strong>
                </div>

                <p style={{ color: "#64748B", fontSize: "0.92rem", lineHeight: 1.6, maxWidth: "480px", margin: "0 auto 2rem" }}>
                  Ein leitender Projektingenieur prüft Ihre Angaben und meldet sich innerhalb von <strong>24 Stunden</strong> telefonisch unter <strong>{formData.phone}</strong> bei Ihnen.
                </p>

                <button
                  type="button"
                  className={styles.submitBtn}
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", company: "", email: "", phone: "", location: "", message: "" });
                  }}
                  style={{ margin: "0 auto" }}
                >
                  <span>Weitere Anfrage stellen</span>
                </button>
              </div>
            ) : (
              <>
                <h2 className={styles.formCardTitle}>Projektanfrage &amp; Kostenschätzung</h2>
                <p className={styles.formCardSub}>
                  Wählen Sie Ihr Gewerk und übermitteln Sie uns Ihre Rahmendaten.
                  Wir erstellen Ihnen eine unverbindliche Ersteinschätzung nach deutschen Baunormen.
                </p>

                <form onSubmit={handleSubmit} className={styles.inquiryForm}>
                  {/* Step 1: Gewerk wählen */}
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>1. Welches Gewerk betrifft Ihr Bauvorhaben? *</label>
                    <div className={styles.servicePickerGrid}>
                      {SERVICES.map((s) => (
                        <button
                          key={s}
                          type="button"
                          className={`${styles.serviceRadioBtn} ${
                            selectedService === s ? styles.serviceRadioBtnActive : ""
                          }`}
                          onClick={() => setSelectedService(s)}
                        >
                          <Building2 size={15} />
                          <span>{s}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Umfang & Timeline */}
                  <div className={styles.twoColsRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel}>2. Geschätzte Größe / BGF</label>
                      <select
                        className={styles.formSelect}
                        value={scale}
                        onChange={(e) => setScale(e.target.value)}
                      >
                        <option value="Unter 1.000 m² BGF">Unter 1.000 m² BGF</option>
                        <option value="1.000 – 5.000 m² BGF">1.000 – 5.000 m² BGF</option>
                        <option value="5.000 – 20.000 m² BGF">5.000 – 20.000 m² BGF</option>
                        <option value="Über 20.000 m² (Großprojekt)">Über 20.000 m² (Großprojekt)</option>
                        <option value="Infrastruktur / Tiefbauprojekt">Infrastruktur / Tiefbauprojekt</option>
                      </select>
                    </div>

                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel}>3. Geplanter Baubeginn</label>
                      <select
                        className={styles.formSelect}
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                      >
                        <option value="Sofort / Schnellstmöglich">Sofort / Schnellstmöglich</option>
                        <option value="In 3 bis 6 Monaten">In 3 bis 6 Monaten</option>
                        <option value="In 6 bis 12 Monaten">In 6 bis 12 Monaten</option>
                        <option value="Erst 2027 / Vorplanung">Erst 2027 / Vorplanung</option>
                      </select>
                    </div>
                  </div>

                  {/* Step 3: Standort */}
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>4. Bauort / Postleitzahl des Grundstücks *</label>
                    <input
                      type="text"
                      required
                      placeholder="z. B. 60311 Frankfurt am Main oder München-Bogenhausen"
                      className={styles.formInput}
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>

                  {/* Step 4: Kontaktdaten */}
                  <div className={styles.twoColsRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel}>Ihr vollständiger Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="z. B. Dipl.-Ing. Michael Weber"
                        className={styles.formInput}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel}>Unternehmen / Bauherr (optional)</label>
                      <input
                        type="text"
                        placeholder="z. B. Weber Immobilien GmbH"
                        className={styles.formInput}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.twoColsRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel}>Telefonnummer für Rückfragen *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+49 (0) 69 123456"
                        className={styles.formInput}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel}>E-Mail-Adresse *</label>
                      <input
                        type="email"
                        required
                        placeholder="weber@immobilien.de"
                        className={styles.formInput}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Step 5: Beschreibung */}
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Projektbeschreibung &amp; Besonderheiten</label>
                    <textarea
                      rows={4}
                      placeholder="Beschreiben Sie kurz Ihr Bauvorhaben (z. B. Baugrundbeschaffenheit, gewünschter Energiestandard KfW 40, vorhandene Pläne)..."
                      className={styles.formTextarea}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    <span>Kostenlose Projektanfrage absenden</span>
                    <Send size={18} />
                  </button>

                  <div style={{ fontSize: "0.8rem", color: "#94A3B8", textAlign: "center", lineHeight: 1.5 }}>
                    <ShieldCheck size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                    24h Rückmelde-Garantie · Streng vertraulich nach DSGVO · Keine Weitergabe an Dritte
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Right Column: Direct Info & Locations */}
          <div className={styles.infoCol}>
            {/* Direct Contact Phone & Email */}
            <div className={styles.directContactsCard}>
              <div style={{ color: "#FF8024", fontSize: "0.82rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.3rem" }}>
                Direkter Draht
              </div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 900, marginBottom: "1.5rem", color: "#FFFFFF" }}>
                Zentrale Baudirektion
              </h3>

              <div className={styles.directContactItem}>
                <div className={styles.contactIconCircle}>
                  <Phone size={22} />
                </div>
                <div>
                  <div className={styles.contactItemLabel}>Telefonzentrale (Mo–Fr 07:00–18:00)</div>
                  <a href="tel:+49308920400" className={styles.contactItemVal}>
                    +49 (0) 30 8920-400
                  </a>
                  <div className={styles.contactItemSub}>Kostenlose Erstberatung mit unseren Projektingenieuren</div>
                </div>
              </div>

              <div className={styles.directContactItem}>
                <div className={styles.contactIconCircle}>
                  <Mail size={22} />
                </div>
                <div>
                  <div className={styles.contactItemLabel}>Ausschreibung &amp; Pläne einreichen</div>
                  <a href="mailto:anfrage@meier-bauunternehmen.de" className={styles.contactItemVal} style={{ fontSize: "1.05rem" }}>
                    anfrage@meier-bauunternehmen.de
                  </a>
                  <div className={styles.contactItemSub}>Direkter Postkorb der zentralen Kalkulationsabteilung</div>
                </div>
              </div>

              <div className={styles.directContactItem}>
                <div className={styles.contactIconCircle} style={{ background: "rgba(239, 68, 68, 0.15)", color: "#EF4444" }}>
                  <AlertTriangle size={22} />
                </div>
                <div>
                  <div className={styles.contactItemLabel} style={{ color: "#FCA5A5" }}>24/7 Baustellen-Havariedienst</div>
                  <a href="tel:+49308920999" className={styles.contactItemVal} style={{ color: "#F87171" }}>
                    +49 (0) 30 8920-999
                  </a>
                  <div className={styles.contactItemSub}>Ausschließlich für akute Notfälle auf aktiven Baustellen</div>
                </div>
              </div>
            </div>

            {/* Standorte Grid */}
            <div className={styles.locationsCard}>
              <div className={styles.locationsHeader}>
                <MapPin size={22} color="#0052CC" />
                <span>Bundesweite Niederlassungen</span>
              </div>

              <div className={styles.locationItem}>
                <div className={styles.locationCity}>
                  <span>Hauptsitz Berlin</span>
                  <span className={styles.locationTag}>Zentrale &amp; BIM</span>
                </div>
                <div className={styles.locationAddress}>
                  Kurfürstendamm 182 · 10707 Berlin<br />
                  Baudirektion, Statik &amp; BIM-Leitzentrale
                </div>
                <a href="tel:+49308920400" className={styles.locationPhone}>
                  Tel: +49 (0) 30 8920-400
                </a>
              </div>

              <div className={styles.locationItem}>
                <div className={styles.locationCity}>
                  <span>Frankfurt am Main</span>
                  <span className={styles.locationTag}>Hochbau Süd-West</span>
                </div>
                <div className={styles.locationAddress}>
                  Speicherstraße 55 (Westhafen) · 60327 Frankfurt<br />
                  Gewerbebau &amp; Bankenviertel-Projekte
                </div>
                <a href="tel:+4969247890" className={styles.locationPhone}>
                  Tel: +49 (0) 69 2478-90
                </a>
              </div>

              <div className={styles.locationItem}>
                <div className={styles.locationCity}>
                  <span>München</span>
                  <span className={styles.locationTag}>Wohnbau Süd</span>
                </div>
                <div className={styles.locationAddress}>
                  Leopoldstraße 156 · 80804 München<br />
                  Holz-Hybridbau &amp; Quartiersentwicklung
                </div>
                <a href="tel:+4989512340" className={styles.locationPhone}>
                  Tel: +49 (0) 89 5123-40
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FAQ SECTION */}
      <section className={styles.faqSection} aria-label="Häufige Fragen">
        <div className={styles.faqContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag}>
              <Sparkles size={14} />
              <span>Transparenz &amp; Klarheit</span>
            </div>
            <h2 className={styles.sectionTitle}>Häufige Fragen unserer Bauherren</h2>
            <p className={styles.sectionSubtitle}>
              Hier finden Sie Antworten auf die wichtigsten Fragen zur Zusammenarbeit,
              Kalkulation und Ausführungsgarantie der Meier GmbH.
            </p>
          </div>

          <div className={styles.faqList}>
            {FAQS.map((faq, i) => (
              <div key={i} className={styles.faqItem}>
                <button
                  type="button"
                  className={styles.faqQuestionBtn}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={20} color="#FF8024" /> : <ChevronDown size={20} color="#64748B" />}
                </button>
                {openFaq === i && (
                  <div className={styles.faqAnswer}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
