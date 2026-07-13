import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FadeUp } from "@/components/motion/fade-in";
import { ProductCard } from "@/components/collections/product-card";
import type { Product } from "@/lib/data/products";

export function CategoryLanding({
  eyebrow,
  name,
  description,
  image,
  products,
  breadcrumbLabel,
}: {
  eyebrow: string;
  name: string;
  description: string;
  image: string;
  products: Product[];
  breadcrumbLabel: string;
}) {
  return (
    <div className="pb-24">
      <section className="relative h-svh min-h-[640px] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/55 to-transparent" />
        <div className="relative z-10 h-full container-xl flex flex-col justify-end pb-16 pt-20">
          <nav className="flex items-center gap-1.5 text-xs text-white/70 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">{breadcrumbLabel}</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">{name}</span>
          </nav>
          <p className="text-gold-light font-medium tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
            {eyebrow}
          </p>
          <h1 className="font-heading text-white text-5xl sm:text-6xl lg:text-7xl font-semibold max-w-2xl text-balance leading-[1.05]">
            {name}
          </h1>
          <p className="text-white/80 mt-5 max-w-lg text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-xl">
          {products.length > 0 ? (
            <>
              <FadeUp className="flex items-end justify-between mb-8">
                <p className="text-sm text-muted-foreground">
                  {products.length} {products.length === 1 ? "product" : "products"}
                </p>
                <Link
                  href="/collections"
                  className="text-sm font-medium text-foreground underline underline-offset-4 decoration-gold decoration-2 hover:text-gold transition-colors"
                >
                  View All Collections
                </Link>
              </FadeUp>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {products.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center rounded-3xl border border-dashed border-border">
              <p className="font-heading text-xl mb-2">
                New {name} pieces are on the way
              </p>
              <p className="text-sm text-muted-foreground max-w-sm mb-6">
                Give us a call or stop by the showroom — we bring in new{" "}
                {name.toLowerCase()} inventory regularly and can help you find
                something in person.
              </p>
              <Link
                href="/collections"
                className="text-sm font-medium text-foreground underline underline-offset-4 decoration-gold decoration-2 hover:text-gold transition-colors"
              >
                Browse All Collections
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
