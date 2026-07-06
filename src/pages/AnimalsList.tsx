import React, { useState } from "react";
import { Compass, Sparkles, ArrowRight, Search, TreePine, Filter } from "lucide-react";
import { animals, Animal } from "../data/animals";
import { translations } from "../data/translations";

interface AnimalsListProps {
  lang: "ru" | "ro" | "en";
  onSelectAnimal: (animal: Animal) => void;
}

export default function AnimalsList({ lang, onSelectAnimal }: AnimalsListProps) {
  const t = translations[lang];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBiome, setSelectedBiome] = useState<string>("all");

  // Get unique list of biomes from our animal dataset
  const biomes = [
    { id: "all", name: lang === "ru" ? "Все вольеры" : lang === "ro" ? "Toate biomele" : "All Biomes" },
    { id: "Siberian Taiga", name: lang === "ru" ? "Сибирская тайга" : lang === "ro" ? "Taiga Siberiană" : "Siberian Taiga" },
    { id: "Himalayan Foothills", name: lang === "ru" ? "Гималайские предгорья" : lang === "ro" ? "Poalele Himalayei" : "Himalayan Foothills" },
    { id: "Alpine Meadows", name: lang === "ru" ? "Альпийские луга" : lang === "ro" ? "Pajiști Alpine" : "Alpine Meadows" },
    { id: "Carpathian Woods", name: lang === "ru" ? "Карпатские леса" : lang === "ro" ? "Codrii Carpaților" : "Carpathian Woods" },
    { id: "Balkan Crags", name: lang === "ru" ? "Балканские кручи" : lang === "ro" ? "Stâncile Balcanice" : "Balkan Crags" },
    { id: "Moldavian Steppes", name: lang === "ru" ? "Молдавские степи" : lang === "ro" ? "Stepele Moldovei" : "Moldavian Steppes" }
  ];

  const filteredAnimals = animals.filter((animal) => {
    const nameMatch = animal.name[lang].toLowerCase().includes(searchTerm.toLowerCase()) || 
                      animal.latinName.toLowerCase().includes(searchTerm.toLowerCase());
    const biomeMatch = selectedBiome === "all" || animal.biome[lang] === selectedBiome || animal.biome.en === selectedBiome;
    return nameMatch && biomeMatch;
  });

  // Habitats SVG illustration switcher
  const renderAnimalThumbnail = (id: string) => {
    switch (id) {
      case "tiger":
        return (
          <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
            <rect width="120" height="120" rx="20" fill="#E7F0E1" />
            <path d="M10,110 C50,60 70,110 110,80 L110,120 Z" fill="#6F8F5B" opacity="0.6" />
            <circle cx="90" cy="40" r="15" fill="#D77A4A" opacity="0.9" />
            <path d="M80,45 L100,45" stroke="#233122" strokeWidth="4" strokeLinecap="round" />
            <path d="M85,35 L98,38" stroke="#233122" strokeWidth="4" strokeLinecap="round" />
            <path d="M30,80 Q50,70 70,85" stroke="#233122" strokeWidth="3" fill="none" />
          </svg>
        );
      case "red_panda":
        return (
          <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
            <rect width="120" height="120" rx="20" fill="#F6F1E8" />
            <path d="M10,120 Q60,20 110,120 Z" fill="#D77A4A" opacity="0.8" />
            <circle cx="60" cy="50" r="12" fill="#F6F1E8" />
            <circle cx="56" cy="48" r="2" fill="#233122" />
            <circle cx="64" cy="48" r="2" fill="#233122" />
            <path d="M20,60 Q40,30 30,90" stroke="#6F8F5B" strokeWidth="3" fill="none" />
          </svg>
        );
      case "snow_leopard":
        return (
          <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
            <rect width="120" height="120" rx="20" fill="#E2E8F0" />
            <polygon points="10,120 60,30 110,120" fill="#7A8A99" opacity="0.7" />
            <circle cx="60" cy="65" r="10" fill="#F6F1E8" />
            <circle cx="58" cy="63" r="1.5" fill="#233122" />
            <circle cx="62" cy="63" r="1.5" fill="#233122" />
            <circle cx="45" cy="85" r="3" fill="#233122" opacity="0.6" />
            <circle cx="75" cy="85" r="3" fill="#233122" opacity="0.6" />
          </svg>
        );
      case "lynx":
        return (
          <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
            <rect width="120" height="120" rx="20" fill="#E7F0E1" />
            <line x1="60" y1="20" x2="60" y2="100" stroke="#4F6942" strokeWidth="6" strokeLinecap="round" />
            <polygon points="50,40 70,40 60,10" fill="#233122" />
            <circle cx="60" cy="55" r="12" fill="#D5C29D" />
          </svg>
        );
      case "amur_leopard":
        return (
          <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
            <rect width="120" height="120" rx="20" fill="#F5E6D3" />
            <circle cx="80" cy="50" r="18" fill="#D77A4A" opacity="0.9" />
            <circle cx="75" cy="45" r="2.5" fill="#233122" />
            <circle cx="85" cy="45" r="2.5" fill="#233122" />
            <circle cx="80" cy="55" r="2.5" fill="#233122" />
            <path d="M10,100 C40,70 80,110 110,90 L110,120 Z" fill="#4F6942" opacity="0.5" />
          </svg>
        );
      case "brown_bear":
        return (
          <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
            <rect width="120" height="120" rx="20" fill="#EFE9E1" />
            <circle cx="60" cy="65" r="25" fill="#5C4D3C" />
            <circle cx="45" cy="45" r="8" fill="#5C4D3C" />
            <circle cx="75" cy="45" r="8" fill="#5C4D3C" />
            <ellipse cx="60" cy="70" r="10" ry="7" fill="#D1C2B0" />
          </svg>
        );
      case "peregrine_falcon":
        return (
          <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
            <rect width="120" height="120" rx="20" fill="#E2EDF8" />
            <path d="M20,60 Q60,10 100,60 Q60,110 20,60 Z" fill="#577080" opacity="0.8" />
            <circle cx="60" cy="60" r="14" fill="#F6F1E8" />
            <polygon points="58,54 62,54 60,68" fill="#233122" />
          </svg>
        );
      case "wolf":
        return (
          <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
            <rect width="120" height="120" rx="20" fill="#E3E6E0" />
            <polygon points="40,90 60,30 80,90" fill="#7A8074" />
            <circle cx="50" cy="65" r="3" fill="#D77A4A" />
            <circle cx="70" cy="65" r="3" fill="#D77A4A" />
            <path d="M30,110 Q60,95 90,110" stroke="#233122" strokeWidth="2" fill="none" />
          </svg>
        );
      case "bison":
        return (
          <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
            <rect width="120" height="120" rx="20" fill="#DFE2DD" />
            <rect x="30" y="45" width="60" height="50" rx="10" fill="#4D5940" />
            <path d="M25,50 Q20,35 35,42" stroke="#233122" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M95,50 Q100,35 85,42" stroke="#233122" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
            <rect width="120" height="120" rx="20" fill="#EDF2F7" />
            <circle cx="60" cy="60" r="24" fill="#F6F1E8" stroke="#96A0B0" strokeWidth="1.5" />
            <circle cx="48" cy="55" r="6" fill="#ECC94B" />
            <circle cx="48" cy="55" r="2.5" fill="#233122" />
            <circle cx="72" cy="55" r="6" fill="#ECC94B" />
            <circle cx="72" cy="55" r="2.5" fill="#233122" />
            <polygon points="60,56 63,64 57,64" fill="#233122" />
          </svg>
        );
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-12 animate-in fade-in duration-300">
      
      {/* Editorial Title Block */}
      <div className="text-center md:text-left mb-10 border-b border-[#233122]/10 pb-6">
        <span className="font-mono text-xs text-[#6F8F5B] uppercase tracking-widest block mb-2">
          {lang === "ru" ? "Иллюстрированный Справочник Животных" : lang === "ro" ? "Ghidul Ilustrat al Animalelor" : "Illustrated Animal Sanctuary Directory"}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#233122]">
          {lang === "ru" ? "Жители Zoo" : lang === "ro" ? "Locatarii Zoo" : "Zoo Residents"}
        </h1>
        <p className="text-[#5E6B5C] text-sm sm:text-base mt-2 max-w-2xl">
          {lang === "ru" ? "Каждая карточка содержит полную информацию о виде, его привычках, статусе охраны и времени кормления." :
           lang === "ro" ? "Fiecare fișă conține informații complete despre specie, obiceiuri, statutul de conservare și orele de hrănire." :
           "Each species profile contains comprehensive biological data, specific habitat guidelines, conservation status, and caretaker feeds."}
        </p>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="bg-[#E7F0E1] border border-[#233122]/10 rounded-3xl p-6 mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
        
        {/* Search */}
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5E6B5C]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={lang === "ru" ? "Поиск по названию..." : lang === "ro" ? "Caută după nume..." : "Search by common or latin name..."}
            className="w-full bg-[#F6F1E8] text-[#233122] pl-11 pr-4 py-3 rounded-2xl border border-[#233122]/10 focus:outline-none focus:ring-1 focus:ring-[#6F8F5B] text-sm shadow-sm"
          />
        </div>

        {/* Biome quick selectors */}
        <div className="flex flex-wrap gap-2 w-full lg:w-auto">
          {biomes.map((biome) => (
            <button
              key={biome.id}
              onClick={() => setSelectedBiome(biome.id)}
              className={`text-xs font-semibold px-4 py-2 rounded-xl border transition-all duration-150 ${
                selectedBiome === biome.id 
                  ? "bg-[#6F8F5B] border-[#6F8F5B] text-[#F6F1E8] shadow-sm"
                  : "bg-[#F6F1E8] border-[#233122]/15 text-[#5E6B5C] hover:text-[#233122] hover:bg-[#F6F1E8]/70"
              }`}
            >
              {biome.name}
            </button>
          ))}
        </div>

      </div>

      {/* ANIMAL GRID COUNT */}
      <div className="mb-6 font-mono text-xs text-[#5E6B5C] flex items-center justify-between">
        <span>{lang === "ru" ? `Найдено: ${filteredAnimals.length}` : lang === "ro" ? `Găsite: ${filteredAnimals.length}` : `Results: ${filteredAnimals.length}`}</span>
      </div>

      {/* RESULTS GRID */}
      {filteredAnimals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredAnimals.map((animal) => (
            <div 
              key={animal.id}
              className="bg-[#F6F1E8] rounded-[28px] p-6 border border-[#233122]/10 shadow-sm flex flex-col sm:flex-row gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-center bg-gradient-to-br from-[#E7F0E1] to-[#F6F1E8] rounded-[20px] p-2 self-start shrink-0">
                {renderAnimalThumbnail(animal.id)}
              </div>

              <div className="flex flex-col justify-between gap-4 w-full">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase text-[#5E6B5C] tracking-widest font-semibold flex items-center gap-1">
                      <Compass className="w-3 h-3 text-[#6F8F5B]" />
                      <span>{t.featuredAnimals.biomeLabel}</span>
                    </span>
                    <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider ${animal.biomeColor}`}>
                      {animal.biome[lang]}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#233122] leading-snug">
                    {animal.name[lang]}
                  </h3>

                  <p className="font-mono text-xs text-[#6F8F5B] italic leading-none">
                    {animal.latinName}
                  </p>

                  <p className="text-sm text-[#5E6B5C] mt-1 leading-relaxed text-pretty">
                    {animal.shortFact[lang]}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-[#233122]/5 pt-4 mt-1">
                  <div className="font-mono text-[10px] text-[#233122] bg-[#E7F0E1] px-2.5 py-1 rounded-md flex items-center gap-1 font-semibold">
                    <Sparkles className="w-3 h-3 text-[#D77A4A]" />
                    <span>{animal.feedingTime[lang]}</span>
                  </div>

                  <button
                    onClick={() => onSelectAnimal(animal)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D77A4A] hover:text-[#c2673a] transition-all group py-1.5 px-3 rounded-lg hover:bg-[#E7F0E1]/40"
                  >
                    <span>{t.featuredAnimals.ctaDetail}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-[#F6F1E8] border border-[#233122]/10 rounded-3xl">
          <TreePine className="w-12 h-12 text-[#6F8F5B]/40 mx-auto mb-4" />
          <h3 className="font-serif text-lg font-bold text-[#233122]">
            {lang === "ru" ? "Ничего не найдено" : lang === "ro" ? "Nu s-a găsit nimic" : "No Residents Found"}
          </h3>
          <p className="text-xs text-[#5E6B5C] mt-1">
            {lang === "ru" ? "Попробуйте изменить параметры поиска или фильтра." :
             lang === "ro" ? "Încercați să modificați parametrii de căutare." :
             "Try clearing your search query or choosing another habitat biome."}
          </p>
        </div>
      )}

    </div>
  );
}
