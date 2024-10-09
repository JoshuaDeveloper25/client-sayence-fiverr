"use client";
import Image from "next/image";
import { subjects, subjectsAndTutors } from "../db/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Images && Icons
import tutorVideoPreview from "../assets/images/tutor-video-preview.png";
import tutorImagePreview from "../assets/images/tutor-image-preview.png";
import unitedKingdom from "../assets/countries/united-kingdom.png";
import chevronRight from "../assets/icons/chevron-right.png";
import chevronLeft from "../assets/icons/chevron-left.png";
import messageFill from "../assets/icons/message-fill.png";
import bookOpen from "../assets/icons/book-open.png";

const LanguagesCarousel = () => {
  return (
    <section className="bg-[#F2F2F7] ">
      <div className="container-page px-3 py-12">
        <h3 className="flex text-[#1C1C1E] sm:items-center items-start MT-SB-2">
          <Image
            alt="User Add Icon"
            className="w-6 inline-block me-2"
            src={bookOpen}
          />{" "}
          Browse our subjects and tutors to find the right Fit for You.
        </h3>

        <p className="ST-3 text-[#48484A] mt-1">
          Meet our top-rated tutors and learn at your own pace.
        </p>

        <div className="relative rounded-xl bg-white px-9">
          <Swiper
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".subjects-carousel-swiper-button-next",
              prevEl: ".subjects-carousel-swiper-button-prev",
            }}
            breakpoints={{
              // when window width is >= 340px
              340: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              // when window width is >= 720px
              720: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              // when window width is >= 950px
              950: {
                slidesPerView: 8,
                spaceBetween: 0,
              },
            }}
            modules={[Navigation, Pagination]}
            className="subjects-carousel px-3 py-4 my-3 "
          >
            {subjects?.map((subject, index) => {
              return (
                <SwiperSlide key={index} className="flex place-content-center">
                  <h3
                    className={`${
                      subject?.selected
                        ? "bg-black text-white rounded-lg w-fit mx-auto px-3.5"
                        : "w-full px-3.5"
                    } ST-SB-3 cursor-pointer py-2 text-center`}
                  >
                    {subject?.name}
                  </h3>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="absolute transform -translate-y-1/2 top-1/2 left-1 z-50 cursor-pointer w-[25px] h-[25px] object-contain animation-fade transition-all duration-300 ease-in rounded-md p-2 hover:bg-[#C0BDB9]">
            <Image
              alt="Chevron Left"
              src={chevronLeft}
              className="subjects-carousel-swiper-button-prev w-full h-full object-contain"
            />
          </div>

          <div className="absolute transform -translate-y-1/2 top-1/2 right-1 z-50 cursor-pointer w-[25px] h-[25px] object-contain animation-fade transition-all duration-300 ease-in rounded-md p-2 hover:bg-[#C0BDB9]">
            <Image
              alt="Chevron Right"
              src={chevronRight}
              className="subjects-carousel-swiper-button-next w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
          {subjectsAndTutors?.map((subjectAndTutor) => (
            <div className="bg-white rounded-b-xl rounded-t-xl group">
              <Image
                alt={"Tutor Video Image"}
                className="w-full rounded-t-xl"
                src={subjectAndTutor?.imageSrc}
              />

              <div className="p-3.5">
                <div className="flex gap-3">
                  <div className="relative">
                    <Image
                      alt={"Tutor Image"}
                      className="rounded-lg"
                      src={subjectAndTutor?.tutorImagePreview}
                    />
                    <div className="absolute right-1 bottom-1 rounded-full w-2.5 h-2.5 bg-[#00FF47]"></div>
                  </div>

                  <div>
                    <h3 className="ST-SB-4 text-[#48484A]">
                      {subjectAndTutor?.tutorName}
                    </h3>
                    <div className="flex gap-2 items-center">
                      <Image
                        alt={"Country Image"}
                        className="w-5 rounded-md"
                        src={subjectAndTutor?.tutorFlag}
                      />
                      <h4 className="text-[#8E8E93] ST-2">
                        {subjectAndTutor?.tutorProfession}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 items-center justify-between my-3.5">
                  <ul className="flex items-center text-sm font-medium gap-3">
                    <li className="ST-SB-2 text-[#1C1C1E]">English</li>
                    <li className="ST-SB-1 px-1 rounded-md bg-black text-white">
                      Native
                    </li>
                    <li className="ST-SB-2 text-[#1C1C1E]">French</li>
                    <li className="ST-1 px-1 rounded-md bg-[#A3FFBD] text-[#1C1C1E]">
                      Fluent C2
                    </li> 
                  </ul>

                  <div className="flex items-center justify-center bg-[#F5F5F7] w-6 h-6 rounded-full">
                    <h4 className="ST-SB-1 text-center text-[#48484A] tracking-tighter flex h-full items-center justify-center">
                      {subjectAndTutor?.tutorExtraLanguages}
                    </h4>
                  </div>
                </div>

                {/* Lesson Rate which disappears on hover */}
                <div className="group-hover:hidden block transition-all duration-300 ease-in-out">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-[#8E8E93] ST-2">Lesson rate</h4>
                      <h3>
                        <span className="MT-SB-1">8 USD/</span>
                        <span className="ST-3">30 mins</span>
                      </h3>
                    </div>

                    <div className="sm:hidden block">
                      <button className="btn btn-black ST-SB-4">
                        Book a trial
                      </button>
                    </div>
                  </div>
                </div>

                {/* Buttons that appear on hover */}
                <div className="hidden group-hover:flex gap-4 transition-all duration-300 ease-in-out">
                  <button className="bg-[#1C1C1E] p-3 rounded-md">
                    <Image
                      className="w-8 h-4 object-contain"
                      alt="Message White Icon"
                      src={messageFill}
                    />
                  </button>

                  <button className="btn btn-black ST-SB-4">
                    Book a trial
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-[#1C1C1E] text-whit p-3 rounded-b-xl rounded-t-xl">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="MT-SB-3 text-white">
                  Discovers more{" "}
                  <span className="sm:block inline">teachers</span>
                </h3>
                <p className="ST-4 text-white my-6">
                  Search through 1000+ qualified teachers and select the perfect
                  fit based on your target subject, goals and budget.
                </p>
              </div>

              <div>
                <Link href={"#"} className="btn btn-white MT-1 text-center">
                  Discover more teachers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesCarousel;
