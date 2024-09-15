import lockUser from "../assets/icons/lock-user.png";
import email from "../assets/icons/email.png";
import Image from "next/image";

export default function PasswordRecovery() {
  return (
    <main className="max-w-sm mx-auto px-3 my-8">
      <h3 className="font-bold">
        <Image 
          alt="Lock User Icon"
          className="align-sub inline-block w-6" src={lockUser} /> Request
        password changes
      </h3>

      <p className="text-sm text-[#8E8E93] mt-1 font-medium">
        Please enter your email address to receive a password recovery link.
      </p>

      <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] my-6">
        <Image 
          alt="Email Icon"
          className="w-6" src={email} />
        <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
        <input
          placeholder="Enter your email address"
          className="bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] text-sm font-medium px-1.5"
          type="email"
        />
      </div>

      <button className="btn btn-blue" type="button">
        Send me an email
      </button>
    </main>
  );
}
