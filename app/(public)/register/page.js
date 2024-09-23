"use client";
import getSecurityLevelMessage from "@/utils/getSecurityLevelMessage";
import doubleUsers from "../../assets/icons/double-users.png";
import BtnFormStatus from "@/app/components/BtnFormStatus";
import { Input } from "@/app/components/InputUtilities";
import microsoft from "../../assets/icons/microsoft.png";
import userPlus from "../../assets/icons/user-plus.png";
import userFill from "../../assets/icons/user-fill.png";
import RegisterForm from "./components/RegisterForm";
import google from "../../assets/icons/google.png";
import apple from "../../assets/icons/apple.png";
import email from "../../assets/icons/email.png";
import lock from "../../assets/icons/lock.png";
import user from "../../assets/icons/user.png";
import { useState } from "react";
import Image from "next/image";

export default function Register() {
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
    <main className="container-page px-3 my-8">
      <h2 className="MT-SB-3 mb-14">Online tutoring with a real teacher.</h2>

      <section>
        <h3 className="flex gap-1 items-start MT-SB-2">
          <div>
            <Image
              alt="User Add Icon"
              className="w-8 sm:inline-block hidden"
              src={userPlus}
            />{" "}
            <Image
              alt="User Fill Icon"
              className="align-sub w-6 sm:hidden inline-block "
              src={userFill}
            />{" "}
          </div>
          Create an account
        </h3>

        <p className="ST-3 text-[#8E8E93] mt-1 ">
          You are about to create an account. Please fill in your security
          information.
        </p>

        <RegisterForm securityLevel={securityLevel}>
          <div className="flex-1">
            <div className="flex gap-3">
              <div className="flex-1">
                <Input
                  inputProp={{
                    placeholder: "First name",
                    name: "firstName",
                    type: "text",
                    required: true,
                  }}
                  errorName={"Please input a name."}
                  errorDesc={"Invalid Name"}
                  boxInputError={true}
                  alt={"User Icon"}
                  imgPath={user}
                  twoColumns={true}
                />
              </div>

              <div className="flex-1">
                <Input
                  inputProp={{
                    placeholder: "Last name",
                    name: "lastName",
                    type: "text",
                    required: true,
                  }}
                  errorName={"Please input last name."}
                  errorDesc={"Invalid LastName"}
                  boxInputError={true}
                  alt={"Double Users Icon"}
                  imgPath={doubleUsers}
                  twoColumns={true}
                />
              </div>
            </div>

            <Input
              inputProp={{
                placeholder: "Enter your email address",
                name: "email",
                type: "email",
                required: true,
              }}
              errorName={"Please input a valid email."}
              errorDesc={"Invalid Email"}
              boxInputError={true}
              alt={"Email Icon"}
              imgPath={email}
            />

            <Input
              inputProp={{
                placeholder: "Enter your password",
                name: "password",
                type: "password",
                required: true,
                onChange: handlePasswordChange,
                value: password,
              }}
              errorName={"Invalid Password"}
              errorDesc={"Please, make sure to input your password."}
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
              styles={"btn btn-blue MT-SB-1 mt-6"}
            />
          </div>

          {/* Or - Desktop */}
          <div className="sm:block hidden">
            <div className="w-[.1rem] mx-auto h-28 bg-[#1C1C1E]/70"></div>
            <h3 className=" MT-1 my-4">Or</h3>
            <div className="w-[.1rem] mx-auto h-28 bg-[#1C1C1E]/70"></div>
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
                  alt="Google Icon"
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
                  alt="Microsoft Icon"
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
                  alt="Apple Icon"
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
                  alt="Google Icon"
                  className="inline-block mx-auto w-6"
                  src={google}
                />
              </button>

              <button
                type="button"
                className="flex gap-4 items-center rounded-lg py-3 px-2.5 text-[#1C1C1E] bg-[#F2F2F7] mb-3 w-full MT-1"
              >
                <Image
                  alt="Microsoft Icon"
                  className="inline-block mx-auto w-6"
                  src={microsoft}
                />
              </button>

              <button
                type="button"
                className="flex gap-4 items-center rounded-lg py-3 px-2.5 text-white bg-[#1C1C1E] mb-3 w-full MT-1"
              >
                <Image
                  alt="Apple Icon"
                  className="inline-block mx-auto w-6 h-6 object-contain"
                  src={apple}
                />{" "}
              </button>
            </div>

            <p className="text-[#1C1C1E] ST-2 mt-3">
              <span className="sm:block hidden">
                By signing in or singing up, you agree with our Privacy policy
              </span>

              <span className="sm:hidden block">
                By clicking Continue, you agree to iPractis User Agreement,
                Privacy Policy
              </span>
            </p>
          </div>
        </RegisterForm>
      </section>
    </main>
  );
}
