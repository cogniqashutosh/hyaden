"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/data/products";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="group relative rounded-2xl bg-card border border-border/60 overflow-hidden">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-muted"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <Badge variant="secondary" className="bg-foreground text-background">
              Out of Stock
            </Badge>
          </div>
        )}
        {product.badge && product.inStock && (
          <Badge
            className={cn(
              "absolute top-3 left-3 border-none",
              product.badge === "Sale"
                ? "bg-barn-red text-white"
                : "bg-gold text-white"
            )}
          >
            {product.badge}
          </Badge>
        )}
        {product.inStock && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-medium text-espresso">
              <Eye className="h-3.5 w-3.5" />
              Quick View
            </span>
          </div>
        )}
      </Link>
      <button
        onClick={() => setWishlisted((w) => !w)}
        aria-label={
          wishlisted
            ? `Remove ${product.name} from wishlist`
            : `Add ${product.name} to wishlist`
        }
        aria-pressed={wishlisted}
        className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-espresso hover:bg-white transition-colors"
      >
        <Heart
          className={cn(
            "h-4 w-4 transition-colors",
            wishlisted && "fill-barn-red text-barn-red"
          )}
        />
      </button>

      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">
          {product.style}
        </p>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-medium text-sm text-foreground mt-0.5 line-clamp-1 hover:text-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">
            ${product.price.toLocaleString()}
          </span>
          {product.compareAtPrice && (
            <span className="text-xs text-muted-foreground line-through">
              ${product.compareAtPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
