"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Logo from "../components/Logo";

export default function HeroVideo() {
  return (
    <section className="relative isolate flex min-h-screen items-end overflow-hidden bg-slate-950">
      <Image
        src="/grandma.jpeg"
        width="1920"
        height="1080"
        alt=""
        priority
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-linear-to-t from-slate-950 via-slate-950/60 to-slate-950/10" />
      <div className="absolute inset-0 -z-10 bg-slate-950/15" />

      <div className="relative px-6 sm:px-4 md:px-6 lg:px-0 mx-auto w-full max-w-7xl pb-16 pt-40 lg:pb-20 lg:pt-56">
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          <span className="rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-950">
            Baru
          </span>
          Platform Karsa kini tersedia
          <ArrowRight size={13} />
        </Link>

        <h1 className="mt-6 max-w-xl font-serif text-4xl font-medium leading-[1.1] tracking-tight text-white sm:max-w-2xl sm:text-5xl lg:max-w-3xl lg:text-6xl">
          Karsa untuk <em className="italic text-amber-300">kehidupan</em>{" "}
          yang lebih baik.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
          Menghubungkan keluarga dalam satu platform terintegrasi.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
          >
            Get Free Demo
          </Link>

          <Link
            href="#modules"
            className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}