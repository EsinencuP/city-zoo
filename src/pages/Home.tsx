import React from "react";
import { motion } from "motion/react";
import Hero from "../components/Hero";
import QuickInfo from "../components/QuickInfo";
import FeaturedAnimals from "../components/FeaturedAnimals";
import NewsSection from "../components/NewsSection";
import TrustSection from "../components/TrustSection";
import FaqSection from "../components/FaqSection";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import SectionBotanicalDivider from "../components/decorative/SectionBotanicalDivider";
import OrganicShape from "../components/decorative/OrganicShape";
import LeafCorner from "../components/decorative/LeafCorner";
import { Compass, ArrowRight, MapPin } from "lucide-react";
import { translations } from "../data/translations";
import { fadeUp } from "../lib/motion";

interface HomeProps {
  lang: "ru" | "ro" | "en";
  onNavigate: (route: string) => void;
  onOpenTickets: () => void;
}

export default function Home({ lang, onNavigate, onOpenTickets }: HomeProps) {
  const t = translations[lang];

  return (
    <div className="relative overflow-hidden">
      <Hero lang={lang} onOpenTickets={onOpenTickets} onNavigate={onNavigate} />
      <SectionBotanicalDivider />
      <QuickInfo lang={lang} />

      <section className="relative overflow-hidden bg-cream py-16 md:py-24">
        <OrganicShape className="left-[8%] top-12 h-72 w-72 bg-water/50" />
        <LeafCorner className="right-2 top-8 h-36 w-36" mirrored />
        <Container>
          <motion.div
            className="relative grid gap-8 overflow-hidden rounded-[42px] bg-canopy p-6 text-cream shadow-[0_28px_90px_rgba(37,55,33,0.22)] md:grid-cols-[0.96fr_1.04fr] md:p-10 lg:p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.24 }}
            variants={fadeUp}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(120,156,97,0.42),transparent_18rem),radial-gradient(circle_at_88%_22%,rgba(216,121,73,0.22),transparent_20rem)]" />
            <div className="relative z-10 flex flex-col justify-between gap-10">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-mint/80">Interactive guide map</span>
                <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-balance md:text-5xl">
                  {t.mapSection.title}
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-cream/72 text-pretty sm:text-base">
                  {t.mapSection.subtitle}
                </p>
              </div>
              <Button onClick={() => onNavigate(`/${lang}/map`)} className="w-fit px-6 py-3" id="home-open-map-cta">
                <Compass className="h-5 w-5" />
                <span>{t.mapSection.viewInDetail}</span>
              </Button>
            </div>

            <div className="relative z-10 min-h-[320px] rounded-[32px] bg-mint p-4 botanical-map-grid shadow-[inset_0_0_0_1px_rgba(37,55,33,0.08)]">
              <svg viewBox="0 0 620 360" className="h-full w-full">
                <path d="M42 94C162 42 249 90 334 70c101-24 176-10 246 32" fill="none" stroke="#cfe1df" strokeWidth="38" strokeLinecap="round" />
                <path d="M104 280c64-115 212-166 368-106" fill="none" stroke="#fbf4e8" strokeWidth="16" strokeLinecap="round" />
                <path d="M158 88c92 42 220 72 330 24" fill="none" stroke="#fbf4e8" strokeWidth="12" strokeLinecap="round" strokeDasharray="10 16" />
                <path d="M30 320c94-30 135-94 138-180 84 44 109 118 64 220H30Z" fill="#789c61" opacity="0.22" />
                <path d="M398 352c18-102 73-163 182-184 19 81-5 143-70 184H398Z" fill="#789c61" opacity="0.2" />
                {[
                  [162, 108, "#d87949"], [302, 176, "#789c61"], [438, 112, "#d87949"], [492, 252, "#253721"], [254, 264, "#789c61"]
                ].map(([x, y, color], index) => (
                  <g key={index} transform={`translate(${x} ${y})`}>
                    <circle r="16" fill={color} opacity="0.16" />
                    <circle r="7" fill={color} />
                  </g>
                ))}
              </svg>
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 rounded-[22px] bg-cream/88 p-4 text-canopy shadow-soft-card backdrop-blur-md">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <MapPin className="h-4 w-4 text-terracotta" />
                  <span>{t.mapSection.interactiveGuideTip}</span>
                </div>
                <ArrowRight className="h-5 w-5 text-terracotta" />
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <SectionBotanicalDivider flip />
      <FeaturedAnimals lang={lang} onSelectAnimal={(animal) => onNavigate(`/${lang}/animals/${animal.id}`)} />
      <NewsSection lang={lang} onNavigate={onNavigate} />
      <TrustSection lang={lang} />
      <FaqSection lang={lang} />
    </div>
  );
}
