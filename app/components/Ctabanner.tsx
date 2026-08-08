import Link from "next/link";
import { ArrowRight, HeartHandshake, MessageSquareHeart, Sparkles } from "lucide-react";
import Blob from "./Blob";

export default function CtaBanner() {
  return (
    <section id="contact" className="relative bg-white px-3 pb-8 sm:px-4">
      {/* Panel hijau pekat dengan blob avocado — persis blok penutup di referensi */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-karsa-deep px-6 py-20 sm:rounded-[36px] sm:px-8 lg:py-28">
        <Blob
          icon={MessageSquareHeart}
          fill="bg-karsa-lime/20"
          iconClassName="text-karsa-lime"
          iconSize={40}
          className="pointer-events-none absolute -left-6 top-10 size-44 lg:left-12 lg:size-52"
        />
        <Blob
          icon={HeartHandshake}
          variant="b"
          fill="bg-karsa-lime/15"
          iconClassName="text-karsa-lime"
          iconSize={36}
          className="pointer-events-none absolute -right-8 bottom-8 size-40 lg:right-16 lg:size-48"
        />
        <Blob
          icon={Sparkles}
          fill="bg-karsa-lime/10"
          iconClassName="text-karsa-lime/80"
          iconSize={22}
          className="pointer-events-none absolute right-1/4 top-6 hidden size-24 lg:grid"
        />

        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Want to be part of our story?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-white/70">
            Join Karsa today and get matched with your care team within 48 hours.
            Fees are HSA eligible.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#membership"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-karsa-lime px-7 py-3.5 text-sm font-bold text-karsa-ink transition hover:bg-white"
            >
              Book a free consultation
              <ArrowRight size={15} />
            </Link>
            <Link
              href="#faq"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
