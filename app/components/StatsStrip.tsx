import Image from "next/image";

const stats = [
  { value: "4 min", label: "Avg. message reply time" },
  { value: "98%", label: "Members who renew" },
  { value: "24/7", label: "Access to your care team" },
];

// Foto bulat kecil yang disebar di sekeliling angka besar — pola dari referensi
const floatingPhotos = [
  {
    src: "/grandma.jpeg",
    position: "70% 25%",
    className: "left-[6%] top-[18%] size-16 sm:size-20",
  },
  {
    src: "/peeps-talking.png",
    position: "30% 30%",
    className: "right-[9%] top-[12%] size-14 sm:size-[4.5rem]",
  },
  {
    src: "/grandma.jpeg",
    position: "25% 40%",
    className: "left-[16%] bottom-[12%] size-12 sm:size-16",
  },
  {
    src: "/peeps-talking.png",
    position: "72% 26%",
    className: "right-[14%] bottom-[16%] size-16 sm:size-20",
  },
];

export default function StatsStrip() {
  return (
    <section className="relative bg-white px-3 py-14 sm:px-4 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* PANEL ANGKA BESAR */}
        <div className="relative overflow-hidden rounded-[28px] bg-karsa-limesoft px-6 py-16 sm:rounded-[36px] sm:py-20">
          {floatingPhotos.map((photo, index) => (
            <span
              key={index}
              aria-hidden
              className={`absolute hidden overflow-hidden rounded-full ring-4 ring-white/70 sm:block ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
                style={{ objectPosition: photo.position }}
              />
            </span>
          ))}

          <div className="relative mx-auto max-w-lg text-center">
            <p className="text-5xl font-extrabold tracking-tight text-karsa-deep sm:text-6xl lg:text-7xl">
              12k+
            </p>
            <p className="mt-4 text-base font-semibold leading-7 text-karsa-deep/80 sm:text-lg">
              Families cared for across every generation,
              <br className="hidden sm:block" /> from in-home visits to telehealth.
            </p>
          </div>
        </div>

        {/* TIGA ANGKA PENDUKUNG */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[24px] border border-karsa-mint bg-karsa-mint/50 px-6 py-7"
            >
              <p className="text-3xl font-extrabold tracking-tight text-karsa-deep sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-karsa-ink/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
