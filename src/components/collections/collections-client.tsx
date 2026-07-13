"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FiltersPanel, MAX_PRICE, type FilterState } from "@/components/collections/filters";
import { ProductCard } from "@/components/collections/product-card";
import { products } from "@/lib/data/products";

type SortKey = "featured" | "price-asc" | "price-desc" | "name-asc";

const defaultFilters: FilterState = {
  categorySlugs: [],
  materials: [],
  styles: [],
  colors: [],
  maxPrice: MAX_PRICE,
  inStockOnly: false,
};

export function CollectionsClient() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [filters, setFilters] = useState<FilterState>(() => ({
    ...defaultFilters,
    categorySlugs: categoryParam ? [categoryParam] : [],
  }));
  const [sort, setSort] = useState<SortKey>("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (
        filters.categorySlugs.length &&
        !filters.categorySlugs.includes(p.category)
      )
        return false;
      if (filters.materials.length && !filters.materials.includes(p.material))
        return false;
      if (filters.styles.length && !filters.styles.includes(p.style))
        return false;
      if (filters.colors.length && !filters.colors.includes(p.color))
        return false;
      if (p.price > filters.maxPrice) return false;
      if (filters.inStockOnly && !p.inStock) return false;
      return true;
    });

    result = [...result].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "name-asc") return a.name.localeCompare(b.name);
      return 0;
    });

    return result;
  }, [filters, sort]);

  return (
    <div className="container-xl pt-26 pb-8 sm:pt-28 sm:pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading text-3xl sm:text-4xl font-semibold">
            All Collections
          </h1>
          <p className="text-sm text-muted-foreground mt-1.5">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
            <SheetTrigger
              render={
                <Button variant="outline" className="lg:hidden rounded-full gap-2" />
              }
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </SheetTrigger>
            <SheetContent side="left" className="w-80 overflow-y-auto">
              <SheetHeader className="sr-only">
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="px-4 pb-8 pt-2">
                <FiltersPanel filters={filters} onChange={setFilters} />
              </div>
            </SheetContent>
          </Sheet>

          <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
            <SelectTrigger className="rounded-full h-10 px-4">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="name-asc">Name: A–Z</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <FiltersPanel filters={filters} onChange={setFilters} />
          </div>
        </aside>

        <div>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="font-heading text-xl mb-2">No products found</p>
              <p className="text-sm text-muted-foreground mb-6">
                Try adjusting or clearing your filters.
              </p>
              <Button variant="outline" onClick={() => setFilters(defaultFilters)}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
