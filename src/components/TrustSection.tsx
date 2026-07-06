import React from "react";
import { motion } from "motion/react";
import { Leaf, Award, Heart } from "lucide-react";
import { translations } from "../data/translations";
import { staggerItem } from "../lib/motion";
import SectionShell from "./ui/SectionShell";
import StaggeredList from "./motion/StaggeredList";
import OrganicShape from "./decorative/OrganicShape";

interface TrustSectionProps {
  lang: "ru" | "ro" | "en";
}

export default function TrustSection({ lang }: TrustSectionProps) {
  const t = translations[lang].trust;
  const stats = [
    { icon: Leaf, number: t.stat1Number, label: t.stat1Label },
    { icon: Award, number: t.stat2Number, label: t.stat2Label },
    { icon: Heart, number: t.stat3Number, label: t.stat3Label }
  ];

  return (
    <SectionShell id="trust" tone="mint" eyebrow="Conservation mission" title={t.title} description={t.subtitle} className="relative overflow-hidden">
      <OrganicShape className="-right-24 bottom-8 h-72 w-72 bg-leaf/10" />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl space-y-5 text-base leading-8 text-moss text-pretty">
          <p>{t.desc1}</p>
          <p>{t.desc2}</p>
        </div>
        <StaggeredList className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div key={stat.label} variants={staggerItem} whileHover={{ y: -3 }} className="flex items-center gap-5 rounded-[30px] bg-cream/88 p-5 shadow-soft-card transition-[box-shadow] duration-200 hover:shadow-soft-card-hover">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-mint text-leaf">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <span className="block font-serif text-4xl font-semibold leading-none tracking-[-0.05em] text-canopy tabular-nums">{stat.number}</span>
                  <span className="mt-1 block text-sm leading-snug text-moss">{stat.label}</span>
                </div>
              </motion.div>
            );
          })}
        </StaggeredList>
      </div>
    </SectionShell>
  );
}
