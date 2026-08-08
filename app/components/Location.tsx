"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/*
  Referensi punya baris kartu kategori yang bisa digeser horizontal, tiap kartu
  berisi foto ber-mask blob di atas tile warna. Pola itu dipakai buat daftar kota.
*/
const locations = [
  {
    city: "Barrie, ON",
    status: "Now open",
    tone: "bg-karsa-butter",
    photo: "/grandma.jpeg",
    photoPosition: "68% 22%",
  },
  {
    city: "Toronto, ON",
    status: "Now open",
    tone: "bg-karsa-mint",
    photo: "/peeps-talking.png",
    photoPosition: "30% 28%",
  },
  {
    city: "Hamilton, ON",
    status: "Spring 2026",
    tone: "bg-karsa-limesoft",
    photo: "/grandma.jpeg",
    photoPosition: "25% 38%",
  },
  {
    city: "Ottawa, ON",
    status: "Spring 2026",
    tone: "bg-karsa-butter",
    photo: "/peeps-talking.png",
    photoPosition: "72% 26%",
  },
  {
    city: "London, ON",
    status: "Waitlist",
    tone: "bg-karsa-mint",
    photo: "/grandma.jpeg",
    photoPosition: "50% 30%",
  },
];

export default function Locations() {
  return (
    <section
      id="locations"
      className="relative overflow-hidden bg-karsa-haze py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-sm font-semibold text-karsa-ink/40">Locations</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.1] tracking-tight text-karsa-green sm:text-4xl lg:text-[2.75rem]">
              Wherever we&apos;re not yet, we&apos;re on our way.
            </h2>
          </div>

          <Link
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-karsa-deep px-5 py-3 text-sm font-bold text-white transition hover:bg-karsa-ink"
          >
            Request your city
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Rail horizontal — scroll-snap, tanpa scrollbar, fade di kedua ujung */}
      <div className="karsa-no-scrollbar karsa-edge-fade mt-12 overflow-x-auto pb-2">
        <div className="flex w-max gap-4 px-6 sm:px-8">
          {locations.map((location, index) => (
            <motion.article
              key={location.city}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.06 }}
              className={`group flex w-[240px] shrink-0 snap-start flex-col items-center rounded-[26px] p-6 sm:w-[260px] ${location.tone}`}
            >
              <div
                className={`relative size-36 overflow-hidden bg-white/50 transition-transform duration-500 group-hover:scale-105 ${
                  index % 2 === 0 ? "karsa-blob" : "karsa-blob-alt"
                }`}
              >
                <Image
                  src={location.photo}
                  alt=""
                  fill
                  sizes="144px"
                  className="object-cover"
                  style={{ objectPosition: location.photoPosition }}
                />
              </div>

              <p className="mt-6 text-base font-bold text-karsa-deep">{location.city}</p>

              <span
                className={`mt-2 rounded-full px-3 py-1 text-[11px] font-bold ${
                  location.status === "Now open"
                    ? "bg-karsa-deep text-white"
                    : "bg-white/70 text-karsa-ink/55"
                }`}
              >
                {location.status}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
