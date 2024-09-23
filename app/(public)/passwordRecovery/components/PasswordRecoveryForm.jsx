"use client";

import { getError } from "@/utils/getError";
import { useRouter } from "next/navigation";
import axios from "axios";

const PasswordRecoveryForm = ({ children }) => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    // Form object
    const forgotPasswordInfo = {
      email: e?.get("email"),
    };

    try {
      // Send info to server
      const { data } = await axios.post(
        `${process.env.customKey}/users/forgot-password`,
        forgotPasswordInfo
      );
      console.log(data);
      router.push("/passwordRecoverySuccess");
    } catch (error) {
      console.log(getError(error));
    }
  };

  return <form action={handleSubmit}>{children}</form>;
};

export default PasswordRecoveryForm;
