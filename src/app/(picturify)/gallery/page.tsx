import { Footer } from "@/components/footer/Footer";
import { Gallery } from "@/components/gallery/Gallery";
import { Metadata } from "next";
import { type ReactElement } from "react";

export interface GalleryPageProps {}

export const metadata: Metadata = {
  title: "Picturify - Gallery",
};

export default function GalleryPage({}: GalleryPageProps): ReactElement {
  return (
    <main className="dark:bg-[#020817] bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] w-screen h-screen">
      <Gallery />
      <Footer />
    </main>
  );
}
