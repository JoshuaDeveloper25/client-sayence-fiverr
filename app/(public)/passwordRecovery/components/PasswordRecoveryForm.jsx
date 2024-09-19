"use client";

import { getError } from "@/utils/getError";
import axios from "axios";

const PasswordRecoveryForm = ({ children }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form object
    const forgotPasswordInfo = {
      email: e?.target?.email?.value,
    };

    try {
      // Send info to server
      const { data } = await axios.post(
        `${process.env.customKey}/users/forgot-password`,
        forgotPasswordInfo
      );
      console.log(data);
    } catch (error) {
      console.log(getError(error));
    }
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default PasswordRecoveryForm;
