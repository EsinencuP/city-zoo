import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Compass, Search, Sparkles, TreePine, X } from "lucide-react";
import { animals, Animal } from "../data/animals";
import { animalImages } from "../data/animalImages";
import { translations } from "../data/translations";
import { staggerItem } from "../lib/motion";
import SectionShell from "../components/ui/SectionShell";
import StaggeredList from "../components/motion/StaggeredList";
import FloatingLeaves from "../components/decorative/FloatingLeaves";
import LeafCorner from "../components/decorative/LeafCorner";

interface AnimalsListProps {
  lang: "ru" | "ro" | "en";
  onSelectAnimal: (animal: Animal) => void;
}

const copy = {
  ru: {
    eyebrow: "Справочник животных",
    title: "Жители Zoo",
    subtitle: "Ищите животное по названию или латинскому имени. Карточки сохраняют editorial wildlife подачу и быстро ведут к QR-профилю.",
    search: "Поиск по названию или латинскому имени",
    all: "Все биомы",
    results: "Найдено",
    clear: "Сбросить",
    emptyTitle: "Ничего не найдено",
    emptyText: "Измените поисковый запрос или выберите другой биом.",
    feeding: "Кормление"
  },
  ro: {
    eyebrow: "Ghidul animalelor",
    title: "Locuitorii Zoo",
    subtitle: "Căutați animalul după nume sau denumire latină. Cardurile păstrează stilul editorial wildlife și duc rapid la fișa QR.",
    search: "Căutare după nume sau denumire latină",
    all: "Toate biomurile",
    results: "Găsite",
    clear: "Resetează",
    emptyTitle: "Nu s-a găsit nimic",
    emptyText: "Schimbați termenul de căutare sau selectați alt biom.",
    feeding: "Hrănire"
  },
  en: {
    eyebrow: "Animal directory",
    title: "Zoo Residents",
    subtitle: "Search by common or Latin name. Cards keep the editorial wildlife rhythm and lead quickly to the QR profile.",
    search: "Search by name or Latin name",
    all: "All biomes",
    results: "Results",
    clear: "Clear",
    emptyTitle: "No residents found",
    emptyText: "Change your search term or choose another biome.",
    feeding: "Feeding"
  }
};

export default function AnimalsList({ lang, onSelectAnimal }: AnimalsListProps) {
  const t = translations[lang].featuredAnimals;
  const c = copy[lang];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBiome, setSelectedBiome] = useState<string>("all");

  const biomes = Array.from(new Map(animals.map((animal) => [animal.biome.en, animal.biome[lang]])).entries());

  const filteredAnimals = animals.filter((animal) => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const nameMatch =
      normalizedSearch.length === 0 ||
      animal.name[lang].toLowerCase().includes(normalizedSearch) ||
      animal.latinName.toLowerCase().includes(normalizedSearch);
    const biomeMatch = selectedBiome === "all" || animal.biome.en === selectedBiome;
    return nameMatch && biomeMatch;
  });

  return (
    <SectionShell
      id="animals-directory"
      tone="cream"
      eyebrow={c.eyebrow}
      title={c.title}
      description={c.subtitle}
      headerAlign="split"
      className="min-h-[70vh]"
    >
      <FloatingLeaves count={2} />
      <LeafCorner className="right-4 top-10 h-36 w-36" mirrored />

      <div className="mb-8 rounded-[34px] bg-mint/70 p-4 shadow-soft-card backdrop-blur-md md:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block w-full lg:max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-leaf" />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder={c.search}
              className="min-h-12 w-full rounded-full border border-canopy/10 bg-cream px-11 pr-4 text-sm font-semibold text-canopy shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] outline-none transition-[box-shadow,border-color] duration-200 placeholder:text-moss/70 focus:border-leaf/40 focus:ring-4 focus:ring-leaf/15"
            />
          </label>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedBiome("all")}
              className={["min-h-10 rounded-full px-4 text-xs font-bold uppercase tracking-[0.12em] transition-[background-color,color,transform] duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf/20", selectedBiome === "all" ? "bg-canopy text-cream" : "bg-cream text-moss hover:bg-mint-soft hover:text-canopy"].join(" ")}
            >
              {c.all}
            </button>
            {biomes.map(([id, name]) => (
              <button
                key={id}
                type="button"
                onClick={() => setSelectedBiome(id)}
                className={["min-h-10 rounded-full px-4 text-xs font-bold uppercase tracking-[0.12em] transition-[background-color,color,transform] duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf/20", selectedBiome === id ? "bg-leaf text-cream" : "bg-cream text-moss hover:bg-mint-soft hover:text-canopy"].join(" ")}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-canopy/8 pt-4 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-moss">
          <span>{c.results}: {filteredAnimals.length}</span>
          {(searchTerm || selectedBiome !== "all") && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedBiome("all");
              }}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-terracotta transition-colors duration-200 hover:bg-cream focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-terracotta/20"
            >
              <X className="h-3.5 w-3.5" />
              <span>{c.clear}</span>
            </button>
          )}
        </div>
      </div>

      {filteredAnimals.length > 0 ? (
        <StaggeredList className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredAnimals.map((animal, index) => (
            <motion.article
              key={animal.id}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className={["group relative overflow-hidden rounded-[34px] bg-cream shadow-soft-card transition-[box-shadow] duration-200 hover:shadow-soft-card-hover", index === 0 ? "xl:col-span-2" : ""].join(" ")}
            >
              <div className={index === 0 ? "grid h-full md:grid-cols-[1.08fr_0.92fr]" : "flex h-full flex-col"}>
                <div className={index === 0 ? "relative min-h-[320px] overflow-hidden" : "relative h-64 overflow-hidden"}>
                  <img
                    src={animalImages[animal.id] || animalImages.tiger}
                    alt={animal.name[lang]}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canopy/60 via-transparent to-transparent" />
                  <span className={`absolute left-5 top-5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] ${animal.biomeColor}`}>
                    {animal.biome[lang]}
                  </span>
                </div>

                <div className="relative flex flex-1 flex-col justify-between gap-7 p-6 sm:p-7">
                  <div className="absolute right-4 top-4 h-24 w-24 rounded-full bg-mint/60 blur-2xl" />
                  <div className="relative">
                    <div className="mb-3 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-leaf">
                      <Compass className="h-3.5 w-3.5" />
                      <span>{t.biomeLabel}</span>
                    </div>
                    <h2 className="font-serif text-2xl font-semibold leading-[1.05] tracking-[-0.035em] text-canopy text-balance sm:text-3xl">
                      {animal.name[lang]}
                    </h2>
                    <p className="mt-2 font-mono text-xs italic text-leaf">{animal.latinName}</p>
                    <p className="mt-4 text-sm leading-6 text-moss text-pretty">{animal.shortFact[lang]}</p>
                  </div>

                  <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-canopy/8 pt-4">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-mint px-3 py-1.5 font-mono text-[10px] font-semibold text-canopy">
                      <Sparkles className="h-3.5 w-3.5 text-terracotta" />
                      <span>{c.feeding}: {animal.feedingTime[lang]}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onSelectAnimal(animal)}
                      className="inline-flex min-h-10 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-terracotta transition-[transform,background-color,color] duration-200 hover:-translate-y-0.5 hover:bg-mint active:scale-[0.96] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-terracotta/25"
                      id={`animals-list-card-action-${animal.id}`}
                    >
                      <span>{t.ctaDetail}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </StaggeredList>
      ) : (
        <div className="rounded-[34px] bg-cream p-12 text-center shadow-soft-card">
          <TreePine className="mx-auto mb-4 h-12 w-12 text-leaf/45" />
          <h2 className="font-serif text-2xl font-semibold text-canopy">{c.emptyTitle}</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-moss">{c.emptyText}</p>
        </div>
      )}
    </SectionShell>
  );
}
