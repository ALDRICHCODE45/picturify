"use client";
import Loading from "@/components/loading/Loading";
import { useUserState } from "@/store/user/user.store";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import AuthLoading from "./AuthLoading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loaded, setLoaded] = useState(false);
  const user = useUserState((state) => state.user);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loaded && user.email.length) {
    redirect("/");
  }

  if (!loaded) {
    return <AuthLoading />;
  }

  return <>{children}</>;
}
