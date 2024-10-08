"use client";

import header from "../../assets/images/header-2.png";
import AppContext from "@/context/AppProvider";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { userInfo } = useContext(AppContext);

  return (
    <header className="container-page px-3 my-8">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-1">
          <div className="flex flex-col justify-between h-full pe-6">
            <h1 className="LT-SB-2 text-[#1C1C1E]">
              Join our top rated
              <span className="sm:block inline-block">community tutors</span>
            </h1>

            <ul className="list-disc text-[#8E8E93] ps-5 space-y-2 sm:my-0 my-3">
              <li>
                <p className="MT-SB-1">Work at your suitable hours</p>
              </li>
              <li>
                <p className="MT-SB-1">Work online from anywhere</p>
              </li>
              <li>
                <p className="MT-SB-1">Do the job that make you feel free</p>
              </li>
            </ul>

            <div className="sm:hidden block max-w-full mx-auto my-8">
              <Image
                alt="Header Image"
                className="w-full h-full"
                src={header}
                priority
              />
            </div>

            <Link
              href={`${userInfo?.token ? "/teacherRegistration" : "/login"}`}
            >
              <button className="btn btn-black MT-SB-2" type="button">
                Apply now!
              </button>
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <div className="sm:block hidden max-w-md ms-auto">
            <Image alt="Header Image" className="w-full h-full" src={header} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
