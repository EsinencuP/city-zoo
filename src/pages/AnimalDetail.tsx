import React, { useState } from "react";
import { 
  X, AlertTriangle, Compass, Sparkles, MapPin, CheckCircle, QrCode, ArrowLeft
} from "lucide-react";
import { Animal } from "../data/animals";
import { translations } from "../data/translations";

interface AnimalDetailProps {
  animal: Animal | null;
  onBack: () => void;
  lang: "ru" | "ro" | "en";
}

export default function AnimalDetail({ animal, onBack, lang }: AnimalDetailProps) {
  if (!animal) return (
    <div className="text-center py-20 bg-[#F6F1E8] border border-[#233122]/10 rounded-3xl max-w-md mx-auto my-12">
      <h3 className="font-serif text-lg font-bold text-[#233122]">
        {lang === "ru" ? "Животное не найдено" : lang === "ro" ? "Animalul nu a fost găsit" : "Resident Not Found"}
      </h3>
      <button onClick={onBack} className="mt-4 bg-[#233122] text-[#F6F1E8] px-6 py-2 rounded-xl text-sm font-semibold">
        {lang === "ru" ? "Назад" : lang === "ro" ? "Înapoi" : "Go Back"}
      </button>
    </div>
  );

  const t = translations[lang].qrCard;
  const [activeTab, setActiveTab] = useState<"about" | "habitat">("about");

  // Custom high-quality, illustrative geometric drawing matching the species identity
  const renderBigIllustration = (id: string) => {
    return (
      <div className="w-full h-64 sm:h-80 md:h-96 relative overflow-hidden bg-gradient-to-br from-[#E7F0E1] to-[#F6F1E8] flex items-center justify-center border border-[#233122]/10 rounded-3xl shadow-inner">
        <svg viewBox="0 0 400 240" className="w-full h-full object-contain">
          {/* Background hills */}
          <path d="M-20,240 Q100,120 220,180 T420,140 L420,240 Z" fill="#6F8F5B" opacity="0.3" />
          <path d="M50,240 Q180,160 300,200 T450,180 L450,240 Z" fill="#4F6942" opacity="0.2" />
          
          {/* Sun or glow */}
          <circle cx="280" cy="80" r="30" fill="#D77A4A" opacity="0.15" />
          
          {/* Interactive geometric representation of species */}
          <g transform="translate(130, 40) scale(1.1)">
            {/* Main torso */}
            <rect x="30" y="60" width="90" height="50" rx="15" fill={animal.id === "tiger" || animal.id === "red_panda" || animal.id === "amur_leopard" ? "#D77A4A" : "#7A8A99"} />
            {/* Legs */}
            <rect x="40" y="100" width="10" height="30" rx="4" fill="#233122" />
            <rect x="55" y="100" width="10" height="30" rx="4" fill="#233122" />
            <rect x="90" y="100" width="10" height="30" rx="4" fill="#233122" />
            <rect x="105" y="100" width="10" height="30" rx="4" fill="#233122" />
            {/* Head */}
            <circle cx="120" cy="55" r="22" fill={animal.id === "tiger" || animal.id === "red_panda" || animal.id === "amur_leopard" ? "#D77A4A" : "#7A8A99"} />
            {/* Tail */}
            <path d="M30,80 Q-10,60 10,110" stroke="#233122" strokeWidth="8" fill="none" strokeLinecap="round" />
            {/* Eyes */}
            <circle cx="128" cy="52" r="2.5" fill="#233122" />
            <circle cx="118" cy="52" r="2.5" fill="#233122" />
          </g>

          {/* Plant silhouette overlay representing Botanical garden */}
          <g fill="#4F6942" opacity="0.4">
            <path d="M20,240 Q40,160 30,240 Z" />
            <path d="M360,240 Q380,180 370,240 Z" />
          </g>
        </svg>

        {/* QR Scanned badge overlay */}
        <div className="absolute top-6 left-6 flex items-center gap-2 bg-[#233122] text-[#F6F1E8] px-4 py-2 rounded-full text-xs font-bold font-mono tracking-wider shadow-md">
          <QrCode className="w-4 h-4 text-[#D77A4A]" />
          <span>QR CODE ACTIVE • 100% VERIFIED</span>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-10 animate-in fade-in duration-300">
      
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#5E6B5C] hover:text-[#233122] transition-colors mb-6 min-h-[40px]"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{lang === "ru" ? "Назад к списку жителей" : lang === "ro" ? "Înapoi la listă" : "Back to sanctuary directory"}</span>
      </button>

      {/* Main Grid: Left is Big Illustration, Right is editorial contents */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* LEFT COLUMN - Big Illustration Banner */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {renderBigIllustration(animal.id)}

          {/* Micro-factoids card */}
          <div className="bg-[#E7F0E1] border border-[#233122]/10 p-6 rounded-3xl flex flex-col gap-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs text-[#4F6942] font-semibold font-mono uppercase tracking-wider">
              <CheckCircle className="w-4 h-4 text-[#6F8F5B]" />
              <span>{t.scannedTip}</span>
            </div>
            <div className="text-xs text-[#5E6B5C] leading-relaxed">
              {lang === "ru" ? "Вы отсканировали информационную стойку у вольера. Этот цифровой паспорт содержит верифицированные зоологами данные." :
               lang === "ro" ? "Ați scanat standul informativ de lângă biotop. Acest pașaport digital conține date biologice confirmate de zoologi." :
               "You've scanned the information stand directly outside the enclosure. This profile provides authentic scientific records."}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Scientific & Touristic Content */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Header Block */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ${animal.biomeColor}`}>
                {animal.biome[lang]}
              </span>
              <span className="font-mono text-xs text-[#5E6B5C]">ID: ZOOPARK-00{animal.id.length}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#233122] leading-tight">
              {animal.name[lang]}
            </h1>
            <p className="font-mono text-sm sm:text-base text-[#6F8F5B] italic mt-1">
              {animal.latinName}
            </p>
          </div>

          {/* TABS SELECTOR */}
          <div className="flex border-b border-[#233122]/10">
            <button
              onClick={() => setActiveTab("about")}
              className={`pb-3 pr-6 font-serif font-bold text-base transition-all relative ${
                activeTab === "about" ? "text-[#233122]" : "text-[#5E6B5C] hover:text-[#233122]"
              }`}
            >
              {t.tabAbout}
              {activeTab === "about" && (
                <div className="absolute bottom-0 left-0 right-6 h-0.5 bg-[#6F8F5B]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("habitat")}
              className={`pb-3 pr-6 font-serif font-bold text-base transition-all relative ${
                activeTab === "habitat" ? "text-[#233122]" : "text-[#5E6B5C] hover:text-[#233122]"
              }`}
            >
              {t.tabHabitat}
              {activeTab === "habitat" && (
                <div className="absolute bottom-0 left-0 right-6 h-0.5 bg-[#6F8F5B]" />
              )}
            </button>
          </div>

          {/* TAB CONTENTS */}
          {activeTab === "about" ? (
            <div className="flex flex-col gap-6 animate-in fade-in duration-200">
              
              {/* Biological overview description */}
              <div className="text-base sm:text-lg text-[#5E6B5C] leading-relaxed text-pretty">
                {animal.description[lang]}
              </div>

              {/* CRITICAL WARNING PLACARD */}
              <div className="bg-[#D77A4A]/10 border border-[#D77A4A]/30 p-5 rounded-2xl flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-[#D77A4A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#D77A4A] uppercase tracking-wider">{t.warningTitle}</h4>
                  <p className="text-sm text-[#233122] mt-1 leading-relaxed">
                    {animal.warning[lang]}
                  </p>
                </div>
              </div>

            </div>
          ) : (
            <div className="flex flex-col gap-6 animate-in fade-in duration-200">
              
              {/* Feeding Time Info */}
              <div className="bg-[#E7F0E1] p-6 rounded-2xl border border-[#6F8F5B]/15">
                <span className="font-mono text-xs text-[#6F8F5B] uppercase tracking-widest block mb-1">
                  {t.feedingTimeTitle}
                </span>
                <span className="font-serif font-bold text-xl text-[#233122] block">
                  {animal.feedingTime[lang]}
                </span>
                <p className="text-xs sm:text-sm text-[#5E6B5C] mt-2 leading-relaxed">
                  {lang === "ru" ? "Вы можете присутствовать при кормлении вольера и послушать рассказ зоолога-куратора." :
                   lang === "ro" ? "Puteți asista la hrănirea animalului și asculta relatarea zoologului curator." :
                   "Guests are cordially invited to witness feeding routines accompanied by lectures from resident caretakers."}
                </p>
              </div>

              {/* Habitat & Range */}
              <div className="bg-[#F6F1E8] border border-[#233122]/10 p-6 rounded-2xl">
                <span className="font-mono text-xs text-[#6F8F5B] uppercase tracking-widest block mb-1">
                  {t.rangeTitle}
                </span>
                <p className="text-base font-semibold text-[#233122] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#D77A4A]" />
                  <span>{animal.range[lang]}</span>
                </p>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
