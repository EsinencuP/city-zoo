import React, { useState } from "react";
import { X, Calendar, Ticket, Minus, Plus, CreditCard, Check } from "lucide-react";

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: "ru" | "ro" | "en";
}

export default function TicketModal({ isOpen, onClose, lang }: TicketModalProps) {
  if (!isOpen) return null;

  const [quantities, setQuantities] = useState({
    adult: 1,
    child: 0,
    senior: 0
  });

  const [paymentStep, setPaymentStep] = useState<"select" | "success">("select");

  const prices = {
    adult: 350,
    child: 150,
    senior: 200
  };

  const labels = {
    ru: {
      title: "Купить билет в зоопарк",
      subtitle: "Бесконтактный QR-вход, действителен на выбранный день",
      adult: "Взрослый билет",
      child: "Детский билет (до 12 лет)",
      senior: "Льготный (пенсионеры / студенты)",
      total: "Итого к оплате",
      cta: "Оплатить картой",
      successTitle: "Оплата прошла успешно!",
      successSubtitle: "Электронные билеты отправлены на ваш e-mail. Сохраните QR-коды для быстрого бесконтактного входа через главный турникет.",
      close: "Закрыть",
      checkout: "Перейти к оплате",
      currency: "MDL"
    },
    ro: {
      title: "Cumpără bilet la Zoo",
      subtitle: "Intrare rapidă cu QR, valabil pentru ziua selectată",
      adult: "Bilet Adult",
      child: "Bilet Copil (sub 12 ani)",
      senior: "Bilet Redus (pensionari / studenți)",
      total: "Total spre plată",
      cta: "Plătește cu cardul",
      successTitle: "Plată finalizată cu succes!",
      successSubtitle: "Biletele electronice au fost trimise pe e-mail. Salvați codurile QR pentru acces rapid la turnichetul principal.",
      close: "Închide",
      checkout: "Spre plată",
      currency: "MDL"
    },
    en: {
      title: "Buy Zoo Tickets Online",
      subtitle: "Contactless QR access pass, valid for the selected day",
      adult: "Adult Ticket",
      child: "Child Ticket (under 12)",
      senior: "Reduced (Seniors / Students)",
      total: "Total Cost",
      cta: "Pay with Card",
      successTitle: "Payment Successful!",
      successSubtitle: "Your e-tickets have been dispatched to your email address. Keep the QR codes active to instantly bypass main gate turnstiles.",
      close: "Close",
      checkout: "Proceed to Payment",
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

  const handlePay = () => {
    if (totalCost === 0) return;
    setPaymentStep("success");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#233122]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#F6F1E8] w-full max-w-[450px] rounded-[32px] border border-[#233122]/10 overflow-hidden shadow-2xl flex flex-col justify-between p-6 animate-in slide-in-from-bottom-6 duration-300"
        id="ticketing-modal-container"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#233122]/10 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <Ticket className="w-5 h-5 text-[#D77A4A]" />
            <h3 className="font-serif font-bold text-lg text-[#233122]">
              {labels.title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#E7F0E1] text-[#233122] hover:text-[#6F8F5B] flex items-center justify-center transition-colors min-w-[32px] min-h-[32px]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {paymentStep === "select" ? (
          <div className="flex flex-col gap-5">
            <p className="text-xs text-[#5E6B5C] leading-normal">
              {labels.subtitle}
            </p>

            {/* Quantity counters */}
            <div className="flex flex-col gap-3">
              {/* Adult */}
              <div className="flex items-center justify-between bg-[#E7F0E1]/40 p-3 rounded-2xl border border-[#233122]/5">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#233122]">{labels.adult}</h4>
                  <span className="font-mono text-xs text-[#6F8F5B] tabular-nums">{prices.adult} {labels.currency}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => updateQuantity("adult", "dec")}
                    className="w-8 h-8 rounded-full bg-white hover:bg-[#E7F0E1] flex items-center justify-center text-[#233122] font-semibold transition-colors min-h-[32px] min-w-[32px]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono text-sm font-bold w-6 text-center tabular-nums">{quantities.adult}</span>
                  <button 
                    onClick={() => updateQuantity("adult", "inc")}
                    className="w-8 h-8 rounded-full bg-white hover:bg-[#E7F0E1] flex items-center justify-center text-[#233122] font-semibold transition-colors min-h-[32px] min-w-[32px]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Child */}
              <div className="flex items-center justify-between bg-[#E7F0E1]/40 p-3 rounded-2xl border border-[#233122]/5">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#233122]">{labels.child}</h4>
                  <span className="font-mono text-xs text-[#6F8F5B] tabular-nums">{prices.child} {labels.currency}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => updateQuantity("child", "dec")}
                    className="w-8 h-8 rounded-full bg-white hover:bg-[#E7F0E1] flex items-center justify-center text-[#233122] font-semibold transition-colors min-h-[32px] min-w-[32px]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono text-sm font-bold w-6 text-center tabular-nums">{quantities.child}</span>
                  <button 
                    onClick={() => updateQuantity("child", "inc")}
                    className="w-8 h-8 rounded-full bg-white hover:bg-[#E7F0E1] flex items-center justify-center text-[#233122] font-semibold transition-colors min-h-[32px] min-w-[32px]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Senior */}
              <div className="flex items-center justify-between bg-[#E7F0E1]/40 p-3 rounded-2xl border border-[#233122]/5">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#233122]">{labels.senior}</h4>
                  <span className="font-mono text-xs text-[#6F8F5B] tabular-nums">{prices.senior} {labels.currency}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => updateQuantity("senior", "dec")}
                    className="w-8 h-8 rounded-full bg-white hover:bg-[#E7F0E1] flex items-center justify-center text-[#233122] font-semibold transition-colors min-h-[32px] min-w-[32px]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono text-sm font-bold w-6 text-center tabular-nums">{quantities.senior}</span>
                  <button 
                    onClick={() => updateQuantity("senior", "inc")}
                    className="w-8 h-8 rounded-full bg-white hover:bg-[#E7F0E1] flex items-center justify-center text-[#233122] font-semibold transition-colors min-h-[32px] min-w-[32px]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-[#233122]/10 pt-4 flex items-center justify-between font-serif">
              <span className="font-bold text-base text-[#5E6B5C]">{labels.total}</span>
              <span className="font-bold text-2xl text-[#233122] tabular-nums">
                {totalCost} {labels.currency}
              </span>
            </div>

            {/* Payment Button */}
            <button
              onClick={handlePay}
              disabled={totalCost === 0}
              className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md ${
                totalCost > 0 
                  ? "bg-[#D77A4A] hover:bg-[#c2673a] text-[#F6F1E8] active:scale-95" 
                  : "bg-[#233122]/10 text-[#5E6B5C] cursor-not-allowed"
              }`}
            >
              <CreditCard className="w-4 h-4" />
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
              onClick={onClose}
              className="mt-4 bg-[#233122] hover:bg-[#4F6942] text-[#F6F1E8] px-8 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 min-h-[40px]"
            >
              {labels.close}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
