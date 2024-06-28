import { Metadata } from "next";
import GenerationImage from "./ui/ImageGenerationFunc";

export const metadata: Metadata = {
  title: "Picturify - Image Generation",
};

export default async function ImageGenerationPage() {
  return (
    <>
      <GenerationImage />
    </>
  );
}
