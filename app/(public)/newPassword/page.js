"use client";
import getSecurityLevelMessage from "@/utils/getSecurityLevelMessage";
import NewPasswordForm from "./components/NewPasswordForm";
import lockBlack from "../../assets/icons/lock-black.png";
import BtnFormStatus from "@/app/components/BtnFormStatus";
import { Input } from "@/app/components/InputUtilities";
import lock from "../../assets/icons/lock.png";
import Image from "next/image";
import { useState } from "react";

export default function NewPassword() {
  const [password, setPassword] = useState("");
  const [securityLevel, setSecurityLevel] = useState(0);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (newPassword === "") {
      setSecurityLevel(0);
      return;
    }

    if (newPassword.length < 6) {
      setSecurityLevel(1);
    } else if (newPassword.length < 8) {
      setSecurityLevel(2);
    } else if (newPassword.length < 10) {
      setSecurityLevel(3);
    } else {
      setSecurityLevel(4);
    }
  };

  return (
    <main className="max-w-[400px] mx-auto px-3 my-8">
      <h3 className="MT-SB-1">
        <Image
          alt="Lock Black Icon"
          className="align-sub inline-block w-6"
          src={lockBlack}
        />{" "}
        Make a new password
      </h3>

      <p className="text-[#8E8E93] mt-1 mb-5 ST-3">
        Please enter your new password to access your account.
      </p>

      <NewPasswordForm structure={2}>
        <Input
          inputProp={{
            placeholder: "Enter your new password",
            name: "password",
            type: "password",
            required: true,
            onChange: handlePasswordChange,
            passwordValue: password,
          }}
          errorName={"Invalid Password"}
          errorDesc={"Please, make sure to input your password."}
          boxInputError={true}
          alt={"Lock Icon"}
          imgPath={lock}
        />

        <Input
          inputProp={{
            placeholder: "Retape your new password",
            name: "password",
            type: "password",
            required: true,
          }}
          errorName={"Invalid Password"}
          errorDesc={"Please, make sure to input your repeat password."}
          boxInputError={true}
          alt={"Lock Icon"}
          imgPath={lock}
        />

        <div className="flex gap-3 text-[#1C1C1E]">
          <div
            className={`flex-1 h-1.5 rounded-full transition-colors ${
              securityLevel >= 1
                ? securityLevel >= 2
                  ? securityLevel >= 3
                    ? securityLevel >= 4
                      ? "bg-[#29FF64]" // Level 4
                      : "bg-[#FFDD29]" // Level 3
                    : "bg-[#FF9264]" // Level 2
                  : "bg-[#FF2937]" // Level 1
                : "bg-[#E5E5EA]" // Without color
            }`}
          ></div>
          <div
            className={`flex-1 h-1.5 rounded-full transition-colors ${
              securityLevel >= 2
                ? securityLevel >= 3
                  ? securityLevel >= 4
                    ? "bg-[#29FF64]" // Level 4
                    : "bg-[#FFDD29]" // Level 3
                  : "bg-[#FF9264]" // Level 2
                : "bg-[#E5E5EA]" // Without color
            }`}
          ></div>
          <div
            className={`flex-1 h-1.5 rounded-full transition-colors ${
              securityLevel >= 3
                ? securityLevel >= 4
                  ? "bg-[#29FF64]" // Level 4
                  : "bg-[#FFDD29]" // Level 3
                : "bg-[#E5E5EA]" // Without color
            }`}
          ></div>
          <div
            className={`flex-1 h-1.5 rounded-full transition-colors ${
              securityLevel >= 4 ? "bg-[#29FF64]" : "bg-[#E5E5EA]"
            }`}
          ></div>
        </div>

        <h3 className="mt-2 ST-4">
          Password Security Level{securityLevel > 0 ? ":" : ""}{" "}
          {getSecurityLevelMessage(securityLevel)}
        </h3>

        <BtnFormStatus
          buttonText={"Create an account"}
          styles={"btn btn-blue MT-SB-1"}
        />
      </NewPasswordForm>
    </main>
  );
}
