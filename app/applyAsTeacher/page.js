"use client";

import Image from "next/image";
import header from "../assets/images/header-2.png";

import book from "../assets/icons/book.png";
import user from "../assets/icons/user-fill-alt.png";
import dollar from "../assets/icons/dollar.png";
import hat from "../assets/icons/hat.png";
import Link from "next/link";

export default function ApplyAsATeacher() {
  return (
    <>
      {/* Header */}
      <header className="container-page px-3 my-8">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <div className="flex flex-col justify-between h-full pe-6">
              <h1 className="font-bold text-3xl text-[#1C1C1E]">
                Join our top rated
                <span className="sm:block inline-block">community tutors</span>
              </h1>

              <ul className="list-disc text-[#8E8E93] font-medium ps-5 space-y-2 sm:my-0 my-3">
                <li>
                  <p>Work at your suitable hours</p>
                </li>
                <li>
                  <p>Work online from anywhere</p>
                </li>
                <li>
                  <p>Do the job that make you feel free</p>
                </li>
              </ul>

              <div className="sm:hidden block max-w-full mx-auto my-8">
                <Image
                  alt="Header Image"
                  className="w-full h-full"
                  src={header}
                />
              </div>

              <Link href={"/teacherRegistration"}>
                <button className="btn btn-black" type="button">
                  Apply now!
                </button>
              </Link>
            </div>
          </div>

          <div className="flex-1">
            <div className="sm:block hidden max-w-md ms-auto">
              <Image
                alt="Header Image"
                className="w-full h-full"
                src={header}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Few steps to start your career */}
      <section className="container-page px-3 my-8">
        <h3 className="font-bold text-2xl">
          Few steps only to start your career
        </h3>

        <p className="text-base text-[#8E8E93] mt-1 font-medium">
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

            <button className="btn btn-black ms-3 w-auto" type="button">
              Start!
            </button>
          </div>

          <div className="flex items-center gap-6 justify-between mt-6">
            <div>
              <h3 className="font-bold text-[#1C1C1E]">Pick a subject</h3>
              <p className="font-medium text-[#8E8E93]">
                Choose a subject you{" "}
                <span className="lg:block inline">master</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#1C1C1E]">Fill up your profile</h3>
              <p className="font-medium text-[#8E8E93]">
                Set up your tutor profile in{" "}
                <span className="lg:block inline">a few steps.</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#1C1C1E]">Get approved</h3>
              <p className="font-medium text-[#8E8E93]">
                Match requirement to get{" "}
                <span className="lg:block inline">approved.</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#1C1C1E]">
                Start a new career life
              </h3>
              <p className="font-medium text-[#8E8E93]">
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
              <h3 className="font-bold text-[#1C1C1E]">Pick a subject</h3>
              <p className="font-medium text-[#8E8E93]">
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
              <h3 className="font-bold text-[#1C1C1E]">Fill up your profile</h3>
              <p className="font-medium text-[#8E8E93]">
                Set up your tutor profile in a few steps.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <Image alt="Hat Icon" className="w-10" src={hat} />
            </div>
            <div>
              <h3 className="font-bold text-[#1C1C1E]">Get approved</h3>
              <p className="font-medium text-[#8E8E93]">
                Match requirement to get approved.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <Image alt="Dollar Icon" className="w-10" src={dollar} />
            </div>
            <div>
              <h3 className="font-bold text-[#1C1C1E]">
                Start a new career life
              </h3>
              <p className="font-medium text-[#8E8E93]">
                Work from anywhere at your own path.
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
