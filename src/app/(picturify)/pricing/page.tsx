import { Footer } from "@/components/footer/Footer";
import { PricingCard } from "@/components/pricing/PricingCard";
import { cardsInformation } from "@/data/card.data";
import { Metadata } from "next";
import { type ReactElement } from "react";

export const metadata: Metadata = {
  title: "Picturify - Pricing",
};

export default function PricingPage(): ReactElement {
  return (
    <>
      <div className=" mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 dark:bg-[#020817] bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
          {cardsInformation.map((card) => (
            <PricingCard key={card.title} {...card} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
