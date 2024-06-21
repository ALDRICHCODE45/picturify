import { redirect } from "next/navigation";

export function page() {
  redirect("/auth/login");
}
