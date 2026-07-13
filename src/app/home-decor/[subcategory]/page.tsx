import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryLanding } from "@/components/collections/category-landing";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/data/products";
import { decorGrid } from "@/lib/data/images";

const decorSubcategories: Record<
  string,
  { categorySlug: string; name: string; description: string; image?: string }
> = {
  artwork: {
    categorySlug: "artwork",
    name: "Artwork",
    description: "Framed prints and original pieces to complete any wall.",
  },
  lighting: {
    categorySlug: "lighting",
    name: "Lighting",
    description: "Floor, table, and pendant lighting for every room.",
  },
  accessories: {
    categorySlug: "home-decor",
    name: "Decorative Accessories",
    description: "Mirrors, rugs, pillows, and the finishing touches.",
  },
  seasonal: {
    categorySlug: "accent-furniture",
    name: "Seasonal Collections",
    description: "Statement pieces to refresh your home with the season.",
    image: decorGrid[5].image,
  },
};

export function generateStaticParams() {
  return Object.keys(decorSubcategories).map((subcategory) => ({ subcategory }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subcategory: string }>;
}): Promise<Metadata> {
  const { subcategory } = await params;
  const found = decorSubcategories[subcategory];
  if (!found) return {};
  return {
    title: found.name,
    description: `Shop ${found.name.toLowerCase()} at Hayden Furniture Depot in Coeur d'Alene, Idaho. ${found.description}`,
  };
}

export default async function DecorSubcategoryPage({
  params,
}: {
  params: Promise<{ subcategory: string }>;
}) {
  const { subcategory } = await params;
  const found = decorSubcategories[subcategory];
  if (!found) notFound();

  const category = getCategoryBySlug(found.categorySlug);
  const products = getProductsByCategory(found.categorySlug);

  return (
    <CategoryLanding
      eyebrow="Home Décor"
      name={found.name}
      description={found.description}
      image={found.image ?? category?.image ?? decorGrid[0].image}
      products={products}
      breadcrumbLabel="Home Décor"
    />
  );
}
