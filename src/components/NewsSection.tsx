import React from "react";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { translations } from "../data/translations";

interface NewsSectionProps {
  lang: "ru" | "ro" | "en";
  onNavigate: (route: string) => void;
}

export default function NewsSection({ lang, onNavigate }: NewsSectionProps) {
  const t = translations[lang].news;

  return (
    <section id="news" className="py-20 bg-[#F6F1E8] border-b border-[#233122]/10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs text-[#6F8F5B] uppercase tracking-wider block mb-2">Sanctuary Logs</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#233122] font-semibold tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5E6B5C] mt-2 text-pretty">
            {t.subtitle}
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.items.map((newsItem, idx) => {
            return (
              <div 
                key={idx}
                className="bg-[#E7F0E1]/40 border border-[#233122]/5 rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between items-start gap-6"
                id={`news-card-item-${idx}`}
              >
                <div className="flex flex-col gap-3">
                  
                  {/* Meta: Date and Tag */}
                  <div className="flex items-center gap-3 font-mono text-[10px] text-[#5E6B5C]">
                    <div className="flex items-center gap-1 bg-[#F6F1E8] px-2.5 py-1 rounded-md border border-[#233122]/5">
                      <Calendar className="w-3 h-3 text-[#6F8F5B]" />
                      <span className="tabular-nums">{newsItem.date}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-[#6F8F5B]/10 text-[#4F6942] px-2.5 py-1 rounded-md">
                      <Tag className="w-3 h-3" />
                      <span>{newsItem.tag}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => onNavigate(`/${lang}/news/${idx}`)}
                    className="font-serif text-lg font-bold text-[#233122] leading-snug hover:text-[#6F8F5B] transition-colors cursor-pointer"
                  >
                    {newsItem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#5E6B5C] leading-relaxed text-pretty">
                    {newsItem.desc}
                  </p>

                </div>

                {/* Read More Link */}
                <button 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4F6942] hover:text-[#233122] group mt-2"
                  onClick={() => onNavigate(`/${lang}/news/${idx}`)}
                  id={`news-read-more-btn-${idx}`}
                >
                  <span>{t.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
