import { type ReactElement } from "react";
import { RegisterForm } from "./ui/RegisterForm";

export interface pageProps {}

export default function page({}: pageProps): ReactElement {
  return (
    <>
      <RegisterForm />
    </>
  );
}
