import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FormEvent, useState, type ReactElement } from "react";

export interface TextMessageBoxSelectProps {
  placeholder?: string;
  disableCorrections?: boolean;
  onSendMessage: (message: string, selectedLang: string) => void;
  options: Option[];
}

interface Option {
  id: string;
  text: string;
}

export function TextMessageBoxSelect({
  placeholder,
  onSendMessage,
  disableCorrections,
  options,
}: TextMessageBoxSelectProps): ReactElement {
  const [message, setMessage] = useState<string>("");
  const [selectedOption, setSelectedLang] = useState<string>("");

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim().length === 0) return;
    if (selectedOption === "") return;
    onSendMessage(message, selectedOption);
    setMessage("");
    console.log(selectedOption, message);
  };

  return (
    <>
      <form
        onSubmit={handleSendMessage}
        className="flex flex-row items-center h-16 rounded-xl  w-full px-4"
      >
        <div className="flex-grow">
          <div className=" flex">
            <Input
              type="text"
              placeholder={placeholder}
              autoFocus
              name="message"
              className="text-black dark:text-white w-full focus:outline-none  focus:border-indigo-300 pl-4 h-10"
              autoComplete={disableCorrections ? "off" : "on"}
              autoCorrect={disableCorrections ? "off" : "on"}
              spellCheck={disableCorrections ? "true" : "false"}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <select
              name="select"
              className="w-2/5 ml-5 border rounded-xl text-black dark:text-white focus:outline-none focus:border-primary pl-4 h-10"
              value={selectedOption}
              onChange={(e) => setSelectedLang(e.target.value)}
            >
              <option value={""}>Seleccione</option>

              {options.map((option) => (
                <option value={option.text} key={option.id}>
                  {option.text}
                </option>
              ))}
            </select>
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
