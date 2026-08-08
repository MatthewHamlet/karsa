"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "My mom's cardiologist and her physiotherapist are finally looking at the same notes. It sounds small until you've lived without it.",
    name: "Nadia R.",
    role: "Member since 2023",
    tone: "bg-karsa-limesoft",
  },
  {
    quote:
      "We had a same-day video visit for my son's fever at 9pm. No urgent care line, no repeating his history to a stranger.",
    name: "Devon P.",
    role: "Family plan",
    tone: "bg-karsa-mint",
  },
  {
    quote:
      "The in-home visits after my surgery meant I didn't have to arrange a ride while I could barely walk. That mattered more than I expected.",
    name: "Halim S.",
    role: "Concierge member",
    tone: "bg-karsa-cream",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white px-3 py-20 sm:px-4 lg:py-28"
    >
      {/* Watermark raksasa di belakang grid */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-8 top-1/2 hidden -translate-y-1/2 select-none text-[16rem] font-extrabold leading-none tracking-tighter text-karsa-ink/[0.04] lg:block xl:text-[20rem]"
      >
        family
      </span>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-karsa-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-karsa-deep">
            Member stories
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight text-karsa-green sm:text-4xl lg:text-[2.75rem]">
            Told by the families who live it.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
              className={`flex flex-col rounded-[28px] p-7 sm:p-8 ${item.tone}`}
            >
              <span className="grid size-10 place-items-center rounded-full bg-white text-karsa-deep">
                <Quote size={16} />
              </span>

              <blockquote className="mt-6 flex-1 text-[15px] leading-7 text-karsa-ink/80">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-karsa-deep text-xs font-bold text-white">
                  {item.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
                <div>
                  <p className="text-sm font-bold text-karsa-deep">{item.name}</p>
                  <p className="text-xs text-karsa-ink/50">{item.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
