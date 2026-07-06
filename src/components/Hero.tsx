import React from "react";
import { ArrowRight, Compass, MapPin, Clock, CreditCard, TreePine } from "lucide-react";
import { translations } from "../data/translations";

interface HeroProps {
  lang: "ru" | "ro" | "en";
  onOpenTickets: () => void;
  onNavigate: (route: string) => void;
}

export default function Hero({ lang, onOpenTickets, onNavigate }: HeroProps) {
  const t = translations[lang].hero;

  return (
    <section 
      id="hero" 
      className="relative overflow-hidden pt-12 pb-20 md:py-24 bg-[#F6F1E8]"
    >
      {/* Background Organic Botanical Shape */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[60%] rounded-full bg-[#E7F0E1]/50 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[50%] rounded-full bg-[#6F8F5B]/10 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* TEXT AND CTAs - 7 cols on desktop */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 animate-in fade-in slide-in-from-left-4 duration-500">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E7F0E1] text-[#4F6942] text-xs font-semibold tracking-wider uppercase">
            <TreePine className="w-3.5 h-3.5" />
            <span>Editorial Wildlife & Botanical Sanctuary</span>
          </div>

          {/* Short, expressive H1 */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#233122] font-bold leading-[1.1] tracking-tight text-balance">
            {t.title}
          </h1>

          {/* Subtitle (1-2 lines) */}
          <p className="text-base sm:text-lg text-[#5E6B5C] font-normal leading-relaxed max-w-xl text-pretty">
            {t.subtitle}
          </p>

          {/* CTA Buttons (Exactly 2 CTAs) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2">
            {/* Primary CTA */}
            <button
              onClick={onOpenTickets}
              className="bg-[#D77A4A] hover:bg-[#c2673a] text-[#F6F1E8] px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-200 active:scale-95 shadow-md flex items-center justify-center gap-2 hover:scale-[0.98] min-h-[48px]"
              id="hero-buy-ticket-cta"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => onNavigate(`/${lang}/map`)}
              className="border border-[#233122]/15 hover:bg-[#E7F0E1]/40 text-[#233122] px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 min-h-[48px]"
              id="hero-plan-visit-cta"
            >
              <Compass className="w-5 h-5 text-[#6F8F5B]" />
              <span>{t.ctaSecondary}</span>
            </button>
          </div>

          {/* Quick Facts Block (Working hours, Address, Ticket price) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#233122]/10 pt-6 mt-4 w-full max-w-xl font-mono text-xs text-[#5E6B5C]">
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#6F8F5B] shrink-0 mt-0.5" />
              <div>
                <span className="block font-sans font-medium text-[#233122] uppercase tracking-wider mb-0.5">{t.hoursLabel}</span>
                <span className="tabular-nums font-semibold text-[#4F6942]">{t.hoursValue}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#6F8F5B] shrink-0 mt-0.5" />
              <div>
                <span className="block font-sans font-medium text-[#233122] uppercase tracking-wider mb-0.5">{t.addressLabel}</span>
                <span className="font-semibold text-[#4F6942]">{t.addressValue}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CreditCard className="w-4 h-4 text-[#6F8F5B] shrink-0 mt-0.5" />
              <div>
                <span className="block font-sans font-medium text-[#233122] uppercase tracking-wider mb-0.5">{t.priceLabel}</span>
                <span className="tabular-nums font-semibold text-[#4F6942]">{t.priceValue}</span>
              </div>
            </div>
          </div>

        </div>

        {/* HERO GRAPHIC / ANCHOR PHOTO - 5 cols on desktop */}
        <div className="lg:col-span-5 w-full h-[320px] sm:h-[400px] lg:h-[450px] relative rounded-[32px] overflow-hidden group shadow-xl animate-in fade-in slide-in-from-right-4 duration-500">
          {/* Subtle botanical line overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#233122]/80 via-[#233122]/20 to-transparent z-10" />
          
          {/* High quality artistic vector composition representing the Majestic Tiger */}
          <div className="absolute inset-0 bg-[#E7F0E1] flex items-center justify-center">
            {/* Artistic stylized representation of forest, flora, and fauna */}
            <svg viewBox="0 0 400 400" className="w-full h-full object-cover">
              {/* Forest Background */}
              <rect width="400" height="400" fill="#E7F0E1" />
              
              {/* Deep Botanical Layer */}
              <path d="M-50,450 C100,320 200,450 450,300 L450,450 Z" fill="#6F8F5B" opacity="0.6" />
              <path d="M0,450 C150,380 250,420 450,360 L450,450 Z" fill="#4F6942" />
              
              {/* Sun rays or mountain light */}
              <circle cx="300" cy="100" r="80" fill="#F6F1E8" opacity="0.8" />
              <path d="M150,50 L200,400 L250,400 Z" fill="#F6F1E8" opacity="0.15" />
              
              {/* Giant Stylized Amur Tiger silhouette in golden warm palette */}
              <g transform="translate(110, 120) scale(0.45)">
                {/* Body/Shoulders */}
                <path d="M100 280 C60 280 20 260 20 200 C20 140 80 110 150 110 C220 110 320 120 350 150 C380 180 390 280 390 280 L100 280 Z" fill="#D77A4A" />
                {/* Tiger head */}
                <circle cx="150" cy="140" r="70" fill="#D77A4A" />
                <path d="M105 100 L115 50 L140 90 Z" fill="#233122" />
                <path d="M195 100 L185 50 L160 90 Z" fill="#233122" />
                {/* Tiger White ruff */}
                <path d="M100 170 C100 200 150 220 200 170 C160 170 140 170 100 170 Z" fill="#F6F1E8" />
                {/* Tiger Eyes */}
                <circle cx="125" cy="130" r="8" fill="#F6F1E8" />
                <circle cx="125" cy="130" r="4" fill="#233122" />
                <circle cx="175" cy="130" r="8" fill="#F6F1E8" />
                <circle cx="175" cy="130" r="4" fill="#233122" />
                {/* Muzzle */}
                <path d="M135 155 C135 175 165 175 165 155 Z" fill="#F6F1E8" />
                <polygon points="145,150 155,150 150,157" fill="#233122" />
                {/* Stripes (purely vector graphic representation) */}
                <path d="M150,80 L150,105" stroke="#233122" strokeWidth="4" strokeLinecap="round" />
                <path d="M90,140 Q115,140 120,135" stroke="#233122" strokeWidth="5" fill="none" strokeLinecap="round" />
                <path d="M210,140 Q185,140 180,135" stroke="#233122" strokeWidth="5" fill="none" strokeLinecap="round" />
                <path d="M100,165 Q125,160 130,155" stroke="#233122" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M200,165 Q175,160 170,155" stroke="#233122" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M220,190 Q280,180 320,200" stroke="#233122" strokeWidth="8" fill="none" strokeLinecap="round" />
                <path d="M230,230 Q290,220 340,235" stroke="#233122" strokeWidth="8" fill="none" strokeLinecap="round" />
              </g>

              {/* Foliage framing (Botanical forms support but do not dominate) */}
              <g stroke="#233122" strokeWidth="1" fill="none" opacity="0.3">
                <path d="M30,300 C60,250 80,300 90,340" />
                <path d="M10,250 C50,220 70,250 80,300" />
              </g>
              <g fill="#4F6942" opacity="0.9">
                <path d="M0,400 Q40,300 100,400 Z" />
                <path d="M350,400 Q320,280 260,400 Z" />
                <path d="M400,320 Q350,300 320,400 Z" />
              </g>
            </svg>
          </div>

          {/* Captive text label matching Editorial Wildlife vibe */}
          <div className="absolute bottom-6 left-6 right-6 z-20 text-[#F6F1E8]">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#F6F1E8]/70 block mb-1">Featured Resident</span>
            <h4 className="font-serif text-xl sm:text-2xl font-semibold mb-1">Amur Tiger</h4>
            <p className="font-mono text-xs text-[#E7F0E1]/80">Panthera tigris altaica • Area A</p>
          </div>
        </div>

      </div>
    </section>
  );
}
