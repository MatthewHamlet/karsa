"use client";

import { navServiceGroups } from "@/lib/nav-services-data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type ServicesMegaMenuProps = {
  onNavigate?: () => void;
};

export default function ServicesMegaMenu({ onNavigate }: ServicesMegaMenuProps) {
  const [activeKey, setActiveKey] = useState(navServiceGroups[0].key);
  const activeGroup =
    navServiceGroups.find((group) => group.key === activeKey) ?? navServiceGroups[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-1/2 top-full mt-3 flex w-160 max-w-[92vw] -translate-x-1/2 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-slate-950/10"
    >
      <div className="flex w-52 shrink-0 flex-col justify-between border-r border-slate-100 bg-slate-50/60 p-3">
        <div className="space-y-1">
          {navServiceGroups.map((group) => {
            const isActive = group.key === activeKey;
            return (
              <button
                key={group.key}
                type="button"
                onMouseEnter={() => setActiveKey(group.key)}
                onClick={() => setActiveKey(group.key)}
                className={`w-full whitespace-nowrap rounded-xl px-3.5 py-3 text-left text-sm font-semibold transition ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-white hover:text-slate-900"
                }`}
              >
                {group.tabLabel}
              </button>
            );
          })}
        </div>

        <Link
          href="/#modules"
          onClick={onNavigate}
          className="mt-2 flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3.5 py-3 text-sm font-bold text-blue-600 transition hover:text-blue-700"
        >
          Lihat Semua Layanan <ArrowRight size={14} />
        </Link>
      </div>

      <div className="flex-1 p-6">
        <p className="text-base font-bold text-slate-950">{activeGroup.heading}</p>
        <p className="mt-1 text-sm text-slate-500">{activeGroup.description}</p>

        <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">
          {activeGroup.items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href + item.label}
                href={item.href}
                onClick={onNavigate}
                className="group flex items-center gap-3 rounded-xl p-1.5 transition hover:bg-blue-50/60"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={17} />
                </span>
                <span className="text-sm font-semibold leading-snug text-slate-800 group-hover:text-blue-700">
                  {item.label}
                  {item.badge && (
                    <sup className="ml-1 text-[10px] font-bold uppercase text-blue-500">
                      {item.badge}
                    </sup>
                  )}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}