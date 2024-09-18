import doubleUsers from "../assets/icons/double-users.png";
import microsoft from "../assets/icons/microsoft.png";
import userPlus from "../assets/icons/user-plus.png";
import userFill from "../assets/icons/user-fill.png";
import google from "../assets/icons/google.png";
import apple from "../assets/icons/apple.png";
import email from "../assets/icons/email.png";
import lock from "../assets/icons/lock.png";
import user from "../assets/icons/user.png";
import Image from "next/image";

export default function Register() {
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

        <form className="flex flex-col sm:flex-row gap-6 mt-8">
          <div className="flex-1">
            <div className="flex gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] mb-3">
                  <Image alt="User Icon" className="w-6" src={user} />
                  <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
                  <input
                    placeholder="First name"
                    className="bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] ST-3 px-1.5"
                    type="email"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] mb-3">
                  <Image alt="User Icon" className="w-6" src={doubleUsers} />
                  <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
                  <input
                    placeholder="Last name"
                    className="bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] ST-3 px-1.5"
                    type="email"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] mb-3">
              <Image alt="Email Icon" className="w-6" src={email} />
              <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
              <input
                placeholder="Enter your email address"
                className="bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] ST-3 px-1.5"
                type="email"
              />
            </div>

            <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] mb-6">
              <Image alt="Lock Icon" className="w-6" src={lock} />
              <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
              <input
                placeholder="Enter your password"
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
            <h3 className="mt-2 ST-4">
              Password Security Level
            </h3>

            <button type="submit" className="btn btn-blue MT-SB-1 mt-6">
              Create an account
            </button>
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
        </form>
      </section>
    </main>
  );
}
