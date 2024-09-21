"use client";

import { getError } from "@/utils/getError";
import axios from "axios";

const NewPasswordForm = ({ children, structure = 1 }) => {
  const handleSubmit = async (e) => {
    // Form object
    const newPasswordInfo = {
      email: e?.get("email"),
      password: e?.get("password"),
    };

    try {
      // Send info to server
      const { data } = await axios.patch(
        `${process.env.customKey}/users/change-password/${"aqui va token"}`,
        newPasswordInfo
      );
      console.log(data);
    } catch (error) {
      console.log(getError(error));
    }
  };

  return structure === 1 ? (
    <form
      className="flex flex-col sm:flex-row gap-6 mt-8"
      action={handleSubmit}
    >
      {children}
    </form>
  ) : (
    children
  );
};

export default NewPasswordForm;
