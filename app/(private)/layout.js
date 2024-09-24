"use client";

import AppContext from "@/context/AppProvider";
import { useContext, useEffect } from "react";
import { redirect } from "next/navigation";

export default function Layout({ children }) {
  const { userInfo, isLoading } = useContext(AppContext);

  useEffect(() => {
    if (!userInfo?.token && !isLoading) {
      redirect("/login");
    }
  }, [userInfo?.token, isLoading]);

  return children;
}
