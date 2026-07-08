import React, { useState } from "react";
import { X, Ticket, Minus, Plus, Check, QrCode } from "lucide-react";

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: "ru" | "ro" | "en";
}

export default function TicketModal({ isOpen, onClose, lang }: TicketModalProps) {
  const [quantities, setQuantities] = useState({
    adult: 1,
    child: 0,
    senior: 0
  });
  const [step, setStep] = useState<"select" | "success">("select");

  if (!isOpen) return null;

  const prices = {
    adult: 120,
    child: 60,
    senior: 80
  };

  const labels = {
    ru: {
      title: "Билеты в Zoo",
      subtitle: "Выберите тарифы для посещения. Заявка формируется как предварительный QR-вход для визита.",
      adult: "Взрослый билет",
      child: "Детский билет до 12 лет",
      senior: "Льготный билет",
      total: "Итого",
      successTitle: "Предварительная заявка готова",
      successSubtitle: "Предварительная заявка сформирована. Покажите её на входе или уточните подтверждение у команды Zoo.",
      close: "Закрыть",
      checkout: "Сформировать заявку",
      currency: "MDL"
    },
    ro: {
      title: "Bilete la Zoo",
      subtitle: "Alegeți tarifele pentru vizită. Cererea se formează ca acces QR preliminar pentru vizită.",
      adult: "Bilet adult",
      child: "Bilet copil până la 12 ani",
      senior: "Bilet redus",
      total: "Total",
      successTitle: "Cererea preliminară este gata",
      successSubtitle: "Cererea preliminară este formată. Prezentați-o la intrare sau confirmați detaliile cu echipa Zoo.",
      close: "Închide",
      checkout: "Formează cererea",
      currency: "MDL"
    },
    en: {
      title: "Tickets to Zoo",
      subtitle: "Choose visit tariffs. The request is prepared as a preliminary QR entry flow for the visit.",
      adult: "Adult ticket",
      child: "Child ticket under 12",
      senior: "Reduced ticket",
      total: "Total",
      successTitle: "Preliminary request ready",
      successSubtitle: "The preliminary request is ready. Show it at the entrance or confirm details with the Zoo team.",
      close: "Close",
      checkout: "Create request",
      currency: "MDL"
    }
  }[lang];

  const updateQuantity = (type: "adult" | "child" | "senior", dir: "inc" | "dec") => {
    setQuantities((prev) => {
      const val = prev[type];
      const nextVal = dir === "inc" ? val + 1 : Math.max(0, val - 1);
      return { ...prev, [type]: nextVal };
    });
  };

  const totalCost =
    quantities.adult * prices.adult +
    quantities.child * prices.child +
    quantities.senior * prices.senior;

  const handleCreateRequest = () => {
    if (totalCost === 0) return;
    setStep("success");
  };

  const handleClose = () => {
    setStep("select");
    onClose();
  };

  const ticketRows: Array<{ id: "adult" | "child" | "senior"; label: string; price: number }> = [
    { id: "adult", label: labels.adult, price: prices.adult },
    { id: "child", label: labels.child, price: prices.child },
    { id: "senior", label: labels.senior, price: prices.senior }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#233122]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#F6F1E8] w-full max-w-[450px] rounded-[32px] border border-[#233122]/10 overflow-hidden shadow-2xl flex flex-col justify-between p-6 animate-in slide-in-from-bottom-6 duration-300"
        id="ticketing-modal-container"
      >
        <div className="flex items-center justify-between border-b border-[#233122]/10 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <Ticket className="w-5 h-5 text-[#D77A4A]" />
            <h3 className="font-serif font-bold text-lg text-[#233122]">
              {labels.title}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="w-10 h-10 rounded-full bg-[#E7F0E1] text-[#233122] hover:text-[#6F8F5B] flex items-center justify-center transition-colors min-w-[40px] min-h-[40px]"
            aria-label={labels.close}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {step === "select" ? (
          <div className="flex flex-col gap-5">
            <p className="text-xs text-[#5E6B5C] leading-normal">
              {labels.subtitle}
            </p>

            <div className="flex flex-col gap-3">
              {ticketRows.map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between bg-[#E7F0E1]/40 p-3 rounded-2xl border border-[#233122]/5">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#233122]">{ticket.label}</h4>
                    <span className="font-mono text-xs text-[#6F8F5B] tabular-nums">{ticket.price} {labels.currency}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(ticket.id, "dec")}
                      className="w-10 h-10 rounded-full bg-white hover:bg-[#E7F0E1] flex items-center justify-center text-[#233122] font-semibold transition-colors min-h-[40px] min-w-[40px]"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono text-sm font-bold w-6 text-center tabular-nums">{quantities[ticket.id]}</span>
                    <button
                      onClick={() => updateQuantity(ticket.id, "inc")}
                      className="w-10 h-10 rounded-full bg-white hover:bg-[#E7F0E1] flex items-center justify-center text-[#233122] font-semibold transition-colors min-h-[40px] min-w-[40px]"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#233122]/10 pt-4 flex items-center justify-between font-serif">
              <span className="font-bold text-base text-[#5E6B5C]">{labels.total}</span>
              <span className="font-bold text-2xl text-[#233122] tabular-nums">
                {totalCost} {labels.currency}
              </span>
            </div>

            <button
              onClick={handleCreateRequest}
              disabled={totalCost === 0}
              className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-[scale,background-color] duration-200 flex items-center justify-center gap-2 shadow-md ${
                totalCost > 0
                  ? "bg-[#D77A4A] hover:bg-[#c2673a] text-[#F6F1E8] active:scale-[0.96]"
                  : "bg-[#233122]/10 text-[#5E6B5C] cursor-not-allowed"
              }`}
            >
              <QrCode className="w-4 h-4" />
              <span>{labels.checkout}</span>
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center gap-4 py-6 animate-in scale-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#E7F0E1] text-[#4F6942] flex items-center justify-center">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h4 className="font-serif font-bold text-xl text-[#233122]">
              {labels.successTitle}
            </h4>
            <p className="text-sm text-[#5E6B5C] leading-relaxed max-w-sm">
              {labels.successSubtitle}
            </p>
            <button
              onClick={handleClose}
              className="mt-4 bg-[#233122] hover:bg-[#4F6942] text-[#F6F1E8] px-8 py-2.5 rounded-xl font-semibold text-sm transition-[scale,background-color] duration-200 active:scale-[0.96] min-h-[40px]"
            >
              {labels.close}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

