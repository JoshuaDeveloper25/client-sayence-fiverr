import userLugagge from "../../assets/icons/user-lugagge.png";
import book2 from "../../assets/icons/book-alt-2.png";
import metrics from "../../assets/icons/metrics.png";
import eye from "../../assets/icons/eye.png";
import pin from "../../assets/icons/pin.png";
import Image from "next/image";

const TabSpecialties = () => {
  return (
    <section className="flex flex-col sm:flex-row gap-14">
      <div className="flex-1">
        <div className="mb-8">
          <h3 className="flex items-center font-bold text-lg">
            <Image alt="Eye Icon" className="w-6 inline-block me-2" src={eye} />{" "}
            Student preferences
          </h3>
          <p className="text-sm text-[#8E8E93] mt-1 font-medium">
            You are about to create a teacher’s profile on iPractis platform,
            please fill the fields with the right information.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="flex items-center font-bold text-lg">
            <Image alt="Metrics Icon" className="w-6 me-2" src={metrics} />{" "}
            Student's level
          </h3>
          <p className="text-sm text-[#8E8E93] mt-1 font-medium">
            Select the level you can teach
          </p>

          <div className="sm:mt-6 mt-3 space-y-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" name="" id="" />
              <h4 className="font-medium">Beginner</h4>
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" name="" id="" />
              <h4 className="font-medium">Intermediate</h4>
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" name="" id="" />
              <h4 className="font-medium">Advanced</h4>
            </label>
          </div>
        </div>

        <div>
          <h3 className="flex sm:items-center items-start font-bold text-lg">
            <Image
              alt="User Lugagge Icon"
              className="w-6 inline-block me-2"
              src={userLugagge}
            />{" "}
            Student's age
          </h3>
          <p className="text-sm text-[#8E8E93] mt-1 font-medium">
            iPractis considers all students aged between 5 and 14 as young
            students. By activating this option, you agree to teach this age
            group.
          </p>

          <div className="sm:mt-6 mt-2 space-y-3">
            <label className="flex items-center gap-3">
              <input type="radio" />
              <h4 className="font-medium">
                I accept to teach to young student
              </h4>
            </label>

            <label className="flex items-center gap-3">
              <input type="radio" />
              <h4 className="font-medium">
                I accept to teach to mature student
              </h4>
            </label>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="mb-8">
          <h3 className="flex items-center font-bold text-lg">
            <Image alt="Pin Icon" className="w-5 inline-block me-2" src={pin} />{" "}
            Specialties
          </h3>
          <p className="text-sm text-[#8E8E93] mt-1 font-medium">
            Discuss the subtopics you have mastered with your students, and be
            sure to highlight your teaching methods for each one.
          </p>
        </div>

        <div>
          <h3 className="text-[#48484A] font-semibold">
            Related subject section
          </h3>
          <p className="text-sm text-[#48484A] mt-1 font-medium">
            Select only the subtopics you have mastered and can teach.
          </p>
          <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] mt-2">
            <Image alt="Book Image" className="w-6" src={book2} />
            <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
            <select className="text-[#48484A] bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] text-sm font-medium px-1.5">
              <option>Select a sub-subject</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabSpecialties;
