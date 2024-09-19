"use client";

import { getError } from "@/utils/getError";
import axios from "axios";

const RegisterForm = ({ children }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form object
    const registerInfo = {
      firstName: e?.target?.firstName?.value,
      lastName: e?.target?.lastName?.value,
      email: e?.target?.email?.value,
      password: e?.target?.password?.value,
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
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

export default RegisterForm;
