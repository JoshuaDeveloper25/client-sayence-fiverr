import womanWorking from "../assets/images/working-woman.png";
import twoUsers from "../assets/icons/2-users.png";
import library from "../assets/icons/library.png";
import sparkle from "../assets/icons/sparkle.png";
import Image from "next/image";

const MeetOurServices = () => {
  return (
    <section className="bg-[#F2F2F7]">
      <div className="container-page px-3 py-16">
        <h3 className="flex sm:items-center items-start text-[#1C1C1E] MT-SB-2">
          <Image
            alt="Sparkle Icon"
            className="w-5 inline-block me-2"
            src={sparkle}
          />{" "}
          Meet our services
        </h3>

        <p className=" text-[#48484A] mt-1 ST-3">Start learning today</p>

        <article className="flex flex-col-reverse md:flex-row gap-8 mt-5">
          <div className="flex-1">
            <div className="flex flex-col justify-between">
              <div className="bg-white flex-1 text-center rounded-xl py-7 px-8 mb-6">
                <Image
                  alt={"2 Users Icon"}
                  className="w-16 mx-auto"
                  src={twoUsers}
                />

                <h2 className="text-[#48484A] MT-SB-1 my-3">
                  Dedicated lessons
                </h2>
                <p className="text-[#8E8E93] ST-3">
                  Find teachers from all over the world sharing their languages,
                  dialects, and cultures.
                </p>
              </div>

              <div className="bg-white flex-1 text-center rounded-xl py-7 px-5">
                <Image
                  alt={"Icon library"}
                  className="w-16 mx-auto"
                  src={library}
                />

                <h2 className="text-[#48484A] MT-SB-1 my-3">
                  Library access
                </h2>
                <p className="text-[#8E8E93] ST-3">
                  Find teachers from all over the world sharing their languages,
                  dialects, and cultures.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-[30%]">
            <div className="max-w-full mx-auto">
              <Image
                alt="Woman Working"
                className="w-full h-[27rem] object-cover rounded-2xl"
                src={womanWorking}
              />{" "}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default MeetOurServices;
