"use client";
import book from "../assets/icons/book-alt.png";
import Tabs from "./components/Tabs";
import Image from "next/image";

// Icons
import chevronRightWhite from "../assets/icons/chevron-right-white.png";
import chevronLeftWhite from "../assets/icons/chevron-left-white.png";
import { useState } from "react";
import Link from "next/link";

export default function teacherRegistration() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  console.log(activeTabIndex);

  return (
    <section className="container-page px-3 py-12">
      <div className="mb-6">
        {" "}
        <div className="sm:block hidden">
          <h3 className="flex sm:items-center items-start font-bold text-xl">
            <Image
              alt="Book Icon"
              className="w-6 inline-block me-2"
              src={book}
            />{" "}
            Complete the application form
          </h3>
        </div>
        <div className="sm:hidden block">
          <h3 className="font-bold text-xl">Complete your application</h3>
        </div>
        <p className="sm:block hidden text-sm text-[#8E8E93] mt-1 font-medium">
          Fill the form with all the necessary information, we will review them
          as soon as possible.
        </p>
        <p className="sm:hidden block text-sm text-[#8E8E93] mt-1 font-medium">
          Fill your teacher’s profile
        </p>
      </div>

      {/* Tabs */}
      <Tabs
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
      />

      {/* Buttons */}
      <div className="flex justify-between gap-6 mt-10">
        {activeTabIndex === 0 ? (
          <Link href={"/applyAsTeacher"} className="w-full">
            <button className="flex items-center justify-center btn btn-black">
              <span className="sm:block hidden">
                <Image
                  alt="Chevron Icon"
                  className="w-2 inline-block me-2"
                  src={chevronLeftWhite}
                />
              </span>
              Back
            </button>
          </Link>
        ) : (
          <button
            onClick={() => setActiveTabIndex((prev) => prev - 1)}
            className="flex items-center justify-center btn btn-black"
          >
            <span className="sm:block hidden">
              <Image
                alt="Chevron Icon"
                className="w-2 inline-block me-2"
                src={chevronLeftWhite}
              />
            </span>
            Back
          </button>
        )}

        {activeTabIndex === 5 ? (
          <Link href={"/approvalTeacher"} className="w-full">
            <button className="flex items-center justify-center btn btn-blue">
              <span className="sm:block hidden">
                Save, and continue{" "}
                <Image
                  alt="Chevron Icon"
                  className="w-2 inline-block ms-2"
                  src={chevronRightWhite}
                />
              </span>
              <span className="sm:hidden block">Continue</span>
            </button>
          </Link>
        ) : (
          <button
            onClick={() => setActiveTabIndex((prev) => prev + 1)}
            className="flex items-center justify-center btn btn-blue"
          >
            <span className="sm:block hidden">
              Save, and continue{" "}
              <Image
                alt="Chevron Icon"
                className="w-2 inline-block ms-2"
                src={chevronRightWhite}
              />
            </span>
            <span className="sm:hidden block">Continue</span>
          </button>
        )}
      </div>
    </section>
  );
}
