"use client";

import { getError } from "@/utils/getError";
import axios from "axios";

const RegisterForm = ({ children }) => {
  const handleSubmit = async (e) => {
    // Form object
    const registerInfo = {
      firstName: e?.get("firstName"),
      lastName: e?.get("lastName"),
      email: e?.get("email"),
      password: e?.get("password"),
    };

    try {
      // Send info to server
      const { data } = await axios.post(
        `${process.env.customKey}/users/register`,
        registerInfo
      );
      console.log(data);
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

export default RegisterForm;
