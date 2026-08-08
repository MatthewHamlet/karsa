"use client";

import { motion } from "framer-motion";
import { Check, Mail, Phone } from "lucide-react";
import Image from "next/image";

const values = [
  "Every member gets a named, dedicated care team",
  "Same-day messaging with your physician, not a call center",
  "Plans built around your history, not a generic checklist",
];

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function Mission() {
  return (
    <section id="mission" className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Watermark raksasa di belakang konten — ciri khas layout referensi */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none text-[16rem] font-extrabold leading-none tracking-tighter text-karsa-ink/[0.04] lg:block xl:text-[20rem]"
      >
        care
      </span>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-md text-3xl font-extrabold leading-[1.1] tracking-tight text-karsa-green sm:text-4xl lg:text-[2.75rem]"
          >
            Bringing Healthcare Home: Our Journey
          </motion.h2>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            className="max-w-lg"
          >
            <span className="text-sm font-semibold text-karsa-ink/40">About us</span>

            <p className="mt-4 text-base leading-7 text-karsa-ink/75">
              Karsa was built for families juggling more than one set of appointments.
              One team follows every member of your household, so nothing gets lost
              between visits &mdash; and nobody has to repeat their story twice. Care
              that remembers who you are, not just what&apos;s on your chart.
            </p>

            <ul className="mt-8 space-y-3.5">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-karsa-lime text-karsa-deep">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-karsa-ink/80">{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Kartu kontak lime + foto — sepasang, persis blok bawah di referensi */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
          className="mt-14 grid gap-4 sm:grid-cols-[1.9fr_1fr] lg:mt-20"
        >
          <div className="flex flex-col justify-between rounded-[28px] bg-karsa-limesoft p-7 sm:p-9">
            <p className="max-w-sm text-lg font-bold leading-7 text-karsa-deep">
              Karsa brings compassionate, high-quality healthcare to your home.
            </p>

            <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-karsa-deep/45">
                  Contacts
                </p>
                <div className="mt-3 space-y-2">
                  <a
                    href="tel:+16282215817"
                    className="flex items-center gap-2 text-sm font-medium text-karsa-deep transition hover:text-karsa-ink"
                  >
                    <Phone size={14} />
                    +1 (628) 221-5817
                  </a>
                  <a
                    href="mailto:hello@karsa.care"
                    className="flex items-center gap-2 text-sm font-medium text-karsa-deep transition hover:text-karsa-ink"
                  >
                    <Mail size={14} />
                    hello@karsa.care
                  </a>
                </div>
              </div>

              {/* lucide-react v1 nggak punya icon brand lagi, jadi pakai chip huruf */}
              <div className="flex items-center gap-2">
                {[
                  { label: "Instagram", short: "ig" },
                  { label: "LinkedIn", short: "in" },
                ].map((social) => (
                  <a
                    key={social.short}
                    href="#"
                    aria-label={social.label}
                    className="grid size-10 place-items-center rounded-full bg-white/70 text-sm font-bold lowercase text-karsa-deep transition hover:bg-white"
                  >
                    {social.short}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[220px] overflow-hidden rounded-[28px] bg-karsa-mint">
            <Image
              src="/grandma.jpeg"
              alt="A Karsa clinician visiting a member at home"
              fill
              sizes="(max-width: 640px) 100vw, 320px"
              className="object-cover"
              style={{ objectPosition: "62% 30%" }}
            />
          </div>
        </motion.div>

        {/* Tag pill di bawah, ala referensi */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-sm font-bold text-karsa-green">
            Caring for You, Right at Home
          </span>
          {["#FamilyCare", "#CareAtHome"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-karsa-limesoft px-4 py-1.5 text-xs font-semibold text-karsa-deep/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
