"use client";

import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-in";
import { site } from "@/lib/data/site";

export function VisitShowroom() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container-xl">
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-border/60">
            <div className="bg-espresso text-cream p-10 sm:p-14 flex flex-col justify-center">
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-4">
                Come See Us
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-balance leading-tight">
                Visit Our Showroom in Coeur d&apos;Alene
              </h2>
              <p className="text-cream/70 mt-4 leading-relaxed">
                Walk through our floor and see, touch, and sit on our full
                collection. Our team is happy to help you find the right
                piece for your home.
              </p>

              <div className="mt-8 flex flex-col gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4.5 w-4.5 text-gold shrink-0 mt-0.5" />
                  <span>
                    {site.address.line1}, {site.address.city},{" "}
                    {site.address.state} {site.address.zip}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4.5 w-4.5 text-gold shrink-0" />
                  <a href={site.phoneHref} className="hover:text-gold-light transition-colors">
                    {site.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-4.5 w-4.5 text-gold shrink-0 mt-0.5" />
                  <div>
                    {site.hours.map((h) => (
                      <p key={h.days}>
                        {h.days}: {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="mt-9 rounded-full bg-gold text-white hover:bg-gold-light px-8 w-fit"
                render={<Link href="/contact" />}
              >
                Get Directions
              </Button>
            </div>

            <div className="relative min-h-[320px] lg:min-h-full">
              <iframe
                title="Hayden Furniture Depot location map"
                src={site.mapEmbedSrc}
                className="absolute inset-0 h-full w-full border-0 grayscale-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
