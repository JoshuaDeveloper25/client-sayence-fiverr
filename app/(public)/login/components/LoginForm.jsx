"use client";

import AppContext from "@/context/AppProvider";
import { getError } from "@/utils/getError";
import { useContext } from "react";
import axios from "axios";

const LoginForm = ({ children }) => {
  const { setUserInfo } = useContext(AppContext);

  const handleSubmit = async (e) => {
    // Form object
    const loginInfo = {
      email: e?.get("email"),
      password: e?.get("password"),
    };

    try {
      // Send info to server
      const { data } = await axios.post(
        `${process.env.customKey}/users/login`,
        loginInfo
      );
      console.log(data);
      setUserInfo(data);
      axios.defaults.headers.common["Authorization"] = `Bearer ${data?.token}`;
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      console.log(getError(error));
    }
  };

  return (
    <form
      className="flex flex-col sm:flex-row gap-6 mt-8"
      action={handleSubmit}
    >
      {children}
    </form>
  );
};

export default LoginForm;
