"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { site, furnitureMegaMenu } from "@/lib/data/site";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.25-1.5 1.55-1.5H16.5V4.3c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.05V10.5H8v3h2.2V21h3.3Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="container-xl py-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/brand/logo.png"
              alt="Hayden Furniture Depot"
              width={60}
              height={60}
              className="rounded-full"
            />
            <span className="font-heading text-lg font-semibold">
              Hayden Furniture Depot
            </span>
          </Link>
          <p className="text-sm text-cream/70 leading-relaxed max-w-xs">
            Locally owned and trusted since day one — quality furniture, home
            décor, artwork, and lighting for every room in your home.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hayden Furniture Depot on Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition-opacity hover:opacity-85"
            >
              <FacebookIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hayden Furniture Depot on Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-opacity hover:opacity-85"
              style={{
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
              }}
            >
              <InstagramIcon className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm uppercase tracking-[0.15em] text-cream/90 mb-2">
            Quick Links
          </h3>
          <span className="block h-px w-8 bg-cream/20 mb-4" />
          <ul className="space-y-2.5 text-sm text-cream/75">
            {furnitureMegaMenu.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-cream transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/about" className="hover:text-cream transition-colors">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm uppercase tracking-[0.15em] text-cream/90 mb-2">
            Visit Us
          </h3>
          <span className="block h-px w-8 bg-cream/20 mb-4" />
          <ul className="space-y-4 text-sm text-cream/75">
            <li className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream/10 text-cream">
                <MapPin className="h-4 w-4" />
              </span>
              <span className="pt-1.5">
                {site.address.line1}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream/10 text-cream">
                <Phone className="h-4 w-4" />
              </span>
              <a href={site.phoneHref} className="hover:text-cream transition-colors">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream/10 text-cream">
                <Mail className="h-4 w-4" />
              </span>
              <a href={`mailto:${site.email}`} className="hover:text-cream transition-colors">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream/10 text-cream">
                <Clock className="h-4 w-4" />
              </span>
              <span className="pt-1.5">
                {site.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm uppercase tracking-[0.15em] text-cream/90 mb-2">
            Stay Inspired
          </h3>
          <span className="block h-px w-8 bg-cream/20 mb-4" />
          <p className="text-sm text-cream/70 mb-4">
            Sign up for new arrivals, seasonal collections, and in-store
            offers.
          </p>
          <form
            className="flex gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              required
              placeholder="Your email"
              aria-label="Email address"
              className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/50 focus-visible:ring-cream/40"
            />
            <Button
              type="submit"
              className="bg-cream text-espresso hover:bg-cream/85 shrink-0"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>
            © {new Date().getFullYear()} Hayden Furniture Depot. All rights
            reserved.
          </p>
          <p>Coeur d&apos;Alene, Idaho · Locally Owned &amp; Operated</p>
        </div>
      </div>
    </footer>
  );
}
