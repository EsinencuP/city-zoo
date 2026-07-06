import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { translations } from "../data/translations";

interface FaqSectionProps {
  lang: "ru" | "ro" | "en";
}

export default function FaqSection({ lang }: FaqSectionProps) {
  const t = translations[lang].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#F6F1E8] border-b border-[#233122]/10">
      <div className="max-w-[800px] mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-[#6F8F5B] uppercase tracking-wider block mb-2">Practical Info</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#233122] font-semibold tracking-tight text-balance">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5E6B5C] mt-2 text-pretty">
            {t.subtitle}
          </p>
          <div className="h-1 w-12 bg-[#6F8F5B] mx-auto mt-4 rounded-full" />
        </div>

        {/* Calm Accordion List */}
        <div className="flex flex-col gap-4">
          {t.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-[#E7F0E1]/30 border-b border-[#233122]/10 rounded-[20px] overflow-hidden transition-all duration-300"
                id={`faq-accordion-container-${idx}`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 text-[#233122] hover:text-[#6F8F5B] transition-colors focus:outline-none min-h-[44px]"
                  aria-expanded={isOpen}
                  id={`faq-accordion-trigger-btn-${idx}`}
                >
                  <span className="font-serif font-bold text-base sm:text-lg pr-4 text-pretty leading-tight">
                    {item.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F6F1E8] flex items-center justify-center shrink-0 shadow-sm text-[#4F6942]">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Accordion Content Box */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] opacity-100 border-t border-[#233122]/5" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 py-5 text-sm sm:text-base text-[#5E6B5C] leading-relaxed text-pretty">
                    {item.a}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
