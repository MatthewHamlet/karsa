"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, Leaf, Stethoscope } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import Blob from "../components/Blob";

export default function HeroVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  /*
    PARALLAX
    scrollYProgress: 0 = hero pas nempel atas viewport, 1 = hero udah kelewat ke atas.
    Tiap layer dikasih kecepatan beda supaya kerasa ada kedalaman:
      - foto  : gerak paling lambat (turun relatif ke container) + zoom pelan
      - konten: gerak paling cepat ke atas + fade
      - blob  : di antaranya, arah berlawanan
  */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    mass: 0.4,
  });

  const photoY = useTransform(smooth, [0, 1], ["0%", "26%"]);
  const photoScale = useTransform(smooth, [0, 1], [1.06, 1.24]);

  const contentY = useTransform(smooth, [0, 1], [0, -110]);
  const contentOpacity = useTransform(smooth, [0, 0.65], [1, 0]);

  const blobOneY = useTransform(smooth, [0, 1], [0, -190]);
  const blobTwoY = useTransform(smooth, [0, 1], [0, 150]);
  const badgeY = useTransform(smooth, [0, 1], [0, -60]);

  /* Kalau user minta reduced motion, semua layer dibekukan (style-nya di-drop) */
  const layer = <T,>(value: MotionValue<T>) => (reduceMotion ? undefined : value);

  return (
    <section ref={sectionRef} className="relative bg-karsa-ink">
      {/* Fullscreen: edge-to-edge, tanpa padding & tanpa sudut membulat */}
      <div className="relative isolate h-dvh min-h-[560px] overflow-hidden bg-karsa-ink">
        {/* LAYER 1 — foto, paling lambat */}
        <motion.div
          style={{ y: layer(photoY), scale: layer(photoScale) }}
          className="absolute inset-0 -z-20 will-change-transform"
        >
          <Image
            src="/grandma.jpeg"
            alt="A Karsa nurse sitting with a family member at home"
            fill
            preload
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/*
          LAYER 2 — scrim netral (bukan kabut hijau lagi), cuma nempel di tepi:
          atas buat navbar, bawah buat headline. Tengah foto dibiarkan bersih.
          Fotonya terang banget, jadi tanpa ini teks putih ilang.
        */}
        <div className="absolute inset-x-0 top-0 -z-10 h-44 bg-gradient-to-b from-black/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* LAYER 3 — ornamen blob, gerak berlawanan arah */}
        <motion.div
          style={{ y: layer(blobOneY) }}
          className="pointer-events-none absolute -right-10 top-24 -z-[5] hidden lg:block"
        >
          <Blob
            icon={Leaf}
            fill="bg-karsa-lime/85"
            iconClassName="text-karsa-deep"
            iconSize={34}
            className="size-40 backdrop-blur-sm"
          />
        </motion.div>

        <motion.div
          style={{ y: layer(blobTwoY) }}
          className="pointer-events-none absolute -left-12 bottom-1/3 -z-[5] hidden lg:block"
        >
          <Blob
            icon={Stethoscope}
            variant="b"
            fill="bg-white/20"
            iconClassName="text-white"
            iconSize={30}
            className="size-32 backdrop-blur-md"
          />
        </motion.div>

        {/* LAYER 4 — badge kanan atas */}
        <motion.div
          style={{ y: layer(badgeY) }}
          className="absolute right-5 top-28 z-10 hidden sm:block lg:right-10 lg:top-32"
        >
          {/* Pill putih solid — foto di area ini terang, jadi frosted putih nggak kebaca */}
          <div className="flex items-center gap-2.5 rounded-full bg-white/95 px-4 py-2.5 text-karsa-ink shadow-lg shadow-karsa-ink/10 backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-karsa-green opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-karsa-green" />
            </span>
            <span className="text-xs font-semibold">Care team online 24/7</span>
          </div>
        </motion.div>

        {/* LAYER 5 — konten, paling cepat */}
        <motion.div
          style={{ y: layer(contentY), opacity: layer(contentOpacity) }}
          className="relative z-10 flex h-full items-end"
        >
          <div className="mx-auto w-full max-w-7xl px-6 pb-16 sm:px-8 lg:pb-20">
            <Link
              href="#locations"
              className="mb-7 inline-flex w-fit items-center gap-2 rounded-full bg-white/90 py-1.5 pl-1.5 pr-4 text-xs font-semibold text-karsa-ink backdrop-blur-sm transition hover:bg-white"
            >
              <span className="rounded-full bg-karsa-lime px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-karsa-ink">
                New
              </span>
              Now accepting patients in Barrie
              <ArrowRight size={12} />
            </Link>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:max-w-4xl lg:text-[4.25rem]">
              <span className="text-karsa-lime">Karsa</span> untuk kehidupan
              <br className="hidden sm:block" /> yang lebih baik
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-white/85 sm:text-lg">
              Menghubungkan keluarga dalam satu platform terintegrasi.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#membership"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-karsa-ink transition hover:bg-karsa-lime"
              >
                Join now
                <ArrowRight size={15} />
              </Link>

              <Link
                href="#mission"
                className="inline-flex items-center justify-center rounded-full border border-white/45 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Learn more
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Tombol scroll bulat kanan bawah — persis pola di referensi */}
        <Link
          href="#values"
          aria-label="Scroll to next section"
          className="absolute bottom-8 right-6 z-20 grid size-12 place-items-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-md transition hover:bg-white hover:text-karsa-ink lg:right-10"
        >
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={17} />
          </motion.span>
        </Link>
      </div>
    </section>
  );
}
