import { redirect } from "next/navigation";
import { type ReactElement } from "react";

export interface pageProps {}

export default function page({}: pageProps): ReactElement {
  redirect("/dashboard/image-generation");
}
