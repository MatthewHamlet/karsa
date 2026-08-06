"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroVideo() {
  return (
    <section className="relative isolate flex min-h-screen items-end overflow-hidden bg-slate-950">
      <Image
        src="/grandma.jpeg"
        fill
        priority
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Overlay tipis, cuma buat legibility teks di bawah */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

      <div className="relative px-6 sm:px-4 md:px-6 lg:px-0 mx-auto w-full max-w-7xl pb-16 pt-40 lg:pb-20 lg:pt-56">
        <Link
          href="#locations"
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-900 backdrop-blur-sm transition hover:bg-white"
        >
          <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            New
          </span>
          Now accepting patients in Barrie
          <ArrowRight size={12} />
        </Link>

        <h1 className="max-w-xl font-serif text-4xl font-medium leading-[1.1] tracking-tight text-white sm:max-w-2xl sm:text-5xl lg:max-w-3xl lg:text-6xl">
          A <em className="italic">new</em> kind of family health clinic is here.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-white/90">
          A private clinic built for personalized and preventative health. Fees are{" "}
          <span className="font-semibold text-white">HSA eligible</span>.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
          >
            Join now
          </Link>

          <Link
            href="#learn-more"
            className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}