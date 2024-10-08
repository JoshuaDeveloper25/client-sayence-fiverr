import userLugagge from "../../../assets/icons/user-lugagge.png";
import userFill from "../../../assets/icons/user-fill.png";
import { Select } from "@/app/components/InputUtilities";
import book2 from "../../../assets/icons/book-alt-2.png";
import metrics from "../../../assets/icons/metrics.png";
import eye from "../../../assets/icons/eye.png";
import pin from "../../../assets/icons/pin.png";
import Image from "next/image";

const TabSpecialties = ({ activeTabIndex }) => {
  return (
    <section className="flex flex-col sm:flex-row gap-14">
      <div className="flex-1">
        <div className="mb-8">
          <h3 className="flex items-center MT-SB-1     ">
            <Image
              alt="Eye Icon"
              className="sm:inline-block hidden w-6 me-2"
              src={eye}
            />{" "}
            <Image
              alt="User Icon"
              className="sm:hidden inline-block w-6 me-2"
              src={userFill}
            />{" "}
            Student preferences
          </h3>
          <p className=" text-[#8E8E93] mt-1 ST-3">
            You are about to create a teacher’s profile on iPractis platform,
            please fill the fields with the right information.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="flex items-center MT-SB-1">
            <Image
              alt="Metrics Icon"
              className="sm:block hidden w-6 me-2"
              src={metrics}
            />{" "}
            Student&apos;s level
          </h3>
          <p className=" text-[#8E8E93] mt-1 ST-3">
            Select the level you can teach
          </p>

          <div className="sm:mt-6 mt-3 space-y-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" name="" id="" />
              <h4 className="ST-4">Beginner</h4>
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" name="" id="" />
              <h4 className="ST-4">Intermediate</h4>
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" name="" id="" />
              <h4 className="ST-4">Advanced</h4>
            </label>
          </div>
        </div>

        <div>
          <h3 className="flex sm:items-center items-start MT-SB-1">
            <Image
              alt="User Lugagge Icon"
              className="sm:inline-block hidden w-6 me-2"
              src={userLugagge}
            />{" "}
            <span className="sm:block hidden">Student&apos;s age</span>
            <span className="sm:hidden block">
              Education for young learners
            </span>
          </h3>
          <p className=" text-[#8E8E93] mt-1 ST-3">
            iPractis considers all students aged between 5 and 14 as young
            students. By activating this option, you agree to teach this age
            group.
          </p>

          <div className="sm:mt-6 mt-2 space-y-3">
            <label className="flex items-center gap-3">
              <input type="radio" />
              <h4 className="ST-4">I accept to teach to young student</h4>
            </label>

            <label className="flex items-center gap-3">
              <input type="radio" />
              <h4 className="ST-4">I accept to teach to mature student</h4>
            </label>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="mb-8">
          <h3 className="flex items-center MT-SB-1">
            <Image alt="Pin Icon" className="w-5 inline-block me-2" src={pin} />{" "}
            Specialties
          </h3>
          <p className="ST-3 text-[#8E8E93] mt-1 ">
            Discuss the subtopics you have mastered with your students, and be
            sure to highlight your teaching methods for each one.
          </p>
        </div>

        <div>
          <h3 className="text-[#48484A] font-semibold MT-SB-1">
            Related subject section
          </h3>
          <p className="ST-3 text-[#48484A] mt-1 ">
            Select only the subtopics you have mastered and can teach.
          </p>

          <Select
            selectProp={{
              name: "subSubject",
              required: activeTabIndex === 1 ? true : false,
            }}
            defaultOption={"Select a sub-subject"}
            options={[
              { value: "temperature", text: "Temperature" },
              {
                value: "location",
                text: "Location",
              },
              {
                value: "terrain",
                text: "Terrain",
              },
              {
                value: "sanitation",
                text: "Sanitation",
              },
              {
                value: "conflicts",
                text: "Conflicts",
              },
            ]}
            errorName={"Please select teaching subject."}
            errorDesc={"Invalid Teaching subject"}
            boxInputError={true}
            alt={"Book Image"}
            imgPath={book2}
          />
        </div>
      </div>
    </section>
  );
};

export default TabSpecialties;
