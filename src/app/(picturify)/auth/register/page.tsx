import { type ReactElement } from "react";
import { RegisterForm } from "./ui/RegisterForm";

export interface pageProps {}

export default function page({}: pageProps): ReactElement {
  return (
    <>
      <main className="dark:bg-[#020817] bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <RegisterForm />
      </main>
    </>
  );
}
