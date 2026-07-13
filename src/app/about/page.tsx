import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Truck, PackageCheck, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/motion/fade-in";
import { aboutImages } from "@/lib/data/images";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind Hayden Furniture Depot, a locally owned furniture showroom serving Coeur d'Alene and North Idaho.",
};

const timeline = [
  {
    year: "Our Roots",
    title: "A Local Beginning",
    description:
      "We started with one floor of a showroom on Haycraft Ave and a simple bet: North Idaho families would rather buy from someone who lives here too. That bet paid off.",
    image: aboutImages.story,
  },
  {
    year: "Our Community",
    title: "Built Around Neighbors",
    description:
      "You'll see our name at the same school fundraisers and farmers markets you go to. We're not chasing quarterly numbers for a head office three states away — this is the only store we've got.",
    image: aboutImages.community,
  },
  {
    year: "Our Promise",
    title: "Service That Follows Through",
    description:
      "If something's not right when it shows up at your door, call the same number you used to order it. You'll get a person, not a ticket queue.",
    image: aboutImages.delivery,
  },
];

const values = [
  {
    icon: Users,
    title: "Community Focus",
    description:
      "We're your neighbors first. Supporting local families, in furniture and beyond.",
  },
  {
    icon: Heart,
    title: "Customer Service Commitment",
    description:
      "Real conversations, honest recommendations, and follow-through after the sale.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description:
      "Careful, on-time delivery so your new furniture arrives ready to enjoy.",
  },
  {
    icon: PackageCheck,
    title: "Easy In-Store Pickup",
    description:
      "Prefer to grab it yourself? Pickup is fast, free, and always available.",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-24">
      <section className="relative h-svh min-h-[640px] w-full overflow-hidden">
        <Image
          src={aboutImages.showroom}
          alt="Hayden Furniture Depot showroom interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/55 to-transparent" />
        <div className="relative z-10 h-full container-xl flex flex-col justify-end pb-16 pt-20">
          <p className="text-black font-medium tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
            About Hayden Furniture Depot
          </p>
          <h1 className="font-heading text-white text-5xl sm:text-6xl lg:text-7xl font-semibold max-w-2xl text-balance leading-[1.05]">
            A Local Furniture Story, Built for Your Home
          </h1>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-xl max-w-3xl">
          <FadeUp>
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">
              Our Story
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-balance mb-6">
              Furnishing homes across North Idaho, one family at a time
            </h2>
            <p className="text-foreground/75 leading-relaxed text-lg">
              Walk in on a Saturday and there&apos;s a good chance you&apos;ll
              talk to the same person who helped set the floor plan that
              morning. That&apos;s the short version of who we are — a
              Coeur d&apos;Alene furniture store that grew up alongside the
              families who shop here, still small enough to remember what
              you bought last time.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-4 sm:py-8">
        <div className="container-xl flex flex-col gap-14 sm:gap-16">
          {timeline.map((item, i) => (
            <FadeUp key={item.title} direction={i % 2 === 1 ? "right" : "left"}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">
                    {item.year}
                  </p>
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold mb-4 text-balance">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-secondary/40 mt-14 sm:mt-16">
        <div className="container-xl">
          <FadeUp className="max-w-2xl mb-10 mx-auto text-center">
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">
              Why Shop Local
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-balance">
              What you can count on
            </h2>
          </FadeUp>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-2xl bg-card border border-border/60 p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold mb-5">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-heading text-lg font-medium mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-xl">
          <FadeUp className="rounded-3xl bg-espresso text-cream px-8 py-14 sm:px-16 sm:py-16 text-center flex flex-col items-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-balance max-w-xl">
              Come experience it in person
            </h2>
            <p className="text-cream/70 mt-4 max-w-lg">
              Visit our Coeur d&apos;Alene showroom, call us, or reach out
              online — we&apos;d love to help you furnish your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                className="rounded-full bg-gold text-white hover:bg-gold-light px-8"
                render={<Link href="/contact" />}
              >
                Visit Our Showroom
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-cream/40 text-cream bg-transparent hover:bg-cream/10 hover:text-cream px-8"
                render={<a href={site.phoneHref} />}
              >
                Call {site.phone}
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
