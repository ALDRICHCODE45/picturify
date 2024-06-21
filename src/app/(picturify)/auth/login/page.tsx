import { type ReactElement } from "react";
import { LoginForm } from "./ui/LoginForm";

export interface pageProps {}

export default function page({}: pageProps): ReactElement {
  return (
    <>
      <LoginForm />
    </>
  );
}
