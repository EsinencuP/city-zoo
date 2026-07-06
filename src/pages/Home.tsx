import React from "react";
import Hero from "../components/Hero";
import QuickInfo from "../components/QuickInfo";
import FeaturedAnimals from "../components/FeaturedAnimals";
import NewsSection from "../components/NewsSection";
import TrustSection from "../components/TrustSection";
import FaqSection from "../components/FaqSection";
import { Animal } from "../data/animals";
import { ArrowRight, Compass, MapPin } from "lucide-react";
import { translations } from "../data/translations";

interface HomeProps {
  lang: "ru" | "ro" | "en";
  onNavigate: (route: string) => void;
  onOpenTickets: () => void;
}

export default function Home({ lang, onNavigate, onOpenTickets }: HomeProps) {
  const t = translations[lang];

  return (
    <div className="relative animate-in fade-in duration-300">
      {/* Editorial Decorative Background Leaves */}
      <div className="absolute top-10 left-5 w-24 h-24 text-[#6F8F5B]/5 pointer-events-none select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M10,90 Q40,40 90,10 Q60,60 10,90 Z" />
        </svg>
      </div>
      <div className="absolute top-[800px] right-10 w-36 h-36 text-[#6F8F5B]/5 pointer-events-none select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M10,10 Q50,60 90,90 Q40,40 10,10 Z" />
        </svg>
      </div>

      {/* 2. Hero */}
      <Hero 
        lang={lang} 
        onOpenTickets={onOpenTickets} 
        onNavigate={onNavigate}
      />

      {/* 3. Quick Info */}
      <QuickInfo lang={lang} />

      {/* 4. Map Entry block (Interactive guide gateway) */}
      <section className="py-16 bg-[#F6F1E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="bg-[#E7F0E1] border border-[#233122]/10 rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-full bg-[#6F8F5B]/5 pointer-events-none" />
            <div className="flex flex-col gap-4 max-w-xl relative z-10">
              <span className="font-mono text-xs text-[#6F8F5B] uppercase tracking-wider block">Interactive Guide Map</span>
              <h2 className="font-serif text-2xl md:text-3xl text-[#233122] font-semibold leading-tight text-balance">
                {t.mapSection.title}
              </h2>
              <p className="text-sm text-[#5E6B5C] leading-relaxed text-pretty">
                {t.mapSection.subtitle}
              </p>
            </div>
            <button
              onClick={() => onNavigate(`/${lang}/map`)}
              className="bg-[#D77A4A] hover:bg-[#c2673a] text-[#F6F1E8] px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 hover:scale-[0.98] shrink-0 shadow-md min-h-[48px] relative z-10"
              id="home-open-map-cta"
            >
              <Compass className="w-5 h-5" />
              <span>{t.mapSection.viewInDetail}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. Featured Animals Showcase Grid */}
      <FeaturedAnimals 
        lang={lang} 
        onSelectAnimal={(animal) => onNavigate(`/${lang}/animals/${animal.id}`)} 
      />

      {/* 6. News summary */}
      <NewsSection lang={lang} onNavigate={onNavigate} />

      {/* 7. Trust & Zoo context */}
      <TrustSection lang={lang} />

      {/* 8. FAQ info summary */}
      <FaqSection lang={lang} />
    </div>
  );
}
