import { Navbar } from "@/components";
import Link from "next/link";
import { type ReactElement } from "react";

export interface notFoundProps {}

export default function notFound({}: notFoundProps): ReactElement {
  return (
    <>
      <Navbar />
      <div className=" flex justify-center items-center h-screen dark:bg-[#020817] bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-black   dark:text-gray-200 ">
            404
          </h1>

          <p className="text-2xl font-bold tracking-tight text-gray-600 sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-500">
            No podemos encontrar esta pagina.
          </p>

          <Link
            href="/home"
            className="mt-6 inline-block rounded bg-primary px-5 py-3 text-sm font-medium text-white  focus:outline-none focus:ring"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </>
  );
}
