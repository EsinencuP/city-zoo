import React from "react";
import { motion } from "motion/react";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { translations } from "../data/translations";
import { staggerItem } from "../lib/motion";
import SectionShell from "./ui/SectionShell";
import StaggeredList from "./motion/StaggeredList";

interface NewsSectionProps {
  lang: "ru" | "ro" | "en";
  onNavigate: (route: string) => void;
}

export default function NewsSection({ lang, onNavigate }: NewsSectionProps) {
  const t = translations[lang].news;

  return (
    <SectionShell
      id="news"
      tone="white"
      eyebrow="Sanctuary logs"
      title={t.title}
      description={t.subtitle}
      headerAlign="split"
      className="border-y border-canopy/5"
    >
      <StaggeredList className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {t.items.slice(0, 3).map((newsItem, idx) => (
          <motion.article
            key={newsItem.title}
            variants={staggerItem}
            whileHover={{ y: -4 }}
            className={["group relative overflow-hidden rounded-[32px] p-6 shadow-soft-card transition-[box-shadow] duration-200 hover:shadow-soft-card-hover", idx === 0 ? "bg-canopy text-cream" : "bg-cream/88 text-canopy"].join(" ")}
            id={`news-card-item-${idx}`}
          >
            <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-leaf/15 blur-2xl" />
            <div className="relative flex min-h-[270px] flex-col justify-between gap-7">
              <div>
                <div className="flex flex-wrap items-center gap-2 font-mono text-[10px]">
                  <span className={["inline-flex items-center gap-1 rounded-full px-2.5 py-1", idx === 0 ? "bg-cream/12 text-cream/78" : "bg-mint text-moss"].join(" ")}>
                    <Calendar className="h-3 w-3 text-terracotta" />
                    <span className="tabular-nums">{newsItem.date}</span>
                  </span>
                  <span className={["inline-flex items-center gap-1 rounded-full px-2.5 py-1", idx === 0 ? "bg-cream/12 text-cream/78" : "bg-leaf/10 text-leaf"].join(" ")}>
                    <Tag className="h-3 w-3" />
                    <span>{newsItem.tag}</span>
                  </span>
                </div>
                <button onClick={() => onNavigate(`/${lang}/news/${idx}`)} className="mt-5 text-left">
                  <h3 className="font-serif text-2xl font-semibold leading-[1.08] tracking-[-0.03em] text-balance transition-colors duration-200 group-hover:text-terracotta">
                    {newsItem.title}
                  </h3>
                </button>
                <p className={["mt-4 text-sm leading-6 text-pretty", idx === 0 ? "text-cream/72" : "text-moss"].join(" ")}>{newsItem.desc}</p>
              </div>
              <button
                className="inline-flex min-h-10 w-fit items-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-terracotta transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-mint/60 active:scale-[0.96]"
                onClick={() => onNavigate(`/${lang}/news/${idx}`)}
                id={`news-read-more-btn-${idx}`}
              >
                <span>{t.readMore}</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.article>
        ))}
      </StaggeredList>
    </SectionShell>
  );
}
