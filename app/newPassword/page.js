import lockBlack from "../assets/icons/lock-black.png";
import lock from "../assets/icons/lock.png";
import Image from "next/image";

export default function NewPassword() {
  return (
    <main className="max-w-[400px] mx-auto px-3 my-8">
      <h3 className="MT-SB-1">
        <Image alt="Lock Black Icon" className="align-sub inline-block w-6" src={lockBlack} /> Make a
        new password
      </h3>

      <p className=" text-[#8E8E93] mt-1 mb-5 ST-3">
        Please enter your new password to access your account.
      </p>

      <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] mb-3">
        <Image alt="Lock Icon" className="w-6" src={lock} />
        <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
        <input
          placeholder="Enter your new password"
          className="bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] ST-3 px-1.5"
          type="password"
        />
      </div>

      <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] mb-3">
        <Image alt="Lock Icon" className="w-6" src={lock} />
        <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
        <input
          placeholder="Retape your new password"
          className="bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] ST-3 px-1.5"
          type="password"
        />
      </div>

      <div className="flex gap-3">
        <div className="flex-1 bg-[#E5E5EA] h-1.5 rounded-full"></div>
        <div className="flex-1 bg-[#E5E5EA] h-1.5 rounded-full"></div>
        <div className="flex-1 bg-[#E5E5EA] h-1.5 rounded-full"></div>
        <div className="flex-1 bg-[#E5E5EA] h-1.5 rounded-full"></div>
      </div>
      <h3 className="ST-4 mt-1 mb-6">Password Security Level</h3>

      <button className="btn btn-blue MT-SB-1" type="button">
        Create an account
      </button>
    </main>
  );
}
