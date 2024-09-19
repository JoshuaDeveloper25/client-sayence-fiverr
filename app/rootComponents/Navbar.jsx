"use client";

import tutorImagePreview from "../assets/images/tutor-image-preview.png";
import logoProffesional from "../assets/icons/logo-professional.png";
import menuResponsive from "../assets/icons/menu-responsive.png";
import notifications from "../assets/icons/notifications.png";
import messagesAlt from "../assets/icons/messages-alt.png";
import arrowDoor from "../assets/icons/arrow-door.png";
import dashboard from "../assets/icons/dashboard.png";
import settings from "../assets/icons/settings.png";
import finance from "../assets/icons/finance.png";
import search from "../assets/icons/search.png";
import AppContext from "@/context/AppProvider";
import { usePathname } from "next/navigation";
import logo from "../assets/icons/logo.png";
import add from "../assets/icons/add.png";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { userInfo, setUserInfo, isLoading } = useContext(AppContext);
  const pathname = usePathname();

  const handleLogout = () => {
    setUserInfo({});
    localStorage.removeItem("userInfo");
  };

  return isLoading ? (
    <div className="px-3 py-3 w-full">
      <div className="animate-pulse rounded-sm">
        <div className="flex justify-between items-center gap-4">
          <div className="w-44 h-12 rounded-sm bg-[#8E8E93] shadow"></div>

          <div className="w-56 h-8 rounded-sm bg-[#8E8E93] shadow"></div>
        
          <div className="w-44 h-12 rounded-sm bg-[#8E8E93] shadow"></div>
        </div>
      </div>
    </div>
  ) : pathname === "/applyAsTeacher" ||
    pathname === "/teacherRegistration" ||
    pathname === "/approvalTeacher" ? (
    <nav className="px-3 py-3">
      <div className="flex justify-between items-center gap-4">
        <div>
          <Link href={"/applyAsTeacher"}>
            <Image
              alt="Logo Image"
              className="w-32 inline-block"
              src={logoProffesional}
              priority
            />
          </Link>
        </div>

        <div className="sm:flex hidden items-center gap-2.5">
          <Image
            alt="Dashboard Icon"
            className="inline-block w-6"
            src={dashboard}
            priority
          />

          <h3 className="ST-SB-4">Dashboard</h3>
        </div>

        <div className="space-x-6 sm:flex items-center hidden">
          <div>
            <Image
              alt="Notifications Icon"
              className="inline-block w-6 me-6"
              src={notifications}
              priority
            />

            <Image
              alt="Messages Icon"
              className="inline-block w-6"
              src={messagesAlt}
              priority
            />
          </div>

          <div className="flex items-center gap-8 text-white font-medium bg-[#1C1C1E] px-2 py-2 rounded-lg">
            <div>
              <Image
                alt="Finance Icon"
                className="inline-block w-7"
                src={finance}
                priority
              />
            </div>

            <div className="flex items-center gap-3">
              <h4>0 USD</h4>
              <Image
                alt="Add Icon"
                className="inline-block cursor-pointer w-6"
                src={add}
                priority
              />
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#1C1C1E] px-2 py-2 rounded-lg">
            <div className="relative">
              <Image
                alt={"Tutor Image"}
                className="rounded-md w-7"
                src={tutorImagePreview}
                priority
              />

              <div className="absolute right-0 bottom-0 rounded-full w-2 h-2 bg-[#00FF47]"></div>
            </div>

            <div>
              <Image
                alt={"Settings Icon"}
                className="w-5 cursor-pointer"
                src={settings}
                priority
              />
            </div>
          </div>
        </div>

        <div className="sm:hidden block">
          <Image
            alt="Menu Responsive Logo"
            className="w-12 inline-block cursor-pointer"
            src={menuResponsive}
            priority
          />
        </div>
      </div>
    </nav>
  ) : (
    <nav className="px-3 py-3">
      <div className="flex justify-between items-center gap-4">
        <div>
          <Link href={"/"}>
            <Image
              alt="Logo Image"
              className="w-32 inline-block"
              src={logo}
              priority
            />
          </Link>
        </div>

        <div className="relative sm:block hidden">
          <input
            className="placeholder-black outline-none ST-SB-4 px-8"
            placeholder="Find a tutor"
            type="text"
          />
          <Image
            className="absolute left-0 inline-block w-6"
            alt="Logo Search"
            src={search}
            priority
          />
        </div>

        <div className="space-x-6 sm:block hidden">
          <Link className="ST-SB-4" href={"/applyAsTeacher"}>
            Become a tutor
          </Link>

          {/* If doesn't have an account - isVisible */}
          {!userInfo?.token ? (
            <>
              <Link className="ST-SB-4" href={"/login"}>
                Log in{" "}
                <Image
                  alt="Arrow Door"
                  className="inline-block w-6"
                  src={arrowDoor}
                  priority
                />
              </Link>

              <Link href={"/register"}>
                <button type="button" className="btn btn-black ST-SB-4 w-auto">
                  Register
                </button>
              </Link>
            </>
          ) : (
            <Link
              onClick={handleLogout}
              className="text-red-500 ST-SB-4"
              href={"/login"}
            >
              Log out{" "}
            </Link>
          )}
        </div>

        <div className="sm:hidden block">
          <Image
            alt="Menu Responsive Logo"
            className="w-12 inline-block cursor-pointer"
            src={menuResponsive}
            priority
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
