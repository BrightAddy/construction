"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  Euro,
  ArrowRight,
  CheckCircle2,
  X,
  Search,
  Sparkles,
  Send,
  UserCheck
} from "lucide-react";
import confetti from "canvas-confetti";
import styles from "./karriere.module.css";

interface Job {
  id: string;
  title: string;
  category: "all" | "bauleitung" | "handwerk" | "bim" | "ausbildung";
  categoryLabel: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  tasks: string[];
}

const JOBS: Job[] = [
  {
    id: "job-1",
    title: "Oberbauleiter / Projektleiter Hochbau (m/w/d)",
    category: "bauleitung",
    categoryLabel: "Bauleitung & Ingenieure",
    location: "Frankfurt am Main / Berlin",
    type: "Vollzeit · Unbefristet",
    experience: "Ab 4 Jahre Berufserfahrung",
    salary: "75.000 € – 95.000 € + Firmenwagen (Audi/BMW)",
    description:
      "Eigenverantwortliche Gesamtleitung schlüsselfertiger Großprojekte im Hoch- und Gewerbebau. Koordination von Nachunternehmern, Budgetüberwachung und Bauherrenbetreuung.",
    tasks: [
      "Verantwortung für Termin-, Kosten- und Qualitätskontrolle",
      "Führung des Baustellenteams aus Bauleitern, Polieren und Werkstudenten",
      "Nachtragsmanagement und Abnahme mit den Auftraggebern"
    ]
  },
  {
    id: "job-2",
    title: "BIM-Manager & Konstrukteur 3D/5D (m/w/d)",
    category: "bim",
    categoryLabel: "BIM & Digital",
    location: "Zentrale Berlin / Remote möglich",
    type: "Vollzeit · Hybrid",
    experience: "Ab 2 Jahre Erfahrung mit Revit/Solibri",
    salary: "60.000 € – 80.000 € + moderne Hardware",
    description:
      "Gestalten Sie die Digitalisierung des Bauens: Aufbau modellbasierter digitaler Zwillinge, automatisierte Kollisionsprüfungen und Verknüpfung von BIM mit der Baustelle.",
    tasks: [
      "Koordination von 3D-Fachmodellen (Rohbau, TGA, Fassade)",
      "Durchführung von Kollisionsprüfungen und BIM-Qualitätsaudits",
      "Schulung von Bauleitern und Polieren im Umgang mit Tablets vor Ort"
    ]
  },
  {
    id: "job-3",
    title: "Geprüfter Polier / Werkpolier Rohbau (m/w/d)",
    category: "handwerk",
    categoryLabel: "Handwerk & Baustelle",
    location: "München / Stuttgart",
    type: "Vollzeit · Unbefristet",
    experience: "Polierprüfung oder langjährige Erfahrung",
    salary: "55.000 € – 70.000 € + Leistungsprämien",
    description:
      "Sie sind der Macher vor Ort: Leitung der Eigenpersonalkolonnen, Einteilung moderner Baumaschinen und Sicherstellung von Arbeitssicherheit und Taktung.",
    tasks: [
      "Führung der eigenen Facharbeiter und Schalungskolonnen",
      "Materialdisposition und Geräteeinsatzplanung",
      "Lückenlose Einhaltung der BG-Bau Sicherheitsstandards"
    ]
  },
  {
    id: "job-4",
    title: "Kalkulator / Bauingenieur Tiefbau & Infrastruktur (m/w/d)",
    category: "bauleitung",
    categoryLabel: "Bauleitung & Ingenieure",
    location: "Berlin / Frankfurt",
    type: "Vollzeit · Unbefristet",
    experience: "Erfahrung in Ausschreibung & VOB",
    salary: "65.000 € – 85.000 €",
    description:
      "Eigenständige Kalkulation komplexer Infrastruktur-, Brücken- und Tiefbauprojekte. Erarbeitung von Sondervorschlägen und Verhandlung mit Nachunternehmern.",
    tasks: [
      "Kostenermittlung und Leistungsverzeichniserstellung mit RIB iTWO",
      "Erkennen von Chancen für wirtschaftliche Sondervorschläge",
      "Begleitung der Vergabegespräche mit öffentlichen und privaten Auftraggebern"
    ]
  },
  {
    id: "job-5",
    title: "Spezialtiefbau-Facharbeiter / Großgeräteführer (m/w/d)",
    category: "handwerk",
    categoryLabel: "Handwerk & Baustelle",
    location: "Bundesweiter Einsatz (Montagezulage)",
    type: "Vollzeit · Unbefristet",
    experience: "Führerschein & Erfahrung mit Bohrgeräten",
    salary: "48.000 € – 62.000 € + Auslöse & Hotel",
    description:
      "Bedienung moderner Großbohr- und Rammgeräte für Spundwände, Bohrpfähle und HDI-Unterfangungen. Modernste klimatisierte Kabinen mit Lasersteuerung.",
    tasks: [
      "Fachgerechte Bedienung von Drehbohrgeräten (Bauer / Liebherr)",
      "Herstellung von Pfahlgründungen und Baugrubensicherungen",
      "Wartung und Pflege der modernen Gerätetechnik"
    ]
  },
  {
    id: "job-6",
    title: "Auszubildender Maurer / Beton- & Stahlbetonbauer 2026 (m/w/d)",
    category: "ausbildung",
    categoryLabel: "Ausbildung & Studium",
    location: "Berlin / Frankfurt / München",
    type: "Ausbildung · 3 Jahre",
    experience: "Haupt- oder Realschulabschluss",
    salary: "1.000 € – 1.600 € / Monat (Bau-Tarif) + ÖPNV-Ticket",
    description:
      "Lerne ein ehrliches, zukunftssicheres Handwerk von den Besten: Erlerne das Schalen, Bewehren und Betonieren moderner Bauwerke mit Übernahmegarantie bei guten Leistungen.",
    tasks: [
      "Praktische Ausbildung auf spannenden Großbaustellen",
      "Erlernen modernster Schalungssysteme und Lasertechnik",
      "Eigenes Ausbildungsbudget für hochwertiges Werkzeug und Arbeitskleidung"
    ]
  },
  {
    id: "job-7",
    title: "Duales Studium Bauingenieurwesen (B.Eng.) 2026",
    category: "ausbildung",
    categoryLabel: "Ausbildung & Studium",
    location: "München / Berlin",
    type: "Duales Studium · Hochschule + Praxis",
    experience: "Fachhochschulreife oder Abitur",
    salary: "1.400 € – 1.800 € / Monat + Übernahme Studiengebühren",
    description:
      "Kombiniere wissenschaftliche Theorie an renommierten Partnerhochschulen mit echter Baupraxis in unseren Projektteams. Ziel: Direkter Einstieg als Bauleiter nach 3,5 Jahren.",
    tasks: [
      "Praxiseinsätze in Bauleitung, Kalkulation und BIM-Management",
      "Begleitung durch einen erfahrenen Ingenieur-Mentor",
      "Garantierte Festanstellung nach erfolgreichem Bachelorabschluss"
    ]
  }
];

export default function KarriereClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedJobForModal, setSelectedJobForModal] = useState<Job | null>(null);

  // Form states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: ""
  });

  const filteredJobs = JOBS.filter((job) => {
    const matchesCat =
      activeCategory === "all" || job.category === activeCategory;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const categories = [
    { key: "all", label: "Alle Stellen", count: JOBS.length },
    {
      key: "bauleitung",
      label: "Bauleitung & Ingenieure",
      count: JOBS.filter((j) => j.category === "bauleitung").length
    },
    {
      key: "handwerk",
      label: "Handwerk & Baustelle",
      count: JOBS.filter((j) => j.category === "handwerk").length
    },
    {
      key: "bim",
      label: "BIM & Digital",
      count: JOBS.filter((j) => j.category === "bim").length
    },
    {
      key: "ausbildung",
      label: "Ausbildung & Duales Studium",
      count: JOBS.filter((j) => j.category === "ausbildung").length
    }
  ];

  const handleApplyClick = (job: Job) => {
    setSelectedJobForModal(job);
    setFormData((prev) => ({ ...prev, position: job.title }));
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      // Keep state open briefly then can close
    }, 4000);
  };

  return (
    <>
      {/* 1. JOB BOARD SECTION */}
      <section className={styles.jobBoardSection} id="stellenangebote" aria-label="Offene Stellen">
        <div className={styles.jobBoardContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag}>
              <Briefcase size={14} />
              <span>Offene Positionen 2026</span>
            </div>
            <h2 className={styles.sectionTitle}>Ihre Zukunft bei der Meier GmbH</h2>
            <p className={styles.sectionSubtitle}>
              Finden Sie jetzt die passende Stelle für Ihren nächsten Karriereschritt.
              Bewerben Sie sich in unter 60 Sekunden – unkompliziert und ohne langes Anschreiben.
            </p>
          </div>

          {/* Filter & Search Bar */}
          <div className={styles.filterControls}>
            <div className={styles.categoryPills} role="tablist">
              {categories.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === c.key}
                  className={`${styles.catBtn} ${
                    activeCategory === c.key ? styles.catBtnActive : ""
                  }`}
                  onClick={() => setActiveCategory(c.key)}
                >
                  <span>{c.label}</span>
                  <span className={styles.jobCountPill}>{c.count}</span>
                </button>
              ))}
            </div>

            {/* Quick Search */}
            <div style={{ position: "relative", minWidth: "240px" }}>
              <input
                type="text"
                placeholder="Job oder Ort suchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.55rem 1rem 0.55rem 2.2rem",
                  borderRadius: "9999px",
                  border: "1px solid #CBD5E1",
                  fontSize: "0.88rem"
                }}
              />
              <Search
                size={16}
                color="#94A3B8"
                style={{ position: "absolute", left: "0.8rem", top: "50%", transform: "translateY(-50%)" }}
              />
            </div>
          </div>

          {/* Jobs List */}
          <div className={styles.jobsList}>
            {filteredJobs.length === 0 ? (
              <div style={{ textAlign: "center", padding: "4rem 2rem", background: "#F8FAFC", borderRadius: "16px" }}>
                <p style={{ color: "#64748B", fontSize: "1.1rem" }}>
                  Keine Stellen für die gewählten Kriterien gefunden.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                  style={{
                    marginTop: "1rem",
                    color: "#FF8024",
                    fontWeight: 700,
                    background: "none",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  Filter zurücksetzen
                </button>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <article key={job.id} className={styles.jobCard}>
                  <div className={styles.jobMainInfo}>
                    <div className={styles.jobHeaderRow}>
                      <span className={styles.jobDeptBadge}>{job.categoryLabel}</span>
                      <span className={styles.jobTypeBadge}>{job.type}</span>
                    </div>

                    <h3 className={styles.jobTitle}>{job.title}</h3>

                    <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.55, marginBottom: "0.75rem" }}>
                      {job.description}
                    </p>

                    <div className={styles.jobMetaRow}>
                      <div className={styles.jobMetaItem}>
                        <MapPin size={15} color="#FF8024" />
                        <span>{job.location}</span>
                      </div>
                      <div className={styles.jobMetaItem}>
                        <Clock size={15} color="#0052CC" />
                        <span>{job.experience}</span>
                      </div>
                      <div className={styles.jobMetaItem}>
                        <Euro size={15} color="#16A34A" />
                        <span style={{ color: "#0F172A", fontWeight: 700 }}>{job.salary}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.jobActions}>
                    <button
                      type="button"
                      className={styles.applyButton}
                      onClick={() => handleApplyClick(job)}
                      aria-label={`Jetzt für ${job.title} bewerben`}
                    >
                      <span>In 60 Sek. bewerben</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      {/* 2. TEAM VOICES (Kultur & Mitarbeiterstimmen) */}
      <section className={styles.voicesSection} aria-label="Mitarbeiterstimmen">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>
            <Sparkles size={14} />
            <span>Echte Stimmen aus dem Team</span>
          </div>
          <h2 className={styles.sectionTitle}>Warum wir gerne bei Meier bauen</h2>
          <p className={styles.sectionSubtitle}>
            Hören Sie direkt von unseren Kollegen, wie Zusammenhalt, moderne Werkzeuge und
            faire Führung den Unterschied auf der Baustelle machen.
          </p>
        </div>

        <div className={styles.voicesGrid}>
          <div className={styles.voiceCard}>
            <p className={styles.voiceQuote}>
              „Hier ist man keine Personalnummer. Wenn ich als Bauleiterin ein Problem auf der Baustelle habe,
              entscheidet die Geschäftsführung pragmatisch und schnell. Und das iPad mit 3D-BIM erleichtert meinen Alltag enorm.“
            </p>
            <div className={styles.voicePerson}>
              <div className={styles.voiceAvatar}>LS</div>
              <div>
                <div className={styles.voiceName}>Laura Schneider</div>
                <div className={styles.voiceRole}>Projektleiterin Hochbau (seit 5 Jahren bei Meier)</div>
              </div>
            </div>
          </div>

          <div className={styles.voiceCard}>
            <p className={styles.voiceQuote}>
              „Ich bin seit 14 Jahren Polier bei Meier. Das Equipment von Hilti und Liebherr ist immer top gewartet,
              die Überstunden werden centgenau bezahlt und der Zusammenhalt in den Kolonnen ist wie in einer großen Familie.“
            </p>
            <div className={styles.voicePerson}>
              <div className={styles.voiceAvatar}>JK</div>
              <div>
                <div className={styles.voiceName}>Jürgen Krause</div>
                <div className={styles.voiceRole}>Geprüfter Polier Rohbau</div>
              </div>
            </div>
          </div>

          <div className={styles.voiceCard}>
            <p className={styles.voiceQuote}>
              „Im dualen Studium lerne ich an der Hochschule die Theorie und bei Meier darf ich direkt Verantwortung
              auf echten Großbaustellen übernehmen. Besser kann man den Berufseinstieg nicht starten.“
            </p>
            <div className={styles.voicePerson}>
              <div className={styles.voiceAvatar}>FA</div>
              <div>
                <div className={styles.voiceName}>Felix Albrecht</div>
                <div className={styles.voiceRole}>Dualer Student Bauingenieurwesen (3. Semester)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUICK APPLICATION MODAL */}
      {selectedJobForModal && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedJobForModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setSelectedJobForModal(null)}
              aria-label="Schließen"
            >
              <X size={20} />
            </button>

            {formSubmitted ? (
              <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "#F0FDF4",
                    color: "#16A34A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem"
                  }}
                >
                  <UserCheck size={36} />
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.7rem", fontWeight: 800, color: "#0B1B3D", marginBottom: "0.75rem" }}>
                  Bewerbung erfolgreich eingegangen!
                </h3>
                <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.6, maxWidth: "460px", margin: "0 auto 1.5rem" }}>
                  Vielen Dank, <strong>{formData.name}</strong>! Unsere Personalabteilung meldet sich
                  innerhalb von <strong>48 Stunden</strong> telefonisch bei Ihnen für ein unkompliziertes Kennenlernen.
                </p>
                <button
                  type="button"
                  className={styles.submitBtn}
                  onClick={() => setSelectedJobForModal(null)}
                >
                  Fenster schließen
                </button>
              </div>
            ) : (
              <>
                <div style={{ color: "#FF8024", fontSize: "0.82rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                  60-Sekunden-Expressbewerbung
                </div>
                <h3 className={styles.modalTitle}>{selectedJobForModal.title}</h3>
                <p className={styles.modalSub}>
                  Kein Anschreiben erforderlich. Geben Sie einfach Ihre Kontaktdaten ein – wir melden uns bei Ihnen!
                </p>

                <form onSubmit={handleFormSubmit} className={styles.modalForm}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Ihr vollständiger Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="z. B. Thomas Meyer"
                      className={styles.formInput}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>E-Mail-Adresse *</label>
                      <input
                        type="email"
                        required
                        placeholder="ihre.mail@domain.de"
                        className={styles.formInput}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Telefonnummer *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+49 170 1234567"
                        className={styles.formInput}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Kurze Notiz zu Ihren Erfahrungen (optional)</label>
                    <textarea
                      rows={3}
                      placeholder="z. B. 6 Jahre Erfahrung im Hochbau, Führerschein Kl. B vorhanden..."
                      className={styles.formTextarea}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    <span>Jetzt unverbindlich bewerben</span>
                    <Send size={16} style={{ marginLeft: "0.5rem" }} />
                  </button>

                  <div style={{ fontSize: "0.75rem", color: "#94A3B8", textAlign: "center", marginTop: "0.25rem" }}>
                    Ihre Daten werden streng vertraulich nach DSGVO verarbeitet.
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* 4. INITIATIVE APPLICATION CTA */}
      <section className={styles.ctaSection} aria-label="Initiativbewerbung">
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            Nicht die passende Position dabei?
          </h2>
          <p className={styles.ctaDesc}>
            Wir sind immer auf der Suche nach motivierten Talenten und erfahrenen Baufachleuten.
            Senden Sie uns einfach eine Initiativbewerbung oder rufen Sie uns direkt an!
          </p>

          <div className={styles.ctaBtnGroup}>
            <button
              type="button"
              className={styles.primaryCta}
              onClick={() => handleApplyClick(JOBS[0])}
            >
              <span>Initiativ bewerben</span>
              <ArrowRight size={18} />
            </button>
            <a href="tel:+49308920400" className={styles.secondaryCta}>
              <span>Personalleitung anrufen: 030 8920-400</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
