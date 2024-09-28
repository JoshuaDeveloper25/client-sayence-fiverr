import calculator from "../assets/icons/calculator.png";
import messages from "../assets/icons/messages.png";
import pencil from "../assets/icons/pencil.png";
import wrist from "../assets/icons/wrist.png";
import badge from "../assets/icons/badge.png";

const GetStartedNotEasy = () => {
  return (
    <section className="container-page px-3 py-12">
      <h3 className="flex sm:items-center items-start MT-SB-2">
        <Image
          alt="User Add Icon"
          className="w-6 inline-block me-2"
          src={badge}
        />{" "}
        Only few steps to get started
      </h3>

      <p className=" text-[#8E8E93] mt-1 ST-3">Start learning today</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        <div className="bg-[#F2F2F7] text-center rounded-xl py-5 px-5">
          <Image
            alt={"Icon Calculator"}
            className="w-12 mx-auto"
            src={calculator}
          />

          <h2 className="text-[#48484A] MT-SB-1 my-1.5">Scientific subjects</h2>
          <p className="text-[#8E8E93] ST-3">
            Browse qualified tutors based on level, goals, budget, and
            availability.
          </p>
        </div>

        <div className="bg-[#F2F2F7] text-center rounded-xl py-5 px-5">
          <Image alt={"Icon Message"} className="w-16 mx-auto" src={messages} />

          <h2 className="text-[#48484A] MT-SB-1 my-1.5">Linguistic subjects</h2>
          <p className="text-[#8E8E93] ST-3">
            Pick the date and time that works for you and get ready to conquer
            your goals.
          </p>
        </div>

        <div className="bg-[#F2F2F7] text-center rounded-xl py-5 px-5">
          <Image alt={"Icon Pencil"} className="w-16 mx-auto" src={pencil} />

          <h2 className="text-[#48484A] MT-SB-1 my-1.5">Artistic subjects</h2>
          <p className="text-[#8E8E93] ST-3">
            Pay only for the lessons you take, no contracts or hidden fees.
          </p>
        </div>

        <div className="bg-[#F2F2F7] text-center rounded-xl py-5 px-5">
          <Image alt={"Icon Wrist"} className="w-16 mx-auto" src={wrist} />

          <h2 className="text-[#48484A] MT-SB-1 my-1.5">Practical subjects</h2>
          <p className="text-[#8E8E93] ST-3">
            Pay only for the lessons you take, no contracts or hidden fees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetStartedNotEasy;
