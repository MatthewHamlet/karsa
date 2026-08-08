"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Baby,
  CalendarClock,
  HeartPulse,
  Home,
  Stethoscope,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/*
  Bento ala referensi: campuran tile warna solid, tile pucat, dan tile foto
  yang teksnya ditumpuk di atas gradient. Tiap tile punya "tone" sendiri.
*/
type Tone = "deep" | "mint" | "lime" | "butter" | "photo";

type ServiceCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: Tone;
  span: string;
  photo?: string;
  photoPosition?: string;
};

const services: ServiceCard[] = [
  {
    title: "In-home visits",
    description:
      "A clinician comes to you for check-ups, wound care, and recovery support — no waiting room required.",
    icon: Home,
    tone: "deep",
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Chronic care management",
    description: "Ongoing monitoring for diabetes, hypertension, and heart conditions.",
    icon: HeartPulse,
    tone: "photo",
    span: "lg:row-span-2",
    photo: "/grandma.jpeg",
    photoPosition: "70% 25%",
  },
  {
    title: "Telehealth visits",
    description: "Same-day video appointments from wherever you are.",
    icon: Video,
    tone: "mint",
    span: "",
  },
  {
    title: "Preventative screenings",
    description: "Annual physicals, labs, and early-detection panels, scheduled for you.",
    icon: Stethoscope,
    tone: "butter",
    span: "",
  },
  {
    title: "Pediatric care",
    description: "Growth checks, vaccinations, and on-call guidance for parents.",
    icon: Baby,
    tone: "photo",
    span: "",
    photo: "/peeps-talking.png",
    photoPosition: "35% 25%",
  },
  {
    title: "Care coordination",
    description:
      "One team tracks referrals, specialists, and follow-ups across your family.",
    icon: CalendarClock,
    tone: "lime",
    span: "sm:col-span-2 lg:col-span-2",
  },
];

const toneStyles: Record<Tone, { card: string; icon: string; title: string; body: string }> = {
  deep: {
    card: "bg-karsa-deep",
    icon: "bg-white/15 text-karsa-lime",
    title: "text-white",
    body: "text-white/70",
  },
  mint: {
    card: "bg-karsa-mint",
    icon: "bg-white text-karsa-deep",
    title: "text-karsa-deep",
    body: "text-karsa-ink/60",
  },
  lime: {
    card: "bg-karsa-limesoft",
    icon: "bg-white text-karsa-deep",
    title: "text-karsa-deep",
    body: "text-karsa-ink/65",
  },
  butter: {
    card: "bg-karsa-butter",
    icon: "bg-white text-karsa-deep",
    title: "text-karsa-deep",
    body: "text-karsa-ink/65",
  },
  photo: {
    card: "bg-karsa-ink",
    icon: "bg-white/20 text-white backdrop-blur-sm",
    title: "text-white",
    body: "text-white/80",
  },
};

export default function Services() {
  return (
    <section id="services" className="relative bg-white px-3 py-20 sm:px-4 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-karsa-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-karsa-deep">
            What we offer
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight text-karsa-green sm:text-4xl lg:text-[2.75rem]">
            One membership. Every kind of care your family needs.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-karsa-ink/60">
            From routine check-ups to complex coordination, one team handles all of
            it — for every generation under your roof.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const tone = toneStyles[service.tone];
            const isPhoto = service.tone === "photo";

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[26px] p-6 sm:p-7 ${tone.card} ${service.span}`}
              >
                {isPhoto && service.photo && (
                  <>
                    <Image
                      src={service.photo}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: service.photoPosition }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-karsa-ink/90 via-karsa-ink/35 to-karsa-ink/10" />
                  </>
                )}

                <span
                  className={`relative grid size-11 shrink-0 place-items-center rounded-full ${tone.icon}`}
                >
                  <Icon size={19} strokeWidth={1.8} />
                </span>

                <div className="relative mt-10">
                  <h3 className={`text-lg font-bold ${tone.title}`}>{service.title}</h3>
                  <p className={`mt-2 max-w-sm text-sm leading-6 ${tone.body}`}>
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
