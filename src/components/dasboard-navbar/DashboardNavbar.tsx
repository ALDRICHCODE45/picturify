import Link from "next/link";
import { ModeToggle } from "@/providers/ThemeToggle";
import Image from "next/image";

interface Props {
  user: string;
}
export const DashboardNavbar = ({ user }: Props) => (
  <nav className="bg-white dark:bg-[#020817] fixed z-30 w-full border-b">
    <div className="px-3 py-3 lg:px-5 lg:pl-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start">
          <Link
            href="/"
            className="text-xl font-bold flex items-center lg:ml-2.5"
          >
            <Image alt="logo" src="/logoipsu.svg" width={50} height={50} />

            <span className="uppercase self-center whitespace-nowrap ml-2 text-black dark:text-white">
              Picturify
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="pr-3">
            <ModeToggle />
          </div>
          <div className="bg-blue-500 pl-2 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center">
            {user}
          </div>
        </div>
      </div>
    </div>
  </nav>
);
