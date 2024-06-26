import { Skeleton } from "@/components/ui/skeleton";
import { type ReactElement } from "react";

export interface LoadingProps {}

export default function AuthLoading({}: LoadingProps): ReactElement {
  return (
    <>
      <div className="relative">
        <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
          <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
            <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
              <div className="flex flex-col items-center justify-center w-full h-full relative rounded-lg">
                <Skeleton className="w-[500px]  h-[600px] rounded-2xl bg-[#cccccc] dark:bg-[#192335]" />
              </div>
            </div>
            <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
              <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 bg-[#dfdfdf] dark:bg-[#151e30] pl-10 bg-cover shadow-2xl rounded-xl relative z-10 space-y-8">
                <Skeleton className="w-3/4 h-10 bg-[#cccccc] dark:bg-[#111827] mb-4" />
                <Skeleton className="w-full h-12 bg-[#cccccc] dark:bg-[#111827] mb-4" />
                <Skeleton className="w-full h-12 bg-[#cccccc] dark:bg-[#111827] mb-4" />
                <Skeleton className="w-full h-12 bg-[#cccccc] dark:bg-[#111827] mb-3" />
                <Skeleton className="w-full h-12 bg-[#cccccc] dark:bg-[#111827] mb-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
