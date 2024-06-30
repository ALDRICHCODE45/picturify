import { Metadata } from "next";
import { TransLateFunc } from "./ui/TraductionsFunc";

export const metadata: Metadata = {
  title: "Picturify - Translate",
};

export default function TranslatePage() {
  return (
    <>
      <TransLateFunc />
    </>
  );
}
