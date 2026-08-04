type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  const isLight = variant === "light";
  const dot = isLight ? "#ffffff" : "#2563eb";

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span
        className={`grid size-9 shrink-0 place-items-center rounded-full ${
          isLight ? "bg-white/15" : "bg-blue-50"
        }`}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <circle cx="12" cy="6.5" r="2.4" fill={dot} />
          <circle cx="17.5" cy="12" r="2.4" fill={dot} />
          <circle cx="12" cy="17.5" r="2.4" fill={dot} />
          <circle cx="6.5" cy="12" r="2.4" fill={dot} />
        </svg>
      </span>
      <span
        className={`font-serif text-xl italic tracking-tight ${
          isLight ? "text-white" : "text-slate-950"
        }`}
      >
        Karsa
      </span>
    </span>
  );
}