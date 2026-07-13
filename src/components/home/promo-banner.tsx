"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-in";
import { roomCategoryImages } from "@/lib/data/images";

export function PromoBanner() {
  return (
    <section className="py-12 sm:py-14">
      <div className="container-xl">
        <FadeUp>
          <div className="relative overflow-hidden rounded-3xl min-h-[380px] sm:min-h-[420px] flex items-center">
            <Image
              src={roomCategoryImages.diningRoom}
              alt="Dining room seasonal collection"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/60 to-espresso/10" />
            <div className="relative z-10 max-w-lg px-8 sm:px-14 py-12">
              <p className="text-white font-medium tracking-[0.2em] uppercase text-xs mb-4">
                Seasonal Sale
              </p>
              <h2 className="font-heading text-white text-3xl sm:text-4xl font-semibold leading-tight text-balance">
                Up to 25% off select dining &amp; living room collections
              </h2>
              <p className="text-white/75 mt-4 text-base">
                For a limited time — in-store and with select delivery
                options available.
              </p>
              <Button
                size="lg"
                className="mt-7 rounded-full bg-black text-white hover:bg-black/85 px-8"
                render={<Link href="/collections" />}
              >
                Shop the Sale
              </Button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
