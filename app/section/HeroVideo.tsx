"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroVideo() {
  return (
    <section className="relative isolate flex min-h-screen items-end overflow-hidden bg-slate-950">
      <Image
        src="/grandma.jpeg"
        width="1920"
        height="1080"
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-linear-to-t from-slate-950 via-slate-950/50 to-slate-950/20" />
      <div className="absolute inset-0 -z-10 bg-slate-950/25" />

      <div className="relative px-6 sm:px-4 md:px-6 lg:px-0 mx-auto w-full max-w-7xl pb-8 pt-40 lg:pb-10 lg:pt-56">
        <h1 className="max-w-lg text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:max-w-xl sm:text-4xl lg:max-w-2xl lg:text-5xl">
          Karsa untuk <br></br>
          <span className="text-amber-400">Kehidupan yang Lebih Baik</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
          Menghubungkan keluarga dalam satu platform terintegrasi.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6 sm:gap-8">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 text-base font-bold text-white"
          >
            Get Free Demo
            <span className="grid size-9 place-items-center rounded-full border border-white/30 transition group-hover:bg-white group-hover:text-slate-950">
              <ArrowRight size={16} />
            </span>
          </Link>

          <span className="hidden h-6 w-px bg-white/25 sm:block" />

          <Link
            href="#modules"
            className="group inline-flex items-center gap-3 text-base font-bold text-white"
          >
            Learn More
            <span className="grid size-9 place-items-center rounded-full border border-white/30 transition group-hover:bg-white group-hover:text-slate-950">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
