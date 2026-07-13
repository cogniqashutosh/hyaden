"use client";

import {
  MapPin,
  Tag,
  Truck,
  PackageCheck,
  Headset,
  Sparkles,
} from "lucide-react";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/motion/fade-in";

const reasons = [
  {
    icon: MapPin,
    title: "Locally Owned",
    description: "A trusted part of the Coeur d'Alene community.",
  },
  {
    icon: Tag,
    title: "Affordable Prices",
    description: "Quality furniture that fits your budget.",
  },
  {
    icon: Truck,
    title: "Convenient Delivery",
    description: "White-glove delivery to your door.",
  },
  {
    icon: PackageCheck,
    title: "In-Store Pickup",
    description: "Ready when you are, no wait required.",
  },
  {
    icon: Headset,
    title: "Customer Service",
    description: "Real people, ready to help you choose well.",
  },
  {
    icon: Sparkles,
    title: "Quality Furniture",
    description: "Pieces built to be lived in, for years to come.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container-xl">
        <div className="rounded-3xl bg-espresso text-cream px-6 py-12 sm:px-10 sm:py-16">
          <FadeUp className="flex flex-col items-center text-center mb-12 sm:mb-14">
            <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-balance">
              Why Choose Hayden Depot
            </h2>
            <p className="mt-4 text-cream/55 leading-relaxed text-sm max-w-md">
              We&apos;re not a warehouse chain — we&apos;re your neighbors on
              Haycraft Ave, and every piece that leaves our showroom has our
              name behind it.
            </p>
          </FadeUp>

          <StaggerGroup className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {reasons.map((r) => (
              <StaggerItem key={r.title}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-cream/10 bg-cream/3 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-cream hover:text-espresso">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors duration-300 group-hover:border-espresso/20 group-hover:text-espresso">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-heading text-base sm:text-lg font-medium mt-4">
                    {r.title}
                  </h3>
                  <p className="text-sm text-cream/60 leading-relaxed mt-1 transition-colors duration-300 group-hover:text-espresso/70">
                    {r.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
