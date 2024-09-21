import PasswordRecoveryForm from "./components/PasswordRecoveryForm";
import BtnFormStatus from "@/app/components/BtnFormStatus";
import lockUser from "../../assets/icons/lock-user.png";
import email from "../../assets/icons/email.png";
import Image from "next/image";

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
        <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] my-6">
          <Image alt="Email Icon" className="w-6" src={email} />
          <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
          <input
            placeholder="Enter your email address"
            className="bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] text-sm ST-3 px-1.5"
            type="email"
            name="email"
          />
        </div>

        <BtnFormStatus
          buttonText={"Send me an email"}
          styles={"btn btn-blue MT-SB-1"}
        />
      </PasswordRecoveryForm>
    </main>
  );
}
