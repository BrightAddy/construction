"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, X, Menu } from "lucide-react";
import MeierLogo from "./MeierLogo";
import styles from "./GlassNavbar.module.css";

export default function GlassNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const lastScrollY = React.useRef(0);

  const isHome = pathname === "/";
  const isLeistungen = pathname === "/leistungen" || pathname.startsWith("/leistungen");
  const isReferenzen = pathname === "/referenzen" || pathname.startsWith("/referenzen");
  const isTechnologie = pathname === "/technologie" || pathname.startsWith("/technologie");
  const isKarriere = pathname === "/karriere" || pathname.startsWith("/karriere");
  const isKontakt = pathname === "/kontakt" || pathname.startsWith("/kontakt");

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      // Mark as scrolled (glass bg) after 40px
      setIsScrolled(currentY > 40);

      // Hide navbar when scrolling DOWN more than 8px past initial threshold
      // Show navbar when scrolling UP
      if (currentY > 80) {
        if (diff > 8) {
          setIsHidden(true);
        } else if (diff < -8) {
          setIsHidden(false);
        }
      } else {
        // Always show when near the top
        setIsHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`${styles.headerContainer} ${
          isScrolled ? styles.headerContainerScrolled : ""
        } ${isHidden ? styles.headerHidden : ""}`}
      >
        {/* Brand Logo (Links to Home) */}
        <Link
          href={isHome ? "#top" : "/"}
          onClick={isHome ? scrollToTop : undefined}
          aria-label="MEIER GMBH Startseite"
          style={{ flexShrink: 0 }}
        >
          <MeierLogo />
        </Link>

        {/* Frosted Glass Pill Navigation Bar */}
        <nav className={styles.glassPill} aria-label="Hauptnavigation">
          {/* Search Trigger */}
          <button
            type="button"
            className={styles.searchButton}
            onClick={() => setSearchModalOpen(true)}
            aria-label="Website durchsuchen"
            title="Suche öffnen"
          >
            <Search size={18} strokeWidth={2.4} />
          </button>

          {/* Adaptive Nav Links */}
          <ul className={styles.navLinks}>
            <li>
              <Link
                href={isHome ? "#top" : "/"}
                onClick={isHome ? scrollToTop : undefined}
                className={`${styles.navLink} ${isHome ? styles.navLinkActive : ""}`}
                aria-current={isHome ? "page" : undefined}
              >
                Startseite
              </Link>
            </li>
            <li>
              <Link
                href="/leistungen"
                className={`${styles.navLink} ${isLeistungen ? styles.navLinkActive : ""}`}
                aria-current={isLeistungen ? "page" : undefined}
              >
                Leistungen
              </Link>
            </li>
            <li>
              <Link
                href="/referenzen"
                className={`${styles.navLink} ${isReferenzen ? styles.navLinkActive : ""}`}
                aria-current={isReferenzen ? "page" : undefined}
              >
                Referenzen
              </Link>
            </li>
            <li>
              <Link
                href="/technologie"
                className={`${styles.navLink} ${isTechnologie ? styles.navLinkActive : ""}`}
                aria-current={isTechnologie ? "page" : undefined}
              >
                Technologie
              </Link>
            </li>
            <li>
              <Link
                href="/karriere"
                className={`${styles.navLink} ${isKarriere ? styles.navLinkActive : ""}`}
                aria-current={isKarriere ? "page" : undefined}
              >
                Karriere
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                className={`${styles.navLink} ${isKontakt ? styles.navLinkActive : ""}`}
                aria-current={isKontakt ? "page" : undefined}
              >
                Kontakt
              </Link>
            </li>
          </ul>

          {/* Primary Action Button */}
          <Link
            href="/jetzt"
            className={styles.quoteButton}
          >
            Jetzt Angebot anfordern
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={styles.mobileMenuToggle}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Menü öffnen"
        >
          <Menu size={22} />
        </button>
      </header>

      {/* Mobile Drawer */}
      <aside
        className={`${styles.mobileDrawer} ${
          mobileMenuOpen ? styles.mobileDrawerOpen : ""
        }`}
      >
        <div className={styles.mobileDrawerHeader}>
          <MeierLogo />
          <button
            type="button"
            className={styles.mobileCloseButton}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Menü schließen"
          >
            <X size={24} />
          </button>
        </div>

        <ul className={styles.mobileNavLinks}>
          <li>
            <Link
              href={isHome ? "#top" : "/"}
              className={`${styles.mobileNavLink} ${isHome ? styles.mobileNavLinkActive : ""}`}
              onClick={(e) => {
                if (isHome) scrollToTop(e);
                setMobileMenuOpen(false);
              }}
            >
              Startseite
            </Link>
          </li>
          <li>
            <Link
              href="/leistungen"
              className={`${styles.mobileNavLink} ${isLeistungen ? styles.mobileNavLinkActive : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Leistungen
            </Link>
          </li>
          <li>
            <Link
              href="/referenzen"
              className={`${styles.mobileNavLink} ${isReferenzen ? styles.mobileNavLinkActive : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Referenzen
            </Link>
          </li>
          <li>
            <Link
              href="/technologie"
              className={`${styles.mobileNavLink} ${isTechnologie ? styles.mobileNavLinkActive : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Technologie
            </Link>
          </li>
          <li>
            <Link
              href="/karriere"
              className={`${styles.mobileNavLink} ${isKarriere ? styles.mobileNavLinkActive : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Karriere
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              className={`${styles.mobileNavLink} ${isKontakt ? styles.mobileNavLinkActive : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
          </li>
        </ul>

        <div className={styles.mobileDrawerFooter}>
          <Link
            href="/jetzt"
            className={styles.quoteButton}
            style={{ width: "100%", textAlign: "center", justifyContent: "center" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Jetzt Angebot anfordern
          </Link>
        </div>
      </aside>

      {/* Search Modal */}
      {searchModalOpen && (
        <div
          className={styles.searchModalOverlay}
          onClick={() => setSearchModalOpen(false)}
        >
          <div className={styles.searchBox} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#0F172A" }}>
                Bauprojekte &amp; Leistungen suchen
              </span>
              <button
                type="button"
                onClick={() => setSearchModalOpen(false)}
                style={{ color: "#64748B", padding: "0.25rem" }}
              >
                <X size={20} />
              </button>
            </div>
            <div className={styles.searchInputWrapper}>
              <Search size={20} color="#0052CC" />
              <input
                type="text"
                className={styles.searchInput}
                placeholder="z. B. Hochbau, Tiefbau, BIM, Frankfurt Tower, Karriere..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
            <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.8rem", color: "#64748B", marginRight: "0.5rem" }}>Häufig gesucht:</span>
              {["Hochbau", "Tiefbau", "BIM 5D", "DGNB Platin", "Bauleiter Jobs"].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSearchQuery(tag)}
                  style={{
                    background: "#EFF6FF",
                    color: "#0052CC",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    padding: "0.25rem 0.65rem",
                    borderRadius: "6px"
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
