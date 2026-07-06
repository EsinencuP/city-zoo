import React from "react";
import { Calendar, Tag, ArrowRight, TreePine } from "lucide-react";
import { translations } from "../data/translations";

interface NewsListProps {
  lang: "ru" | "ro" | "en";
  onSelectNews: (id: number) => void;
}

export default function NewsList({ lang, onSelectNews }: NewsListProps) {
  const t = translations[lang].news;

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-12 animate-in fade-in duration-300">
      
      {/* Title block */}
      <div className="text-center md:text-left mb-10 border-b border-[#233122]/10 pb-6">
        <span className="font-mono text-xs text-[#6F8F5B] uppercase tracking-widest block mb-2">Sanctuary Logs</span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#233122]">
          {t.title}
        </h1>
        <p className="text-[#5E6B5C] text-sm sm:text-base mt-2 max-w-2xl">
          {t.subtitle}
        </p>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {t.items.map((newsItem, idx) => {
          return (
            <div 
              key={idx}
              className="bg-[#F6F1E8] border border-[#233122]/10 rounded-[28px] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between items-start gap-6 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-3">
                
                {/* Meta: Date and Tag */}
                <div className="flex items-center gap-3 font-mono text-[10px] text-[#5E6B5C]">
                  <div className="flex items-center gap-1 bg-[#E7F0E1] px-2.5 py-1 rounded-md border border-[#233122]/5">
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
                  onClick={() => onSelectNews(idx)}
                  className="font-serif text-xl font-bold text-[#233122] leading-snug hover:text-[#6F8F5B] transition-colors cursor-pointer"
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
                onClick={() => onSelectNews(idx)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4F6942] hover:text-[#233122] group mt-2"
              >
                <span>{t.readMore}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

            </div>
          );
        })}
      </div>

    </div>
  );
}
