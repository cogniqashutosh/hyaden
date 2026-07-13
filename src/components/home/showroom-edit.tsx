"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { FadeUp } from "@/components/motion/fade-in";
import { featuredCollections } from "@/lib/data/images";
import { products } from "@/lib/data/products";
import { cn } from "@/lib/utils";

const spotlight = featuredCollections[0];
const picks = products.filter(
  (product, index, all) =>
    all.findIndex((p) => p.category === product.category) === index
).slice(0, 4);

function PickCard({ product }: { product: (typeof picks)[number] }) {
  const [wishlisted, setWishlisted] = useState(false);
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl bg-muted">
      <Link href={`/products/${product.slug}`} className="absolute inset-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </Link>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent pointer-events-none" />
      <button
        onClick={() => setWishlisted((w) => !w)}
        aria-label={
          wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`
        }
        aria-pressed={wishlisted}
        className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-espresso hover:bg-white transition-colors"
      >
        <Heart className={cn("h-4 w-4", wishlisted && "fill-barn-red text-barn-red")} />
      </button>
      <Link
        href={`/products/${product.slug}`}
        className="absolute inset-x-0 bottom-0 p-4"
      >
        <h3 className="font-medium text-sm text-white leading-tight">
          {product.name}
        </h3>
        <p className="text-sm font-semibold text-white/90 mt-0.5">
          ${product.price.toLocaleString()}
        </p>
      </Link>
    </div>
  );
}

export function ShowroomEdit() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container-xl">
        <FadeUp className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <p className="text-foreground font-medium tracking-[0.2em] uppercase text-xs mb-3">
              The Showroom Edit
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-foreground text-balance">
              This week&apos;s featured picks
            </h2>
          </div>
          <div className="flex gap-5 shrink-0">
            <Link
              href="/collections"
              className="text-sm font-medium text-foreground underline underline-offset-4 decoration-barn-red decoration-2 hover:text-barn-red transition-colors"
            >
              All Collections
            </Link>
            <Link
              href="/collections"
              className="text-sm font-medium text-foreground underline underline-offset-4 decoration-barn-red decoration-2 hover:text-barn-red transition-colors"
            >
              Best Sellers
            </Link>
          </div>
        </FadeUp>

        <FadeUp
          delay={0.05}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5 sm:gap-6 lg:h-[640px]"
        >
          <Link
            href="/collections"
            className="group relative block overflow-hidden rounded-3xl bg-muted aspect-4/5 lg:aspect-auto lg:h-full sm:col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <Image
              src={spotlight.image}
              alt={spotlight.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="inline-block rounded-full bg-black/90 px-3 py-1 text-xs uppercase tracking-[0.2em] font-medium text-white mb-2">
                Featured Collection
              </span>
              <h3 className="font-heading text-white text-2xl sm:text-3xl font-semibold text-balance">
                {spotlight.title}
              </h3>
              <p className="text-white/70 text-sm mt-2 max-w-xs">
                {spotlight.subtitle}
              </p>
              <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-white border-b border-gold pb-1 group-hover:gap-2.5 transition-all">
                Shop the Collection
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          {picks.map((p) => (
            <div key={p.slug} className="aspect-square lg:aspect-auto lg:h-full">
              <PickCard product={p} />
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
