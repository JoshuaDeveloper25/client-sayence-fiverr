"use client";

import { Input } from "@/app/components/InputUtilities";
import BtnFormStatus from "@/app/components/BtnFormStatus";
import microsoft from "../../../assets/icons/microsoft.png";
import google from "../../../assets/icons/google.png";
import apple from "../../../assets/icons/apple.png";
import user from "../../../assets/icons/user.png";
import lock from "../../../assets/icons/lock.png";
import LoginForm from "./LoginForm";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LoginFormLogic = () => {
  const [emailInput, setEmailInput] = useState("");
  const [wrongCredentialsMessage, setWrongCredentialsMessage] = useState("");
  const [disableInternalValidation, setDisableInternalValidation] =
    useState(false);

  // If it's empty or if account doesn't exists or if account is banned
  const emailValidation =
    !emailInput || !wrongCredentialsMessage
      ? { errorName: "Invalid Email", errorDesc: "Check your spelling email" }
      : wrongCredentialsMessage?.includes("Wrong Credentials")
      ? {
          errorName: "No account exists for this email address.",
          errorDesc: `Check your spelling email or create an account if you don't have one`,
        }
      : null;

  return (
    <LoginForm
      setDisableInternalValidation={setDisableInternalValidation}
      setWrongCredentialsMessage={setWrongCredentialsMessage}
    >
      <div className="flex-1">
        <Input
          inputProp={{
            placeholder: "Enter your email address",
            name: "email",
            type: "email",
            required: true,
            value: emailInput,
          }}
          errorName={emailValidation?.errorName}
          errorDesc={emailValidation?.errorDesc}
          boxInputError={true}
          alt={"User Icon"}
          imgPath={user}
          setInputValue={setEmailInput}
          disableInternalValidation={disableInternalValidation}
          wrongCredentialsMessage={wrongCredentialsMessage}
        />

        <Input
          inputProp={{
            placeholder: "Enter your password",
            name: "password",
            type: "password",
            required: true,
          }}
          errorName={"Invalid Password"}
          errorDesc={"Please, make sure to input your password."}
          boxInputError={true}
          alt={"Lock Icon"}
          imgPath={lock}
        />

        <BtnFormStatus styles={"btn btn-black MT-SB-1"} buttonText={"Log In"} />

        <Link href={"/passwordRecovery"}>
          <h2 className="text-center text-[#1C1C1E] ST-4 mt-6 underline">
            I can&apos;t sign in, help!
          </h2>
        </Link>
      </div>

      {/* Or - Desktop */}
      <div className="sm:block hidden">
        <div className="w-[.1rem] mx-auto h-14 bg-[#1C1C1E]/70"></div>
        <h3 className=" MT-1 my-4">Or</h3>
        <div className="w-[.1rem] mx-auto h-14 bg-[#1C1C1E]/70"></div>
      </div>

      {/* Or - Mobile */}
      <div className="sm:hidden flex gap-3 items-center">
        <div className="w-56 mx-auto h-[.1rem] bg-[#1C1C1E]/70"></div>
        <h3 className="MT-1">Or</h3>
        <div className="w-56 mx-auto h-[.1rem] bg-[#1C1C1E]/70"></div>
      </div>

      <div className="flex-1">
        {/* Social Media - Desktop */}
        <div className="sm:block hidden">
          <button
            type="button"
            className="flex gap-4 items-center rounded-lg py-3 px-2.5 text-[#1C1C1E] bg-[#F2F2F7] mb-3 w-full MT-1"
          >
            <Image
              alt="Google Logo"
              className="inline-block w-6"
              src={google}
            />{" "}
            Join with Google in
          </button>

          <button
            type="button"
            className="flex gap-4 items-center rounded-lg py-3 px-2.5 text-[#1C1C1E] bg-[#F2F2F7] mb-3 w-full MT-1"
          >
            <Image
              alt="Microsoft Logo"
              className="inline-block w-6"
              src={microsoft}
            />{" "}
            Join with Microsoft
          </button>

          <button
            type="button"
            className="flex gap-4 items-center rounded-lg py-3 px-2.5 text-white bg-[#1C1C1E] mb-3 w-full MT-1"
          >
            <Image
              alt="Apple Logo"
              className="inline-block w-6 h-6 object-contain"
              src={apple}
            />{" "}
            Join with Apple
          </button>
        </div>

        {/* Social Media - Mobile */}
        <div className="sm:hidden flex gap-3">
          <button
            type="button"
            className="flex gap-4 items-center rounded-lg py-3 px-2.5 text-[#1C1C1E] bg-[#F2F2F7] mb-3 w-full MT-1"
          >
            <Image
              alt="Google Logo"
              className="inline-block mx-auto w-6"
              src={google}
            />
          </button>

          <button
            type="button"
            className="flex gap-4 items-center rounded-lg py-3 px-2.5 text-[#1C1C1E] bg-[#F2F2F7] mb-3 w-full MT-1"
          >
            <Image
              alt="Microsoft Logo"
              className="inline-block mx-auto w-6"
              src={microsoft}
            />
          </button>

          <button
            type="button"
            className="flex gap-4 items-center rounded-lg py-3 px-2.5 text-white bg-[#1C1C1E] mb-3 w-full MT-1"
          >
            <Image
              alt="Apple Logo"
              className="inline-block mx-auto w-6 h-6 object-contain"
              src={apple}
            />{" "}
          </button>
        </div>

        <p className="text-[#1C1C1E] ST-2 mt-3">
          By signing in or singing up, you agree with our Privacy policy
        </p>
      </div>
    </LoginForm>
  );
};

export default LoginFormLogic;
