import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { FadeUp } from "@/components/motion/fade-in";
import { VisitShowroom } from "@/components/home/visit-showroom";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Hayden Furniture Depot in Coeur d'Alene, Idaho. Call, email, or visit our showroom.",
};

export default function ContactPage() {
  return (
    <div className="pb-24">
      <section className="pt-28 pb-4 sm:pt-30">
        <div className="container-xl max-w-2xl">
          <FadeUp>
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">
              Get In Touch
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-balance">
              We&apos;d love to help you furnish your home
            </h1>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Have a question about a piece, delivery, or want to plan a
              showroom visit? Send us a message or reach out directly — our
              team responds quickly.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
          <FadeUp>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-sm">Showroom Address</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {site.address.line1}
                      <br />
                      {site.address.city}, {site.address.state} {site.address.zip}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-sm">Phone</p>
                    <a
                      href={site.phoneHref}
                      className="text-sm text-muted-foreground mt-0.5 hover:text-foreground transition-colors block"
                    >
                      {site.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-sm text-muted-foreground mt-0.5 hover:text-foreground transition-colors block"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-sm">Store Hours</p>
                    {site.hours.map((h) => (
                      <p key={h.days} className="text-sm text-muted-foreground mt-0.5">
                        {h.days}: {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="rounded-3xl bg-card border border-border/60 p-6 sm:p-10">
              <ContactForm />
            </div>
          </FadeUp>
        </div>
      </section>

      <VisitShowroom />
    </div>
  );
}
