"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function NavbarTransparent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Mission", href: "/mission" },
    { label: "Membership", href: "/membership" },
    { label: "Locations", href: "/locations" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-md sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid size-7 grid-cols-3 gap-0.5 place-items-center">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="size-1 rounded-full bg-white" />
            ))}
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <Link
            href={navItems[0].href}
            className="text-sm font-medium text-white/90 transition hover:text-white"
          >
            {navItems[0].label}
          </Link>

          <button className="flex items-center gap-1 text-sm font-medium text-white/90 transition hover:text-white">
            Services <ChevronDown size={14} />
          </button>

          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="#join"
          className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 sm:inline-flex"
        >
          Become a member
        </Link>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          className="grid size-9 place-items-center rounded-full bg-white/15 text-white lg:hidden"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/25 bg-white/95 p-4 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-1">
            {[navItems[0], { label: "Services", href: "#" }, ...navItems.slice(1)].map(
              (item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="#join"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 rounded-full bg-slate-900 px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Become a member
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}