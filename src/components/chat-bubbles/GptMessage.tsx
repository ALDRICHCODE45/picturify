import { type ReactElement } from "react";
import Markdown from "react-markdown";

export interface GptMessageProps {
  text: string;
}

export function GptMessage({ text }: GptMessageProps): ReactElement {
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-row items-start">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-600 flex-shrink-0">
          G
        </div>
        <div className="relative ml-3 text-sm bg-[#eff6ff] pt-3 pb-2 px-4 shadow rounded-xl">
          <Markdown className="text-black">{text}</Markdown>
        </div>
      </div>
    </div>
  );
}
