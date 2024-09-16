import microsoft from "../assets/icons/microsoft.png";
import lockUser from "../assets/icons/lock-user.png";
import google from "../assets/icons/google.png";
import apple from "../assets/icons/apple.png";
import lock from "../assets/icons/lock.png";
import user from "../assets/icons/user.png";
import Image from "next/image";

export default function LogIn() {
  return (
    <main className="max-w-3xl mx-auto px-3 my-8">
      <h2 className="font-bold text-2xl mb-14">Welcome Back.</h2>

      <section>
        <h3 className="font-bold">
          <Image
            alt="User Lock Logo"
            className="align-sub inline-block w-6"
            src={lockUser}
          />{" "}
          Log in
        </h3>

        <p className="text-sm text-[#8E8E93] mt-1 font-medium">
          Enter your account information to access to your account.
        </p>

        <form className="flex flex-col sm:flex-row gap-6 mt-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] mb-3">
              <Image alt="User Icon" className="w-6" src={user} />
              <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
              <input
                placeholder="Enter your email address"
                className="bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] text-sm font-medium px-1.5"
                type="email"
              />
            </div>

            <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] mb-6">
              <Image alt="Lock Image" className="w-6" src={lock} />
              <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
              <input
                placeholder="Enter your password"
                className="bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] text-sm font-medium px-1.5"
                type="password"
              />
            </div>

            <button type="submit" className="btn btn-black">
              Log in
            </button>

            <h2 className="text-center text-[#1C1C1E] font-medium text-sm mt-6">
              I can&apos;t sign in, help!
            </h2>
          </div>

          {/* Or - Desktop */}
          <div className="sm:block hidden">
            <div className="w-[.1rem] mx-auto h-14 bg-[#1C1C1E]/70"></div>
            <h3 className=" font-bold my-4">Or</h3>
            <div className="w-[.1rem] mx-auto h-14 bg-[#1C1C1E]/70"></div>
          </div>

          {/* Or - Mobile */}
          <div className="sm:hidden flex gap-3 items-center">
            <div className="w-56 mx-auto h-[.1rem] bg-[#1C1C1E]/70"></div>
            <h3 className="font-bold">Or</h3>
            <div className="w-56 mx-auto h-[.1rem] bg-[#1C1C1E]/70"></div>
          </div>

          <div className="flex-1">
            {/* Social Media - Desktop */}
            <div className="sm:block hidden">
              <button
                type="button"
                className="flex gap-4 items-center rounded-lg py-3 px-2.5 text-[#1C1C1E] bg-[#F2F2F7] mb-3 w-full font-medium"
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
                className="flex gap-4 items-center rounded-lg py-3 px-2.5 text-[#1C1C1E] bg-[#F2F2F7] mb-3 w-full font-medium"
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
                className="flex gap-4 items-center rounded-lg py-3 px-2.5 text-white bg-[#1C1C1E] mb-3 w-full font-medium"
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
                className="flex gap-4 items-center rounded-lg py-3 px-2.5 text-[#1C1C1E] bg-[#F2F2F7] mb-3 w-full font-medium"
              >
                <Image
                  alt="Google Logo"
                  className="inline-block mx-auto w-6"
                  src={google}
                />
              </button>

              <button
                type="button"
                className="flex gap-4 items-center rounded-lg py-3 px-2.5 text-[#1C1C1E] bg-[#F2F2F7] mb-3 w-full font-medium"
              >
                <Image
                  alt="Microsoft Logo"
                  className="inline-block mx-auto w-6"
                  src={microsoft}
                />
              </button>

              <button
                type="button"
                className="flex gap-4 items-center rounded-lg py-3 px-2.5 text-white bg-[#1C1C1E] mb-3 w-full font-medium"
              >
                <Image
                  alt="Apple Logo"
                  className="inline-block mx-auto w-6 h-6 object-contain"
                  src={apple}
                />{" "}
              </button>
            </div>

            <p className="text-[#1C1C1E] text-sm mt-3">
              By signing in or singing up, you agree with our Privacy policy
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}
