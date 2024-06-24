"use client";
import { FormEvent, useState, type ReactElement } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export interface TextMessageBoxProps {
  placeholder?: string;
  disableCorrections?: boolean;
  onSendMessage: (message: string) => void;
}

export function TextMessageBox({
  placeholder,
  onSendMessage,
  disableCorrections,
}: TextMessageBoxProps): ReactElement {
  const [message, setMessage] = useState<string>("");

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim().length === 0) return;
    onSendMessage(message);
    setMessage("");
  };
  return (
    <>
      <form
        onSubmit={handleSendMessage}
        className="flex flex-row items-center h-16 rounded-xl  w-full px-4"
      >
        <div className="flex-grow">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder={placeholder}
              autoFocus
              name="message"
              className="text-black dark:text-white flex w-full focus:outline-none  focus:border-indigo-300 pl-4 h-10"
              autoComplete={disableCorrections ? "off" : "on"}
              autoCorrect={disableCorrections ? "off" : "on"}
              spellCheck={disableCorrections ? "true" : "false"}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
        </div>

        <div className="ml-4">
          <Button variant="ghost">
            <span className="mr-2">Enviar</span>
            <i className="fa-regular fa-paper-plane"></i>
          </Button>
        </div>
      </form>
    </>
  );
}
