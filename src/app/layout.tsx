import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Chatbot } from "@/components/chat/chatbot";
import { ScrollToTop } from "@/components/shared/scroll-to-top";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.haydendepot.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hayden Furniture Depot | Beautiful Furniture, Inspired Living",
    template: "%s | Hayden Furniture Depot",
  },
  description:
    "Locally owned furniture showroom in Coeur d'Alene, Idaho. Shop living room, bedroom, dining, mattresses, home décor, artwork, and lighting with delivery and in-store pickup.",
  keywords: [
    "furniture store Coeur d'Alene",
    "Hayden Furniture Depot",
    "Idaho furniture",
    "mattresses Coeur d'Alene",
    "home decor Idaho",
  ],
  openGraph: {
    title: "Hayden Furniture Depot | Beautiful Furniture, Inspired Living",
    description:
      "Discover quality furniture, home décor, artwork, and lighting to create a home you'll love.",
    url: siteUrl,
    siteName: "Hayden Furniture Depot",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hayden Furniture Depot",
    description:
      "Discover quality furniture, home décor, artwork, and lighting to create a home you'll love.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${inter.variable} h-full overflow-x-hidden scrollbar-none antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden scrollbar-none bg-background text-foreground font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <ScrollToTop />
        <Chatbot />
      </body>
    </html>
  );
}
