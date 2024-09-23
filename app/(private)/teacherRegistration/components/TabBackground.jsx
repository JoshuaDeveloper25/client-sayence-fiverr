import studentHat from "../../../assets/icons/student-hat.png";
import userElegant from "../../../assets/icons/user-elegant.png";
import Image from "next/image";

const TabBackground = () => {
  return (
    <section className="flex flex-col sm:flex-row sm:gap-12 gap-8">
      <div className="flex-1">
        <h3 className="flex sm:items-center items-start MT-SB-1">
          <Image
            alt="Student Hat Icon"
            className="w-6 inline-block me-2"
            src={studentHat}
          />{" "}
          Education
        </h3>
        <p className="ST-3 text-[#8E8E93] mt-1 mb-6">
          Tell us about your education path.
        </p>

        <div className="flex justify-center items-stretch gap-3">
          <select className="text-[#48484A] bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] text-sm font-semibold px-1.5 py-3 rounded-lg">
            <option value={""}>Add an experience</option>
            <option value={"economics"}>Economics</option>
            <option value={"system engineering"}>Systems Engineering</option>
          </select>
        </div>
      </div>

      <div className="flex-1">
        <h3 className="flex items-center MT-SB-1">
          <Image
            alt="Elegant User Icon"
            className="w-4 inline-block me-2"
            src={userElegant}
          />{" "}
          Experience
        </h3>
        <p className="ST-3 text-[#8E8E93] mt-1 mb-6">
          Tell us about your career and experience
        </p>

        <div className="flex justify-center items-stretch gap-3">
          <select className="text-[#48484A] bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] text-sm font-semibold px-1.5 py-3 rounded-lg">
            <option value={""}>Add an experience</option>
            <option value={"data science"}>Data Science</option>
            <option value={"data structures"}>Data Structures</option>
            <option value={"algorythms"}>Algorythms</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default TabBackground;
