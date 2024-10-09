import womanWorking from "../assets/images/working-woman.png";
import badgeStar from "../assets/icons/badge-star.png";
import parachute from "../assets/icons/parachute.png";
import sparkle from "../assets/icons/sparkle.png";
import luggage from "../assets/icons/lugagge.png";
import sun from "../assets/icons/sun.png";
import bee from "../assets/icons/bee.png";
import Image from "next/image";

const OurLessons = () => {
  return (
    <section className="bg-[#F2F2F7]">
      <div className="container-page px-3 py-12">
        <h3 className="flex sm:items-center items-start MT-SB-2 text-[#1C1C1E]">
          <Image
            alt="Sparkle Icon"
            className="w-5 inline-block me-2"
            src={sparkle}
          />{" "}
          Discover how our lessons can support You
        </h3>

        <p className=" text-[#48484A] mt-1 ST-3">
          From school support to professional skill improvement, find lessons
          that fit your needs and learning style.
        </p>

        <article className="flex flex-col-reverse md:flex-row gap-6 my-8">
          <div className="flex-1">
            <div className="flex flex-col justify-between">
              <div className="bg-white flex-1 text-center rounded-xl py-7 px-5">
                <Image
                  alt={"Parachute Icon"}
                  className="w-12 mx-auto"
                  src={parachute}
                />

                <h2 className="text-[#48484A] MT-SB-1 my-3">
                  School support
                </h2>
                <p className="text-[#8E8E93] ST-3">
                  Get personalized help to reinforce what you’re learning in
                  class.
                </p>
              </div>

              <div className="bg-white flex-1 text-center rounded-xl py-5 px-8 my-7">
                <Image
                  alt={"Luggage Icon"}
                  className="w-12 mx-auto"
                  src={luggage}
                />

                <h2 className="text-[#48484A] MT-SB-1 my-3">
                  Conversational lessons
                </h2>
                <p className="text-[#8E8E93] ST-3">
                  Practice real-life conversations to improve fluency and
                  confidence.
                </p>
              </div>

              <div className="bg-white flex-1 text-center rounded-xl py-7 px-5">
                <Image
                  alt={"Badge Star Icon"}
                  className="w-6 mx-auto"
                  src={badgeStar}
                />

                <h2 className="text-[#48484A] MT-SB-1 my-3">
                  Exam preparation
                </h2>
                <p className="text-[#8E8E93] ST-3 font-medium">
                  Focused guidance to help you excel in your upcoming exams.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-[30%]">
            <div className="max-w-full mx-auto">
              <Image
                alt="Woman Working"
                className="w-full h-[38rem] object-cover rounded-2xl"
                src={womanWorking}
              />{" "}
            </div>
          </div>
        </article>

        <article className="flex flex-col md:flex-row gap-7">
          <div className="flex-[30%]">
            <div className="max-w-full mx-auto">
              <Image
                alt="Woman Working"
                className="w-full h-[26.5rem] object-cover rounded-2xl"
                src={womanWorking}
              />{" "}
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col justify-between">
              <div className="bg-white flex-1 text-center rounded-xl py-7 px-8 mb-6">
                <Image alt={"Icon Sun"} className="w-12 mx-auto" src={sun} />

                <h2 className="text-[#48484A] MT-SB-1 my-3">
                  Initiation lessons
                </h2>
                <p className="text-[#8E8E93] ST-3">
                  Start from the basics and build a strong foundation in any
                  subject.
                </p>
              </div>

              <div className="bg-white flex-1 text-center rounded-xl py-7 px-5">
                <Image alt={"Icon Bee"} className="w-12 mx-auto" src={bee} />

                <h2 className="text-[#48484A] MT-SB-1 my-3 leading-5">
                  Professional skills improvement
                </h2>
                <p className="text-[#8E8E93] ST-3">
                  Enhance your career by developing essential skills for the
                  workplace.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default OurLessons;
