import { ModeToggle } from "@/providers/ThemeToggle";
import Link from "next/link";
import { type ReactElement } from "react";
import { Separator } from "../ui/separator";
import { NavbarButtons } from "../navbar-buttons/NavbarButtons";
import Image from "next/image";

export interface NavbarProps {}

export function Navbar({}: NavbarProps): ReactElement {
  return (
    <header className="bg-white  dark:bg-[#111827] sticky top-0 z-50">
      <div className="mx-auto max-w-screen-2xl  px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="/">
              <Image src="/logoipsu.svg" alt="logo" width={68} height={68} />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/home"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/pricing"
                  >
                    Pricing{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/gallery"
                  >
                    {" "}
                    Gallery{" "}
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-4 ">
              <ModeToggle />
              <div className="sm:flex sm:gap-4  hidden ">
                <NavbarButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </header>
  );
}
