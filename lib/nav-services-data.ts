import {
  BadgeDollarSign,
  ChartNoAxesCombined,
  ClipboardCheck,
  FileBarChart2,
  Landmark,
  LucideIcon,
  MapPinned,
  ShieldCheck,
  Wallet,
} from "lucide-react";

export type NavServiceItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
};

export type NavServiceGroup = {
  key: string;
  tabLabel: string;
  heading: string;
  description: string;
  items: NavServiceItem[];
};

export const navServiceGroups: NavServiceGroup[] = [
  {
    key: "services",
    tabLabel: "Layanan Kami",
    heading: "Layanan Kami",
    description: "Solusi lengkap untuk operasional multifinance Anda.",
    items: [
      { label: "Fiscus Multifinance System", href: "/services/fiscus-multifinance-system", icon: Landmark },
      { label: "Fiscus Collection", href: "/services/fiscus-collection", icon: Wallet },
      { label: "Fiscus Survey", href: "/services/fiscus-survey", icon: MapPinned },
      { label: "SLIK Reporting", href: "/services/slik-reporting", icon: ShieldCheck },
      { label: "SILARAS Reporting", href: "/services/silaras-reporting", icon: FileBarChart2 },
    ],
  },
  {
    key: "modules",
    tabLabel: "Modul Platform",
    heading: "Modul Platform",
    description: "Komponen inti yang menyatukan operasional bisnis Anda.",
    items: [
      { label: "Financing Operations", href: "/#modules", icon: Landmark },
      { label: "Collections Workspace", href: "/#modules", icon: ClipboardCheck },
      { label: "Accounting & Reconciliation", href: "/#modules", icon: BadgeDollarSign },
      { label: "Management Reporting", href: "/#modules", icon: ChartNoAxesCombined },
    ],
  },
];