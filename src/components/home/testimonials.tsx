"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { FadeUp } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}?w=300&q=70&auto=format&fit=crop&crop=faces`;
}

const testimonials = [
  {
    name: "David T.",
    location: "Coeur d'Alene, ID",
    quote:
      "We furnished our entire living room here and the team could not have been more helpful. Quality pieces, fair prices, and it's all local.",
    avatar: unsplash("1507003211169-0a1dd7228f2d"),
  },
  {
    name: "Sarah M.",
    location: "Hayden, ID",
    quote:
      "The delivery team was fantastic — on time, careful, and they set everything up exactly where we wanted it. Highly recommend.",
    avatar: unsplash("1494790108377-be9c29b29330"),
  },
  {
    name: "Ron H.",
    location: "Post Falls, ID",
    quote:
      "Excellent furniture store in the city. Quality is mind blowing, highly recommending them as your furniture shop.",
    avatar: unsplash("1560250097-0b93528c311a"),
  },
  {
    name: "Priya K.",
    location: "Rathdrum, ID",
    quote:
      "I was overwhelmed looking for a new mattress until I came here. They took the time to help me find the right fit, no pressure at all.",
    avatar: unsplash("1506794778202-cad84cf45f1d"),
  },
  {
    name: "Mark D.",
    location: "Dalton Gardens, ID",
    quote:
      "Great selection of home décor and artwork, not just furniture. This is our go-to spot whenever we're redoing a room.",
    avatar: unsplash("1500648767791-00dcc994a43e"),
  },
  {
    name: "Emily R.",
    location: "Coeur d'Alene, ID",
    quote:
      "Beautiful showroom and even better service. They helped us plan out our whole dining room down to the lighting.",
    avatar: unsplash("1544005313-94ddf0286df2"),
  },
  {
    name: "Jenna K.",
    location: "Spokane Valley, WA",
    quote:
      "Worth the drive from Spokane. Prices are fair, the staff is patient, and pickup was quick and easy.",
    avatar: unsplash("1438761681033-6461ffad8d80"),
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[active];

  return (
    <section className="py-16 sm:py-20 bg-secondary/40">
      <div className="container-xl">
        <FadeUp className="relative max-w-2xl mb-10 mx-auto text-center">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 font-heading text-[7rem] leading-none text-gold/10 select-none"
          >
            &rdquo;
          </span>
          <p className="relative text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">
            Customer Reviews
          </p>
          <h2 className="relative font-heading text-4xl sm:text-5xl font-semibold text-foreground text-balance">
            What Our Customers Say
          </h2>
        </FadeUp>

        <div className="relative mx-auto w-110 max-w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl bg-card border border-border/60 shadow-sm px-8 py-7 text-left"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="font-heading text-lg font-medium text-foreground">
                    {current.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{current.location}</p>
                </div>
                <Image
                  src={current.avatar}
                  alt={current.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-gold"
                />
              </div>
              <blockquote className="text-foreground/70 leading-relaxed text-sm">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2.5 mt-10">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              aria-label={`Show review from ${t.name}`}
              aria-pressed={i === active}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === active ? "w-6 bg-gold" : "w-2 bg-border hover:bg-gold/40"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
