"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/motion/fade-in";
import { decorGrid } from "@/lib/data/images";

export function DecorHighlights() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container-xl">
        <FadeUp className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <p className="text-foreground font-medium tracking-[0.2em] uppercase text-xs mb-3">
              Home Décor
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-foreground text-balance">
              The finishing touches that make it home
            </h2>
          </div>
          <Link
            href="/home-decor"
            className="text-sm font-medium text-foreground underline underline-offset-4 decoration-barn-red decoration-2 hover:text-barn-red transition-colors shrink-0"
          >
            Explore Home Décor
          </Link>
        </FadeUp>

        <StaggerGroup className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {decorGrid.map((item) => (
            <StaggerItem key={item.title}>
              <Link
                href="/home-decor"
                className="group relative block aspect-square overflow-hidden rounded-2xl bg-muted"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 right-4 font-heading text-white text-base sm:text-lg font-medium">
                  {item.title}
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
