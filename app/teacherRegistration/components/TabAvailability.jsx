import time from "../../assets/icons/time-alt.png";
import clock1 from "../../assets/icons/clock-1.png";
import clock2 from "../../assets/icons/clock-2.png";
import clock3 from "../../assets/icons/clock-alt.png";
import lugaggeClock from "../../assets/icons/lugagge-clock.png";

import Image from "next/image";

const TabAvailability = () => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row gap-14">
        <div className="flex-1">
          <div className="mb-8">
            <h3 className="flex sm:items-center items-start font-bold text-lg">
              <Image
                alt="Clock Icon"
                className="w-5 inline-block me-2"
                src={clock1}
              />{" "}
              Set your time zone
            </h3>
            <p className="text-sm text-[#8E8E93] mt-1 font-medium">
              Please set your time zone to ensure that all session times are
              displayed accurately in your local time. This helps avoid any
              scheduling conflicts and ensures smooth coordination between tutor
              and students.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 rounded-lg py-3 px-3 bg-[#F2F2F7] mt-2">
              <Image alt="Time Icon" className="w-3 me-3" src={time} />
              <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
              <select className="text-[#48484A] bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] text-sm font-medium px-1.5">
                <option>Select a time zone</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-8">
            <h3 className="flex sm:items-center items-start font-bold text-lg">
              <Image
                alt="Clock Icon"
                className="w-6 inline-block me-2"
                src={clock2}
              />{" "}
              Set your daily work time limit
            </h3>
            <p className="text-sm text-[#8E8E93] mt-1 font-medium">
              Set your daily work time limit to manage your workload effectively
              and maintain a healthy work-life balance. This limit helps ensure
              you don't overcommit and have enough time for rest and practice
              personal activities.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 rounded-lg py-3 px-3 bg-[#F2F2F7] mt-2">
              <Image alt="Book Image" className="w-4 me-3" src={clock3} />
              <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
              <select className="text-[#48484A] bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] text-sm font-medium px-1.5">
                <option>Define your daily work time</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-8">
          <h3 className="flex sm:items-center items-start font-bold text-lg">
            <Image
              alt="Clock Icon"
              className="w-5 inline-block me-2"
              src={lugaggeClock}
            />{" "}
            Set your work schedule
          </h3>
          <p className="text-sm text-[#8E8E93] mt-1 font-medium">
            Minimum working time is set to 8 hours par week, please consider
            your weekly tasks and commitment to define your work time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TabAvailability;
