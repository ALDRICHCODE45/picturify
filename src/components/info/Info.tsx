import { BrainCircuit, Image, Settings } from "lucide-react";
import { type ReactElement } from "react";

export interface InfoProps {}

export function Info({}: InfoProps): ReactElement {
  return (
    <section className=" py-20">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent  sm:text-4xl ">
            La edición y creación de imágenes nunca ha sido tan fácil
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Transforma tus ideas en arte digital con nuestra revolucionaria app
            de creación y edición de imágenes, potenciada por inteligencia
            artificial.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-9 text-center bg-blue-50 dark:bg-[#111827] dark:border-none ">
              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl  ">
                <BrainCircuit className=" md:w-16 md:h-16 mx-auto my-auto" />
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-9 text-center bg-blue-50 dark:bg-[#111827] dark:border-none">
              <dd className="text-5xl font-extrabold text-blue-600 md:text-5xl">
                <Image className="md:w-16 md:h-16 mx-auto my-auto" />
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-9 text-center bg-blue-50 dark:bg-[#111827] dark:border-none">
              <dd className="pb-4 text-4xl font-extrabold text-blue-600 md:text-5xl">
                <Settings className=" md:w-16 md:h-16 mx-auto my-auto" />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
