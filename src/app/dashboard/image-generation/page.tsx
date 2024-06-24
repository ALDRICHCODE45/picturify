"use client";
import { GptMessage } from "@/components/chat-bubbles/GptMessage";
import { MyMessage } from "@/components/chat-bubbles/MyMessage";
import { TypingLoader } from "@/components/loaders/TypingLoader";
import { TextMessageBox } from "@/components/text-messages/TextMessageBox";
import { useState, type ReactElement } from "react";

export interface OrthographyPageProps {}

interface Message {
  text: string;
  isGpt: boolean;
}

export default function ImageGenerationPage({}: OrthographyPageProps): ReactElement {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePost = async (text: string) => {
    setIsLoading(true);
    setMessages((prev) => [...prev, { isGpt: false, text }]);

    //Todo: useCase

    setIsLoading(false);

    //Todo: anadir el mensaje de isGpt en true
  };

  return (
    <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-white bg-opacity-5 h-full p-4">
      <div className="flex flex-col h-full overflow-x-auto mb-4 overflow-scroll">
        <div className="grid grid-cols-12 gap-y-2">
          {/*Gtp message*/}
          <GptMessage text="Hola, puedes pedirme cualquier tipo de imagen y yo te la dare" />

          {/*User Message*/}

          {messages.map((message, index) =>
            message.isGpt ? (
              <GptMessage key={index} text="esto es de open ai" />
            ) : (
              <MyMessage text={message.text} key={index} />
            )
          )}

          {isLoading && (
            <div className=" col-start-1 col-end-12 fade-in">
              <TypingLoader />
            </div>
          )}
        </div>
      </div>
      <TextMessageBox
        onSendMessage={handlePost}
        placeholder="Escribe aqui lo que deseas"
        disableCorrections
      />
    </div>
  );
}
