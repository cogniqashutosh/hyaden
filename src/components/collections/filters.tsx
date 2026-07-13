"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data/products";

export type FilterState = {
  categorySlugs: string[];
  materials: string[];
  styles: string[];
  colors: string[];
  maxPrice: number;
  inStockOnly: boolean;
};

export const materialOptions = ["Wood", "Leather", "Velvet", "Linen", "Metal", "Marble", "Foam"];
export const styleOptions = ["Modern", "Traditional", "Farmhouse", "Mid-Century", "Coastal"];
export const colorOptions: { name: string; hex: string }[] = [
  { name: "Neutral", hex: "#e7ddc9" },
  { name: "Green", hex: "#3f5d4f" },
  { name: "Blue", hex: "#3a5570" },
  { name: "Brown", hex: "#6b4a35" },
  { name: "Black", hex: "#1c1c1c" },
  { name: "Gold", hex: "#c69a3e" },
];

export const MAX_PRICE = 2500;

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export function FiltersPanel({
  filters,
  onChange,
}: {
  filters: FilterState;
  onChange: (next: FilterState) => void;
}) {
  const hasActiveFilters =
    filters.categorySlugs.length > 0 ||
    filters.materials.length > 0 ||
    filters.styles.length > 0 ||
    filters.colors.length > 0 ||
    filters.inStockOnly ||
    filters.maxPrice < MAX_PRICE;

  return (
    <div className="flex flex-col gap-7">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-lg font-medium">Filters</h2>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-muted-foreground h-auto py-1"
            onClick={() =>
              onChange({
                categorySlugs: [],
                materials: [],
                styles: [],
                colors: [],
                maxPrice: MAX_PRICE,
                inStockOnly: false,
              })
            }
          >
            Clear all
          </Button>
        )}
      </div>

      <div>
        <h3 className="text-sm font-medium mb-3">Category</h3>
        <div className="flex flex-col gap-2.5">
          {categories.map((c) => (
            <label key={c.slug} className="flex items-center gap-2.5 text-sm cursor-pointer">
              <Checkbox
                checked={filters.categorySlugs.includes(c.slug)}
                onCheckedChange={() =>
                  onChange({
                    ...filters,
                    categorySlugs: toggle(filters.categorySlugs, c.slug),
                  })
                }
              />
              <span className="text-foreground/80">{c.name}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-sm font-medium mb-3">
          Price{" "}
          <span className="text-muted-foreground font-normal">
            (up to ${filters.maxPrice.toLocaleString()})
          </span>
        </h3>
        <Slider
          min={0}
          max={MAX_PRICE}
          step={50}
          value={[filters.maxPrice]}
          onValueChange={(v) =>
            onChange({ ...filters, maxPrice: Array.isArray(v) ? v[0] : v })
          }
        />
      </div>

      <Separator />

      <div>
        <h3 className="text-sm font-medium mb-3">Material</h3>
        <div className="flex flex-col gap-2.5">
          {materialOptions.map((m) => (
            <label key={m} className="flex items-center gap-2.5 text-sm cursor-pointer">
              <Checkbox
                checked={filters.materials.includes(m)}
                onCheckedChange={() =>
                  onChange({ ...filters, materials: toggle(filters.materials, m) })
                }
              />
              <span className="text-foreground/80">{m}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-sm font-medium mb-3">Style</h3>
        <div className="flex flex-col gap-2.5">
          {styleOptions.map((s) => (
            <label key={s} className="flex items-center gap-2.5 text-sm cursor-pointer">
              <Checkbox
                checked={filters.styles.includes(s)}
                onCheckedChange={() =>
                  onChange({ ...filters, styles: toggle(filters.styles, s) })
                }
              />
              <span className="text-foreground/80">{s}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-sm font-medium mb-3">Color</h3>
        <div className="flex flex-wrap gap-2.5">
          {colorOptions.map((c) => {
            const active = filters.colors.includes(c.name);
            return (
              <button
                key={c.name}
                type="button"
                aria-label={c.name}
                aria-pressed={active}
                onClick={() => onChange({ ...filters, colors: toggle(filters.colors, c.name) })}
                className={`h-8 w-8 rounded-full ring-offset-2 ring-offset-background transition-shadow ${
                  active ? "ring-2 ring-gold" : "ring-1 ring-border"
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            );
          })}
        </div>
      </div>

      <Separator />

      <label className="flex items-center gap-2.5 text-sm cursor-pointer">
        <Checkbox
          checked={filters.inStockOnly}
          onCheckedChange={(v) => onChange({ ...filters, inStockOnly: v === true })}
        />
        <span className="text-foreground/80">In stock only</span>
      </label>
    </div>
  );
}
