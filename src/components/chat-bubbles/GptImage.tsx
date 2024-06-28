import Image from "next/image";
import { type ReactElement } from "react";

export interface GptMessageProps {
  image: string;
  text?: string;
}

export function GptImage({ image, text }: GptMessageProps): ReactElement {
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-row items-start">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-600 flex-shrink-0">
          P
        </div>
        <div className="relative ml-3 text-sm bg-[#eff6ff] pt-3 pb-2 px-4 shadow rounded-xl">
          <Image
            src={image}
            alt="image"
            className="mt-2 rounded-xl w-96 h-96 object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
