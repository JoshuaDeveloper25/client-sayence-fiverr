"use client";

import AppContext from "@/context/AppProvider";
import { useContext } from "react";

// Components
import SecondaryNav from "./SecondaryNav";
import PrimaryNav from "./PrimaryNav";

const NavbarLogic = () => {
  const { userInfo, isLoading } = useContext(AppContext);

  return isLoading ? (
    <section className="px-3 py-3 w-full">
      <div className="animate-pulse rounded-sm">
        <div className="flex justify-between items-center gap-4">
          <div className="w-44 h-12 rounded-sm bg-[#8E8E93] shadow"></div>

          <div className="w-56 h-8 rounded-sm bg-[#8E8E93] shadow"></div>

          <div className="w-44 h-12 rounded-sm bg-[#8E8E93] shadow"></div>
        </div>
      </div>
    </section>
  ) : // If we are NOT a STUDENT, tutor/teacher navbar appears
  userInfo?.token ? (
    // Tutor/Teacher nav
    <SecondaryNav />
  ) : (
    <PrimaryNav />
  );
};

export default NavbarLogic;
