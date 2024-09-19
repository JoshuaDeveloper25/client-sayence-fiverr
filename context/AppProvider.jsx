"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  console.log(userInfo);

  axios.defaults.headers.common["Authorization"] = userInfo?.token
    ? `Bearer ${userInfo?.token}`
    : null;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getUserInfoFromLocalStorage = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;
      setUserInfo(getUserInfoFromLocalStorage);
    }
  }, []);

  return (
    <AppContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };

export default AppContext;
