import { type ReactElement } from "react";
import { TextGenerateEffect } from "../text-reveal/TextReveal";

export interface InfoProps {}

export function Info({}: InfoProps): ReactElement {
  const words = `La edición y creación de imágenes nunca ha sido tan fácil`;
  return (
    <section className=" py-20 ">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold  text-black  dark:text-white  sm:text-4xl ">
            <TextGenerateEffect words={words} />
          </h2>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-9 text-center bg-green-50 dark:bg-[#111827] dark:border-none  hover:-translate-y-1 hover:-translate-x-1 cursor-pointer transition duration-300 ease-in-out">
              <dt className="order-last text-lg font-medium text-gray-500">
                Ahorra Tiempo
              </dt>

              <dd className="pb-4 text-4xl font-extrabold text-blue-600 md:text-5xl  ">
                48%
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-9 text-center bg-green-50 dark:bg-[#111827] dark:border-none  hover:-translate-y-1 hover:-translate-x-1 cursor-pointer transition duration-300 ease-in-out">
              <dt className="order-last text-lg font-medium text-gray-500">
                Ahorra Energia
              </dt>

              <dd className="pb-4 text-4xl font-extrabold text-blue-600 md:text-5xl">
                24+
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-9 text-center bg-green-50 dark:bg-[#111827] dark:border-none hover:-translate-y-1 hover:-translate-x-1 cursor-pointer transition duration-300 ease-in-out">
              <dt className="order-last text-lg font-medium text-gray-500">
                Ahorra Dinero
              </dt>
              <dd className="pb-4 text-4xl font-extrabold text-blue-600 md:text-5xl">
                $86
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
