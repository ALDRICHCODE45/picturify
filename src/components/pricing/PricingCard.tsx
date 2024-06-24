import { type ReactElement } from "react";

export interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  options: Option[];
}

export type Option = {
  available: boolean;
  text: string;
};

export function PricingCard({
  title,
  description,
  price,
  options,
}: PricingCardProps): ReactElement {
  return (
    <>
      <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm dark:bg-[#111827]">
        <div className="p-6 sm:px-8 ">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">
            {title}
            <span className="sr-only">Plan</span>
          </h2>

          <p className="mt-2 text-gray-700 dark:text-[#909fb4]">
            {description}
          </p>

          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
              {" "}
              {price}${" "}
            </strong>

            <span className="text-sm font-medium text-gray-700 dark:text-[#909fb4]">
              /mes
            </span>
          </p>

          <a
            className="mt-4 block rounded border border-primary bg-primary px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary sm:mt-6"
            href="#"
          >
            Contratar Plan
          </a>
        </div>

        <div className="p-6 sm:px-8">
          <p className="text-lg font-medium text-gray-900 sm:text-xl dark:text-white">
            Lo que incluye
          </p>

          <ul className="mt-2 space-y-2 sm:mt-4">
            {options.map((option) => (
              <li key={option.text} className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`size-5 ${
                    option.available ? "text-primary" : "text-red-500"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      option.available
                        ? "M4.5 12.75l6 6 9-13.5"
                        : "M6 18L18 6M6 6l12 12"
                    }
                  />
                </svg>

                <span className="text-gray-700 dark:text-[#909fb4]">
                  {" "}
                  {option.text}{" "}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
