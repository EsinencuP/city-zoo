import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Compass } from "lucide-react";
import { translations } from "../data/translations";
import { animals, Animal } from "../data/animals";
import { animalImages } from "../data/animalImages";
import { staggerItem } from "../lib/motion";
import SectionShell from "./ui/SectionShell";
import StaggeredList from "./motion/StaggeredList";
import FloatingLeaves from "./decorative/FloatingLeaves";
import LeafCorner from "./decorative/LeafCorner";

interface FeaturedAnimalsProps {
  lang: "ru" | "ro" | "en";
  onSelectAnimal: (animal: Animal) => void;
}


function AnimalCard({ animal, lang, onSelectAnimal, featured = false }: { animal: Animal; lang: "ru" | "ro" | "en"; onSelectAnimal: (animal: Animal) => void; featured?: boolean; key?: string }) {
  const t = translations[lang].featuredAnimals;

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -4 }}
      className={[
        "group relative overflow-hidden rounded-[34px] bg-cream shadow-soft-card transition-[box-shadow] duration-200 hover:shadow-soft-card-hover",
        featured ? "md:col-span-2 lg:col-span-2" : ""
      ].join(" ")}
      id={`featured-animal-card-${animal.id}`}
    >
      <div className={featured ? "grid min-h-full md:grid-cols-[1.1fr_0.9fr]" : "flex h-full flex-col"}>
        <div className={featured ? "relative min-h-[320px] overflow-hidden" : "relative h-60 overflow-hidden"}>
          <img
            src={animalImages[animal.id] || animalImages.tiger}
            alt={animal.name[lang]}
            loading={featured ? "eager" : "lazy"}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canopy/55 via-transparent to-transparent" />
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
            <h3 className="font-serif text-2xl font-semibold leading-[1.05] tracking-[-0.035em] text-canopy text-balance sm:text-3xl">
              {animal.name[lang]}
            </h3>
            <p className="mt-2 font-mono text-xs italic text-leaf">{animal.latinName}</p>
            <p className="mt-4 text-sm leading-6 text-moss text-pretty">{animal.shortFact[lang]}</p>
          </div>

          <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-canopy/8 pt-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-mint px-3 py-1.5 font-mono text-[10px] font-semibold text-canopy">
              <Sparkles className="h-3.5 w-3.5 text-terracotta" />
              <span>{animal.feedingTime[lang]}</span>
            </div>
            <button
              onClick={() => onSelectAnimal(animal)}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-terracotta transition-[transform,background-color,color] duration-200 hover:-translate-y-0.5 hover:bg-mint active:scale-[0.96] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-terracotta/25"
              id={`animal-card-action-${animal.id}`}
            >
              <span>{t.ctaDetail}</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function FeaturedAnimals({ lang, onSelectAnimal }: FeaturedAnimalsProps) {
  const t = translations[lang].featuredAnimals;
  const [featured, ...rest] = animals;

  return (
    <SectionShell
      id="animals"
      tone="cream"
      eyebrow="Editorial wildlife"
      title={t.title}
      description={t.subtitle}
      headerAlign="center"
      className="relative"
    >
      <FloatingLeaves count={3} />
      <LeafCorner className="left-0 top-28 h-36 w-36" />
      <StaggeredList className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimalCard animal={featured} lang={lang} onSelectAnimal={onSelectAnimal} featured />
        {rest.slice(0, 5).map((animal) => (
          <AnimalCard key={animal.id} animal={animal} lang={lang} onSelectAnimal={onSelectAnimal} />
        ))}
      </StaggeredList>
    </SectionShell>
  );
}
