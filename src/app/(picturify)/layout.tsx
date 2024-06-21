import { Navbar } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Picturify",
  description: "AI Image generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="" suppressHydrationWarning>
      <Navbar />
      {children}
    </main>
  );
}
