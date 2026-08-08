"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Essential",
    price: "$89",
    cadence: "/ member / month",
    description: "For individuals who want a real relationship with their doctor.",
    features: [
      "Same-week appointments",
      "Unlimited secure messaging",
      "Annual physical & labs",
    ],
    featured: false,
    tone: "bg-karsa-mint",
  },
  {
    name: "Family",
    price: "$149",
    cadence: "/ member / month",
    description: "Our most-chosen plan — one team across every generation.",
    features: [
      "Everything in Essential",
      "In-home visits included",
      "Pediatric & chronic care management",
      "Priority telehealth, 24/7",
    ],
    featured: true,
    tone: "bg-karsa-deep",
  },
  {
    name: "Concierge",
    price: "$249",
    cadence: "/ member / month",
    description: "For complex needs that call for closer, hands-on coordination.",
    features: [
      "Everything in Family",
      "Dedicated care coordinator",
      "Specialist referral management",
    ],
    featured: false,
    tone: "bg-karsa-butter",
  },
];

export default function Membership() {
  return (
    <section id="membership" className="relative bg-white px-3 py-20 sm:px-4 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-karsa-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-karsa-deep">
            Membership
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight text-karsa-green sm:text-4xl lg:text-[2.75rem]">
            Simple pricing, no surprise bills.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-karsa-ink/60">
            Fees are HSA / FSA eligible. Pause or cancel anytime — no long-term
            contract.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
              className={`flex flex-col rounded-[28px] p-8 ${plan.tone} ${
                plan.featured ? "lg:-my-4 lg:py-12" : ""
              }`}
            >
              {plan.featured && (
                <span className="mb-5 inline-flex w-fit items-center rounded-full bg-karsa-lime px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-karsa-ink">
                  Most chosen
                </span>
              )}

              <p
                className={`text-xl font-bold ${
                  plan.featured ? "text-white" : "text-karsa-deep"
                }`}
              >
                {plan.name}
              </p>
              <p
                className={`mt-2 text-sm leading-6 ${
                  plan.featured ? "text-white/65" : "text-karsa-ink/60"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-7 flex items-baseline gap-1.5">
                <span
                  className={`text-4xl font-extrabold tracking-tight ${
                    plan.featured ? "text-white" : "text-karsa-deep"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-xs ${
                    plan.featured ? "text-white/55" : "text-karsa-ink/45"
                  }`}
                >
                  {plan.cadence}
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
                        plan.featured
                          ? "bg-karsa-lime text-karsa-ink"
                          : "bg-white text-karsa-deep"
                      }`}
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span
                      className={`text-sm ${
                        plan.featured ? "text-white/85" : "text-karsa-ink/75"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`mt-9 inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-bold transition ${
                  plan.featured
                    ? "bg-karsa-lime text-karsa-ink hover:bg-white"
                    : "bg-karsa-deep text-white hover:bg-karsa-ink"
                }`}
              >
                Choose {plan.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
