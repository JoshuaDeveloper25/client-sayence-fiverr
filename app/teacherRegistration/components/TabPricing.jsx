import unitedKingdom from "../../assets/countries/united-kingdom.png";
import dollar2 from "../../assets/icons/dollar-alt-2.png";
import finance from "../../assets/icons/finance-alt.png";
import dollar from "../../assets/icons/dollar-alt.png";
import checkbox from "../../assets/icons/checkbox.png";
import email from "../../assets/icons/email-alt.png";
import time from "../../assets/icons/time.png";
import Image from "next/image";

import payment1 from "../../assets/images/payment1.png";
import payment2 from "../../assets/images/payment2.png";

const TabPricing = () => {
  return (
    <>
      {/* Desktop */}
      <section className="sm:flex hidden flex-col sm:flex-row gap-14">
        <div className="flex-1">
          <div className="mb-8">
            <h3 className="flex items-center MT-SB-1">
              <Image
                alt="Dollar Icon"
                className="w-3 inline-block me-2"
                src={dollar}
              />{" "}
              Average price
            </h3>
            <p className="text-sm text-[#8E8E93] mt-1 font-medium ST-3">
              Price is crucial for students when choosing a tutor as it
              determines affordability and value for money.
            </p>
          </div>

          <div className="flex items-center gap-2 mb-8 leading-4">
            <div>
              <Image
                alt={"Country Image"}
                className="rounded-lg"
                src={unitedKingdom}
              />
            </div>
            <div>
              <h3 className="ST-SB-3 text-[#1C1C1E]">Average price</h3>
              <p className="text-[#8E8E93]">
                {" "}
                <span className="ST-SB-2">13 USD</span>
                <span className="ST-1">/30 mins</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[#48484A] MT-SB-1">Private lesson rate</h3>
            <p className="text-sm text-[#48484A] mt-1 ST-3">
              Define your rate for 1:1 private lesson.
            </p>
            <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] mt-2">
              <Image alt="Dollar Icon" className="w-2.5 me-2" src={dollar2} />
              <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
              <input
                placeholder="Set your hourly base rate"
                className="bg-[#F2F2F7] text-[#48484A] outline-none w-full placeholder-[#48484A] ST-3 px-1.5"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-8">
            <h3 className="flex items-center MT-3">
              <Image
                alt="Finance Icon"
                className="w-6 inline-block me-2"
                src={finance}
              />{" "}
              Withdrawal your money
            </h3>
            <p className="text-[#8E8E93] mt-1 ST-3">
              You have the freedom to establish a rate that aligns with your
              professional standards.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex gap-5">
              <div className="flex-1 cursor-pointer">
                <Image className="w-full" src={payment1} alt="Payment One" />
              </div>

              <div className="flex-1 cursor-pointer">
                <Image className="w-full" src={payment2} alt="Payment Two" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[#48484A] MT-SB-1">
              Withdrawal from iPractis account
            </h3>
            <p className=" text-[#48484A] mt-1 ST-3">
              Enter the email address related to your account
            </p>
            <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] mt-2">
              <Image alt="Email Icon" className="w-6 me-2" src={email} />
              <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
              <input
                placeholder="Email address"
                className="bg-[#F2F2F7] text-[#48484A] outline-none w-full placeholder-[#48484A] ST-3 px-1.5"
                type="email"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Responsive */}
      <section className="sm:hidden flex flex-col gap-4">
        <div className="mb-4">
          <h3 className="flex items-center ST-SB-3">
            <Image
              alt="Checkbox Icon"
              className="w-5 inline-block me-2"
              src={checkbox}
            />{" "}
            Average price
          </h3>
          <p className=" text-[#8E8E93] mt-1 ST-3">
            Price is crucial for students when choosing a tutor as it determines
            affordability and value for money. Budget constraints, perceived
            quality, and transparency in pricing influence their
            decision-making.
          </p>
        </div>

        <div className="flex items-center gap-2 mb-4 leading-4">
          <div>
            <Image
              alt={"Country Image"}
              className="rounded-lg"
              src={unitedKingdom}
            />
          </div>
          <div>
            <h3 className="ST-SB-3 text-[#1C1C1E]">Average price</h3>
            <p className="text-[#8E8E93]">
              {" "}
              <span className="ST-SB-2">13 USD</span>
              <span className="ST-1">/30 mins</span>
            </p>
          </div>
        </div>

        <ul className="list-disc ps-5 mb-4 ST-4 text-[#48484A]">
          <li>
            <p>
              Keep in mind that your teacher&apos;s profile is “New” and you
              currently don&apos;t have any profile rate, and review. Make a
              competitive price to attract students.
            </p>
          </li>
        </ul>

        <div className="mb-4">
          <h3 className="flex items-center MT-SB-2">
            <Image
              alt="Time Icon"
              className="w-3 inline-block me-2"
              src={time}
            />
            Set up your hour rate
          </h3>
          <p className=" text-[#8E8E93] mt-1 ST-3">
            You have the freedom to establish a rate that aligns with your
            professional standards.
          </p>
        </div>

        <div className="mb-4">
          <div className="flex gap-5">
            <div className="flex-1 cursor-pointer">
              <Image className="w-full" src={payment1} alt="Payment One" />
            </div>

            <div className="flex-1 cursor-pointer">
              <Image className="w-full" src={payment2} alt="Payment Two" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-[#48484A] MT-SB-1">
            Withdrawal from iPractis account
          </h3>
          <p className="text-[#48484A] mt-1 ST-3">
            Enter the email address related to your account
          </p>
          <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] mt-2">
            <Image alt="Email Icon" className="w-6 me-2" src={email} />
            <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
            <input
              placeholder="Email address"
              className="bg-[#F2F2F7] text-[#48484A] outline-none w-full placeholder-[#48484A] ST-3 px-1.5"
              type="email"
            />
          </div>
        </div>

        <div>
          <h3 className="text-[#48484A] MT-SB-1">Private lesson rate</h3>
          <p className=" text-[#48484A] mt-1 ST-3">
            Define your rate for 1:1 private lesson.
          </p>
          <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] mt-2">
            <Image alt="Dollar Icon" className="w-2.5 me-2" src={dollar2} />
            <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
            <input
              placeholder="Set your hourly base rate"
              className="bg-[#F2F2F7] text-[#48484A] outline-none w-full placeholder-[#48484A] ST-3 px-1.5"
              type="text"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TabPricing;
