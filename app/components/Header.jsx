import header from "../assets/images/header.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className="container-page px-3 my-8">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-1">
          <div className="flex flex-col justify-between h-full pe-6">
            <h1 className="font-bold text-[#1C1C1E] LT-SB-2">
              Learn any subject with top-rated tutor
            </h1>
            <div className="sm:hidden block max-w-full mx-auto my-8">
              <Image
                alt="Header Image"
                className="w-full h-full"
                src={header}
                priority
              />
            </div>
            <ul className="list-disc text-[#8E8E93] ps-5 space-y-2">
              <li>
                <p className="MT-SB-1">
                  1 : 1 Online Lessons with a real matched tutors
                </p>
              </li>
              <li>
                <p className="MT-SB-1">Flexible scheduling and rescheduling</p>
              </li>
              <li>
                <p className="MT-SB-1">Access to a library</p>
              </li>
            </ul>
            <button className="btn btn-black mt-6" type="button">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex-1">
          <div className="sm:block hidden max-w-md mx-auto">
            <Image alt="Header Image" className="w-full h-full" src={header} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
