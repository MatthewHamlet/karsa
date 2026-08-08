import Image from "next/image";
import { ArrowDown, Heart, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import Blob from "./Blob";

/*
  Tiga baris kata berjalan dengan arah selang-seling — elemen paling khas di referensi.
  Chip bulat di antara kata: campuran potongan foto & blob ikon biar ritmenya nggak monoton.
*/
const rows = [
  {
    words: ["Personalized", "Accessible", "Innovative", "Trustworthy"],
    duration: "44s",
    direction: "normal",
  },
  {
    words: ["Convenient", "Reliable", "Efficient", "Caring", "Human"],
    duration: "52s",
    direction: "reverse",
  },
  {
    words: ["Cutting-Edge", "Compassionate", "Flexible", "Inclusive"],
    duration: "38s",
    direction: "normal",
  },
];

const chipIcons = [Heart, Leaf, ShieldCheck, Sparkles];

const photoCrops = [
  { src: "/grandma.jpeg", position: "68% 22%" },
  { src: "/peeps-talking.png", position: "28% 30%" },
  { src: "/grandma.jpeg", position: "22% 35%" },
  { src: "/peeps-talking.png", position: "72% 28%" },
];

function Chip({ index }: { index: number }) {
  // Selang-seling: index genap = foto bulat, ganjil = blob ikon
  if (index % 2 === 0) {
    const crop = photoCrops[(index / 2) % photoCrops.length];
    return (
      <span className="relative size-11 shrink-0 overflow-hidden rounded-full bg-karsa-limesoft ring-2 ring-white sm:size-12">
        <Image
          src={crop.src}
          alt=""
          fill
          sizes="48px"
          className="object-cover"
          style={{ objectPosition: crop.position }}
        />
      </span>
    );
  }

  const Icon = chipIcons[Math.floor(index / 2) % chipIcons.length];
  return (
    <Blob
      icon={Icon}
      variant={index % 4 === 1 ? "a" : "b"}
      fill="bg-karsa-lime"
      iconSize={18}
      className="size-11 shrink-0 sm:size-12"
    />
  );
}

function MarqueeRow({
  words,
  duration,
  direction,
}: {
  words: string[];
  duration: string;
  direction: string;
}) {
  // Track digandakan 2x supaya loop -50% nyambung mulus
  const sequence = [...words, ...words];

  return (
    <div className="karsa-marquee karsa-edge-fade overflow-hidden">
      <div
        className="karsa-marquee-track items-center"
        style={
          {
            "--karsa-marquee-duration": duration,
            "--karsa-marquee-direction": direction,
          } as React.CSSProperties
        }
      >
        {/*
          Jarak antar item pakai padding-right, BUKAN gap di track.
          Kalau pakai gap, translateX(-50%) meleset setengah gap dan loop-nya keliatan lompat.
        */}
        {sequence.map((word, index) => (
          <div
            key={`${word}-${index}`}
            className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8"
          >
            <span className="whitespace-nowrap text-3xl font-extrabold tracking-tight text-karsa-deep sm:text-4xl lg:text-5xl">
              {word}
            </span>
            <Chip index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ValuesMarquee() {
  return (
    <section
      id="values"
      className="relative overflow-hidden bg-karsa-mint py-16 lg:py-20"
    >
      <p className="mx-auto max-w-md px-6 text-center text-sm leading-6 text-karsa-deep/70 sm:text-base">
        We provide personalized care that keeps your family healthy —
        anytime, anywhere.
      </p>

      <div className="mt-12 flex flex-col gap-5 sm:gap-6">
        {rows.map((row) => (
          <MarqueeRow key={row.words[0]} {...row} />
        ))}
      </div>

      <div className="mt-12 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-karsa-deep/60">
        Scroll to explore
        <ArrowDown size={13} />
      </div>
    </section>
  );
}
