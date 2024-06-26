import { Skeleton } from "@/components/ui/skeleton";
import { type ReactElement } from "react";

export interface LoadingProps {}

export default function Loading({}: LoadingProps): ReactElement {
  return (
    <>
      <nav className="bg-white dark:bg-[#020817] fixed z-30 w-full border-b">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <Skeleton className="w-[50px] h-[50px] rounded-full bg-[#cccccc] dark:bg-[#192335]" />
              <Skeleton className="w-[100px] h-[20px] ml-2 bg-[#cccccc] dark:bg-[#192335]" />
            </div>
            <div className="flex items-center">
              <Skeleton className="w-[50px] h-[50px] rounded-full dark:bg-[#192335] bg-[#cccccc]" />
            </div>
          </div>
        </div>
      </nav>

      <div className="flex overflow-hidden bg-white dark:bg-[#020817] pt-16">
        <aside
          id="sidebar"
          className="fixed hidden z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
          aria-label="Sidebar"
        >
          <div className="relative flex-1 flex flex-col min-h-0 border-r bg-white dark:bg-[#020817] pt-0">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex-1 px-3 bg-white dark:bg-[#020817] divide-y space-y-1">
                <ul className="space-y-2 pb-2 pt-10">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <li key={index}>
                      <Skeleton className="w-full h-[40px] bg-[#cccccc] dark:bg-[#192335]" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </aside>

        <div
          id=""
          className="h-full w-full bg-gray-50 dark:bg-[#111827] relative overflow-y-auto lg:ml-64"
        >
          <main>
            <div className="pt-6 px-4">
              <div className="bg-white dark:bg-[#020817] shadow rounded-lg p-4 sm:p-6 xl:p-8 h-[800px]">
                <Skeleton className="w-full h-full dark:bg-[#192335]  bg-[#cccccc]" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
