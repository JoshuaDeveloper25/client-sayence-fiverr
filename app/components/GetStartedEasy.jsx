import userScreen from "../assets/icons/user-screen.png";
import threeUsers from "../assets/icons/3-users.png";
import calendar from "../assets/icons/calendar.png";
import walking from "../assets/icons/walking.png";
import card from "../assets/icons/card.png";
import Image from "next/image"

const GetStartedEasy = () => {
  return (
    <section className="container-page px-3 py-12">
        <h3 className="flex sm:items-center items-start MT-SB-2">
          <Image
            alt="User Walking Icon"
            className="w-4 inline-block me-2"
            src={walking}
          />{" "}
          Only few easy steps to get started
        </h3>

        <p className=" text-[#8E8E93] mt-1 ST-3">
          In only four words, choose, schedule, pay, start.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          <div className="bg-[#F2F2F7] text-center rounded-xl py-5 px-5">
            <Image
              alt={"Icon 3 Users"}
              className="w-12 mx-auto"
              src={threeUsers}
            />

            <h2 className="text-[#48484A] MT-SB-1 my-1.5">Choose a tutor</h2>
            <p className="text-[#8E8E93] ST-3">
              Browse qualified tutors based on level, goals, budget, and
              availability.
            </p>
          </div>

          <div className="bg-[#F2F2F7] text-center rounded-xl py-5 px-5">
            <Image
              alt={"Icon Calendar"}
              className="w-12 mx-auto"
              src={calendar}
            />

            <h2 className="text-[#48484A] MT-SB-1 my-1.5">Schedule a lesson</h2>
            <p className="text-[#8E8E93] ST-3">
              Pick the date and time that works for you and get ready to conquer
              your goals.
            </p>
          </div>

          <div className="bg-[#F2F2F7] text-center rounded-xl py-5 px-5">
            <Image alt={"Icon Card"} className="w-12 mx-auto" src={card} />

            <h2 className="text-[#48484A] MT-SB-1 my-1.5">Pay as you go</h2>
            <p className="text-[#8E8E93] ST-3">
              Pay only for the lessons you take, no contracts or hidden fees.
            </p>
          </div>

          <div className="bg-[#F2F2F7] text-center rounded-xl py-5 px-5">
            <Image
              alt={"Icon Screen User"}
              className="w-12 mx-auto"
              src={userScreen}
            />

            <h2 className="text-[#48484A] MT-SB-1 my-1.5">Start learning</h2>
            <p className="text-[#8E8E93] ST-3">
              Pay only for the lessons you take, no contracts or hidden fees.
            </p>
          </div>
        </div>
      </section>
  )
}

export default GetStartedEasy