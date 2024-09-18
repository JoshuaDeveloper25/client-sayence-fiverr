import userListen from "../../assets/icons/user-listen.png";
import userHat from "../../assets/icons/user-hat.png";
import book2 from "../../assets/icons/book-alt-2.png";
import book from "../../assets/icons/book-alt.png";
import { IoIosAdd } from "react-icons/io";
import Image from "next/image";
import { useRef } from "react";

const TabSubject = ({ setMasteredLanguages, masteredLanguages }) => {
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
          <h3 className="flex sm:items-center items-start font-bold text-lg">
            <Image
              alt="Book Icon"
              className="w-6 inline-block me-2"
              src={book}
            />{" "}
            Set up your teaching subject
          </h3>
          <p className="text-sm text-[#8E8E93] mt-1 font-medium">
            Remember, students rely on this information to choose their teacher.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-[#48484A] font-semibold">
            Select the subject you wish to teach
          </h3>
          <p className="text-sm text-[#48484A] mt-1 font-medium">
            At iPractis you can teach only one subject, however, you can switch
            subject at anytime
          </p>
          <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] mt-2">
            <Image alt="Book Image" className="w-6" src={book2} />
            <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
            <select
              name="teachingSubject"
              className="text-[#48484A] bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] text-sm font-medium px-1.5"
            >
              <option value={""}>Select a teaching subject</option>
              <option value={"mathematics"}>Mathematics</option>
              <option value={"science"}>Science</option>
              <option value={"spanish"}>Spanish</option>
            </select>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-[#48484A] font-semibold">
            Write a catchy headline
          </h3>
          <p className="text-sm text-[#48484A] mt-1 font-medium">
            Your headline is the first thing peoples are going to read, it will
            allow you to attract the students you wish to have.
          </p>
          <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] mt-2">
            <Image alt="User Hat Image" className="w-6" src={userHat} />
            <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
            <input
              placeholder="Enter a profile title"
              name="profileTitle"
              className="bg-[#F2F2F7] text-[#48484A] outline-none w-full placeholder-[#48484A] text-sm font-medium px-1.5"
              type="text"
            />
          </div>
          <div className="flex justify-between gap-3 text-sm text-[#45484A] mt-1">
            <h4>Limited to 120 characters</h4>

            <h4>0/120</h4>
          </div>
        </div>

        <div>
          <h3 className="text-[#48484A] font-semibold">
            Write an introduction about the subject you teaches
          </h3>
          <p className="text-sm text-[#48484A] mt-1 font-medium">
            Provide a detailed description of your teaching methodology,
            education, teaching experience, and subject expertise.
          </p>
          <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] mt-2">
            <textarea
              placeholder="Enter a text"
              name="teachedSubjects"
              className="bg-[#F2F2F7] text-[#48484A] outline-none h-28 w-full placeholder-[#48484A] text-sm font-medium px-1 resize-none"
            />
          </div>
          <div className="flex justify-between gap-3 text-sm text-[#45484A] mt-1">
            <h4>Limited to 1000 characters</h4>

            <h4>0/1000</h4>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="mb-8">
          <h3 className="flex sm:items-center items-start font-bold text-lg">
            <Image
              alt="User Listen Icon"
              className="w-6 inline-block me-2"
              src={userListen}
            />{" "}
            Tell students about yourself
          </h3>
          <p className="text-sm text-[#8E8E93] mt-1 font-medium">
            Capture prospective students' attention with compelling details
            about you as a teacher
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-[#48484A] font-semibold">
            Write Introduction about yourself
          </h3>
          <p className="text-sm text-[#48484A] mt-1 font-medium">
            Introduce yourself in a few lines and Highlight your unique
            interests, and what sets you apart as an educator.
          </p>
          <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] mt-2">
            <textarea
              placeholder="Enter a text"
              className="bg-[#F2F2F7] text-[#48484A] outline-none h-28 w-full placeholder-[#48484A] text-sm font-medium px-1 resize-none"
              name="introductionOfYourself"
            />
          </div>
          <div className="flex justify-between gap-3 text-sm text-[#45484A] mt-1">
            <h4>Limited to 1000 characters</h4>

            <h4>0/1000</h4>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="flex sm:items-center items-start font-bold text-lg">
            <Image
              alt="User Listen Icon"
              className="w-6 inline-block me-2"
              src={userListen}
            />{" "}
            Select the languages your masters
          </h3>
          <p className="text-sm text-[#8E8E93] mt-1 font-medium">
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
                className="text-[#48484A] bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] text-sm font-medium px-1.5 py-3 rounded-lg"
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
                className="text-[#48484A] bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] text-sm font-medium px-1.5 py-3 rounded-lg"
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
