import { Info, Navbar } from "@/components";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { type ReactElement } from "react";

export interface pageProps {}

export default function HomePage({}: pageProps): ReactElement {
  return (
    <>
      <Hero />
      <Info />
      <Footer />
    </>
  );
}
