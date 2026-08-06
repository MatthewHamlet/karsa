"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavbarTransparent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const navItems = ["Home", "Features", "How It Works", "Mascot", "Community", "FAQ"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        initial={false}
        animate={{
          width: isScrolled ? "auto" : "100%",
          maxWidth: isScrolled ? "64rem" : "80rem",
          marginTop: isScrolled ? "1rem" : "0",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed inset-x-0 top-0 mx-auto flex items-center justify-between px-6 sm:px-8 lg:px-12 ${
          isScrolled 
            ? "h-16 rounded-full border border-white/30 bg-white/70 backdrop-blur-xl shadow-lg shadow-slate-950/5" 
            : "h-20 bg-transparent"
        }`}
        style={{ left: "50%", transform: "translateX(-50%)" }} // Center fixed nav
      >
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className={`text-xl font-serif font-bold transition-colors ${isScrolled ? "text-slate-900" : "text-white"}`}>
            Karsa
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "Mascot" ? "/mascot" : `#${item.toLowerCase().replace(/\s/g, "-")}`}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-slate-700 hover:text-slate-900" : "text-white hover:text-gray-300"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right Side CTAs */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link href="#" className={`text-sm font-medium transition-colors ${isScrolled ? "text-slate-600 hover:text-slate-900" : "text-slate-700 hover:text-slate-900"}`}>
            Sign In
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="grid h-10 w-10 place-items-center rounded-full bg-slate-900/5 text-slate-900 lg:hidden"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-24 z-40 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={item === "Mascot" ? "/mascot" : `#${item.toLowerCase().replace(/\s/g, "-")}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-700"
                >
                  {item}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
                <Link href="#" className="text-base font-medium text-slate-700">Sign In</Link>
                <Link href="#" className="rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white">
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}