import email from "../../assets/icons/user.png";
import Image from "next/image";
import Link from "next/link";

export default function registeredUserSuccess() {
  return (
    <main className="max-w-[400px] mx-auto px-3 my-8">
      <h3 className="flex items-start MT-SB-1 mb-8">
        <Image alt="Lock Open Icon" className="inline-block w-6" src={email} />{" "}
        Account successfully created!
      </h3>

      <Link href={"/login"}>
        <button className="btn btn-black MT-SB-1" type="button">
          Go to login page
        </button>
      </Link>
    </main>
  );
}
