"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  axios.defaults.headers.common["Authorization"] = userInfo?.token
    ? `Bearer ${userInfo?.token}`
    : null;

  useEffect(() => {
    setIsLoading(true);

    if (typeof window !== "undefined") {
      const getUserInfoFromLocalStorage = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;
      setUserInfo(getUserInfoFromLocalStorage);
      setIsLoading(false);
    }
  }, []);

  return (
    <AppContext.Provider value={{ userInfo, setUserInfo, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };

export default AppContext;
