import { type ReactElement } from "react";

export interface TimeLineProps {}

export function TimeLine({}: TimeLineProps): ReactElement {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className=" border-l-2 border-solid">
        <div className="relative w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
          <div className="ml-6">
            <h4 className="font-bold text-blue-500 text-xl">
              Lanzamiento de nuestra App
            </h4>
            <p className="mt-2 max-w-screen-sm text-gray-500 text-lg">
              En 2022, lanzamos nuestra innovadora aplicación de edición de
              imágenes con inteligencia artificial.
            </p>
            <span className="mt-1 block text-sm font-semibold text-blue-500">
              2022
            </span>
          </div>
        </div>

        <div className="relative w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
          <div className="ml-6">
            <h4 className="font-bold text-blue-500 text-xl">
              Nuevas Funciones Increíbles
            </h4>
            <p className="mt-2 max-w-screen-sm text-gray-500 text-lg">
              En 2023, introdujimos una serie de nuevas funciones, incluyendo la
              generación de imágenes a partir de descripciones textuales y la
              mejora automática de fotos.
            </p>
            <span className="mt-1 block text-sm font-semibold text-blue-500">
              2023
            </span>
          </div>
        </div>

        <div className="relative w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
          <div className="ml-6">
            <h4 className="font-bold text-blue-500 text-xl">
              Expansión y Colaboraciones
            </h4>
            <p className="mt-2 max-w-screen-sm text-gray-500 text-lg">
              En 2024, nos expandimos globalmente y establecimos colaboraciones
              con reconocidos fotógrafos y diseñadores para ofrecer herramientas
              aún más avanzadas.
            </p>
            <span className="mt-1 block text-sm font-semibold text-blue-500">
              2024
            </span>
          </div>
        </div>

        <div className="relative w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
          <div className="ml-6">
            <h4 className="font-bold text-blue-500 text-xl">
              Reconocimientos y Premios
            </h4>
            <p className="mt-2 max-w-screen-sm text-gray-500 text-lg">
              Nuestra app ha sido galardonada con múltiples premios por su
              innovación en el campo de la edición de imágenes, destacándose en
              varias publicaciones tecnológicas.
            </p>
            <span className="mt-1 block text-sm font-semibold text-blue-500">
              2024
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
