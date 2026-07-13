import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryLanding } from "@/components/collections/category-landing";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/data/products";

const furnitureCategorySlugs = [
  "living-room",
  "bedroom",
  "dining-room",
  "mattresses",
  "home-office",
  "accent-furniture",
];

export function generateStaticParams() {
  return furnitureCategorySlugs.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const found = getCategoryBySlug(category);
  if (!found) return {};
  return {
    title: `${found.name} Furniture`,
    description: `Shop ${found.name.toLowerCase()} furniture at Hayden Furniture Depot in Coeur d'Alene, Idaho. ${found.description}.`,
  };
}

export default async function FurnitureCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;

  if (!furnitureCategorySlugs.includes(slug)) notFound();

  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const products = getProductsByCategory(slug);

  return (
    <CategoryLanding
      eyebrow="Furniture"
      name={category.name}
      description={category.description}
      image={category.image}
      products={products}
      breadcrumbLabel="Furniture"
    />
  );
}
