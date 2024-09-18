import book from "../assets/icons/book-alt.png";
import Tabs from "./components/Tabs";
import Image from "next/image";

export default function teacherRegistration() {
  return (
    <section className="container-page px-3 py-12">
      <div className="mb-6">
        {" "}
        <div className="sm:block hidden">
          <h3 className="flex sm:items-center items-start MT-SB-2">
            <Image
              alt="Book Icon"
              className="w-6 inline-block me-2"
              src={book}
            />{" "}
            Complete the application form
          </h3>
        </div>
        <div className="sm:hidden block MT-SB-2">
          <h3>Complete your application</h3>
        </div>
        <p className="sm:block hidden text-[#8E8E93] mt-1 ST-3">
          Fill the form with all the necessary information, we will review them
          as soon as possible.
        </p>
        <p className="sm:hidden block text-[#8E8E93] mt-1 ST-3">
          Fill your teacher&apos;s profile
        </p>
      </div>

      {/* Tabs */}
      <Tabs />
    </section>
  );
}
