"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav, site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 w-full bg-white border-b border-border shadow-sm"
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="container-xl flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/brand/logo.png"
            alt="Hayden Furniture Depot"
            width={60}
            height={60}
            className="rounded-full"
            priority
          />
          <span className="font-heading text-lg font-semibold tracking-tight leading-tight hidden sm:block text-foreground">
            Hayden Furniture
            <span className="block text-xs font-sans font-normal tracking-[0.2em] uppercase opacity-80">
              Depot
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {mainNav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.megaMenu && setOpenMenu(item.name)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors",
                    active
                      ? "text-white bg-black"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                  {item.megaMenu && (
                    <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                  )}
                </Link>

                <AnimatePresence>
                  {item.megaMenu && openMenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-95"
                    >
                      <div className="rounded-2xl border border-border bg-card shadow-xl p-3 grid grid-cols-1 gap-1">
                        {item.megaMenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="flex flex-col gap-0.5 rounded-xl px-4 py-2.5 hover:bg-muted transition-colors"
                          >
                            <span className="text-sm font-medium text-foreground">
                              {sub.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {sub.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search"
            className="hidden sm:inline-flex rounded-full"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            className="hidden sm:inline-flex rounded-full gap-2"
            render={<a href={site.phoneHref} />}
          >
            <Phone className="h-4 w-4" />
            Call Us
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="lg:hidden rounded-full"
                />
              }
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-75 sm:w-90 flex flex-col">
              <SheetHeader className="shrink-0">
                <SheetTitle className="flex items-center gap-2 font-heading">
                  <Image
                    src="/brand/logo.png"
                    alt="Hayden Furniture Depot"
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  Hayden Depot
                </SheetTitle>
              </SheetHeader>
              <div className="flex-1 min-h-0 overflow-y-auto scrollbar-none px-4">
                <div className="flex flex-col gap-1">
                  {mainNav.map((item) => (
                    <div key={item.name} className="border-b border-border py-2">
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-base font-medium"
                      >
                        {item.name}
                      </Link>
                      {item.megaMenu && (
                        <div className="pl-3 pb-2 flex flex-col gap-1">
                          {item.megaMenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="py-1.5 text-sm text-muted-foreground hover:text-foreground"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="shrink-0 px-4 pb-4 pt-2">
                <a
                  href={site.phoneHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-3 text-sm font-medium"
                >
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
