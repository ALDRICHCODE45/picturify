"use client";
import { useUserState } from "@/store/user/user.store";
import { type ReactElement } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { UserDropDown } from "../user-dropdown/UserDropDown";
import { EditProfile } from "../sheet/sheetAction";

export interface NavbarButtonsProps {}

export function NavbarButtons({}: NavbarButtonsProps): ReactElement {
  const user = useUserState((state) => state.user).email.length;
  return (
    <>
      {user ? (
        <>
          <div className="flex items-center justify-center ">
            <EditProfile />
          </div>
          <UserDropDown image={undefined} />
        </>
      ) : (
        <>
          <Button
            asChild
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow "
          >
            <Link href="/auth/login">Login</Link>
          </Button>

          <div className="sm:flex">
            <Button
              asChild
              className="rounded-md  px-5 py-2.5 text-sm font-medium text-primary "
              variant="register"
            >
              <Link href="/auth/register">Register</Link>
            </Button>
          </div>
        </>
      )}
    </>
  );
}
