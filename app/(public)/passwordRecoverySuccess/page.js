import email from "../../assets/icons/email-alt.png";
import Image from "next/image";
import Link from "next/link";

export default function passwordRecoverySuccess() {
  return (
    <main className="max-w-[400px] mx-auto px-3 my-8">
      <h3 className="MT-SB-1 mb-8">
        <Image
          alt="Lock Open Icon"
          className="inline-block w-6"
          src={email}
        />{" "}
        We just sent you an email!
      </h3>

      <Link href={"/login"}>
        <button className="btn btn-black MT-SB-1" type="button">
          Go to login page
        </button>
      </Link>
    </main>
  );
}
