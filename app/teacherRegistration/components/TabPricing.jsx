import unitedKingdom from "../../assets/countries/united-kingdom.png";
import dollar2 from "../../assets/icons/dollar-alt-2.png";
import finance from "../../assets/icons/finance-alt.png";
import dollar from "../../assets/icons/dollar-alt.png";
import email from "../../assets/icons/email-alt.png";
import Image from "next/image";

import payment1 from "../../assets/images/payment1.png";
import payment2 from "../../assets/images/payment2.png";
import { Input } from "@/app/components/InputUtilities";

const TabPricing = ({ activeTabIndex }) => {
  return (
    <>
      <section className="flex flex-col sm:flex-row gap-14">
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

            <Input
              inputProp={{
                placeholder: "Set your hourly base rate",
                name: "base",
                type: "text",
                required: activeTabIndex === 4 ? true : false,
              }}
              iconStyles={"w-[1.3rem] h-[1.3rem] object-contain"}
              errorName={"Lesson rate too low."}
              errorDesc={"Lesson rate must be between 8 and 60 USD."}
              boxInputError={true}
              alt={"Dollar Icon"}
              imgPath={dollar2}
            />
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

            <Input
              inputProp={{
                placeholder: "Email address",
                name: "email",
                type: "email",
                required: activeTabIndex === 4 ? true : false,
              }}
              errorName={"Please input a valid email."}
              errorDesc={"Invalid Email"}
              boxInputError={true}
              alt={"Email Icon"}
              imgPath={email}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TabPricing;
