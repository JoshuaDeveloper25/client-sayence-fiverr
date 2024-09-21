import menuResponsive from "../../assets/icons/menu-responsive.png";
import arrowDoor from "../../assets/icons/arrow-door.png";
import search from "../../assets/icons/search.png";
import AppContext from "@/context/AppProvider";
import logo from "../../assets/icons/logo.png";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

const PrimaryNav = () => {
  const { userInfo, setUserInfo } = useContext(AppContext);

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

export default PrimaryNav;
