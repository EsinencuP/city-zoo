import React from "react";
import { QrCode, Headphones, Sprout, HeartHandshake } from "lucide-react";
import { translations } from "../data/translations";

interface QuickInfoProps {
  lang: "ru" | "ro" | "en";
}

export default function QuickInfo({ lang }: QuickInfoProps) {
  const t = translations[lang].quickInfo;

  const infoCards = [
    {
      id: "qr-entry",
      icon: QrCode,
      title: t.card1Title,
      text: t.card1Text
    },
    {
      id: "audio-guide",
      icon: Headphones,
      title: t.card2Title,
      text: t.card2Text
    },
    {
      id: "botanical-garden",
      icon: Sprout,
      title: t.card3Title,
      text: t.card3Text
    },
    {
      id: "family-comfort",
      icon: HeartHandshake,
      title: t.card4Title,
      text: t.card4Text
    }
  ];

  return (
    <section 
      id="quick-info" 
      className="py-14 md:py-20 bg-[#E7F0E1]/40 border-y border-[#233122]/5"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#233122] font-semibold tracking-tight text-balance">
            {t.sectionTitle}
          </h2>
          <div className="h-1 w-12 bg-[#6F8F5B] mx-auto mt-4 rounded-full" />
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {infoCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={card.id}
                className="bg-[#F6F1E8] border border-[#233122]/5 rounded-[24px] p-6 shadow-[0_4px_20px_rgba(35,49,34,0.03)] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_30px_rgba(35,49,34,0.06)] flex flex-col items-start gap-4"
                id={`quick-info-card-${card.id}`}
              >
                {/* Icon wrapper with soft botanical background */}
                <div className="w-12 h-12 rounded-[16px] bg-[#E7F0E1] text-[#4F6942] flex items-center justify-center shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif font-bold text-lg text-[#233122] leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#5E6B5C] leading-relaxed text-pretty">
                    {card.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
