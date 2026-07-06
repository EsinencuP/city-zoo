import React from "react";
import { ArrowLeft, Calendar, Tag, Share2, Printer } from "lucide-react";
import { translations } from "../data/translations";

interface NewsDetailProps {
  newsId: number;
  onBack: () => void;
  lang: "ru" | "ro" | "en";
}

export default function NewsDetail({ newsId, onBack, lang }: NewsDetailProps) {
  const t = translations[lang].news;
  const newsItem = t.items[newsId] || t.items[0];

  return (
    <div className="max-w-[800px] mx-auto px-4 md:px-6 py-12 animate-in fade-in duration-300">
      
      {/* Back link */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#5E6B5C] hover:text-[#233122] transition-colors mb-8 min-h-[40px]"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{lang === "ru" ? "Назад к новостям" : lang === "ro" ? "Înapoi la noutăți" : "Back to news feeds"}</span>
      </button>

      {/* Editorial layout container */}
      <article className="bg-[#F6F1E8] border border-[#233122]/10 rounded-[32px] p-6 sm:p-10 shadow-sm flex flex-col gap-6">
        
        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#5E6B5C]">
          <div className="flex items-center gap-1.5 bg-[#E7F0E1] px-3 py-1.5 rounded-full border border-[#233122]/5">
            <Calendar className="w-4 h-4 text-[#6F8F5B]" />
            <span className="tabular-nums">{newsItem.date}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#6F8F5B]/10 text-[#4F6942] px-3 py-1.5 rounded-full">
            <Tag className="w-4 h-4" />
            <span>{newsItem.tag}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#233122] leading-tight text-balance">
          {newsItem.title}
        </h1>

        {/* Brief Intro */}
        <p className="text-lg text-[#233122] font-medium border-l-4 border-[#6F8F5B] pl-4 italic leading-relaxed">
          {newsItem.desc}
        </p>

        {/* Full Rich Text Story Simulator */}
        <div className="text-base text-[#5E6B5C] leading-relaxed flex flex-col gap-5 mt-4">
          <p>
            {lang === "ru" ? "Вчера зоологический и ботанический отделы провели масштабный плановый аудит состояния здоровья наших подопечных. Все обследования подтвердили отличное самочувствие зверей и готовность к летнему сезону притока гостей." :
             lang === "ro" ? "Ieri, departamentele zoologice și botanice au efectuat un audit planificat amplu al stării de sănătate a locatarilor noștri. Toate investigațiile au confirmat starea excelentă a animalelor și pregătirea lor completă pentru sezonul estival." :
             "Yesterday, our zoological and botanical taskforces conducted a thorough health and well-being sweep across our resident cohorts. All physiological sweeps report optimal baseline vitality and readiness for summer visitor workflows."}
          </p>
          
          {/* Beautiful vector botanical leaf separator */}
          <div className="my-4 flex justify-center text-[#6F8F5B]/30">
            <svg viewBox="0 0 100 20" className="w-24 h-5 fill-current">
              <path d="M10,10 Q30,0 50,10 T90,10" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <p>
            {lang === "ru" ? "Мы непрерывно улучшаем ландшафтный дизайн вольеров, стараясь максимально точно воссоздать дикие условия обитания. В загородках появились новые натуральные элементы, способствующие естественной активности животных." :
             lang === "ro" ? "Îmbunătățim continuu designul peisagistic al biotopurilor, încercând să recreăm cât mai fidel condițiile naturale. În țarcuri au fost introduse elemente naturale noi care încurajează comportamentul activ." :
             "We continuous iterate on structural enrichment, striving to emulate authentic wild niches. Enclosure margins have been expanded with organic timbers and rocks promoting natural physical exercises and play."}
          </p>

          <p>
            {lang === "ru" ? "Помните, что лучший способ поддержать зоопарк — это покупка электронных билетов онлайн, что позволяет избежать очередей у входа и делает ваш визит полностью бесконтактным." :
             lang === "ro" ? "Amintiți-vă că cel mai bun mod de a sprijini grădina zoologică este achiziționarea biletelor online, ceea ce elimină complet cozile de la intrare." :
             "Please consider that the absolute best way to back our botanical sanctuary's research is through acquiring digital online tickets, which completely avoids congestion at main gate turnstiles."}
          </p>
        </div>

        {/* Footer social placeholder row */}
        <div className="border-t border-[#233122]/10 pt-6 mt-6 flex items-center justify-between font-mono text-[10px] text-[#5E6B5C]">
          <span>© Zoo Editorial Logs</span>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 hover:text-[#233122] min-h-[32px] px-2 rounded hover:bg-[#E7F0E1]/50">
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-1 hover:text-[#233122] min-h-[32px] px-2 rounded hover:bg-[#E7F0E1]/50"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
          </div>
        </div>

      </article>

    </div>
  );
}
