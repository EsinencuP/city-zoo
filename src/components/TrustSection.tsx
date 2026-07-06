import React from "react";
import { Leaf, Award, Heart } from "lucide-react";
import { translations } from "../data/translations";

interface TrustSectionProps {
  lang: "ru" | "ro" | "en";
}

export default function TrustSection({ lang }: TrustSectionProps) {
  const t = translations[lang].trust;

  const stats = [
    {
      icon: Leaf,
      number: t.stat1Number,
      label: t.stat1Label
    },
    {
      icon: Award,
      number: t.stat2Number,
      label: t.stat2Label
    },
    {
      icon: Heart,
      number: t.stat3Number,
      label: t.stat3Label
    }
  ];

  return (
    <section id="trust" className="py-20 bg-[#E7F0E1]/40 border-b border-[#233122]/10 overflow-hidden relative">
      {/* Editorial Decorative Background Leaf Outline */}
      <div className="absolute right-0 bottom-0 w-64 h-64 text-[#6F8F5B]/5 pointer-events-none select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M10,90 Q40,40 90,10 Q60,60 10,90 Z" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* TEXT COLUMN - 7 cols on desktop */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <span className="font-mono text-xs text-[#6F8F5B] uppercase tracking-wider block">Conservation Mission</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#233122] font-semibold tracking-tight text-balance">
            {t.title}
          </h2>
          <h3 className="font-serif text-xl text-[#6F8F5B] font-medium italic">
            {t.subtitle}
          </h3>
          
          <div className="flex flex-col gap-4 text-sm sm:text-base text-[#5E6B5C] leading-relaxed max-w-2xl text-pretty">
            <p>{t.desc1}</p>
            <p>{t.desc2}</p>
          </div>
        </div>

        {/* STATS COLUMN - 5 cols on desktop */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="bg-[#F6F1E8] border border-[#233122]/5 p-5 sm:p-6 rounded-[24px] shadow-sm flex items-center gap-4 sm:gap-5"
                id={`trust-stat-box-${idx}`}
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-[16px] bg-[#E7F0E1] text-[#4F6942] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Number & Label */}
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-3xl sm:text-4xl text-[#233122] leading-none tabular-nums tracking-tight">
                    {stat.number}
                  </span>
                  <span className="text-xs sm:text-sm text-[#5E6B5C] font-medium mt-1 leading-snug">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
