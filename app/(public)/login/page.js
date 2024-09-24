import lockUser from "../../assets/icons/lock-user.png";
import LoginFormLogic from "./components/LoginFormLogic";
import Image from "next/image";

export default function LogIn() {
  return (
    <main className="container-page px-3 my-8">
      <h2 className="MT-SB-3 mb-14">Welcome Back.</h2>

      <section>
        <h3 className="MT-SB-2">
          <Image
            alt="User Lock Logo"
            className="align-sub inline-block w-6"
            src={lockUser}
          />{" "}
          Log in
        </h3>

        <p className=" text-[#8E8E93] mt-1 ST-3">
          Enter your account information to access to your account.
        </p>

        <LoginFormLogic />
      </section>
    </main>
  );
}
