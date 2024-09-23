"use client";

import { getError } from "@/utils/getError";
import { useRouter } from "next/navigation";
import axios from "axios";

const RegisterForm = ({ children, securityLevel }) => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    // Form object
    const registerInfo = {
      firstName: e?.get("firstName"),
      lastName: e?.get("lastName"),
      email: e?.get("email"),
      password: e?.get("password"),
    };

    if (securityLevel === 4) {
      try {
        // Send info to server
        const { data } = await axios.post(
          `${process.env.customKey}/users/register`,
          registerInfo
        );
        console.log(data);
        router.push("/registeredUserSuccess");
      } catch (error) {
        console.log(getError(error));
      }
    } else return;
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
