import { Navbar } from "@/components";
import { Toaster } from "@/components/ui/toaster";
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
      <Toaster />
      <Navbar />
      {children}
    </main>
  );
}
