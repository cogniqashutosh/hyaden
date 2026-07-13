"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/motion/fade-in";
import { shopByRoom } from "@/lib/data/images";

export function ShopByRoom() {
  return (
    <section className="py-16 sm:py-20 bg-secondary/40">
      <div className="container-xl">
        <FadeUp className="flex flex-col items-center mb-10 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground whitespace-nowrap">
            Find inspiration for every space
          </h2>
        </FadeUp>
      </div>

      <div className="container-xl">
        <div className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-none">
          {shopByRoom.map((item) => (
            <Link
              key={item.room}
              href={`/collections?room=${encodeURIComponent(item.room)}`}
              className="group relative block shrink-0 w-[78%] sm:w-[45%] lg:w-[calc((100%-3rem)/3)] aspect-4/5 snap-start overflow-hidden rounded-2xl bg-muted"
            >
              <Image
                src={item.image}
                alt={item.room}
                fill
                sizes="(max-width: 1024px) 60vw, 31vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-2xl text-white font-medium tracking-wide border-b-2 border-transparent group-hover:border-gold pb-1 transition-colors">
                  {item.room}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-2 sm:hidden">
          Swipe to explore →
        </p>
      </div>
    </section>
  );
}
