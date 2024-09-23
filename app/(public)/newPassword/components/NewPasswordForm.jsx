"use client";

import { useRouter } from "next/navigation";
import { getError } from "@/utils/getError";
import axios from "axios";

const NewPasswordForm = ({ children, structure = 1, token, securityLevel }) => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    // Form object
    const newPasswordInfo = {
      password: e?.get("password"),
    };

    console.log(newPasswordInfo);

    if (securityLevel === 4) {
      try {
        // Send info to server
        const { data } = await axios.patch(
          `${process.env.customKey}/users/change-password/${token}`,
          newPasswordInfo
        );
        console.log(data);
        router.push("/passwordChangedSuccessful");
      } catch (error) {
        console.log(getError(error));
      }
    } else return;
  };

  return structure === 1 ? (
    <form
      className="flex flex-col sm:flex-row gap-6 mt-8"
      action={handleSubmit}
    >
      {children}
    </form>
  ) : (
    <form action={handleSubmit}>{children}</form>
  );
};

export default NewPasswordForm;
