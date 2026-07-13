"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart, Truck, PackageCheck, ShieldCheck, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeUp } from "@/components/motion/fade-in";
import { ProductCard } from "@/components/collections/product-card";
import {
  getCategoryBySlug,
  getRelatedProducts,
  type Product,
} from "@/lib/data/products";
import { cn } from "@/lib/utils";

export function ProductDetail({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const category = getCategoryBySlug(product.category);
  const related = getRelatedProducts(product, 4);

  return (
    <div className="pb-24">
      <div className="container-xl pt-24 pb-4">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/collections" className="hover:text-foreground">Collections</Link>
          {category && (
            <>
              <ChevronRight className="h-3 w-3" />
              <Link
                href={`/collections?category=${category.slug}`}
                className="hover:text-foreground"
              >
                {category.name}
              </Link>
            </>
          )}
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <FadeUp>
          <div className="flex flex-col gap-3">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted group">
              <Image
                src={product.gallery[activeImage]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.badge && product.inStock && (
                <Badge
                  className={cn(
                    "absolute top-4 left-4 border-none",
                    product.badge === "Sale"
                      ? "bg-barn-red text-white"
                      : "bg-gold text-white"
                  )}
                >
                  {product.badge}
                </Badge>
              )}
            </div>
            {product.gallery.length > 1 && (
              <div className="flex gap-3">
                {product.gallery.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(i)}
                    aria-label={`View image ${i + 1}`}
                    className={cn(
                      "relative h-20 w-20 shrink-0 rounded-xl overflow-hidden border-2 transition-colors",
                      activeImage === i ? "border-gold" : "border-transparent"
                    )}
                  >
                    <Image src={img} alt="" fill sizes="80px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-[0.15em] text-gold font-medium">
              {category?.name}
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl font-semibold mt-2 text-balance">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <span className="text-2xl font-semibold text-foreground">
                ${product.price.toLocaleString()}
              </span>
              {product.compareAtPrice && (
                <span className="text-base text-muted-foreground line-through">
                  ${product.compareAtPrice.toLocaleString()}
                </span>
              )}
              <Badge
                variant={product.inStock ? "secondary" : "outline"}
                className={product.inStock ? "bg-secondary text-secondary-foreground" : ""}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>

            <p className="text-foreground/75 leading-relaxed mt-6">
              {product.description}
            </p>

            <div className="mt-8 flex gap-3">
              <Button
                size="lg"
                disabled={!product.inStock}
                className="flex-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-13"
              >
                {product.inStock ? "Inquire About This Piece" : "Notify Me When Available"}
              </Button>
              <Button
                size="lg"
                variant="outline"
                aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                aria-pressed={wishlisted}
                onClick={() => setWishlisted((w) => !w)}
                className="rounded-full h-13 w-13 shrink-0 p-0"
              >
                <Heart className={cn("h-5 w-5", wishlisted && "fill-barn-red text-barn-red")} />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-8 text-center">
              <div className="flex flex-col items-center gap-1.5 rounded-xl border border-border p-3">
                <Truck className="h-4.5 w-4.5 text-gold" />
                <span className="text-[11px] text-muted-foreground leading-tight">
                  Delivery Available
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5 rounded-xl border border-border p-3">
                <PackageCheck className="h-4.5 w-4.5 text-gold" />
                <span className="text-[11px] text-muted-foreground leading-tight">
                  In-Store Pickup
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5 rounded-xl border border-border p-3">
                <ShieldCheck className="h-4.5 w-4.5 text-gold" />
                <span className="text-[11px] text-muted-foreground leading-tight">
                  Quality Guaranteed
                </span>
              </div>
            </div>

            <Accordion defaultValue={["materials"]} className="mt-10">
              <AccordionItem value="materials">
                <AccordionTrigger className="font-medium">
                  Materials &amp; Construction
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  {product.materials}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="dimensions">
                <AccordionTrigger className="font-medium">Dimensions</AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  {product.dimensions}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="delivery">
                <AccordionTrigger className="font-medium">
                  Delivery &amp; Pickup
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  Choose free in-store pickup at our Coeur d&apos;Alene showroom, or
                  ask about scheduled delivery to your home. Our team will
                  confirm timing when you place your order.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </FadeUp>
      </div>

      {related.length > 0 && (
        <section className="container-xl mt-14 sm:mt-16">
          <FadeUp>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold mb-8">
              You May Also Like
            </h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}

      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-sm px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{product.name}</p>
          <p className="text-sm font-semibold">${product.price.toLocaleString()}</p>
        </div>
        <Button
          disabled={!product.inStock}
          className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shrink-0"
        >
          {product.inStock ? "Inquire Now" : "Notify Me"}
        </Button>
      </div>
    </div>
  );
}
