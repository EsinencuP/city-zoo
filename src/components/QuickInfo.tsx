import React from "react";
import { motion } from "motion/react";
import { QrCode, Map, Clock3, Route, ArrowRight } from "lucide-react";
import { translations } from "../data/translations";
import { staggerItem } from "../lib/motion";
import SectionShell from "./ui/SectionShell";
import StaggeredList from "./motion/StaggeredList";
import LeafCorner from "./decorative/LeafCorner";

interface QuickInfoProps {
  lang: "ru" | "ro" | "en";
}

export default function QuickInfo({ lang }: QuickInfoProps) {
  const t = translations[lang].quickInfo;

  const infoCards = [
    { id: "tickets", icon: QrCode, title: t.card1Title, text: t.card1Text, accent: "bg-terracotta text-cream", featured: true },
    { id: "map", icon: Map, title: t.card2Title, text: t.card2Text, accent: "bg-leaf text-cream" },
    { id: "hours", icon: Clock3, title: t.card3Title, text: t.card3Text, accent: "bg-water text-canopy" },
    { id: "route", icon: Route, title: t.card4Title, text: t.card4Text, accent: "bg-mint text-canopy" }
  ];

  return (
    <SectionShell
      id="quick-info"
      tone="mint"
      eyebrow="Visit essentials"
      title={t.sectionTitle}
      description={lang === "ru" ? "Короткие действия для визита: билет, карта, часы и ориентиры без лишних экранов." : lang === "ro" ? "Acțiuni rapide pentru vizită: bilete, hartă, program și orientare." : "Fast visitor actions: tickets, map, hours and wayfinding without extra friction."}
      headerAlign="split"
      className="border-y border-canopy/5"
    >
      <LeafCorner className="right-2 top-10 h-32 w-32" mirrored />
      <StaggeredList className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {infoCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.article
              key={card.id}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className={[
                "group relative overflow-hidden rounded-[32px] p-5 shadow-soft-card transition-[box-shadow] duration-200 hover:shadow-soft-card-hover",
                card.featured ? "bg-canopy text-cream lg:-translate-y-4" : "bg-cream/86 text-canopy"
              ].join(" ")}
              id={`quick-info-card-${card.id}`}
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-current opacity-[0.04]" />
              <div className="relative z-10 flex min-h-[220px] flex-col justify-between gap-8">
                <div className="flex items-start justify-between gap-4">
                  <div className={["flex h-13 w-13 items-center justify-center rounded-[18px]", card.accent].join(" ")}>
                    <Icon className="h-6 w-6 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:rotate-[-3deg]" />
                  </div>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] opacity-55">0{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold leading-tight tracking-[-0.03em] text-balance">{card.title}</h3>
                  <p className={["mt-3 text-sm leading-6 text-pretty", card.featured ? "text-cream/72" : "text-moss"].join(" ")}>{card.text}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-terracotta">
                  <span>{lang === "ru" ? "Открыть" : lang === "ro" ? "Deschide" : "Open"}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.article>
          );
        })}
      </StaggeredList>
    </SectionShell>
  );
}
