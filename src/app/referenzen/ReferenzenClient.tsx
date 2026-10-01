"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  MapPin,
  Calendar,
  Building,
  Maximize2,
  CheckCircle2,
  ArrowRight,
  X,
  Quote,
  ShieldCheck,
  Award,
  Layers,
  PhoneCall,
  Download
} from "lucide-react";
import styles from "./referenzen.module.css";

interface Project {
  id: string;
  title: string;
  category: "all" | "hochbau" | "tiefbau" | "wohnbau" | "holzbau" | "innenausbau";
  categoryLabel: string;
  location: string;
  year: string;
  image: string;
  description: string;
  bgf: string;
  duration: string;
  cert: string;
  client: string;
  longText: string;
  highlights: string[];
}

const PROJECTS: Project[] = [
  {
    id: "skyline-tower",
    title: "Skyline Office Tower",
    category: "hochbau",
    categoryLabel: "Hochbau & Gewerbe",
    location: "Frankfurt am Main",
    year: "2024",
    image: "/images/project-hochhaus.jpg",
    description:
      "Schlüsselfertiger Bau eines energieeffizienten Büroturms mit zweischaliger Elementfassade und innovativer Geothermie-Klimatisierung im Bankenviertel.",
    bgf: "42.000 m²",
    duration: "24 Monate",
    cert: "DGNB Platin",
    client: "Horizon Real Estate AG",
    longText:
      "Für die renommierte Frankfurter Skyline realisierte die Meier GmbH den Skyline Office Tower als Generalunternehmer. Trotz engstem innerstädtischem Raum und angrenzenden U-Bahn-Schächten erfolgte die Fertigstellung termingerecht. Besondere ingenieurtechnische Leistung: Eine innovative Pfahl-Plattengründung mit 48 Großbohrpfählen bis zu 32 Meter Tiefe.",
    highlights: [
      "45 Geschosse mit 42.000 m² vermietbarer Fläche",
      "Thermische Bauteilaktivierung und Grundwasserkühlung",
      "Fassadenelemente mit integrierter Photovoltaik (BIPV)",
      "Termin- und Kostengarantie ohne Nachtragsstreitigkeiten"
    ]
  },
  {
    id: "isar-living",
    title: "Isar Living Wohnquartier",
    category: "wohnbau",
    categoryLabel: "Wohnungsbau",
    location: "München-Bogenhausen",
    year: "2023",
    image: "/images/project-wohnanlage.jpg",
    description:
      "Exklusives urbanes Wohnquartier mit 140 barrierefreien Wohneinheiten, parkähnlicher Innenhofgestaltung und hocheffizientem KfW-40-QNG Standard.",
    bgf: "18.500 m²",
    duration: "20 Monate",
    cert: "KfW 40 QNG",
    client: "Bavaria Wohnbau Gruppe",
    longText:
      "Das Quartier Isar Living vereint höchste Wohnansprüche mit ökologischer Spitzenleistung. Auf dem früheren Gewerbeareal entstanden 5 Baukörper in massiver Ziegel- und Stahlbetonbauweise, umschlossen von extensiven Dachbegrünungen und einer zentralen Grundwasser-Wärmepumpenanlage.",
    highlights: [
      "140 barrierefreie Eigentums- & Mietwohnungen",
      "Unterirdische Quartier-Tiefgarage mit 180 E-Ladepunkten",
      "Schallschutzklasse A entlang der Hauptverkehrsachse",
      "100% Regenwasserversickerung vor Ort"
    ]
  },
  {
    id: "albtal-tunnel",
    title: "Albquerung Fernbahntunnel",
    category: "tiefbau",
    categoryLabel: "Tiefbau & Infrastruktur",
    location: "Stuttgart / Alb-Donau",
    year: "2024",
    image: "/images/project-tunnel.jpg",
    description:
      "Komplexer Infrastruktur-Tunnelvortrieb unter schwierigen karstreichen Gesteinsschichten mit maschinellem Schildvortrieb und permanenter Sensorüberwachung.",
    bgf: "4,8 km Länge",
    duration: "36 Monate",
    cert: "EBA Zulassung",
    client: "Bundesinfrastrukturgesellschaft",
    longText:
      "Im Rahmen des europäischen Hochgeschwindigkeitsnetzes übernahm Meier Tiefbau den anspruchsvollen Vortrieb des 4,8 km langen Zwillingsröhrentunnels. Mittels modernster Tunnelvortriebsmaschinen und Tübbingausbau aus eigenem Fertigteilwerk wurden täglich bis zu 18 Meter vorgetrieben – unfallfrei und millimetergenau.",
    highlights: [
      "380.000 m³ bergmännischer Tunnelaushub",
      "Präzise 3D-Georadar-Überwachung in Echtzeit",
      "Brandschutzbeschichtung nach ZTV-ING Richtlinien",
      "Lückenlose Anbindung an die Neubaustrecke"
    ]
  },
  {
    id: "green-wood-campus",
    title: "Green Wood Innovation Campus",
    category: "holzbau",
    categoryLabel: "Holz-Hybridbau",
    location: "Berlin-Adlershof",
    year: "2025",
    image: "/images/timber-holzbau.jpg",
    description:
      "Zukunftsweisendes Technologie- und Forschungszentrum in nachhaltiger Holz-Beton-Verbundbauweise mit 65% reduzierten CO₂-Emissionen.",
    bgf: "26.000 m²",
    duration: "18 Monate",
    cert: "DGNB Diamant",
    client: "Capital Green Tech Fund",
    longText:
      "Als Meilenstein moderner Holzarchitektur kombiniert der Green Wood Campus Brettsperrholz aus zertifizierten regionalen Forsten mit filigranen Stahlbetonkernen. Durch die Vorfertigung kompletter Wand- und Deckenelemente im Werk verkürzte sich die Rohbauzeit um über 40 Prozent gegenüber herkömmlichen Massivbauten.",
    highlights: [
      "3.400 m³ deutsches PEFC-Fichtenholz verbaut",
      "Cradle-to-Cradle zertifizierte zirkuläre Baustoffe",
      "Natürliches Raumklima mit sichtbaren Holzoberflächen",
      "Ausgezeichnet mit dem Deutschen Nachhaltigkeitspreis Bau"
    ]
  },
  {
    id: "talbruecke-autobahn",
    title: "Talbrücke Albquerung A8",
    category: "tiefbau",
    categoryLabel: "Tiefbau & Ingenieurbau",
    location: "Baden-Württemberg",
    year: "2022",
    image: "/images/infrastructure-tiefbau.jpg",
    description:
      "Neubau einer 680 Meter langen vierspurigen Spannbetonbrücke im Taktschiebeverfahren zur Entlastung des Autobahnnetzes bei laufendem Verkehr.",
    bgf: "680 m Spannweite",
    duration: "28 Monate",
    cert: "DIN-Fachbericht 100",
    client: "Die Autobahn GmbH des Bundes",
    longText:
      "Die Überquerung eines sensiblen Landschaftsschutzgebiets erforderte höchste bauliche Rücksichtnahme. Ohne Beeinträchtigung des Talraums schob die Meier Brückenbaukolonne den 24.000 Tonnen schweren Überbau in 16 Takten präzise über die bis zu 42 Meter hohen Pfeiler.",
    highlights: [
      "Taktschiebeverfahren über 6 Pfeilerpaare",
      "Einsatz von ultrahochfestem Beton (UHPC) für Dehnfugen",
      "Vollständiger Verzicht auf Schwerlastfahrten durch das Tal",
      "Termingerechte Freigabe vor der Hauptreisewelle"
    ]
  },
  {
    id: "media-spree-fitout",
    title: "Konzernzentrale Media Spree",
    category: "innenausbau",
    categoryLabel: "Innenausbau & Revitalisierung",
    location: "Berlin-Friedrichshain",
    year: "2024",
    image: "/images/interior-fitout.jpg",
    description:
      "Exklusiver Mieterausbau mit hochabsorbierenden Akustik-Holzpaneelen, rahmenlosen Glaswänden und modernsten Konferenzsystemen auf 12.000 m².",
    bgf: "12.000 m²",
    duration: "9 Monate",
    cert: "LEED Gold",
    client: "Global Media Ventures",
    longText:
      "Für einen internationalen Streaming- und Medienkonzern verwandelte die Abteilung Innenausbau einen Rohbau in eine inspirierende Arbeitswelt. Highlights sind freitragende Akustikdecken, schallentkoppelte Aufnahmestudios und offene Kollaborationszonen mit integriertem Biodynamischen Licht (HCL).",
    highlights: [
      "Schallschutz bis 52 dB Rw für sensible Aufnahmeräume",
      "Handgefertigte Akustik-Lamellenwände aus Eichenholz",
      "Klimatisierte Micro-Meeting-Pods und Phone Booths",
      "Vollständige Ausführung im laufenden Bürogebäude"
    ]
  },
  {
    id: "horizon-business-park",
    title: "Horizon Business Park",
    category: "hochbau",
    categoryLabel: "Hochbau & Gewerbe",
    location: "Frankfurt / Eschborn",
    year: "2023",
    image: "/images/hero-frankfurt.jpg",
    description:
      "Moderne Büro- und Technologiezentrale mit redundantem Datencenter, modularer Skelettstruktur und hocheffizienter Dreifachverglasung.",
    bgf: "31.000 m²",
    duration: "18 Monate",
    cert: "DGNB Gold",
    client: "Taunus Investment Beteiligungen",
    longText:
      "Der Neubau bietet flexible Großraum- und Kombibüros für über 1.200 Mitarbeiter. Dank weitsichtiger Vorfertigung der Stahlbetonstützen und Spannbeton-Hohldecken konnte ein Rohbautakt von nur 9 Arbeitstagen je Geschoss erzielt werden.",
    highlights: [
      "Schlüsselfertige Generalübernahme inklusive Außenanlagen",
      "Integriertes Tier-3-Rechenzentrum mit Notstromdiesel",
      "Photovoltaikanlage mit 420 kWp Spitzenleistung",
      "Budgettreue: 0% Kostenüberschreitung"
    ]
  }
];

export default function ReferenzenClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const filterTabs = [
    { key: "all", label: "Alle Projekte", count: PROJECTS.length },
    {
      key: "hochbau",
      label: "Hochbau & Gewerbe",
      count: PROJECTS.filter((p) => p.category === "hochbau").length
    },
    {
      key: "tiefbau",
      label: "Tiefbau & Brücken",
      count: PROJECTS.filter((p) => p.category === "tiefbau").length
    },
    {
      key: "wohnbau",
      label: "Wohnungsbau",
      count: PROJECTS.filter((p) => p.category === "wohnbau").length
    },
    {
      key: "holzbau",
      label: "Holz-Hybridbau",
      count: PROJECTS.filter((p) => p.category === "holzbau").length
    },
    {
      key: "innenausbau",
      label: "Innenausbau",
      count: PROJECTS.filter((p) => p.category === "innenausbau").length
    }
  ];

  return (
    <>
      {/* 1. FILTER & PROJECT GRID */}
      <section className={styles.portfolioSection} aria-label="Projektgalerie">
        <div className={styles.filterBar}>
          <div className={styles.filterTabs} role="tablist">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={activeCategory === tab.key}
                className={`${styles.filterTabBtn} ${
                  activeCategory === tab.key ? styles.filterTabBtnActive : ""
                }`}
                onClick={() => setActiveCategory(tab.key)}
              >
                <span>{tab.label}</span>
                <span className={styles.filterBadge}>{tab.count}</span>
              </button>
            ))}
          </div>

          <div className={styles.filterCountInfo}>
            Zeige {filteredProjects.length} von {PROJECTS.length} Referenzprojekten
          </div>
        </div>

        {/* Project Cards */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              <div className={styles.cardMedia}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.cardImg}
                />
                <div className={styles.cardPillBadge}>{project.categoryLabel}</div>
                <div className={styles.cardYearBadge}>{project.year}</div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardLocation}>
                  <MapPin size={14} color="#FF8024" />
                  <span>{project.location}</span>
                </div>

                <h3 className={styles.cardTitle}>{project.title}</h3>

                <p className={styles.cardDescription}>{project.description}</p>

                <div className={styles.cardSpecsGrid}>
                  <div className={styles.cardSpecItem}>
                    <span className={styles.cardSpecLabel}>Fläche / Umfang</span>
                    <span className={styles.cardSpecVal}>{project.bgf}</span>
                  </div>
                  <div className={styles.cardSpecItem}>
                    <span className={styles.cardSpecLabel}>Bauzeit</span>
                    <span className={styles.cardSpecVal}>{project.duration}</span>
                  </div>
                  <div className={styles.cardSpecItem}>
                    <span className={styles.cardSpecLabel}>Zertifizierung</span>
                    <span className={styles.cardSpecVal} style={{ color: "#0052CC" }}>
                      {project.cert}
                    </span>
                  </div>
                  <div className={styles.cardSpecItem}>
                    <span className={styles.cardSpecLabel}>Status</span>
                    <span className={styles.cardSpecVal} style={{ color: "#16A34A" }}>
                      Erfolgreich übergeben
                    </span>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.cardClientBadge}>
                    Bauherr: {project.client}
                  </span>

                  <button
                    type="button"
                    className={styles.cardDetailsBtn}
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Details zu ${project.title} ansehen`}
                  >
                    <span>Details</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 2. FLAGSHIP CASE STUDY SHOWCASE (Spotlight) */}
      <section className={styles.spotlightSection} aria-label="Flagship Projekt Spotlight">
        <div className={styles.spotlightInner}>
          <div className={styles.spotlightHeader}>
            <div className={styles.spotlightTag}>
              <Award size={14} />
              <span>Flagship-Projekt des Jahres</span>
            </div>
            <h2 className={styles.spotlightTitle}>Skyline Office Tower Frankfurt</h2>
            <p className={styles.spotlightDesc}>
              Wie die Meier GmbH 42.000 m² modernsten Büro- und Technologieraum in Rekordzeit
              ohne eine einzige Stunde Stillstand im Herzen von Frankfurt schlüsselfertig realisierte.
            </p>
          </div>

          <div className={styles.spotlightContentGrid}>
            <div className={styles.spotlightImageCol}>
              <Image
                src="/images/project-hochhaus.jpg"
                alt="Skyline Office Tower Frankfurt Großansicht"
                fill
                className={styles.spotlightMainImg}
              />
              <div className={styles.spotlightPillOverlay}>
                <ShieldCheck size={22} color="#FF8024" />
                <div>
                  <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "0.9rem" }}>
                    DGNB Platin Zertifiziert
                  </div>
                  <div style={{ color: "#94A3B8", fontSize: "0.75rem" }}>
                    Höchste Nachhaltigkeitsstufe in Deutschland
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.spotlightInfoCol}>
              <div className={styles.spotlightCategory}>Generalunternehmer · Hochbau</div>
              <h3 className={styles.spotlightProjectName}>
                Meisterwerk moderner Ingenieurskunst
              </h3>
              <p className={styles.spotlightNarrative}>
                In enger Zusammenarbeit mit internationalen Architekturpartnern übernahmen wir die
                komplette Ausführungsplanung, Spezialtiefbau, Stahlbetonrohbau und den technischen
                Innenausbau. Durch 3D-BIM und Lean Construction sparten wir 2 Monate Bauzeit ein.
              </p>

              <div className={styles.spotlightHighlights}>
                <div className={styles.spotlightHighlightItem}>
                  <div className={styles.highlightLabel}>Bruttogeschossfläche</div>
                  <div className={styles.highlightVal}>42.000 m²</div>
                </div>
                <div className={styles.spotlightHighlightItem}>
                  <div className={styles.highlightLabel}>Bewehrungsstahl</div>
                  <div className={styles.highlightVal}>8.400 Tonnen</div>
                </div>
                <div className={styles.spotlightHighlightItem}>
                  <div className={styles.highlightLabel}>Bauzeit</div>
                  <div className={styles.highlightVal}>24 Monate (Plan: 26)</div>
                </div>
                <div className={styles.spotlightHighlightItem}>
                  <div className={styles.highlightLabel}>CO₂-Bilanz</div>
                  <div className={styles.highlightVal}>-35% Low-Carbon Beton</div>
                </div>
              </div>

              <div className={styles.spotlightCtaRow}>
                <Link href="/#kontakt" className={styles.spotlightButton}>
                  <span>Ähnliches Projekt besprechen</span>
                  <ArrowRight size={16} />
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedProject(PROJECTS[0])}
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.25)",
                    color: "#FFFFFF",
                    padding: "0.85rem 1.4rem",
                    borderRadius: "12px",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontSize: "0.92rem"
                  }}
                >
                  Projektdatenblatt öffnen
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLIENT REVIEWS & BAUHERREN-STIMMEN */}
      <section className={styles.trustSection} aria-label="Bauherren Referenzen">
        <div className={styles.trustHeader}>
          <div className={styles.trustTag}>
            <Quote size={14} />
            <span>Kundenstimmen &amp; Vertrauen</span>
          </div>
          <h2 className={styles.trustTitle}>Was Bauherren über die Meier GmbH sagen</h2>
          <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.6 }}>
            Verlässlichkeit, Budgettreue und kompromisslose Bauqualität –
            unsere Auftraggeber schätzen unsere handwerkliche Präzision.
          </p>
        </div>

        <div className={styles.trustGrid}>
          <div className={styles.trustCard}>
            <Quote size={32} className={styles.quoteIcon} />
            <p className={styles.quoteText}>
              „Die Meier GmbH hat unseren Büroturm zwei Monate vor dem vertraglichen Termin
              und absolut im Budgetrahmen übergeben. Die Qualität der Rohbauausführung
              und der Fassadenanschlüsse sucht ihresgleichen.“
            </p>
            <div className={styles.authorBlock}>
              <div className={styles.authorAvatar}>MW</div>
              <div>
                <div className={styles.authorName}>Dr. Markus Weber</div>
                <div className={styles.authorRole}>Vorstand, Horizon Real Estate AG</div>
              </div>
            </div>
          </div>

          <div className={styles.trustCard}>
            <Quote size={32} className={styles.quoteIcon} />
            <p className={styles.quoteText}>
              „Bei unserem anspruchsvollen Holz-Hybrid Campus überzeugte die Meier GmbH
              durch herausragende Vorfertigungskompetenz und lückenlose DGNB-Zertifizierung.
              Ein echter Partner auf Augenhöhe.“
            </p>
            <div className={styles.authorBlock}>
              <div className={styles.authorAvatar}>SL</div>
              <div>
                <div className={styles.authorName}>Sabine Lindner</div>
                <div className={styles.authorRole}>Geschäftsführerin, Capital Green Tech</div>
              </div>
            </div>
          </div>

          <div className={styles.trustCard}>
            <Quote size={32} className={styles.quoteIcon} />
            <p className={styles.quoteText}>
              „Im Tiefbau und Tunnelvortrieb zählt absolute Zuverlässigkeit und
              Sicherheit. Meier Tiefbau hat die geologischen Hürden meisterhaft gelöst
              und Null Unfälle verzeichnet.“
            </p>
            <div className={styles.authorBlock}>
              <div className={styles.authorAvatar}>TH</div>
              <div>
                <div className={styles.authorName}>Thomas Hartmann</div>
                <div className={styles.authorRole}>Bereichsleiter Infrastruktur Süd</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODAL / DETAIL DRAWER */}
      {selectedProject && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className={styles.modalBox}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setSelectedProject(null)}
              aria-label="Schließen"
            >
              <X size={20} />
            </button>

            <div className={styles.modalImageArea}>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className={styles.modalContent}>
              <div className={styles.modalCategory}>
                {selectedProject.categoryLabel} · {selectedProject.location}
              </div>

              <h2 id="modal-title" className={styles.modalTitle}>
                {selectedProject.title}
              </h2>

              <p className={styles.modalText}>{selectedProject.longText}</p>

              <div className={styles.modalSpecsTable}>
                <div className={styles.modalSpecCell}>
                  <span className={styles.modalSpecTitle}>BGF / Umfang</span>
                  <span className={styles.modalSpecValue}>{selectedProject.bgf}</span>
                </div>
                <div className={styles.modalSpecCell}>
                  <span className={styles.modalSpecTitle}>Bauzeit</span>
                  <span className={styles.modalSpecValue}>{selectedProject.duration}</span>
                </div>
                <div className={styles.modalSpecCell}>
                  <span className={styles.modalSpecTitle}>Zertifizierung</span>
                  <span className={styles.modalSpecValue} style={{ color: "#0052CC" }}>
                    {selectedProject.cert}
                  </span>
                </div>
                <div className={styles.modalSpecCell}>
                  <span className={styles.modalSpecTitle}>Bauherr</span>
                  <span className={styles.modalSpecValue}>{selectedProject.client}</span>
                </div>
                <div className={styles.modalSpecCell}>
                  <span className={styles.modalSpecTitle}>Fertigstellung</span>
                  <span className={styles.modalSpecValue}>{selectedProject.year}</span>
                </div>
                <div className={styles.modalSpecCell}>
                  <span className={styles.modalSpecTitle}>Gewährleistung</span>
                  <span className={styles.modalSpecValue} style={{ color: "#16A34A" }}>
                    5 Jahre nach VOB
                  </span>
                </div>
              </div>

              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem", fontWeight: 800, marginBottom: "0.75rem", color: "#0B1B3D" }}>
                Besondere Projektleistungen &amp; Highlights:
              </h4>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "grid", gap: "0.6rem" }}>
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.92rem", color: "#334155" }}>
                    <CheckCircle2 size={16} color="#FF8024" style={{ flexShrink: 0 }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.modalActions}>
                <Link
                  href="/#kontakt"
                  className={styles.modalCtaBtn}
                  onClick={() => setSelectedProject(null)}
                >
                  <PhoneCall size={16} />
                  <span>Projekt mit uns besprechen</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. CALL TO ACTION SECTION */}
      <section className={styles.ctaSection} aria-label="Projekt starten">
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            Haben Sie ein anspruchsvolles Bauvorhaben?
          </h2>
          <p className={styles.ctaDesc}>
            Lassen Sie uns gemeinsam Großes erschaffen. Unsere Fachingenieure und Projektleiter
            beraten Sie von der ersten Skizze bis zur schlüsselfertigen Übergabe.
          </p>

          <div className={styles.ctaBtnGroup}>
            <Link href="/#kontakt" className={styles.primaryCta}>
              <span>Jetzt Bauprojekt anfragen</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/leistungen" className={styles.secondaryCta}>
              <span>Unsere Leistungen im Detail</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
