import profileIcon1 from "../../assets/icons/profile-icon1.png";
import profileIcon2 from "../../assets/icons/profile-icon2.png";
import profileIcon3 from "../../assets/icons/profile-icon3.png";
import profileIcon4 from "../../assets/icons/profile-icon4.png";
import profileIcon5 from "../../assets/icons/profile-icon5.png";
import profileIcon6 from "../../assets/icons/profile-icon6.png";
import profileIcon7 from "../../assets/icons/profile-icon7.png";
import profileIcon8 from "../../assets/icons/profile-icon8.png";

import tutorImagePreview from "../../assets/images/tutor-image-preview.png";
import logoProffesional from "../../assets/icons/logo-professional.png";
import menuResponsive from "../../assets/icons/menu-responsive.png";
import notifications from "../../assets/icons/notifications.png";
import messagesAlt from "../../assets/icons/messages-alt.png";
import dashboard from "../../assets/icons/dashboard.png";
import settings from "../../assets/icons/settings.png";
import finance from "../../assets/icons/finance.png";
import add from "../../assets/icons/add.png";

import ClickAwayListener from "@/utils/clickAwayListener";
import { useContext, useState } from "react";
import AppContext from "@/context/AppProvider";
import Image from "next/image";
import Link from "next/link";

const SecondaryNav = () => {
  const { userInfo, setUserInfo } = useContext(AppContext);
  const [openProfileDropdown, setOpenProfileDropdown] = useState(false);

  const handleLogout = () => {
    setUserInfo({});
    localStorage.removeItem("userInfo");
  };

  return (
    <nav className="px-3 py-3">
      <div className="flex justify-between items-center gap-4">
        <div>
          <Link href={"/"}>
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

          {/* Profile */}
          <div className="relative">
            <div
              onClick={() => setOpenProfileDropdown(true)}
              className="flex items-center gap-4 bg-[#1C1C1E] px-2 py-2 rounded-lg cursor-pointer"
            >
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

            {openProfileDropdown && (
              <ClickAwayListener
                onClickAway={() => setOpenProfileDropdown(false)}
              >
                <div
                  id="dropdown"
                  className="absolute top-14 right-0 z-[100] rounded-lg shadow-xl bg-white border w-72 py-3 px-5"
                >
                  <div className="flex gap-3">
                    <Image
                      className="rounded-md"
                      src={tutorImagePreview}
                      alt="Image Tutor"
                    />

                    <div className="flex flex-col justify-between">
                      <h3 className="text-[#1C1C1E] MT-SB-1 capitalize">
                        Hi, {userInfo?.firstName}
                      </h3>
                      <div className="flex gap-2 items-center">
                        <div className="h-2 w-2 rounded-full bg-[#00FF47]"></div>
                        <div className="h-2 w-2 rounded-full bg-[#FF0011]"></div>
                        <div className="h-2 w-2 rounded-full bg-[#FFD600]"></div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4 ST-4 py-5 text-[#1C1C1E]">
                    <li>
                      <Link
                        className="flex items-center justify-between"
                        href={"#"}
                      >
                        Profile{" "}
                        <Image
                          className="w-4"
                          src={profileIcon1}
                          alt="Profile Icon"
                        />
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="flex items-center justify-between"
                        href={"#"}
                      >
                        Dashboard{" "}
                        <Image
                          className="w-4"
                          src={profileIcon2}
                          alt="Profile Icon"
                        />
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="flex items-center justify-between"
                        href={"#"}
                      >
                        Classroom{" "}
                        <Image
                          className="w-4"
                          src={profileIcon3}
                          alt="Profile Icon"
                        />
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="flex items-center justify-between"
                        href={"#"}
                      >
                        Find a Tutor{" "}
                        <Image
                          className="w-4"
                          src={profileIcon4}
                          alt="Profile Icon"
                        />
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="flex items-center justify-between"
                        href={"#"}
                      >
                        Favorite teachers{" "}
                        <Image
                          className="w-4"
                          src={profileIcon5}
                          alt="Profile Icon"
                        />
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="flex items-center justify-between"
                        href={"#"}
                      >
                        Settings{" "}
                        <Image
                          className="w-4"
                          src={profileIcon6}
                          alt="Profile Icon"
                        />
                      </Link>
                    </li>

                    <li className="py-6">
                      {userInfo?.role === "student" ? (
                        <Link
                          className="flex items-center justify-between"
                          href={`${
                            userInfo?.token ? "/applyAsTeacher" : "/login"
                          }`}
                        >
                          Become a teacher{" "}
                          <Image
                            className="w-4"
                            src={profileIcon5}
                            alt="Profile Icon"
                          />
                        </Link>
                      ) : (
                        <Link
                          className="flex items-center justify-between"
                          href={`${userInfo?.token && "/login"}`}
                        >
                          Switch to student{" "}
                          <Image
                            className="w-4"
                            src={profileIcon5}
                            alt="Profile Icon"
                          />
                        </Link>
                      )}
                    </li>

                    <li>
                      <Link
                        className="flex items-center justify-between"
                        href={"#"}
                      >
                        Assistence{" "}
                        <Image
                          className="w-4"
                          src={profileIcon7}
                          alt="Profile Icon"
                        />
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="flex items-center justify-between"
                        onClick={handleLogout}
                        href={"#"}
                      >
                        Log out{" "}
                        <Image
                          className="w-4"
                          src={profileIcon8}
                          alt="Profile Icon"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </ClickAwayListener>
            )}
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
  );
};

export default SecondaryNav;
