import React, { ReactElement } from "react";

export function TypingLoader(): ReactElement {
  return (
    <div className="flex space-x-2 justify-center items-center bg-white h-[50px] dark:bg-[#0f1523]">
      <div className="h-8 w-8 bg-black dark:bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-black dark:bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-black  dark:bg-white rounded-full animate-bounce"></div>
    </div>
  );
}
