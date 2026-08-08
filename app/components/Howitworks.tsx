"use client";

import { motion } from "framer-motion";
import { CalendarCheck, ClipboardList, HeartHandshake, PhoneCall } from "lucide-react";

/*
  Pola referensi: baris pill melebar bertingkat, angka raksasa semi-transparan
  nempel di kanan tiap baris, dihubungkan garis putus-putus melengkung.
*/
const steps = [
  {
    title: "Tell us what's going on",
    description: "A 10-minute call with a care advisor, not a form.",
    icon: PhoneCall,
    tone: "bg-karsa-limesoft",
    width: "lg:w-[76%]",
  },
  {
    title: "Meet your care team",
    description: "A physician, nurse, and coordinator assigned to your family.",
    icon: HeartHandshake,
    tone: "bg-karsa-butter",
    width: "lg:w-[84%] lg:ml-[8%]",
  },
  {
    title: "Get your care plan",
    description: "Built around your history, medications, and goals.",
    icon: ClipboardList,
    tone: "bg-karsa-mint",
    width: "lg:w-[84%] lg:ml-[16%]",
  },
  {
    title: "Book your first visit",
    description: "In-home, in-clinic, or by video — same week.",
    icon: CalendarCheck,
    tone: "bg-karsa-deep",
    width: "lg:w-[76%] lg:ml-[24%]",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-karsa-haze px-3 py-20 sm:px-4 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl">
          <span className="text-sm font-semibold text-karsa-ink/40">How it works</span>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.1] tracking-tight text-karsa-green sm:text-4xl lg:text-[2.75rem]">
            We keep things simple
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-karsa-ink/60">
            From first call to first visit, in under a week.
          </p>
        </div>

        <div className="relative mt-14 space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isDark = step.tone === "bg-karsa-deep";

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                className={`relative flex items-center gap-5 overflow-hidden rounded-[26px] px-6 py-7 sm:px-9 sm:py-8 ${step.tone} ${step.width}`}
              >
                {/* Angka raksasa */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none text-6xl font-extrabold leading-none tracking-tighter sm:right-8 sm:text-8xl ${
                    isDark ? "text-white/10" : "text-white/70"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={`relative grid size-12 shrink-0 place-items-center rounded-full ${
                    isDark ? "bg-white/15 text-karsa-lime" : "bg-white text-karsa-deep"
                  }`}
                >
                  <Icon size={19} strokeWidth={1.8} />
                </span>

                <div className="relative">
                  <h3
                    className={`text-lg font-bold ${
                      isDark ? "text-white" : "text-karsa-deep"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-1 max-w-xs text-sm leading-6 sm:max-w-sm ${
                      isDark ? "text-white/65" : "text-karsa-ink/60"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
