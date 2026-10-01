"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Layers,
  Activity,
  Trees,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  ShieldCheck,
  Zap,
  Clock,
  Coins,
  FileCheck,
  Radio,
  FileSpreadsheet
} from "lucide-react";
import styles from "./technologie.module.css";

interface TechTopic {
  id: string;
  category: string;
  title: string;
  badge: string;
  image: string;
  description: string;
  features: string[];
}

const TOPICS: TechTopic[] = [
  {
    id: "bim5d",
    category: "Modellbasiertes Bauen",
    title: "5D-BIM & Digitaler Bauwerkszwilling",
    badge: "OpenBIM nach IFC 4.3",
    image: "/images/leistungen-mockup.jpg",
    description:
      "Bevor die erste Baggerschaufel Erde bewegt, steht Ihr Bauwerk bereits millimetergenau im virtuellen Raum. Wir verknüpfen 3D-Geometrie, 4D-Bauzeitenpläne und 5D-Kostenkalkulation in einem lückenlosen digitalen Zwilling.",
    features: [
      "Automatisierte Kollisionsprüfung zwischen Rohbau, TGA und Fassade",
      "Terminablaufsimulation in 4D zur Vermeidung von Baustellenstillständen",
      "Tagesaktuelle 5D-Soll-Ist-Kostenkontrolle direkt am 3D-Bauteil",
      "Nahtlose Übergabe des digitalen Zwillings für das Facility Management"
    ]
  },
  {
    id: "drones",
    category: "Autonome Vermessung",
    title: "Drohnen-LiDAR & 3D-Punktwolken",
    badge: "± 2 mm Genauigkeit",
    image: "/images/hero-clean.jpg",
    description:
      "Mit kommerziellen Vermessungsdrohnen und hochpräzisen LiDAR-Laserscannern erfassen wir das Baugelände in Rekordzeit. Die erzeugten Punktwolken werden direkt in unser BIM-Modell eingespeist.",
    features: [
      "Vollautomatische Bestandsaufnahme und Soll-Ist-Abgleich mit dem Modell",
      "Minutenschnelle Massen- und Volumenberechnung bei Erdaushubarbeiten",
      "Lückenlose Fotodokumentation schwer zugänglicher Bauteile und Kräne",
      "Höchste Sicherheit: Keine Gefährdung von Vermessungspersonal in Gruben"
    ]
  },
  {
    id: "sensors",
    category: "Baustellen-IoT",
    title: "Smarte Sensorik & Telemetrie",
    badge: "24/7 Echtzeitüberwachung",
    image: "/images/project-tunnel.jpg",
    description:
      "Unsere Baustellen sind intelligent vernetzt. Drahtlose Sensoren in Frischbetonbauteilen und Baugrubenwänden liefern rund um die Uhr verlässliche Zustandsdaten für schnelle und sichere Bauentscheidungen.",
    features: [
      "Reifegrad-Sensoren im Beton für exakte Ausschalfristen ohne Wartezeit",
      "Kontinuierliche Schwingungs- und Erschütterungsüberwachung bei Nachbarbauten",
      "Grundwasser- und Porenwasserdruckmessung in Echtzeit",
      "Automatisierte Alarmierung bei Grenzwertüberschreitungen auf Bauleiter-Smartphones"
    ]
  },
  {
    id: "materials",
    category: "Zirkuläre Baustoffe",
    title: "Low-Carbon Beton & Holz-Hybrid",
    badge: "Bis zu -60% CO₂-Ausstoß",
    image: "/images/timber-holzbau.jpg",
    description:
      "Klimafreundliches Bauen erfordert modernste Materialtechnologie. Wir setzen auf CO₂-reduzierte Zemente, zertifiziertes deutsches Holz und kreislauffähige Recycling-Baustoffe.",
    features: [
      "Einsatz von CEM II/III-Zementen und calzinierten Tonen mit minimiertem CO₂-Fußabdruck",
      "Modulare Holz-Beton-Verbunddecken mit reversiblen Verbindungselementen",
      "R-Beton mit bis zu 45% rezyklierten Gesteinskörnungen nach DIN 4226-101",
      "Vollständige Ökobilanzierung und Zertifizierung nach DGNB Platin & QNG"
    ]
  }
];

export default function TechnologieClient() {
  const [activeTab, setActiveTab] = useState<string>("bim5d");

  const currentTopic = TOPICS.find((t) => t.id === activeTab) || TOPICS[0];

  return (
    <>
      {/* 1. INTERACTIVE DEEP DIVE SECTION */}
      <section className={styles.deepDiveSection} aria-label="Technologie Deep-Dive">
        <div className={styles.deepDiveContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag}>
              <Cpu size={14} />
              <span>Digitales Bauen im Detail</span>
            </div>
            <h2 className={styles.sectionTitle}>Unsere Schlüsseltechnologien</h2>
            <p className={styles.sectionSubtitle}>
              Klicken Sie durch unsere vier Technologiesäulen und entdecken Sie, wie wir
              digitale Intelligenz und deutsche Ingenieurskunst auf der Baustelle verbinden.
            </p>
          </div>

          {/* Tab Selector */}
          <div className={styles.deepDiveTabs} role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "bim5d"}
              className={`${styles.deepDiveTabBtn} ${
                activeTab === "bim5d" ? styles.deepDiveTabBtnActive : ""
              }`}
              onClick={() => setActiveTab("bim5d")}
            >
              <Layers size={16} />
              <span>5D-BIM &amp; Digital Twin</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "drones"}
              className={`${styles.deepDiveTabBtn} ${
                activeTab === "drones" ? styles.deepDiveTabBtnActive : ""
              }`}
              onClick={() => setActiveTab("drones")}
            >
              <Radio size={16} />
              <span>Drohnen &amp; LiDAR</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "sensors"}
              className={`${styles.deepDiveTabBtn} ${
                activeTab === "sensors" ? styles.deepDiveTabBtnActive : ""
              }`}
              onClick={() => setActiveTab("sensors")}
            >
              <Activity size={16} />
              <span>Sensorik &amp; Telemetrie</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "materials"}
              className={`${styles.deepDiveTabBtn} ${
                activeTab === "materials" ? styles.deepDiveTabBtnActive : ""
              }`}
              onClick={() => setActiveTab("materials")}
            >
              <Trees size={16} />
              <span>Zirkuläre Werkstoffe</span>
            </button>
          </div>

          {/* Interactive Showcase Panel */}
          <div className={styles.showcasePanel}>
            <div className={styles.showcaseVisualCol}>
              <Image
                src={currentTopic.image}
                alt={currentTopic.title}
                fill
                className={styles.showcaseImg}
              />
              <div className={styles.showcaseFloatBadge}>
                <Zap size={16} />
                <span>{currentTopic.badge}</span>
              </div>
            </div>

            <div className={styles.showcaseInfoCol}>
              <div className={styles.showcaseCategory}>{currentTopic.category}</div>
              <h3 className={styles.showcaseHeading}>{currentTopic.title}</h3>
              <p className={styles.showcaseText}>{currentTopic.description}</p>

              <div className={styles.showcaseFeaturesList}>
                {currentTopic.features.map((feat, idx) => (
                  <div key={idx} className={styles.showcaseFeatureItem}>
                    <CheckCircle2 size={16} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "1rem" }}>
                <Link
                  href="/#kontakt"
                  style={{
                    background: "#FF8024",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.92rem",
                    fontWeight: 800,
                    padding: "0.85rem 1.6rem",
                    borderRadius: "12px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem"
                  }}
                >
                  <span>Technologieberatung anfragen</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROCESS COMPARISON (Klassischer Bau vs. Meier Digitaler Bauprozess) */}
      <section className={styles.comparisonSection} aria-label="Prozessvergleich">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>
            <Zap size={14} />
            <span>Der direkte Vergleich</span>
          </div>
          <h2 className={styles.sectionTitle}>Klassischer Bau vs. Meier Bauen 4.0</h2>
          <p className={styles.sectionSubtitle}>
            Wie datengetriebene Planung und modernste Bautechnologie Risiken eliminieren und Ihren Return on Investment sichern.
          </p>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th style={{ width: "25%" }}>Leistungsmerkmal</th>
                <th style={{ width: "35%" }}>Herkömmliche Bauausführung</th>
                <th style={{ width: "40%" }}>Meier GmbH (5D-BIM &amp; IoT)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.comparisonCriterion}>Kollisionserkennung</td>
                <td className={styles.comparisonOld}>
                  Oft erst auf der Baustelle während der Montage; führt zu teuren Verzögerungen
                </td>
                <td className={styles.comparisonNew}>
                  Vollautomatisch im 3D-BIM vor Baubeginn; 0% Kollisionsstopps im Rohbau
                </td>
              </tr>
              <tr>
                <td className={styles.comparisonCriterion}>Kostentransparenz</td>
                <td className={styles.comparisonOld}>
                  Nachträgliche manuelle Abrechnung und häufige Budgetüberschreitungen
                </td>
                <td className={styles.comparisonNew}>
                  5D-Echtzeitverknüpfung von Bauteilen und Kosten; 100% Budgetsicherheit
                </td>
              </tr>
              <tr>
                <td className={styles.comparisonCriterion}>Baufortschrittskontrolle</td>
                <td className={styles.comparisonOld}>
                  Wöchentliche Sichtprüfungen mit hohem Fehlerrisiko
                </td>
                <td className={styles.comparisonNew}>
                  Autonome Drohnen-Punktwolken und IoT-Sensorik liefern tägliche Soll-Ist-Daten
                </td>
              </tr>
              <tr>
                <td className={styles.comparisonCriterion}>Betonqualität &amp; Ausschalen</td>
                <td className={styles.comparisonOld}>
                  Pauschale Wartezeiten nach Tabellenwerten; verzögert Folgetakte
                </td>
                <td className={styles.comparisonNew}>
                  Drahtlose Betonreifesensoren melden den exakten Ausschalzeitpunkt
                </td>
              </tr>
              <tr>
                <td className={styles.comparisonCriterion}>Gebäudedokumentation</td>
                <td className={styles.comparisonOld}>
                  Hunderte Ordner mit statischen Papierplänen und unvollständigen Revisionsakten
                </td>
                <td className={styles.comparisonNew}>
                  Vollständiger digitaler Zwilling (As-Built IFC) für effizientes Facility Management
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. CERTIFICATIONS & DEUTSCHE BAUNORMEN */}
      <section className={styles.certsSection} aria-label="Zertifizierungen">
        <div className={styles.certsContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag}>
              <ShieldCheck size={14} />
              <span>Geprüfte Qualität</span>
            </div>
            <h2 className={styles.sectionTitle}>Zertifiziert nach strengsten Baunormen</h2>
            <p className={styles.sectionSubtitle}>
              Unsere Arbeitsprozesse, Sicherheitsmaßnahmen und Qualitätskontrollen unterliegen
              regelmäßigen Audits führender deutscher Prüfinstitute.
            </p>
          </div>

          <div className={styles.certsGrid}>
            <div className={styles.certCard}>
              <div className={styles.certIcon}>
                <ShieldCheck size={28} />
              </div>
              <div className={styles.certStandard}>DIN EN ISO 9001</div>
              <div className={styles.certSubject}>Qualitätsmanagement</div>
              <p className={styles.certDetails}>
                Zertifiziertes Prozessmanagement für fehlerfreie Ausführungsqualität und kontinuierliche Optimierung.
              </p>
            </div>

            <div className={styles.certCard}>
              <div className={styles.certIcon}>
                <Trees size={28} color="#16A34A" />
              </div>
              <div className={styles.certStandard}>DIN EN ISO 14001</div>
              <div className={styles.certSubject}>Umweltmanagement</div>
              <p className={styles.certDetails}>
                Ressourcenschonende Baustellenführung, Staub- und Lärmminderung sowie zertifiziertes Abfallrecycling.
              </p>
            </div>

            <div className={styles.certCard}>
              <div className={styles.certIcon}>
                <ShieldAlert size={28} color="#FF8024" />
              </div>
              <div className={styles.certStandard}>DIN ISO 45001</div>
              <div className={styles.certSubject}>Arbeitssicherheit</div>
              <p className={styles.certDetails}>
                Höchste Standards für Gesundheitsschutz und Unfallvermeidung auf sämtlichen Baustellen bundesweit.
              </p>
            </div>

            <div className={styles.certCard}>
              <div className={styles.certIcon}>
                <FileCheck size={28} />
              </div>
              <div className={styles.certStandard}>DGNB &amp; LEED</div>
              <div className={styles.certSubject}>Nachhaltiges Bauen</div>
              <p className={styles.certDetails}>
                Auditiert für Gebäudezertifizierungen nach DGNB Gold/Platin sowie internationalem LEED-Standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className={styles.ctaSection} aria-label="Technologie anfragen">
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            Wollen Sie mit maximaler Planungssicherheit bauen?
          </h2>
          <p className={styles.ctaDesc}>
            Erfahren Sie in einem persönlichen Fachgespräch mit unseren BIM-Managern und
            Bauleitern, wie moderne Technologie Ihr Vorhaben beschleunigt und Kosten spart.
          </p>

          <div className={styles.ctaBtnGroup}>
            <Link href="/#kontakt" className={styles.primaryCta}>
              <span>BIM-Beratung vereinbaren</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/referenzen" className={styles.secondaryCta}>
              <span>Realisierte Referenzen ansehen</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
