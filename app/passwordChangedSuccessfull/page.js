import lockOpen from "../assets/icons/lock-open.png";
import Image from "next/image";
import Link from "next/link";

export default function NewPassword() {
  return (
    <main className="max-w-sm mx-auto px-3 my-8">
      <h3 className="font-bold">
        <Image
          alt="Lock Open Icon"
          className="align-sub inline-block w-6"
          src={lockOpen}
        />{" "}
        Password Changed Successfully
      </h3>

      <p className="text-sm text-[#8E8E93] mt-1 mb-8 font-medium">
        Your password has been updated. You can now log in with your new
        password.
      </p>

      <Link href={"/login"}>
        <button className="btn btn-black" type="button">
          Go to login page
        </button>
      </Link>
    </main>
  );
}
