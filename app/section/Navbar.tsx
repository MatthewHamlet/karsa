"use client";

// import Button from "@/components/Button";
import ServicesMegaMenu from "@/app/section/ServicesMegaMenu";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  const openServices = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setIsServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    closeTimeout.current = setTimeout(() => setIsServicesOpen(false), 150);
  };

  return (
    <header className="relative z-50 h-20">
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 330, damping: 30, mass: 0.7 }}
        className={`fixed inset-x-3 top-3 mx-auto flex items-center justify-between sm:inset-x-5 lg:inset-x-8 ${isScrolled ? "h-14 max-w-5xl rounded-full border border-white/70 bg-white/65 px-4 shadow-lg shadow-slate-950/10 backdrop-blur-2xl sm:px-5" : "h-17 max-w-7xl px-2 sm:px-0"}`}
      >
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Fiscus home"
        >
<Image
  src={isScrolled ? "/logo-right.png" : "/logo-right-white.png"}
  alt="Karsa"
  width={205}
  height={57}
  priority
  className={`w-auto object-contain transition-all duration-300 ${isScrolled ? "h-16" : "h-20"}`}
/>
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
          <Link
            href="/about"
            className="flex items-center text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            About
          </Link>

          <div
            className="relative flex items-center"
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
          >
            <button
              type="button"
              onClick={() => setIsServicesOpen((prev) => !prev)}
              aria-expanded={isServicesOpen}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Services
              <motion.span
                animate={{ rotate: isServicesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center"
              >
                <ChevronDown size={15} />
              </motion.span>
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <ServicesMegaMenu onNavigate={() => setIsServicesOpen(false)} />
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/pricing"
            className="flex items-center text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Pricing
          </Link>

          <Link
            href="/blog"
            className="flex items-center text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="flex items-center text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Contact Us
          </Link>
        </div>

        {/* <div className="flex items-center gap-3">
          <Button
            variant="primary"
            size="sm"
            href="https://wa.me/6282211581769"
            className="hidden sm:inline-flex"
          >
            Book a demo
          </Button>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-blue-200 hover:text-blue-600 lg:hidden"
          >
            {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div> */}
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-3 top-19 z-40 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-950/10 sm:inset-x-5 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                About
              </Link>

              <button
                type="button"
                onClick={() => setIsMobileServicesOpen((open) => !open)}
                aria-expanded={isMobileServicesOpen}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                Services
                <motion.span
                  animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={17} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isMobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden pl-3"
                  >
                    {[
                      "Fiscus Core System",
                      "Fiscus Collection",
                      "Fiscus Survey",
                      "SLIK Reporting",
                      "SILARAS Reporting",
                    ].map((service) => (
                      <p
                        key={service}
                        className="px-3 py-2.5 text-sm text-slate-500"
                      >
                        {service}
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
