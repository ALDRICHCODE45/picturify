"use client";
import { DashboardNavbar } from "@/components/dasboard-navbar/DashboardNavbar";
import { DashboardSidebar } from "@/components/dashboard-sidebar/DashboardSideBar";
import { useUserState } from "@/store/user/user.store";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { name: "generar imagen", href: "/dashboard/image-generation" },
  { name: "editar imagen", href: "/dashboard/image-edition" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loaded, setLoaded] = useState(false);
  const user = useUserState((state) => state.user);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (loaded && !user.email.length) {
    redirect("/auth/login");
  }

  if (!loaded) {
    return <p>wait...</p>;
  }

  return (
    <>
      <DashboardNavbar user={user.username.slice(0, 2).toUpperCase()} />
      <div className="flex overflow-hidden bg-white dark:bg-[#020817] pt-16">
        <DashboardSidebar links={links} />

        <div
          id=""
          className="h-full w-full bg-gray-50 dark:bg-[#111827] relative overflow-y-auto lg:ml-64"
        >
          <main>
            <div className="pt-6 px-4">
              <div className="bg-white dark:bg-[#020817] shadow rounded-lg p-4 sm:p-6 xl:p-8  h-[800px]">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
