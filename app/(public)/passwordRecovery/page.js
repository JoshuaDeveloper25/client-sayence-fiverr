import PasswordRecoveryForm from "./components/PasswordRecoveryForm";
import BtnFormStatus from "@/app/components/BtnFormStatus";
import lockUser from "../../assets/icons/lock-user.png";
import email from "../../assets/icons/email.png";
import Image from "next/image";
import { Input } from "@/app/components/InputUtilities";

export default function PasswordRecovery() {
  return (
    <main className="max-w-[400px] mx-auto px-3 my-8">
      <h3 className="MT-SB-1">
        <Image
          alt="Lock User Icon"
          className="align-middle inline-block w-5"
          src={lockUser}
        />{" "}
        Request password changes
      </h3>

      <p className=" text-[#8E8E93] mt-1 ST-3">
        Please enter your email address to receive a password recovery link.
      </p>

      <PasswordRecoveryForm>
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

        <BtnFormStatus
          buttonText={"Send me an email"}
          styles={"btn btn-blue MT-SB-1"}
        />
      </PasswordRecoveryForm>
    </main>
  );
}
