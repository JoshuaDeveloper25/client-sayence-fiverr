"use client";

import AppContext from "@/context/AppProvider";
import { useContext, useEffect } from "react";
import { redirect } from "next/navigation";

export default function Layout({ children }) {
  const { userInfo } = useContext(AppContext);

  useEffect(() => {
    if (userInfo?.token) {
      redirect("/");
    }
  }, [userInfo?.token]);

  return children;
}
