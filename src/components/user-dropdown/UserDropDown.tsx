"use client";
import { type ReactElement } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import DefaultUser from "../../../public/nature.jpg";
import Image from "next/image";
import Link from "next/link";
import { useUserState } from "@/store/user/user.store";

export interface UserDropDownProps {
  image?: string;
}

export function UserDropDown({ image }: UserDropDownProps): ReactElement {
  const imageToShow = image ? image : DefaultUser;
  const cleanUser = useUserState((state) => state.cleanUser);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-6" />
          <Image
            className="rounded-full h-8 w-8 hidden lg:block"
            src={imageToShow}
            alt="default user"
            width={750}
            height={750}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuItem onClick={() => cleanUser()}>Salir</DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="w-full" href="/dashboard/image-generation">
            Crear Imagen
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="w-full" href="/dashboard/translate">
            Traducir
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
