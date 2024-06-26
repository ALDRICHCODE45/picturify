import React from "react";
import { type ReactElement } from "react";
import { FlipWords } from "../flip-words/FlipWords";
import Image from "next/image";

export interface HeroProps {}

export function Hero({}: HeroProps): ReactElement {
  const words = ["creativas", "elegantes", "diferentes", "modernas"];
  return (
    <section className="relative w-full">
      {/* Content centered */}
      <div className="relative mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center w-full">
          <div className="relative z-10 lg:flex lg:justify-center">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                alt="hero-image"
                src="/hero.jpg"
                className="h-[100%] w-full object-cover rounded-lg"
                width={600}
                height={600}
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100 lg:h-[80vh] dark:bg-[#111827] rounded-r-lg">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100 rounded-l-lg dark:bg-[#111827]"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-5xl font-bold pl-6 pb-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Genera Imágenes
              </h2>
              <h2 className="text-5xl font-bold p-4 ">
                <FlipWords words={words} /> <br />
              </h2>
              <h2 className="text-5xl font-bold pl-6 pb-1  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                con Picturify.
              </h2>
              <p className="mt-4 pl-6 text-gray-600">
                Transforma tus ideas en obras de arte con nuestra avanzada
                tecnología de generación de imágenes.
              </p>
              <a
                href="https://www.linkedin.com/in/aldrich-flores-vazquez-446b7b223/"
                target="_blank"
                className="mt-8  ml-6 inline-block rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-indigo-500"
              >
                Contactame
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
