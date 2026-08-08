import type { LucideIcon } from "lucide-react";

type BlobProps = {
  icon?: LucideIcon;
  className?: string;
  /** warna isi blob (class tailwind, mis. "bg-karsa-lime") */
  fill?: string;
  /** warna ikon di tengah blob */
  iconClassName?: string;
  iconSize?: number;
  variant?: "a" | "b";
};

/**
 * Ornamen blob organik ala avocado dari referensi desain:
 * bentuk asimetris dengan ikon garis tipis di tengahnya.
 */
export default function Blob({
  icon: Icon,
  className = "",
  fill = "bg-karsa-limesoft",
  iconClassName = "text-karsa-deep",
  iconSize = 22,
  variant = "a",
}: BlobProps) {
  return (
    <span
      aria-hidden
      className={`grid place-items-center ${
        variant === "a" ? "karsa-blob" : "karsa-blob-alt"
      } ${fill} ${className}`}
    >
      {Icon ? <Icon size={iconSize} strokeWidth={1.6} className={iconClassName} /> : null}
    </span>
  );
}
