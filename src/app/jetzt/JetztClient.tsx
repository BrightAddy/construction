"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Home,
  Warehouse,
  Construction,
  Layers,
  CheckCircle2,
  Send,
  ShieldCheck,
  Zap,
  Clock,
  PhoneCall,
  ArrowRight
} from "lucide-react";
import confetti from "canvas-confetti";
import styles from "./jetzt.module.css";

interface BuildingCategory {
  id: string;
  name: string;
  desc: string;
  baseCost: number;
}

const CATEGORIES: BuildingCategory[] = [
  {
    id: "gewerbe",
    name: "Büro- & Gewerbebau",
    desc: "Moderne Bürokomplexe, Verwaltungszentren & Hochhäuser",
    baseCost: 2150
  },
  {
    id: "wohnbau",
    name: "Wohnungsbau & Quartiere",
    desc: "Mehrfamilienhäuser, Wohnanlagen & Holz-Hybrid-Quartiere",
    baseCost: 2450
  },
  {
    id: "logistik",
    name: "Industrie & Logistik",
    desc: "Stahlbauhallen, Logistikzentren & Produktionsstätten",
    baseCost: 1450
  },
  {
    id: "tiefbau",
    name: "Tief- & Ingenieurbau",
    desc: "Brücken, Tunnel, Spezialtiefbau & Erdbewegungen",
    baseCost: 1950
  },
  {
    id: "sanierung",
    name: "Sanierung & Ausbau",
    desc: "Revitalisierung, Mieterausbau & Denkmalschutz",
    baseCost: 1250
  }
];

export default function JetztClient() {
  const [selectedCat, setSelectedCat] = useState<string>("gewerbe");
  const [area, setArea] = useState<number>(3500);
  const [energyStandard, setEnergyStandard] = useState<number>(1.08); // KfW 40
  const [scope, setScope] = useState<number>(1.0); // Schlüsselfertig
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [offerId, setOfferId] = useState<string>("");

  // Contact state
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    message: ""
  });

  const currentCategory =
    CATEGORIES.find((c) => c.id === selectedCat) || CATEGORIES[0];

  // Calculation
  const unitCostMin = Math.round(currentCategory.baseCost * energyStandard * scope * 0.92);
  const unitCostMax = Math.round(currentCategory.baseCost * energyStandard * scope * 1.12);

  const totalMin = Math.round((area * unitCostMin) / 10000) * 10000;
  const totalMax = Math.round((area * unitCostMax) / 10000) * 10000;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const genId = `ANGEBOT-JETZT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setOfferId(genId);
    setFormSubmitted(true);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className={styles.calculatorSection} aria-label="Baukosten-Rechner">
      <div className={styles.calculatorCard}>
        {formSubmitted ? (
          <div className={styles.successCard}>
            <div className={styles.successIconCircle}>
              <CheckCircle2 size={44} />
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 900, color: "#0B1B3D", marginBottom: "0.5rem" }}>
              Ihr Richtangebot wurde erfolgreich erstellt!
            </h2>
            <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "540px", margin: "0 auto" }}>
              Vielen Dank, <strong>{formData.name}</strong>. Unsere zentrale Kalkulationsabteilung hat Ihre Daten
              für das Vorhaben <strong>{currentCategory.name}</strong> mit <strong>{area.toLocaleString("de-DE")} m² BGF</strong> in <strong>{formData.location || "Deutschland"}</strong> erhalten.
            </p>

            <div className={styles.refBadge}>
              Ihre persönliche Angebots-ID: <strong>{offerId}</strong>
            </div>

            <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "16px", padding: "1.5rem", maxWidth: "480px", margin: "0 auto 2rem", textAlign: "left" }}>
              <div style={{ fontSize: "0.85rem", color: "#64748B", fontWeight: 700, textTransform: "uppercase" }}>Indikativer Richtkostenrahmen:</div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", fontWeight: 900, color: "#0052CC", margin: "0.25rem 0" }}>
                {formatCurrency(totalMin)} – {formatCurrency(totalMax)}
              </div>
              <div style={{ fontSize: "0.82rem", color: "#64748B" }}>
                Basis: ca. {formatCurrency(unitCostMin)} – {formatCurrency(unitCostMax)} / m² BGF
              </div>
            </div>

            <p style={{ color: "#64748B", fontSize: "0.92rem", lineHeight: 1.6, maxWidth: "480px", margin: "0 auto 2rem" }}>
              Ein leitender Projektingenieur meldet sich innerhalb von <strong>24 Stunden</strong> telefonisch unter <strong>{formData.phone}</strong> für das detaillierte Festpreisangebot.
            </p>

            <button
              type="button"
              className={styles.submitActionBtn}
              onClick={() => setFormSubmitted(false)}
              style={{ maxWidth: "320px", margin: "0 auto" }}
            >
              <span>Weitere Berechnung durchführen</span>
            </button>
          </div>
        ) : (
          <>
            {/* Step Indicators */}
            <div className={styles.stepBar}>
              <div className={`${styles.stepPill} ${styles.stepPillActive}`}>
                <span className={styles.stepBadge}>1</span>
                <span>Bauvorhaben</span>
              </div>
              <div className={`${styles.stepPill} ${styles.stepPillActive}`}>
                <span className={styles.stepBadge}>2</span>
                <span>Fläche &amp; Standard</span>
              </div>
              <div className={`${styles.stepPill} ${styles.stepPillActive}`}>
                <span className={styles.stepBadge}>3</span>
                <span>Live-Kalkulation</span>
              </div>
              <div className={`${styles.stepPill} ${styles.stepPillActive}`}>
                <span className={styles.stepBadge}>4</span>
                <span>Angebot erhalten</span>
              </div>
            </div>

            {/* LIVE ESTIMATE STICKY BOX */}
            <div className={styles.liveEstimateBox}>
              <div>
                <div className={styles.estimateLabel}>Indikative Baukostenschätzung:</div>
                <div className={styles.estimateValue}>
                  {formatCurrency(totalMin)} – {formatCurrency(totalMax)}
                </div>
                <div className={styles.estimateSub}>
                  Richtwert: ca. {formatCurrency(unitCostMin)} – {formatCurrency(unitCostMax)} pro m² BGF
                </div>
              </div>

              <div style={{ textAlign: "right" }}>
                <div style={{ color: "#38BDF8", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase" }}>
                  Kostenlose Erstkalkulation
                </div>
                <div style={{ color: "#FFFFFF", fontSize: "0.82rem", marginTop: "0.2rem" }}>
                  Verbindliches Festpreisangebot in 24 Std.
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* STEP 1: CATEGORY SELECTION */}
              <div style={{ marginBottom: "2rem" }}>
                <label className={styles.formLabel} style={{ fontSize: "1.05rem", marginBottom: "0.75rem", display: "block" }}>
                  1. Wählen Sie den Gebäudetyp für Ihr Vorhaben:
                </label>
                <div className={styles.categoryGrid}>
                  {CATEGORIES.map((cat) => (
                    <div
                      key={cat.id}
                      className={`${styles.categorySelectCard} ${
                        selectedCat === cat.id ? styles.categorySelectCardActive : ""
                      }`}
                      onClick={() => setSelectedCat(cat.id)}
                    >
                      <div className={styles.categoryIconCircle}>
                        {cat.id === "gewerbe" && <Building2 size={24} />}
                        {cat.id === "wohnbau" && <Home size={24} />}
                        {cat.id === "logistik" && <Warehouse size={24} />}
                        {cat.id === "tiefbau" && <Construction size={24} />}
                        {cat.id === "sanierung" && <Layers size={24} />}
                      </div>
                      <h4 className={styles.categoryTitle}>{cat.name}</h4>
                      <p className={styles.categoryDesc}>{cat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* STEP 2: AREA SLIDER */}
              <div className={styles.sliderBox}>
                <div className={styles.sliderHeader}>
                  <label className={styles.formLabel} style={{ fontSize: "1rem" }}>
                    2. Gewünschte Bruttogeschossfläche (BGF):
                  </label>
                  <div className={styles.sliderValueDisplay}>
                    {area.toLocaleString("de-DE")} m²
                  </div>
                </div>

                <input
                  type="range"
                  min="500"
                  max="20000"
                  step="250"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className={styles.rangeSlider}
                />

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "#94A3B8", marginTop: "0.5rem" }}>
                  <span>500 m² (Kompakt)</span>
                  <span>5.000 m² (Mittel)</span>
                  <span>10.000 m² (Groß)</span>
                  <span>20.000+ m² (Campus)</span>
                </div>
              </div>

              {/* STEP 3: ENERGIETRÄGER & AUSBAUSTUFE */}
              <div style={{ marginBottom: "2rem" }}>
                <label className={styles.formLabel} style={{ fontSize: "1rem", marginBottom: "0.75rem", display: "block" }}>
                  3. Energiestandard &amp; Nachhaltigkeit:
                </label>
                <div className={styles.optionsRow}>
                  <button
                    type="button"
                    className={`${styles.optionBtn} ${energyStandard === 1.0 ? styles.optionBtnActive : ""}`}
                    onClick={() => setEnergyStandard(1.0)}
                  >
                    <div className={styles.optionName}>GEG Standard</div>
                    <div className={styles.optionSub}>Gesetzlicher Mindeststandard</div>
                  </button>

                  <button
                    type="button"
                    className={`${styles.optionBtn} ${energyStandard === 1.08 ? styles.optionBtnActive : ""}`}
                    onClick={() => setEnergyStandard(1.08)}
                  >
                    <div className={styles.optionName}>KfW-Effizienzhaus 40</div>
                    <div className={styles.optionSub}>Hohe Fördermöglichkeit</div>
                  </button>

                  <button
                    type="button"
                    className={`${styles.optionBtn} ${energyStandard === 1.15 ? styles.optionBtnActive : ""}`}
                    onClick={() => setEnergyStandard(1.15)}
                  >
                    <div className={styles.optionName}>DGNB Platin / QNG</div>
                    <div className={styles.optionSub}>Maximale Zirkularität &amp; ESG</div>
                  </button>
                </div>
              </div>

              <div style={{ marginBottom: "2.5rem" }}>
                <label className={styles.formLabel} style={{ fontSize: "1rem", marginBottom: "0.75rem", display: "block" }}>
                  4. Gewünschte Ausführungsstufe:
                </label>
                <div className={styles.optionsRow}>
                  <button
                    type="button"
                    className={`${styles.optionBtn} ${scope === 0.5 ? styles.optionBtnActive : ""}`}
                    onClick={() => setScope(0.5)}
                  >
                    <div className={styles.optionName}>Rohbau &amp; Tragwerk</div>
                    <div className={styles.optionSub}>Fundamente, Beton &amp; Hülle</div>
                  </button>

                  <button
                    type="button"
                    className={`${styles.optionBtn} ${scope === 0.75 ? styles.optionBtnActive : ""}`}
                    onClick={() => setScope(0.75)}
                  >
                    <div className={styles.optionName}>Veredelter Rohbau</div>
                    <div className={styles.optionSub}>Inkl. Dach, Fassade &amp; Fenster</div>
                  </button>

                  <button
                    type="button"
                    className={`${styles.optionBtn} ${scope === 1.0 ? styles.optionBtnActive : ""}`}
                    onClick={() => setScope(1.0)}
                  >
                    <div className={styles.optionName}>Schlüsselfertig (GU)</div>
                    <div className={styles.optionSub}>All-Inclusive Generalübernahme</div>
                  </button>
                </div>
              </div>

              {/* STEP 4: CONTACT INFORMATION */}
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "18px", padding: "2rem", marginBottom: "2rem" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 800, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                  5. Kontaktdaten für Ihr verbindliches Festpreisangebot:
                </h3>

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Ihr Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="z. B. Michael Weber"
                      className={styles.formInput}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Unternehmen (optional)</label>
                    <input
                      type="text"
                      placeholder="z. B. Weber Real Estate GmbH"
                      className={styles.formInput}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Telefonnummer für Rückfragen *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+49 (0) 170 1234567"
                      className={styles.formInput}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>E-Mail-Adresse *</label>
                    <input
                      type="email"
                      required
                      placeholder="weber@real-estate.de"
                      className={styles.formInput}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.formGroup} style={{ marginBottom: "1.25rem" }}>
                  <label className={styles.formLabel}>Bauort / PLZ des Grundstücks *</label>
                  <input
                    type="text"
                    required
                    placeholder="z. B. 60311 Frankfurt am Main oder München"
                    className={styles.formInput}
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Zusätzliche Wünsche oder Anmerkungen (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="z. B. Vorhandenes Bodengutachten, gewünschter Baubeginn Q3 2026..."
                    className={styles.formTextarea}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
              </div>

              {/* ACTION BUTTON */}
              <button type="submit" className={styles.submitActionBtn}>
                <span>Jetzt verbindliches Festpreisangebot anfordern</span>
                <Send size={18} />
              </button>

              <div style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.82rem", color: "#94A3B8" }}>
                <ShieldCheck size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                100% kostenlos &amp; unverbindlich · 24h Reaktionsgarantie unserer Baudirektion · DSGVO-konform
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
