import { type ReactElement } from "react";

export interface pageProps {}

export default function ImageEditionPage({}: pageProps): ReactElement {
  return (
    <>
      <h1 className="text-black dark:text-white">hello from image edition</h1>
    </>
  );
}
