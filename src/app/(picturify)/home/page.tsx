import { Info } from "@/components";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { GlobeDemo } from "@/components/world/GlobeDemo";
import { Metadata } from "next";
import { type ReactElement } from "react";

export interface pageProps {}

export const metadata: Metadata = {
  title: "Picturify - Crea y edita imagenes como un artista",
};

export default function HomePage({}: pageProps): ReactElement {
  return (
    <>
      <main className="dark:bg-[#020817] bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <Hero />
        <GlobeDemo />
        <Info />
        <Footer />
      </main>
    </>
  );
}
