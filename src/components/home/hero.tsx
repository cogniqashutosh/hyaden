"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroImage } from "@/lib/data/images";

export function Hero() {
  return (
    <section className="relative h-svh min-h-[640px] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      {/* Base darkening so light hero copy stays legible over the photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
      {/* Dedicated fade behind the fixed nav so logo/menu/CTA stay legible regardless of scroll or image brightness */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/55 to-transparent" />

      <div className="relative z-10 h-full container-xl flex flex-col justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-9 bg-white/70" />
          <p className="text-white/85 font-medium tracking-[0.2em] uppercase text-xs sm:text-sm">
            Coeur d&apos;Alene&apos;s Local Furniture Showroom
          </p>
        </motion.div>

        <h1 className="font-heading text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-3xl text-balance">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="block font-semibold"
          >
            Beautiful Furniture
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="block font-semibold text-white"
          >
            Inspired Living
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-6 text-white/85 text-lg sm:text-xl max-w-xl leading-relaxed text-balance"
        >
          Discover quality furniture, home décor, artwork, and lighting to
          create a home you&apos;ll love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.44 }}
          className="mt-9 flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            className="h-13 rounded-full bg-barn-red px-8 text-base text-white hover:bg-barn-red/85"
            render={<Link href="/collections" />}
          >
            Browse Collections
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-13 rounded-full border-white/70 bg-white/0 px-8 text-base text-white hover:bg-white/10 hover:text-white"
            render={<Link href="/contact" />}
          >
            Visit Our Showroom
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/80"
      >
        <span className="text-[11px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
