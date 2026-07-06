import React, { useState } from "react";
import { 
  X, AlertTriangle, Compass, Sparkles, Volume2, 
  VolumeX, Play, Pause, MapPin, CheckCircle, Info, QrCode
} from "lucide-react";
import { Animal } from "../data/animals";
import { translations } from "../data/translations";

interface AnimalDetailModalProps {
  animal: Animal | null;
  onClose: () => void;
  lang: "ru" | "ro" | "en";
}

export default function AnimalDetailModal({ animal, onClose, lang }: AnimalDetailModalProps) {
  if (!animal) return null;

  const t = translations[lang].qrCard;
  
  // State to simulate real-time audio guide narration
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"about" | "habitat">("about");

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  // Helper to draw custom big SVG illustration matching the animal's profile
  const renderBigIllustration = (id: string) => {
    return (
      <div className="w-full h-48 sm:h-64 relative overflow-hidden bg-gradient-to-br from-[#E7F0E1] to-[#F6F1E8] flex items-center justify-center">
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

        {/* QR scanned badge sticker */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-[#233122] text-[#F6F1E8] px-3 py-1.5 rounded-full text-[10px] font-bold font-mono tracking-wider shadow-md">
          <QrCode className="w-3.5 h-3.5 text-[#D77A4A]" />
          <span>QR CODES CANNED • 100% SECURE</span>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-[#233122]/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Container - Slide up on mobile, beautiful card on desktop */}
      <div 
        className="relative bg-[#F6F1E8] w-full h-full sm:h-auto sm:max-w-[500px] sm:rounded-[32px] overflow-hidden shadow-2xl flex flex-col justify-between animate-in slide-in-from-bottom-8 duration-300 border border-[#233122]/10"
        id="qr-animal-detail-modal"
      >
        
        {/* Header Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-[#233122]/60 hover:bg-[#233122]/80 text-[#F6F1E8] flex items-center justify-center transition-all duration-200 shadow-md min-w-[40px] min-h-[40px]"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* TOP: Large Illustration & Tag */}
        <div>
          {renderBigIllustration(animal.id)}

          {/* Mobile scan indicator plaque */}
          <div className="bg-[#E7F0E1] border-y border-[#233122]/10 px-5 py-2.5 flex items-center justify-between text-[11px] text-[#4F6942] font-semibold">
            <span className="flex items-center gap-1.5 font-mono">
              <CheckCircle className="w-3.5 h-3.5 text-[#6F8F5B]" />
              {t.scannedTip}
            </span>
          </div>
        </div>

        {/* MIDDLE: Content section scrollable */}
        <div className="flex-1 overflow-y-auto px-5 py-6 max-h-[50vh] sm:max-h-[380px]">
          
          {/* Main Title Block */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${animal.biomeColor}`}>
                {animal.biome[lang]}
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#233122] mt-1 leading-tight">
                {animal.name[lang]}
              </h2>
              <p className="font-mono text-xs text-[#6F8F5B] italic mt-0.5">
                {animal.latinName}
              </p>
            </div>

            {/* AUDIO GUIDE SIMULATED CONTROLLER */}
            <button
              onClick={toggleAudio}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 font-semibold text-xs shrink-0 min-h-[40px] ${
                isPlaying 
                  ? "bg-[#D77A4A] text-[#F6F1E8] shadow-sm animate-pulse"
                  : "bg-[#E7F0E1] text-[#4F6942] border border-[#6F8F5B]/15 hover:bg-[#6F8F5B]/20"
              }`}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{isPlaying ? "Pause Guide" : "Audio Guide"}</span>
            </button>
          </div>

          {/* Simulated Waveform if playing */}
          {isPlaying && (
            <div className="mb-5 bg-[#E7F0E1] p-3 rounded-xl border border-[#6F8F5B]/20 flex items-center gap-3 animate-in fade-in duration-200">
              <Volume2 className="w-4 h-4 text-[#D77A4A] animate-bounce" />
              <div className="flex-1 flex gap-0.5 items-center h-4">
                {[...Array(24)].map((_, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-[#D77A4A] rounded-full transition-all duration-300"
                    style={{ 
                      height: `${Math.floor(Math.random() * 80) + 20}%`,
                      animation: `wave 0.8s ease-in-out infinite alternate`,
                      animationDelay: `${i * 0.04}s`
                    }}
                  />
                ))}
              </div>
              <span className="font-mono text-[9px] text-[#4F6942] font-bold">01:45</span>
            </div>
          )}

          {/* TABS SELECTOR FOR ONE HAND SCROLLING */}
          <div className="flex border-b border-[#233122]/10 mb-5">
            <button
              onClick={() => setActiveTab("about")}
              className={`flex-1 text-center pb-2.5 font-serif font-bold text-sm transition-all relative ${
                activeTab === "about" ? "text-[#233122]" : "text-[#5E6B5C] hover:text-[#233122]"
              }`}
            >
              {t.tabAbout}
              {activeTab === "about" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#6F8F5B]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("habitat")}
              className={`flex-1 text-center pb-2.5 font-serif font-bold text-sm transition-all relative ${
                activeTab === "habitat" ? "text-[#233122]" : "text-[#5E6B5C] hover:text-[#233122]"
              }`}
            >
              {t.tabHabitat}
              {activeTab === "habitat" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#6F8F5B]" />
              )}
            </button>
          </div>

          {/* TAB CONTENTS */}
          {activeTab === "about" ? (
            <div className="flex flex-col gap-4 animate-in fade-in duration-200">
              
              {/* Short story chunk */}
              <div className="text-sm sm:text-base text-[#5E6B5C] leading-relaxed text-pretty">
                {animal.description[lang]}
              </div>

              {/* CRITICAL WARNING PLACARD */}
              <div className="bg-[#D77A4A]/10 border border-[#D77A4A]/30 p-4 rounded-2xl flex items-start gap-3 mt-2">
                <AlertTriangle className="w-5 h-5 text-[#D77A4A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-[#D77A4A] uppercase tracking-wider">{t.warningTitle}</h4>
                  <p className="text-xs text-[#233122] mt-0.5 leading-relaxed">
                    {animal.warning[lang]}
                  </p>
                </div>
              </div>

            </div>
          ) : (
            <div className="flex flex-col gap-5 animate-in fade-in duration-200">
              
              {/* Feeding Time */}
              <div className="bg-[#E7F0E1] p-4 rounded-2xl border border-[#6F8F5B]/15">
                <span className="font-mono text-[10px] text-[#6F8F5B] uppercase tracking-widest block mb-1">
                  {t.feedingTimeTitle}
                </span>
                <span className="font-serif font-bold text-lg text-[#233122] block">
                  {animal.feedingTime[lang]}
                </span>
                <p className="text-xs text-[#5E6B5C] mt-1 leading-relaxed">
                  {lang === "ru" ? "Вы можете присутствовать при кормлении вольера и послушать рассказ зоолога-куратора." :
                   lang === "ro" ? "Puteți asista la hrănirea animalului și asculta relatarea zoologului curator." :
                   "Guests are cordially invited to witness feeding routines accompanied by lectures from resident caretakers."}
                </p>
              </div>

              {/* Habitat & Range */}
              <div className="bg-[#F6F1E8] border border-[#233122]/10 p-4 rounded-2xl">
                <span className="font-mono text-[10px] text-[#6F8F5B] uppercase tracking-widest block mb-1">
                  {t.rangeTitle}
                </span>
                <p className="text-sm font-semibold text-[#233122] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#D77A4A]" />
                  <span>{animal.range[lang]}</span>
                </p>
              </div>

            </div>
          )}

        </div>

        {/* BOTTOM ACTION BUTTON: CLOSE */}
        <div className="border-t border-[#233122]/10 px-5 py-4 bg-[#E7F0E1]/30 flex items-center justify-between">
          <span className="text-[10px] text-[#5E6B5C] font-mono">ID: [ZOOPARK-00{animal.id.length}]</span>
          <button
            onClick={onClose}
            className="bg-[#233122] hover:bg-[#4F6942] text-[#F6F1E8] px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 min-h-[40px]"
            id="detail-modal-dismiss-btn"
          >
            {t.close}
          </button>
        </div>

      </div>

      {/* Embedded CSS for keyframes waveform */}
      <style>{`
        @keyframes wave {
          from {
            height: 20%;
          }
          to {
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
}
