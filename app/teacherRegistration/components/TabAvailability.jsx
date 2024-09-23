import time from "../../assets/icons/time-alt.png";
import clock1 from "../../assets/icons/clock-1.png";
import clock2 from "../../assets/icons/clock-2.png";
import clock3 from "../../assets/icons/clock-alt.png";
import lugaggeClock from "../../assets/icons/lugagge-clock.png";
import calendar from "../../assets/icons/calendar-alt.png";

import Image from "next/image";
import { dailyWorkTime, timeZones } from "./data";
import { Select } from "@/app/components/InputUtilities";

const TabAvailability = ({ activeTabIndex }) => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row gap-14">
        <div className="flex-1">
          <div className="mb-8">
            <h3 className="flex items-center MT-SB-1">
              <Image
                alt="Clock Icon"
                className="w-5 inline-block me-2"
                src={clock1}
              />{" "}
              Set your time zone
            </h3>
            <p className=" text-[#8E8E93] mt-1 ST-3">
              Please set your time zone to ensure that all session times are
              displayed accurately in your local time. This helps avoid any
              scheduling conflicts and ensures smooth coordination between tutor
              and students.
            </p>
          </div>

          <div>
            <Select
              selectProp={{
                name: "subSubject",
                required: activeTabIndex === 5 ? true : false,
              }}
              defaultOption={"Select a time zone"}
              options={timeZones}
              errorName={"Please select a time zone."}
              errorDesc={"Invalid Time Zone"}
              boxInputError={true}
              iconStyles={"h-5 w-5 object-contain"}
              alt={"Time Image"}
              imgPath={time}
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-8">
            <h3 className="flex sm:items-center items-start MT-SB-1">
              <Image
                alt="Clock Icon"
                className="w-5 inline-block me-2"
                src={clock2}
              />{" "}
              Set your daily work time limit
            </h3>
            <p className=" text-[#8E8E93] mt-1 ST-3">
              Set your daily work time limit to manage your workload effectively
              and maintain a healthy work-life balance. This limit helps ensure
              you don&apos;t overcommit and have enough time for rest and
              practice personal activities.
            </p>
          </div>

          <div>
            <Select
              selectProp={{
                name: "subSubject",
                required: activeTabIndex === 5 ? true : false,
              }}
              defaultOption={"Define your daily work time"}
              options={dailyWorkTime}
              errorName={"Please select a time zone."}
              errorDesc={"Invalid Time Zone"}
              boxInputError={true}
              iconStyles={"h-5 w-5"}
              alt={"Clock Image"}
              imgPath={clock3}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="mt-8">
          <h3 className="flex sm:items-center items-start MT-SB-1">
            <div className="sm:block hidden">
              <Image
                alt="Luggage Clock Icon"
                className="w-5 inline-block me-2"
                src={lugaggeClock}
              />
            </div>
            <div className="sm:hidden block">
              <Image alt="Calendar Icon" className="w-5 me-3" src={calendar} />
            </div>
            Set your work schedule
          </h3>
          <p className=" text-[#8E8E93] mt-1 ST-3">
            Minimum working time is set to 8 hours par week, please consider
            your weekly tasks and commitment to define your work time.
          </p>
        </div>
      </div>

      <TableAvailability />
    </section>
  );
};

export default TabAvailability;

const TableAvailability = () => {
  const workHours = [
    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">04:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">05:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">06:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">07:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">08:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">09:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">10:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">11:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">12:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">13:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">14:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">15:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">16:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">17:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">18:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">19:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">20:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">21:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">22:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">23:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">00:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">01:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">02:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },

    {
      hourTime: (
        <>
          <span className="text-[#1C1C1E] ST-4">03:00</span>{" "}
          <span className="text-[#8E8E93] ST-SB-4">AM</span>
        </>
      ),
    },
  ];

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <>
      <div className="relative overflow-x-auto rounded-2xl mt-8 border border-[#C7C7CC]">
        <table className="w-full text-sm text-center text-[#1C1C1E] bg-[#F2F2F7] rounded-2xl">
          {/* Header Table */}
          <thead className="text-xs text-gray-700">
            <tr>
              <th scope="col" className="border-r-2 border-white  py-3"></th>

              {daysOfWeek?.map((day, index) => {
                return (
                  <th
                    key={index}
                    scope="col"
                    className="border-r-2 border-white  py-3 ST-4  last:border-r-0"
                  >
                    {day}
                  </th>
                );
              })}
            </tr>
          </thead>

          {/* Content Table */}
          <tbody>
            {workHours?.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-t-2 border-b-2 [&:not(:last-child)]:border-white last:border-b-0"
                >
                  <td className="w-4 px-4 py-2 bg-[#F2F2F7]">
                    <h2 className="flex font-medium items-center gap-1.5">
                      {item?.hourTime}
                    </h2>
                  </td>

                  {daysOfWeek?.map((day, index) => {
                    return (
                      <td
                        key={index}
                        className="border-b-2 border-r-2 border-[#e5e5ea] last:border-r-0 px-6 py-2"
                      ></td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
