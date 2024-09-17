"use client";
import book from "../assets/icons/book-alt.png";
import Tabs from "./components/Tabs";
import Image from "next/image";

// Icons
import chevronRightWhite from "../assets/icons/chevron-right-white.png";
import chevronLeftWhite from "../assets/icons/chevron-left-white.png";
import { useState } from "react";

export default function teacherRegistration() {
  const [activeTabIndex, setActiveTabIndex] = useState(1);

  return (
    <section className="container-page px-3 py-12">
      <div className="mb-6">
        {" "}
        <h3 className="flex sm:items-center items-start font-bold text-xl">
          <Image alt="Book Icon" className="w-6 inline-block me-2" src={book} />{" "}
          Complete the application form
        </h3>
        <p className="text-sm text-[#8E8E93] mt-1 font-medium">
          Fill the form with all the necessary information, we will review them
          as soon as possible.
        </p>
      </div>

      {/* Tabs */}
      <Tabs
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
      />

      {/* Buttons */}
      <div className="flex justify-between gap-6 mt-10">
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
      </div>
    </section>
  );
}
