import Header from "./components/Header";

import book from "../assets/icons/book.png";
import user from "../assets/icons/user-fill-alt.png";
import dollar from "../assets/icons/dollar.png";
import hat from "../assets/icons/hat.png";
import Image from "next/image";

export default function ApplyAsATeacher() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Few steps to start your career */}
      <section className="container-page px-3 my-8">
        <h3 className="MT-SB-3">Few steps only to start your career</h3>

        <p className="MT-SB-1 text-[#8E8E93] mt-1">
          Kickstart your tutoring career with iPractis! Do the job you love and
          enjoy a competitive pay, flexible hours, and the opportunity to make a
          real impact.
        </p>

        {/* Desktop */}
        <article className="sm:block hidden my-6">
          <div className="flex items-center">
            <Image alt="Book Icon" className="w-10" src={book} />
            <div className="w-full h-[.2rem] bg-[#1C1C1E]"></div>

            <Image alt="User Icon" className="w-10" src={user} />
            <div className="w-full h-[.2rem] bg-[#1C1C1E]"></div>

            <Image alt="Hat Icon" className="w-10" src={hat} />
            <div className="w-full h-[.2rem] bg-[#1C1C1E]"></div>

            <Image alt="Dollar Icon" className="w-10" src={dollar} />

            <button className="btn btn-black MT-SB-2 ms-3 w-auto" type="button">
              Start!
            </button>
          </div>

          <div className="flex items-center gap-6 justify-between mt-6">
            <div>
              <h3 className="MT-SB-1 text-[#1C1C1E]">Pick a subject</h3>
              <p className="ST-4 text-[#8E8E93]">
                Choose a subject you{" "}
                <span className="lg:block inline">master</span>
              </p>
            </div>

            <div>
              <h3 className="MT-SB-1 text-[#1C1C1E]">Fill up your profile</h3>
              <p className="ST-4 text-[#8E8E93]">
                Set up your tutor profile in{" "}
                <span className="lg:block inline">a few steps.</span>
              </p>
            </div>

            <div>
              <h3 className="MT-SB-1 text-[#1C1C1E]">Get approved</h3>
              <p className="ST-4 text-[#8E8E93]">
                Match requirement to get{" "}
                <span className="lg:block inline">approved.</span>
              </p>
            </div>

            <div>
              <h3 className="MT-SB-1 text-[#1C1C1E]">
                Start a new career life
              </h3>
              <p className="ST-4 text-[#8E8E93]">
                Work from anywhere at{" "}
                <span className="lg:block inline">your own path.</span>
              </p>
            </div>
          </div>
        </article>

        {/* Responsive */}
        <article className="sm:hidden block space-y-5 my-6">
          <div className="flex items-center gap-3">
            <div>
              <Image alt="Book Icon" className="w-10" src={book} />
            </div>
            <div>
              <h3 className="MT-SB-1 text-[#1C1C1E]">Pick a subject</h3>
              <p className="ST-4 text-[#8E8E93]">
                Choose a subject you{" "}
                <span className="lg:block inline">master</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <Image alt="User Icon" className="w-10" src={user} />
            </div>
            <div>
              <h3 className="MT-SB-1 text-[#1C1C1E]">Fill up your profile</h3>
              <p className="ST-4 text-[#8E8E93]">
                Set up your tutor profile in a few steps.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <Image alt="Hat Icon" className="w-10" src={hat} />
            </div>
            <div>
              <h3 className="MT-SB-1 text-[#1C1C1E]">Get approved</h3>
              <p className="ST-4 text-[#8E8E93]">
                Match requirement to get approved.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <Image alt="Dollar Icon" className="w-10" src={dollar} />
            </div>
            <div>
              <h3 className="MT-SB-1 text-[#1C1C1E]">
                Start a new career life
              </h3>
              <p className="ST-4 text-[#8E8E93]">
                Work from anywhere at your own path.
              </p>
            </div>
          </div>

          <button className="btn btn-black MT-SB-2" type="button">
            Start!
          </button>
        </article>
      </section>
    </>
  );
}
