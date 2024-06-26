import { Toaster } from "@/components/ui/toaster";
import { type ReactElement } from "react";

export interface ToastProviderProps {}

export function ToastProvider({}: ToastProviderProps): ReactElement {
  return <Toaster />;
}
