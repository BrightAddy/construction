"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Award,
  Users,
  Building,
  Truck,
  Leaf,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Compass
} from "lucide-react";
import styles from "./uber-uns.module.css";

const MILESTONES = [
  {
    year: "1974",
    title: "Gründung als Meisterbetrieb",
    desc: "Dipl.-Ing. Wilhelm Meier gründet das Bauunternehmen mit 8 Maurern und einem LKW in Berlin. Fokus: Hochwertiger Massivbau und Fundamente.",
    align: "left"
  },
  {
    year: "1988",
    title: "Einstieg in den Schlüsselfertigbau",
    desc: "Aufbau eigener Ingenieurabteilungen für Tragwerksplanung, Rohbau und Generalübernahme von Gewerbe- und Verwaltungsbauten.",
    align: "right"
  },
  {
    year: "1999",
    title: "Bundesweite Expansion",
    desc: "Eröffnung der Niederlassungen in Frankfurt am Main und München. Erste Realisierungen von Bürohochhäusern und Fernbahntunneln.",
    align: "left"
  },
  {
    year: "2012",
    title: "Pionier der 3D-BIM-Digitalisierung",
    desc: "Vollständige Umstellung der Planung auf modellbasiertes Building Information Modeling (BIM) und Einführung des DGNB-Zertifizierungssystems.",
    align: "right"
  },
  {
    year: "2020",
    title: "Generationswechsel & Holz-Hybrid",
    desc: "Übernahme durch Thomas Meier und Dr. Elena Richter. Fokussierung auf klimafreundliche Holz-Beton-Verbundbauten und zirkuläre Baustoffe.",
    align: "left"
  },
  {
    year: "2026",
    title: "Technologischer Vorreiter (Bauen 4.0)",
    desc: "Über 1.200 Mitarbeiter, 60 Turmdrehkrane, IoT-Baustellentelemetrie und über 850 erfolgreich übergebene Großprojekte in ganz Deutschland.",
    align: "right"
  }
];

export default function UberUnsClient() {
  const [selectedMilestone, setSelectedMilestone] = useState<number | null>(null);

  return (
    <>
      {/* 1. TIMELINE & COMPANY HISTORY */}
      <section className={styles.timelineSection} aria-label="Historie & Meilensteine">
        <div className={styles.timelineContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag}>
              <Calendar size={14} />
              <span>50 Jahre Erfolgsgeschichte</span>
            </div>
            <h2 className={styles.sectionTitle}>Vom Meisterbetrieb zum Baupionier</h2>
            <p className={styles.sectionSubtitle}>
              Begleiten Sie uns auf unserer Reise durch fünf Jahrzehnte deutsche Baugeschichte –
              geprägt von Pioniergeist, unerschütterlicher Solidität und stetiger Innovation.
            </p>
          </div>

          <div className={styles.timelineTrack}>
            {MILESTONES.map((item, idx) => (
              <div
                key={item.year}
                className={`${styles.milestoneItem} ${
                  item.align === "left" ? styles.milestoneLeft : styles.milestoneRight
                }`}
              >
                <div className={styles.milestoneDot} />
                <div className={styles.milestoneContent}>
                  <span className={styles.milestoneYearBadge}>{item.year}</span>
                  <h3 className={styles.milestoneTitle}>{item.title}</h3>
                  <p className={styles.milestoneDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. LEADERSHIP & GESCHÄFTSFÜHRUNG */}
      <section className={styles.leadershipSection} aria-label="Geschäftsführung">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>
            <Users size={14} />
            <span>Führung mit Weitblick</span>
          </div>
          <h2 className={styles.sectionTitle}>Unsere Geschäftsführung</h2>
          <p className={styles.sectionSubtitle}>
            Verantwortungsbewusste Unternehmer mit jahrzehntelanger Baustellenerfahrung,
            höchster Ingenieurkompetenz und klarem Bekenntnis zu Mensch und Umwelt.
          </p>
        </div>

        <div className={styles.leadershipGrid}>
          {/* Leader 1 */}
          <div className={styles.leaderCard}>
            <div className={styles.leaderHeaderArea}>
              <div className={styles.leaderAvatar}>TM</div>
              <h3 className={styles.leaderName}>Dipl.-Ing. Thomas Meier</h3>
              <div className={styles.leaderRole}>Geschäftsführender Gesellschafter</div>
            </div>
            <div className={styles.leaderBody}>
              <p>
                Tritt in die Fußstapfen des Firmengründers und leitet die strategische Ausrichtung,
                Großakquisitionen sowie die partnerschaftliche Kundenbetreuung bundesweit.
              </p>
              <div style={{ marginTop: "1rem", fontWeight: 700, fontSize: "0.85rem", color: "#0B1B3D" }}>
                Schwerpunkte: Unternehmensstrategie, Generalübernahme &amp; Großprojekte
              </div>
            </div>
          </div>

          {/* Leader 2 */}
          <div className={styles.leaderCard}>
            <div className={styles.leaderHeaderArea}>
              <div className={styles.leaderAvatar}>ER</div>
              <h3 className={styles.leaderName}>Dr.-Ing. Elena Richter</h3>
              <div className={styles.leaderRole}>Technische Geschäftsführerin (CTO)</div>
            </div>
            <div className={styles.leaderBody}>
              <p>
                Promovierte Tragwerksplanerin mit Stationen bei führenden Ingenieurbüros.
                Verantwortet die 5D-BIM-Technologie, Statik, Holz-Hybrid-Entwicklung und Qualitätssicherung.
              </p>
              <div style={{ marginTop: "1rem", fontWeight: 700, fontSize: "0.85rem", color: "#0B1B3D" }}>
                Schwerpunkte: Bauen 4.0, BIM-Management &amp; DGNB-Zertifizierung
              </div>
            </div>
          </div>

          {/* Leader 3 */}
          <div className={styles.leaderCard}>
            <div className={styles.leaderHeaderArea}>
              <div className={styles.leaderAvatar}>MB</div>
              <h3 className={styles.leaderName}>Dipl.-Kfm. Markus Bergmann</h3>
              <div className={styles.leaderRole}>Kaufmännischer Geschäftsführer (CFO)</div>
            </div>
            <div className={styles.leaderBody}>
              <p>
                Experte für Bauwirtschaft und Risikomanagement. Garantiert solide Finanzstrukturen,
                transparente Nachkalkulation und Verhandlungssicherheit nach VOB/BGB.
              </p>
              <div style={{ marginTop: "1rem", fontWeight: 700, fontSize: "0.85rem", color: "#0B1B3D" }}>
                Schwerpunkte: Finanzen, Controlling, Vertragsrecht &amp; Einkauf
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MACHINE PARK & EQUIPMENT */}
      <section className={styles.equipmentSection} aria-label="Gerätepark & Eigenleistung">
        <div className={styles.equipmentContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag} style={{ background: "rgba(255,128,36,0.2)", color: "#FF8024", border: "1px solid rgba(255,128,36,0.4)" }}>
              <Truck size={14} />
              <span>Höchste Eigenleistungsquote</span>
            </div>
            <h2 className={styles.sectionTitle} style={{ color: "#FFFFFF" }}>
              Eigener Maschinenpark für maximale Unabhängigkeit
            </h2>
            <p className={styles.sectionSubtitle} style={{ color: "#CBD5E1" }}>
              Wir verlassen uns nicht auf wechselnde Subunternehmer. Mit modernsten Baumaschinen,
              eigenen Schalungssystemen und qualifizierten Stammkolonnen sichern wir Ihren Bauzeitenplan.
            </p>
          </div>

          <div className={styles.equipmentGrid}>
            <div className={styles.equipmentCard}>
              <div className={styles.equipmentNum}>60+</div>
              <div className={styles.equipmentTitle}>Turmdrehkrane</div>
              <div className={styles.equipmentSub}>Liebherr EC-B &amp; EC-H Baureihe mit neuester Hubwerktechnologie</div>
            </div>

            <div className={styles.equipmentCard}>
              <div className={styles.equipmentNum}>85.000 m²</div>
              <div className={styles.equipmentTitle}>Systemschalung</div>
              <div className={styles.equipmentSub}>Peri &amp; Doka Rahmen- und Deckenschalungen im Eigenbestand</div>
            </div>

            <div className={styles.equipmentCard}>
              <div className={styles.equipmentNum}>120+</div>
              <div className={styles.equipmentTitle}>Schwere Baumaschinen</div>
              <div className={styles.equipmentSub}>CAT Kettenbagger, Radlader &amp; Bauer Spezialtiefbaugeräte mit GPS</div>
            </div>

            <div className={styles.equipmentCard}>
              <div className={styles.equipmentNum}>100%</div>
              <div className={styles.equipmentTitle}>Eigene Stammkolonnen</div>
              <div className={styles.equipmentSub}>Feste Teams aus Meistern, Vorarbeitern und geprüften Facharbeitern</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className={styles.ctaSection} aria-label="Zusammenarbeit starten">
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            Bauen Sie auf ein verlässliches Fundament.
          </h2>
          <p className={styles.ctaDesc}>
            Lernen Sie uns und unsere Werte persönlich kennen. Wir laden Sie herzlich ein,
            eines unserer Großprojekte vor Ort zu besichtigen oder ein unverbindliches Erstgespräch zu führen.
          </p>

          <div className={styles.ctaBtnGroup}>
            <Link href="/kontakt" className={styles.primaryCta}>
              <span>Projektberatung anfragen</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/referenzen" className={styles.secondaryCta}>
              <span>Unsere Referenzen ansehen</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
