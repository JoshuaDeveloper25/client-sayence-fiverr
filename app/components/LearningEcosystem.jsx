import womanWorkingAlt from "../assets/images/working-woman-alt.png";
import shield from "../assets/icons/shield.png";
import camera from "../assets/icons/camera.png";
import Image from "next/image";

const LearningEcosystem = () => {
  return (
    <section className="container-page px-3 py-12">
      <h3 className="flex sm:items-center items-start MT-SB-2">
        <Image
          alt="Shield Icon"
          className="w-6 inline-block me-2"
          src={shield}
        />{" "}
        Safe learning environment
      </h3>

      <p className=" text-[#8E8E93] mt-1 ST-3">
        Our platform provides a secure, monitored space with verified tutors,
        ensuring a safe and supportive learning experience for all.
      </p>

      <article className="flex flex-col-reverse md:flex-row gap-5 mt-5">
        <div className="flex-1">
          <div className="bg-[#F2F2F7] flex-1 text-center rounded-xl py-8 px-8 mb-6">
            <Image alt={"Camera Icon"} className="w-14 mx-auto" src={camera} />

            <h2 className="text-[#48484A] MT-SB-1 my-1.5">
              Monitored Sessions
            </h2>
            <p className="text-[#8E8E93] ST-3 font-medium">
              Tutors and lessons are monitored for quality and safety.
            </p>
          </div>
        </div>

        <div className="flex-[30%]">
          <div className="max-w-full mx-auto">
            <Image
              alt="Woman Working"
              className="w-full h-[12.1rem] object-cover rounded-2xl"
              src={womanWorkingAlt}
            />{" "}
          </div>
        </div>
      </article>
    </section>
  );
};

export default LearningEcosystem;
