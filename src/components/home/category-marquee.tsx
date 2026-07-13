"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Sofa,
  BedDouble,
  UtensilsCrossed,
  Moon,
  Lamp,
  Frame,
  Sparkles,
  Armchair,
  type LucideIcon,
} from "lucide-react";
import { FadeUp } from "@/components/motion/fade-in";
import { categories } from "@/lib/data/products";

const categoryIcons: Record<string, LucideIcon> = {
  "living-room": Sofa,
  bedroom: BedDouble,
  "dining-room": UtensilsCrossed,
  mattresses: Moon,
  lighting: Lamp,
  artwork: Frame,
  "home-decor": Sparkles,
  "accent-furniture": Armchair,
};

function CategoryCard({ cat }: { cat: (typeof categories)[number] }) {
  const Icon = categoryIcons[cat.slug] ?? Sofa;
  return (
    <Link
      href={`/collections?category=${cat.slug}`}
      className="group relative block w-64 sm:w-72 lg:w-96 shrink-0 snap-start aspect-4/5 overflow-hidden rounded-[28px] bg-muted ring-1 ring-border/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10 hover:ring-black/30"
    >
      <Image
        src={cat.image}
        alt={cat.name}
        fill
        sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 384px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/5" />
      <div className="absolute inset-x-0 top-0 p-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm ring-1 ring-white/20 transition-colors duration-300 group-hover:bg-espresso group-hover:text-cream">
          <Icon className="h-4.5 w-4.5" />
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-2">
        <div>
          <h3 className="font-heading text-white text-lg font-medium leading-tight">
            {cat.name}
          </h3>
          <p className="text-white/70 text-xs mt-1 leading-snug">
            {cat.description}
          </p>
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-espresso group-hover:text-cream">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

export function CategoryMarquee() {
  return (
    <section className="py-16 sm:py-20 bg-background overflow-hidden">
      <div className="container-xl">
        <FadeUp className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <p className="text-espresso font-medium tracking-[0.2em] uppercase text-xs mb-3">
              Shop by Category
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-foreground text-balance">
              Everything you need to furnish your home
            </h2>
          </div>
          <Link
            href="/collections"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline underline-offset-4 decoration-espresso decoration-2 hover:opacity-70 transition-opacity shrink-0"
          >
            View All Furniture
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </FadeUp>
      </div>

      <div className="container-xl">
        <div className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-none">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} cat={cat} />
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-2 sm:hidden">
          Swipe to explore →
        </p>
      </div>
    </section>
  );
}
