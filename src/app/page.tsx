import { Hero } from "@/components/home/hero";
import { CategoryMarquee } from "@/components/home/category-marquee";
import { ShopByRoom } from "@/components/home/shop-by-room";
import { ShowroomEdit } from "@/components/home/showroom-edit";
import { PromoBanner } from "@/components/home/promo-banner";
import { DecorHighlights } from "@/components/home/decor-highlights";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Testimonials } from "@/components/home/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryMarquee />
      <ShopByRoom />
      <ShowroomEdit />
      <PromoBanner />
      <DecorHighlights />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
