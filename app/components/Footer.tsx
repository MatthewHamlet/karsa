import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const linkGroups = [
  {
    heading: "Company",
    links: [
      { label: "Our mission", href: "#mission" },
      { label: "Locations", href: "#locations" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    heading: "Care",
    links: [
      { label: "Services", href: "#services" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Membership", href: "#membership" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Contact us", href: "#contact" },
      { label: "Member login", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-karsa-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="#top" className="inline-flex" aria-label="Karsa home">
              <span className="relative block h-9 w-32">
                <Image
                  src="/logo-right.png"
                  alt="Karsa"
                  fill
                  sizes="128px"
                  className="object-contain object-left brightness-0 invert"
                />
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-6 text-white/55">
              A private clinic built for personalized, preventative family care.
              Fees are HSA eligible.
            </p>

            <div className="mt-6 space-y-2.5">
              <a
                href="tel:+16282215817"
                className="flex items-center gap-2.5 text-sm text-white/70 transition hover:text-karsa-lime"
              >
                <Phone size={14} />
                +1 (628) 221-5817
              </a>
              <a
                href="mailto:hello@karsa.care"
                className="flex items-center gap-2.5 text-sm text-white/70 transition hover:text-karsa-lime"
              >
                <Mail size={14} />
                hello@karsa.care
              </a>
              <span className="flex items-center gap-2.5 text-sm text-white/70">
                <MapPin size={14} />
                Barrie &amp; Toronto, ON
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {linkGroups.map((group) => (
              <div key={group.heading}>
                <p className="text-xs font-bold uppercase tracking-wide text-karsa-lime/70">
                  {group.heading}
                </p>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/65 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 rounded-[28px] bg-white/5 p-6 ring-1 ring-white/10 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-lg font-bold">Get care tips in your inbox</p>
            <p className="mt-1 text-sm text-white/55">One short email a month. No spam.</p>
          </div>
          <form className="flex w-full max-w-sm items-center gap-2 rounded-full bg-white/5 p-1.5 pl-5 ring-1 ring-white/15 sm:w-auto">
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="grid size-9 shrink-0 place-items-center rounded-full bg-karsa-lime text-karsa-ink transition hover:bg-white"
            >
              <ArrowRight size={15} />
            </button>
          </form>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} Karsa Health, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="transition hover:text-white/70">
              Privacy policy
            </Link>
            <Link href="#" className="transition hover:text-white/70">
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
