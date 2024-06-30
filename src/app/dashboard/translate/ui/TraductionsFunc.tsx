"use client";
import React, { ReactElement, useState, useEffect, useRef } from "react";
import { GptMessage } from "@/components/chat-bubbles/GptMessage";
import { MyMessage } from "@/components/chat-bubbles/MyMessage";
import { TypingLoader } from "@/components/loaders/TypingLoader";
import { TextMessageBox } from "@/components/text-messages/TextMessageBox";
import { useUserState } from "@/store/user/user.store";
import { useAuth } from "@/app/(picturify)/auth/hooks/useAuth";
import { TranslateUseCase } from "@/actions/translate/TranslateUseCase";
import { TextMessageBoxSelect } from "@/components/text-messages/TextMessageBoxSelect";

interface Message {
  text: string;
  isPicturify: boolean;
}

const fetchMessages = async (token: string) => {
  const response = await fetch(
    `http://localhost:3002/api/picturify/get-translate-messages`,
    {
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${token}`,
      },
    }
  );
  const resp = await response.json();
  console.log(resp);
  return resp.messages;
};

export function TransLateFunc(): ReactElement {
  const user = useUserState((state) => state.user);

  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { checkingToken } = useAuth();
  const messagesEndRef = useRef<HTMLDivElement>(null); // Reference to the end of messages container

  useEffect(() => {
    checkingToken();
    const getMessages = async () => {
      const initialMessages = await fetchMessages(user.token);
      setMessages(initialMessages);
      scrollToBottom(); // Scroll to bottom after messages load initially
    };
    getMessages();
  }, []);

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom whenever messages state changes
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePost = async (text: string, lang: string) => {
    setMessages((prev) => [...prev, { isPicturify: false, text }]);

    try {
      setIsLoading(true);
      await TranslateUseCase(text, lang, user.token);
      const newMessagesState = await fetchMessages(user.token);
      setMessages(newMessagesState);
    } catch (error) {
      console.error("Error while processing image generation:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Error al procesar la generación de imagen",
          isPicturify: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-white bg-opacity-5 h-full p-4">
      <div className="flex flex-col h-full overflow-x-auto mb-4 overflow-scroll">
        <div className="grid grid-cols-12 gap-y-2">
          <GptMessage text="Hola, puedes pedirme que traduzca cualquier texto a cualquier idioma" />

          {messages?.map((message, index) =>
            message.isPicturify ? (
              <GptMessage key={index} text={message.text} />
            ) : (
              <MyMessage text={message.text} key={index} />
            )
          )}

          {isLoading && <TypingLoader />}
          {/* This div serves as a reference point to scroll to */}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <TextMessageBoxSelect
        options={[
          { id: "1", text: "ingles" },
          { id: "2", text: "ruso" },
          { id: "3", text: "aleman" },
          { id: "4", text: "italiano" },
          { id: "5", text: "mandarin" },
          { id: "6", text: "frances" },
          { id: "7", text: "japones" },
        ]}
        onSendMessage={handlePost}
      />
    </div>
  );
}
