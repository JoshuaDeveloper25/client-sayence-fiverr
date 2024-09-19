"use client";

import { AppProvider } from "@/context/AppProvider";

export function Providers({ children }) {
  return <AppProvider>{children}</AppProvider>;
}
