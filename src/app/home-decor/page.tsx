import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/motion/fade-in";
import { decorGrid, roomCategoryImages } from "@/lib/data/images";
import { getProductsByCategory } from "@/lib/data/products";
import { ProductCard } from "@/components/collections/product-card";

export const metadata: Metadata = {
  title: "Home Décor",
  description:
    "Shop artwork, lighting, decorative accessories, and seasonal collections at Hayden Furniture Depot.",
};

const decorCategories = [
  {
    name: "Artwork",
    description: "Framed prints & original pieces to complete any wall",
    image: roomCategoryImages.artwork,
    href: "/collections?category=artwork",
  },
  {
    name: "Lighting",
    description: "Floor, table & pendant lighting for every room",
    image: roomCategoryImages.lighting,
    href: "/collections?category=lighting",
  },
  {
    name: "Decorative Accessories",
    description: "Mirrors, rugs, pillows, and finishing touches",
    image: roomCategoryImages.homeDecor,
    href: "/collections?category=home-decor",
  },
  {
    name: "Seasonal Collections",
    description: "Refresh your home with the season",
    image: roomCategoryImages.accentFurniture,
    href: "/collections?category=accent-furniture",
  },
];

export default function HomeDecorPage() {
  const decorProducts = [
    ...getProductsByCategory("artwork"),
    ...getProductsByCategory("home-decor"),
    ...getProductsByCategory("lighting"),
  ];

  return (
    <div className="pb-24">
      <section className="relative h-svh min-h-[640px] w-full overflow-hidden">
        <Image
          src={decorGrid[3].image}
          alt="Home décor styling"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/55 to-transparent" />
        <div className="relative z-10 h-full container-xl flex flex-col justify-end pb-16 pt-20">
          <p className="text-gold-light font-medium tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
            Home Décor
          </p>
          <h1 className="font-heading text-white text-5xl sm:text-6xl lg:text-7xl font-semibold max-w-2xl text-balance leading-[1.05]">
            The finishing touches that make it home
          </h1>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-xl">
          <FadeUp className="max-w-2xl mb-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-balance">
              Shop by Category
            </h2>
          </FadeUp>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {decorCategories.map((c) => (
              <StaggerItem key={c.name}>
                <Link
                  href={c.href}
                  className="group relative block aspect-[16/10] overflow-hidden rounded-2xl bg-muted"
                >
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-heading text-white text-xl font-medium">
                      {c.name}
                    </h3>
                    <p className="text-white/70 text-sm mt-1">{c.description}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {decorProducts.length > 0 && (
        <section className="py-4 sm:py-8">
          <div className="container-xl">
            <FadeUp className="mb-10">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-balance">
                Featured Décor
              </h2>
            </FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {decorProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
