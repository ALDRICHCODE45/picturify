import { type ReactElement } from "react";

export interface pageProps {}

export default function ImageGenerationPage({}: pageProps): ReactElement {
  return (
    <>
      <h1 className="text-black dark:text-white">
        hello from image generation
      </h1>
    </>
  );
}
