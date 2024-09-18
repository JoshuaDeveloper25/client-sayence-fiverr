"use client";
import TabShowCase from "./TabShowCase";
import TabBackground from "./TabBackground";
import TabSpecialties from "./TabSpecialties";
import TabSubject from "./TabSubject";
import TabPricing from "./TabPricing";
import TabAvailability from "./TabAvailability";

// Icons
import chevronRightWhite from "../../assets/icons/chevron-right-white.png";
import chevronLeftWhite from "../../assets/icons/chevron-left-white.png";
import { act, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const tabsTitle = [
  {
    label: "Subject",
  },

  {
    label: "Specialties",
  },

  {
    label: "Background",
  },

  {
    label: "Showcase",
  },

  {
    label: "Pricing",
  },

  {
    label: "Availability",
  },
];

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [masteredLanguages, setMasteredLanguages] = useState([{}]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const teacherInfoRegistration = {
      teachingSubject: e?.target?.teachingSubject?.value?.trim(),
      profileTitle: e?.target?.profileTitle?.value?.trim(),
      teachedSubjects: e?.target?.teachedSubjects?.value?.trim(),
      introductionOfYourself: e?.target?.introductionOfYourself?.value?.trim(),
      // masteredLanguages: masteredLanguages,
    };

    console.log(teacherInfoRegistration);

    setActiveTabIndex((prev) => prev + 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between space-x-3 mb-6">
        {/* Loop through tab data and render button for each. */}
        {tabsTitle.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-2 transition-colors duration-300 pointer-events-none rounded-lg px-2 w-full ${
                idx > activeTabIndex && "bg-[#C7C7C7]"
              } font-bold text-white ${
                idx === activeTabIndex
                  ? "bg-[#1a47ff] text-white "
                  : "bg-[#BDCAFF]"
              }`}
              // Change the active tab on click.
              // onClick={() => setActiveTabIndex(idx)}
            >
              <span className="sm:block hidden">{tab.label}</span>
              <span className="sm:hidden block">{idx + 1}</span>
            </button>
          );
        })}
      </div>

      {/* Show active tab content. */}
      <div className="py-4">
        <div className={`${activeTabIndex !== 0 && "hidden"}`}>
          <TabSubject
            setMasteredLanguages={setMasteredLanguages}
            masteredLanguages={masteredLanguages}
          />
        </div>

        <div className={`${activeTabIndex !== 1 && "hidden"}`}>
          <TabSpecialties />
        </div>

        <div className={`${activeTabIndex !== 2 && "hidden"}`}>
          <TabBackground />
        </div>

        <div className={`${activeTabIndex !== 3 && "hidden"}`}>
          <TabShowCase />
        </div>

        <div className={`${activeTabIndex !== 4 && "hidden"}`}>
          <TabPricing />
        </div>

        <div className={`${activeTabIndex !== 5 && "hidden"}`}>
          <TabAvailability />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-6 mt-10">
        {activeTabIndex === 0 ? (
          <Link href={"/applyAsTeacher"} className="w-full">
            <button
              type="button"
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
          </Link>
        ) : (
          <button
            type="button"
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
            <button
              type="submit"
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
          </Link>
        ) : (
          <button
            type="submit"
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
    </form>
  );
};

export default Tabs;
