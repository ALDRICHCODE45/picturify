import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Image } from "lucide-react";

interface SidebarProps {
  links: link[];
}

type link = {
  name: string;
  href: string;
};

export const DashboardSidebar = ({ links }: SidebarProps) => (
  <aside
    id="sidebar"
    className="fixed hidden z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
    aria-label="Sidebar"
  >
    <div className="relative flex-1 flex flex-col min-h-0 border-r bg-white dark:bg-[#020817] pt-0">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex-1 px-3 bg-white dark:bg-[#020817] divide-y space-y-1">
          <ul className="space-y-2 pb-2 pt-10">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <Button
                    variant="outline"
                    className="text-base capitalize text-gray-900 dark:text-white font-normal rounded-lg flex justify-between items-center p-2 dark:hover:bg-[#111827] hover:text-black hover:bg-gray-200 group w-full"
                  >
                    <Image className="text-start" />
                    <span className=" flex-grow text-balance ">
                      {link.name}
                    </span>
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </aside>
);
