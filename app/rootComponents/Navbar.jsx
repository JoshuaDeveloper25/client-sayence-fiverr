"use client";

import tutorImagePreview from "../assets/images/tutor-image-preview.png";
import logoProffesional from "../assets/icons/logo-professional.png";
import menuResponsive from "../assets/icons/menu-responsive.png";
import arrowDoor from "../assets/icons/arrow-door.png";
import dashboard from "../assets/icons/dashboard.png";
import notifications from "../assets/icons/notifications.png";
import messagesAlt from "../assets/icons/messages-alt.png";
import finance from "../assets/icons/finance.png";
import add from "../assets/icons/add.png";
import search from "../assets/icons/search.png";
import settings from "../assets/icons/settings.png";
import { usePathname } from "next/navigation";
import logo from "../assets/icons/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  return pathname === "/applyAsTeacher" ||
    pathname === "/teacherRegistration" ? (
    <nav className="container-page px-3 py-3">
      <div className="flex justify-between items-center gap-4">
        <div>
          <Link href={"#"}>
            <Image
              alt="Logo Image"
              className="w-32 inline-block"
              src={logoProffesional}
            />
          </Link>
        </div>

        <div className="sm:flex hidden items-center gap-2.5">
          <Image
            alt="Dashboard Icon"
            className="inline-block w-6"
            src={dashboard}
          />

          <h3 className="font-medium">Dashboard</h3>
        </div>

        <div className="space-x-6 sm:flex items-center hidden">
          <div>
            <Image
              alt="Notifications Icon"
              className="inline-block w-6 me-6"
              src={notifications}
            />

            <Image
              alt="Messages Icon"
              className="inline-block w-6"
              src={messagesAlt}
            />
          </div>

          <div className="flex items-center gap-8 text-white font-medium bg-[#1C1C1E] px-2 py-2 rounded-lg">
            <div>
              <Image
                alt="Finance Icon"
                className="inline-block w-7"
                src={finance}
              />
            </div>

            <div className="flex items-center gap-3">
              <h4>0 USD</h4>
              <Image
                alt="Add Icon"
                className="inline-block cursor-pointer w-6"
                src={add}
              />
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#1C1C1E] px-2 py-2 rounded-lg">
            <div className="relative">
              <Image
                alt={"Tutor Image"}
                className="rounded-md w-7"
                src={tutorImagePreview}
              />

              <div className="absolute right-0 bottom-0 rounded-full w-2 h-2 bg-[#00FF47]"></div>
            </div>

            <div>
              <Image
                alt={"Settings Icon"}
                className="w-5 cursor-pointer"
                src={settings}
              />
            </div>
          </div>
        </div>

        <div className="sm:hidden block">
          <Image
            alt="Menu Responsive Logo"
            className="w-12 inline-block cursor-pointer"
            src={menuResponsive}
          />
        </div>
      </div>
    </nav>
  ) : (
    <>
      <nav className="container-page px-3 py-3">
        <div className="flex justify-between items-center gap-4">
          <div>
            <Link href={"/"}>
              <Image
                alt="Logo Image"
                className="w-32 inline-block"
                src={logo}
              />
            </Link>
          </div>

          <div className="relative sm:block hidden">
            <input
              className="placeholder-black outline-none font-bold px-8"
              placeholder="Find a tutor"
              type="text"
            />
            <Image
              className="absolute left-0 inline-block w-6"
              alt="Logo Search"
              src={search}
            />
          </div>

          <div className="space-x-6 sm:block hidden">
            <Link className="font-bold" href={"/applyAsTeacher"}>
              Become a tutor
            </Link>

            <Link className="font-bold" href={"/login"}>
              Log in{" "}
              <Image
                alt="Arrow Door"
                className="inline-block w-6"
                src={arrowDoor}
              />
            </Link>

            <Link href={"/register"}>
              <button type="button" className="btn btn-black w-auto">
                Register
              </button>
            </Link>
          </div>

          <div className="sm:hidden block">
            <Image
              alt="Menu Responsive Logo"
              className="w-12 inline-block cursor-pointer"
              src={menuResponsive}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
