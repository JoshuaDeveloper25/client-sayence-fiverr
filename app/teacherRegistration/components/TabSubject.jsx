import userListen from "../../assets/icons/user-listen.png";
import { Input, Select, Textarea } from "@/app/components/InputUtilities";
import userHat from "../../assets/icons/user-hat.png";
import book2 from "../../assets/icons/book-alt-2.png";
import book from "../../assets/icons/book-alt.png";
import { IoIosAdd } from "react-icons/io";
import Image from "next/image";
import { useRef } from "react";

const TabSubject = ({
  setMasteredLanguages,
  masteredLanguages,
  activeTabIndex,
}) => {
  const languageKnownRef = useRef("");
  const levelKnownRef = useRef("");

  const handleAddMasteredLanguage = () => {
    const masteredLanguageDetails = {
      languageKnown: languageKnownRef?.current?.value,
      levelKnown: levelKnownRef?.current?.value,
    };

    setMasteredLanguages([...masteredLanguages, masteredLanguageDetails]);
  };

  return (
    <section className="flex flex-col sm:flex-row gap-14">
      <div className="flex-1">
        <div className="mb-8">
          <h3 className="flex sm:items-center items-start MT-SB-1">
            <Image
              alt="Book Icon"
              className="w-6 inline-block me-2"
              src={book}
            />{" "}
            Set up your teaching subject
          </h3>
          <p className=" text-[#8E8E93] mt-1 ST-3">
            Remember, students rely on this information to choose their teacher.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-[#48484A] MT-SB-1">
            Select the subject you wish to teach
          </h3>
          <p className=" text-[#48484A] mt-1 mb-2 ST-3">
            At iPractis you can teach only one subject, however, you can switch
            subject at anytime
          </p>

          <Select
            selectProp={{
              name: "teachingSubject",
              required: activeTabIndex === 0 ? true : false,
            }}
            defaultOption={"Select a teaching subject"}
            options={[
              { value: "mathematics", text: "Mathematics" },
              {
                value: "science",
                text: "Science",
              },
              {
                value: "spanish",
                text: "Spanish",
              },
            ]}
            errorName={"Please select teaching subject."}
            errorDesc={"Invalid Teaching subject"}
            boxInputError={true}
            alt={"Book Image"}
            imgPath={book2}
          />
        </div>

        <div className="mb-8">
          <h3 className="text-[#48484A] MT-SB-1">Write a catchy headline</h3>
          <p className=" text-[#48484A] mt-1 ST-3 mb-2">
            Your headline is the first thing peoples are going to read, it will
            allow you to attract the students you wish to have.
          </p>

          <Input
            inputProp={{
              placeholder: "Enter a profile title",
              name: "profileTitle",
              type: "text",
              required: activeTabIndex === 0 ? true : false,
            }}
            iconStyles={"w-[1.2rem] h-[1.2rem] object-contain"}
            errorName={"Please input a profile title."}
            errorDesc={"Invalid Profile Title"}
            boxInputError={true}
            alt={"User Hat Image"}
            imgPath={userHat}
          />
          <div className="flex justify-between gap-3 text-sm text-[#45484A]">
            <h4 className="ST-2">Limited to 120 characters</h4>

            <h4 className="ST-2">0/120</h4>
          </div>
        </div>

        <div>
          <h3 className="text-[#48484A] MT-SB-1">
            Write an introduction about the subject you teaches
          </h3>
          <p className="text-[#48484A] mt-1 ST-3">
            Provide a detailed description of your teaching methodology,
            education, teaching experience, and subject expertise.
          </p>

          <Textarea
            textAreaProp={{
              placeholder: "Enter a text",
              name: "introductionSubject",
              required: activeTabIndex === 0 ? true : false,
            }}
            errorName={"Please input a text."}
            errorDesc={"Invalid Text"}
            boxInputError={true}
          />

          <div className="flex justify-between gap-3 text-sm text-[#45484A]">
            <h4 className="ST-2">Limited to 1000 characters</h4>

            <h4 className="ST-2">0/1000</h4>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="mb-8">
          <h3 className="flex sm:items-center items-start MT-SB-1">
            <Image
              alt="User Listen Icon"
              className="w-6 inline-block me-2"
              src={userListen}
            />{" "}
            Tell students about yourself
          </h3>
          <p className="text-[#8E8E93] mt-1 ST-3">
            Capture prospective students&apos; attention with compelling details
            about you as a teacher
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-[#48484A] MT-SB-1">
            Write Introduction about yourself
          </h3>
          <p className=" text-[#48484A] mt-1 ST-3">
            Introduce yourself in a few lines and Highlight your unique
            interests, and what sets you apart as an educator.
          </p>

          <Textarea
            textAreaProp={{
              placeholder: "Enter a text",
              name: "introductionOfYourself",
              required: activeTabIndex === 0 ? true : false,
            }}
            errorName={"Please input a text."}
            errorDesc={"Invalid Text"}
            boxInputError={true}
          />

          <div className="flex justify-between gap-3 text-sm text-[#45484A]">
            <h4 className="ST-2">Limited to 1000 characters</h4>

            <h4 className="ST-2">0/1000</h4>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="flex sm:items-center items-start MT-SB-1">
            <Image
              alt="User Listen Icon"
              className="w-6 inline-block me-2"
              src={userListen}
            />{" "}
            Select the languages your masters
          </h3>
          <p className=" text-[#8E8E93] mt-1 ST-3">
            Select only the languages you can use to teach your students
          </p>
        </div>

        {masteredLanguages?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-stretch gap-3 mb-3"
            >
              <select
                ref={languageKnownRef}
                name="languageKnown"
                className="text-[#48484A] bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] MT-1 px-1.5 py-3 rounded-lg"
              >
                <option value={""}>Language</option>
                <option value={"spanish"}>Spanish</option>
                <option value={"english"}>English</option>
                <option value={"french"}>French</option>
                <option value={"chinese"}>Chinese</option>
              </select>

              <select
                ref={levelKnownRef}
                name="levelKnown"
                className="text-[#48484A] bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] MT-1 px-1.5 py-3 rounded-lg"
              >
                <option value={""}>Level</option>
                <option value={"a1"}>A1</option>
                <option value={"a2"}>A2</option>
                <option value={"b1"}>B1</option>
                <option value={"b2"}>B2</option>
                <option value={"c1"}>C1</option>
                <option value={"c2"}>C2</option>
              </select>

              <button
                onClick={handleAddMasteredLanguage}
                type="button"
                className="bg-[#F2F2F7] rounded-lg px-3"
              >
                <IoIosAdd className="size-6 " />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TabSubject;
