import React from "react";
import { X, AlertTriangle, MapPin, CheckCircle, QrCode } from "lucide-react";
import { Animal } from "../data/animals";
import { translations } from "../data/translations";
import { animalImages } from "../data/animalImages";

interface AnimalDetailModalProps {
  animal: Animal | null;
  onClose: () => void;
  lang: "ru" | "ro" | "en";
}

export default function AnimalDetailModal({ animal, onClose, lang }: AnimalDetailModalProps) {
  if (!animal) return null;

  const t = translations[lang].qrCard;
  const image = animalImages[animal.id] || animalImages.tiger;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#233122]/60 p-0 backdrop-blur-sm sm:p-4">
      <div
        className="relative flex h-full w-full flex-col overflow-hidden bg-[#F6F1E8] shadow-2xl sm:h-auto sm:max-w-[520px] sm:rounded-[32px]"
        id="qr-animal-detail-modal"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-[#233122]/70 text-[#F6F1E8] transition-[background-color,scale] duration-200 hover:bg-[#233122] active:scale-[0.96]"
          aria-label={t.close}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative h-64 overflow-hidden bg-[#E7F0E1]">
          <img src={image} alt={animal.name[lang]} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#233122]/70 to-transparent" />
          <div className="absolute bottom-4 left-4 right-14 text-[#F6F1E8]">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#233122]/80 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest">
              <QrCode className="h-3.5 w-3.5 text-[#D77A4A]" />
              <span>QR guide</span>
            </div>
            <h2 className="font-serif text-3xl font-bold leading-tight">{animal.name[lang]}</h2>
            <p className="font-mono text-xs italic text-[#E7F0E1]">{animal.latinName}</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 sm:max-h-[430px]">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${animal.biomeColor}`}>
              {animal.biome[lang]}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E7F0E1] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4F6942]">
              <CheckCircle className="h-3.5 w-3.5" />
              {t.scannedTip}
            </span>
          </div>

          <p className="text-sm leading-7 text-[#5E6B5C] text-pretty">{animal.description[lang]}</p>

          <div className="mt-5 rounded-2xl border border-[#D77A4A]/25 bg-[#D77A4A]/10 p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#D77A4A]" />
              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#D77A4A]">{t.warningTitle}</h3>
                <p className="mt-1 text-xs leading-6 text-[#233122]">{animal.warning[lang]}</p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#E7F0E1] p-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#6F8F5B]">{t.feedingTimeTitle}</span>
              <p className="mt-1 font-serif text-lg font-bold text-[#233122]">{animal.feedingTime[lang]}</p>
            </div>
            <div className="rounded-2xl bg-white/50 p-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#6F8F5B]">{t.rangeTitle}</span>
              <p className="mt-1 flex items-start gap-1.5 text-sm font-semibold leading-5 text-[#233122]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D77A4A]" />
                <span>{animal.range[lang]}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#233122]/10 bg-[#E7F0E1]/40 px-5 py-4 text-right">
          <button
            onClick={onClose}
            className="min-h-10 rounded-xl bg-[#233122] px-6 py-2 text-sm font-semibold text-[#F6F1E8] transition-[background-color,scale] duration-200 hover:bg-[#4F6942] active:scale-[0.96]"
            id="detail-modal-dismiss-btn"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
}
