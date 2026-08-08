"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Mission", href: "#mission" },
  { label: "Services", href: "#services" },
  { label: "Locations", href: "#locations" },
];

export default function NavbarTransparent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header className="relative z-50 h-0">
      {/*
        Pola dari referensi:
        - Logo kiri (di atas foto dibalik jadi putih pakai invert filter)
        - Grup menu di tengah, dibungkus kapsul semi-transparan, item aktif = pill putih
        - Tombol "Masuk" pill putih di kanan
        Pas discroll semuanya jadi bar putih solid dengan teks hijau.
      */}
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 330, damping: 30, mass: 0.7 }}
        className={`fixed inset-x-4 top-5 mx-auto flex items-center justify-between transition-colors duration-300 sm:inset-x-8 lg:inset-x-12 ${
          isScrolled
            ? "h-16 max-w-5xl rounded-full border border-karsa-mint bg-white/85 px-4 shadow-lg shadow-karsa-ink/10 backdrop-blur-2xl sm:px-5"
            : "h-16 max-w-7xl bg-transparent px-0"
        }`}
      >
        <Link href="#top" className="z-10 flex h-full shrink-0 items-center py-3">
          <div className="relative h-full w-28 sm:w-32">
            <Image
              src="/logo-right.png"
              alt="Karsa"
              fill
              preload
              sizes="128px"
              className={`object-contain object-left transition-all duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
          </div>
        </Link>

        {/* MENU TENGAH */}
        <div
          className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full p-1 transition-colors duration-300 lg:flex ${
            isScrolled ? "bg-karsa-mint/70" : "bg-white/15 backdrop-blur-md"
          }`}
        >
          {navItems.map((item, index) => {
            const isActive = index === 0;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-white text-karsa-deep shadow-sm"
                    : isScrolled
                      ? "text-karsa-deep/70 hover:bg-white/70 hover:text-karsa-deep"
                      : "text-white/85 hover:bg-white/20 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* CTA KANAN */}
        <Link
          href="#membership"
          className={`z-10 hidden rounded-full px-5 py-2.5 text-sm font-bold transition sm:inline-flex ${
            isScrolled
              ? "bg-karsa-deep text-white hover:bg-karsa-ink"
              : "bg-white text-karsa-ink hover:bg-karsa-lime"
          }`}
        >
          Become a member
        </Link>

        {/* TOGGLE MOBILE */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          className={`z-10 grid size-11 place-items-center rounded-full border transition lg:hidden ${
            isScrolled
              ? "border-karsa-mint bg-white text-karsa-deep hover:bg-karsa-mint"
              : "border-white/40 bg-white/15 text-white backdrop-blur-md hover:bg-white/25"
          }`}
        >
          {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </motion.nav>

      {/* DROPDOWN MOBILE */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-4 top-24 z-40 mx-auto max-w-7xl rounded-[28px] border border-karsa-mint bg-white/95 p-4 shadow-xl shadow-karsa-ink/10 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-karsa-deep transition hover:bg-karsa-mint"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#membership"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 rounded-full bg-karsa-deep px-4 py-3 text-center text-sm font-bold text-white"
            >
              Become a member
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
