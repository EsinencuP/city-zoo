import React from "react";
import { Clock, MapPin, Compass, Train, Car, ShieldAlert, Ticket } from "lucide-react";

interface VisitPageProps {
  lang: "ru" | "ro" | "en";
  onOpenTickets: () => void;
}

export default function VisitPage({ lang, onOpenTickets }: VisitPageProps) {
  const content = {
    ru: {
      title: "Спланируйте свой визит",
      subtitle: "Вся необходимая информация для комфортного и безопасного отдыха в Ботаническом саду и Зоопарке",
      hoursTitle: "Часы работы",
      hoursDesc: "Открыто ежедневно, включая праздничные дни",
      hoursWinter: "Зимний период (Октябрь - Апрель): 09:00 — 17:00",
      hoursSummer: "Летний период (Май - Сентябрь): 08:00 — 20:00",
      addressTitle: "Адрес и местоположение",
      addressDesc: "Кишиневский зоопарк расположен на зеленой окраине города, по адресу: бульвар Дачия, 50/7. До нас легко добраться как на общественном транспорте, так и на личном автомобиле.",
      transportTitle: "Как добраться",
      tBus: "Троллейбус № 4, Автобус № 19 (остановка «Ворота города», затем 10 минут пешком)",
      tCar: "По бульвару Дачия в сторону аэропорта, съезд направо по указателю «Зоопарк». Есть просторная бесплатная парковка.",
      rulesTitle: "Правила посещения",
      rule1: "Не кормите животных дикими продуктами. У них строгий, верифицированный научный рацион.",
      rule2: "Не заходите за ограждения вольеров ради вашей личной безопасности.",
      rule3: "Соблюдайте чистоту, выбрасывайте отходы только в специальные контейнеры.",
      ticketCTA: "Купить билет сейчас"
    },
    ro: {
      title: "Planifică-ți vizita",
      subtitle: "Toate informațiile necesare pentru o odihnă confortabilă și sigură în Grădina Botanică și Zoologică",
      hoursTitle: "Program de lucru",
      hoursDesc: "Deschis zilnic, inclusiv în zilele de sărbătoare",
      hoursWinter: "Perioada de iarnă (Octombrie - Aprilie): 09:00 — 17:00",
      hoursSummer: "Perioada de vară (Mai - Septembrie): 08:00 — 20:00",
      addressTitle: "Adresă și locație",
      addressDesc: "Grădina Zoologică din Chișinău este situată în zona verde a orașului, pe adresa: Bd. Dacia, 50/7. Este ușor de ajuns atât cu transportul public, cât și cu mașina personală.",
      transportTitle: "Cum ajungi la noi",
      tBus: "Troleibuzul nr. 4, Autobuzul nr. 19 (stația „Porțile Orașului”, urmată de o plimbare de 10 minute)",
      tCar: "Pe bulevardul Dacia spre aeroport, virați la dreapta conform indicatorului „Zoo”. Există parcare gratuită.",
      rulesTitle: "Reguli de vizitare",
      rule1: "Nu hrăniți animalele cu produse aduse. Ele au o dietă științifică strictă și verificată.",
      rule2: "Nu depășiți barierele de protecție pentru propria siguranță.",
      rule3: "Păstrați curățenia, aruncați deșeurile doar în locurile special amenajate.",
      ticketCTA: "Cumpără bilet acum"
    },
    en: {
      title: "Plan Your Visit",
      subtitle: "All the essential details for a peaceful, refreshing, and safe day out in our Botanical & Wildlife Sanctuary",
      hoursTitle: "Opening Hours",
      hoursDesc: "Open daily, including all public and seasonal holidays",
      hoursWinter: "Winter season (October - April): 09:00 AM — 05:00 PM",
      hoursSummer: "Summer season (May - September): 08:00 AM — 08:00 PM",
      addressTitle: "Address & Location",
      addressDesc: "Chisinau Zoo is nested in the scenic edge of the city at 50/7 Dacia Boulevard. Seamlessly reachable via both public transit and private vehicles.",
      transportTitle: "How to Get Here",
      tBus: "Trolleybus No. 4, Bus No. 19 (Exit at 'City Gates' station, followed by a 10-minute scenic walk)",
      tCar: "Drive along Dacia Boulevard towards the airport, then follow the sign 'Zoo' to the right. Spacious free parking space is available.",
      rulesTitle: "Sanctuary Guidelines",
      rule1: "Never feed the animals with outside items. They receive custom, scientific dietary plans.",
      rule2: "Never cross safety boundaries or fences for your own physical protection.",
      rule3: "Help protect botanical flora by discarding trash exclusively into marked recycling stations.",
      ticketCTA: "Purchase Tickets Online"
    }
  }[lang];

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-12 animate-in fade-in duration-300">
      
      {/* Title block */}
      <div className="text-center md:text-left mb-10 border-b border-[#233122]/10 pb-6">
        <span className="font-mono text-xs text-[#6F8F5B] uppercase tracking-widest block mb-2">Visitor Guide</span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#233122]">
          {content.title}
        </h1>
        <p className="text-[#5E6B5C] text-sm sm:text-base mt-2 max-w-2xl">
          {content.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* LEFT COLUMN: HOURS & TRANSPORT */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Hours Card */}
          <div className="bg-[#E7F0E1]/40 border border-[#233122]/10 p-6 sm:p-8 rounded-[28px] flex gap-5">
            <Clock className="w-8 h-8 text-[#6F8F5B] shrink-0 mt-1" />
            <div className="flex flex-col gap-3">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#233122]">
                {content.hoursTitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#5E6B5C]">
                {content.hoursDesc}
              </p>
              <div className="flex flex-col gap-2 font-mono text-xs text-[#233122] font-semibold mt-1">
                <div className="bg-[#F6F1E8] px-4 py-2.5 rounded-xl border border-[#233122]/5">
                  {content.hoursWinter}
                </div>
                <div className="bg-[#6F8F5B] text-[#F6F1E8] px-4 py-2.5 rounded-xl shadow-sm">
                  {content.hoursSummer}
                </div>
              </div>
            </div>
          </div>

          {/* Location & Transport Card */}
          <div className="bg-[#F6F1E8] border border-[#233122]/10 p-6 sm:p-8 rounded-[28px] flex flex-col gap-6">
            <div className="flex gap-5">
              <MapPin className="w-8 h-8 text-[#D77A4A] shrink-0" />
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#233122]">
                  {content.addressTitle}
                </h2>
                <p className="text-sm text-[#5E6B5C] mt-2 leading-relaxed">
                  {content.addressDesc}
                </p>
              </div>
            </div>

            <div className="border-t border-[#233122]/10 pt-6">
              <h3 className="font-serif font-bold text-base text-[#233122] mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#6F8F5B]" />
                <span>{content.transportTitle}</span>
              </h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-start bg-[#E7F0E1]/30 p-4 rounded-xl border border-[#233122]/5">
                  <Train className="w-5 h-5 text-[#6F8F5B] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#5E6B5C] leading-relaxed">
                    {content.tBus}
                  </p>
                </div>
                <div className="flex gap-3 items-start bg-[#E7F0E1]/30 p-4 rounded-xl border border-[#233122]/5">
                  <Car className="w-5 h-5 text-[#6F8F5B] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#5E6B5C] leading-relaxed">
                    {content.tCar}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: RULES & TICKETS DIRECT CTA */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Ticket Card CTA */}
          <div className="bg-[#D77A4A] text-[#F6F1E8] p-8 rounded-[28px] flex flex-col items-center text-center gap-4 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F6F1E8]/10 rounded-full blur-xl pointer-events-none" />
            <Ticket className="w-12 h-12 text-[#F6F1E8] mb-1 stroke-[1.5]" />
            <h2 className="font-serif text-2xl font-bold leading-tight">
              {lang === "ru" ? "Бесконтактный QR-Вход" : lang === "ro" ? "Intrare Rapidă cu QR" : "Contactless QR Entry Passes"}
            </h2>
            <p className="text-xs text-[#F6F1E8]/85 max-w-xs leading-relaxed">
              {lang === "ru" ? "Покупайте билеты заранее на нашем сайте. Вы получите электронный билет с QR-кодом для быстрого прохода." :
               lang === "ro" ? "Cumpărați bilete în avans. Veți primi un bilet electronic cu cod QR pentru acces rapid fără cozi." :
               "Buy electronic passes ahead of time. You'll receive instant QR-equipped tickets to bypass main turnstiles."}
            </p>
            <button
              onClick={onOpenTickets}
              className="mt-2 bg-[#233122] hover:bg-[#4F6942] text-[#F6F1E8] px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-md active:scale-95 hover:scale-[0.98] w-full min-h-[44px]"
            >
              {content.ticketCTA}
            </button>
          </div>

          {/* Rules Card */}
          <div className="bg-[#E7F0E1] border border-[#233122]/10 p-6 sm:p-8 rounded-[28px] flex flex-col gap-5">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#233122] flex items-center gap-2 border-b border-[#233122]/10 pb-3">
              <ShieldAlert className="w-5 h-5 text-[#D77A4A]" />
              <span>{content.rulesTitle}</span>
            </h2>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-[#5E6B5C] list-disc pl-4 leading-relaxed">
              <li>{content.rule1}</li>
              <li>{content.rule2}</li>
              <li>{content.rule3}</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}
