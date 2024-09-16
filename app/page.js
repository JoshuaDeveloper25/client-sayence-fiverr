"use client"; // top to the file
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import tutorVideoPreview from "./assets/images/tutor-video-preview.png";
import tutorImagePreview from "./assets/images/tutor-image-preview.png";
import unitedKingdom from "./assets/countries/united-kingdom.png";
import womanWorking from "./assets/images/working-woman.png";
import womanWorkingAlt from "./assets/images/working-woman-alt.png";
import france from "./assets/countries/france.png";
import header from "./assets/images/header.png";
import italy from "./assets/countries/italy.png";
import spain from "./assets/countries/spain.png";

// Icons
import chevronRight from "./assets/icons/chevron-right.png";
import chevronLeft from "./assets/icons/chevron-left.png";
import calculator from "./assets/icons/calculator.png";

import threeUsers from "./assets/icons/3-users.png";
import calendar from "./assets/icons/calendar.png";
import walking from "./assets/icons/walking.png";
import card from "./assets/icons/card.png";

import twoUsers from "./assets/icons/2-users.png";
import sparkle from "./assets/icons/sparkle.png";
import library from "./assets/icons/library.png";
import userScreen from "./assets/icons/user-screen.png";

import bookOpen from "./assets/icons/book-open.png";
import messages from "./assets/icons/messages.png";
import pencil from "./assets/icons/pencil.png";
import wrist from "./assets/icons/wrist.png";
import badge from "./assets/icons/badge.png";

import parachute from "./assets/icons/parachute.png";
import luggage from "./assets/icons/lugagge.png";
import badgeStar from "./assets/icons/badge-star.png";

import shield from "./assets/icons/shield.png";
import camera from "./assets/icons/camera.png";
import sun from "./assets/icons/sun.png";
import bee from "./assets/icons/bee.png";

import linkedin from "./assets/icons/linkedin.png";
import instagram from "./assets/icons/instagram.png";
import facebook from "./assets/icons/facebook.png";
import youtube from "./assets/icons/youtube.png";

import Image from "next/image";
import Link from "next/link";

const countries = [
  {
    image: unitedKingdom,
    title: "Average price",
    subtitle: (
      <>
        <span className="font-bold">13 USD</span>{" "}
        <span className="font-medium">/ 30 mins</span>
      </>
    ),
  },

  {
    image: france,
    title: "Average price",
    subtitle: (
      <>
        <span className="font-bold">13 USD</span>{" "}
        <span className="font-medium">/ 30 mins</span>
      </>
    ),
  },

  {
    image: italy,
    title: "Average price",
    subtitle: (
      <>
        <span className="font-bold">13 USD</span>{" "}
        <span className="font-medium">/ 30 mins</span>
      </>
    ),
  },

  {
    image: spain,
    title: "Average price",
    subtitle: (
      <>
        <span className="font-bold">13 USD</span>{" "}
        <span className="font-medium">/ 30 mins</span>
      </>
    ),
  },

  {
    image: unitedKingdom,
    title: "Average price",
    subtitle: (
      <>
        <span className="font-bold">13 USD</span>{" "}
        <span className="font-medium">/ 30 mins</span>
      </>
    ),
  },

  {
    image: france,
    title: "Average price",
    subtitle: (
      <>
        <span className="font-bold">13 USD</span>{" "}
        <span className="font-medium">/ 30 mins</span>
      </>
    ),
  },

  {
    image: italy,
    title: "Average price",
    subtitle: (
      <>
        <span className="font-bold">13 USD</span>{" "}
        <span className="font-medium">/ 30 mins</span>
      </>
    ),
  },

  {
    image: spain,
    title: "Average price",
    subtitle: (
      <>
        <span className="font-bold">13 USD</span>{" "}
        <span className="font-medium">/ 30 mins</span>
      </>
    ),
  },
];

const subjects = [
  {
    name: "English",
    selected: true,
  },

  {
    name: "French",
    selected: false,
  },

  {
    name: "Italian",
    selected: false,
  },

  {
    name: "Spanish",
    selected: false,
  },

  {
    name: "Chinese",
    selected: false,
  },

  {
    name: "Mathematic",
    selected: false,
  },

  {
    name: "Physics",
    selected: false,
  },

  {
    name: "Science",
    selected: false,
  },

  {
    name: "English",
    selected: false,
  },

  {
    name: "French",
    selected: false,
  },

  {
    name: "Italian",
    selected: false,
  },

  {
    name: "Spanish",
    selected: false,
  },

  {
    name: "Chinese",
    selected: false,
  },

  {
    name: "Mathematic",
    selected: false,
  },

  {
    name: "Physics",
    selected: false,
  },

  {
    name: "Science",
    selected: false,
  },
];

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="container-page px-3 my-8">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <div className="flex flex-col justify-between h-full pe-6">
              <h1 className="font-bold text-3xl text-[#48484A]">
                Learn any subject with{" "}
                <span className="sm:block inline-block">top-rated tutor</span>
              </h1>
              <div className="sm:hidden block max-w-full mx-auto my-8">
                <Image
                  alt="Header Image"
                  className="w-full h-full"
                  src={header}
                />
              </div>
              <ul className="list-disc text-[#8E8E93] font-medium ps-5 space-y-2">
                <li>
                  <p>1 : 1 Online Lessons with a real matched tutors</p>
                </li>
                <li>
                  <p>Flexible scheduling and rescheduling</p>
                </li>
                <li>
                  <p>Access to a library</p>
                </li>
              </ul>
              <button className="btn btn-black mt-6" type="button">
                Get Started
              </button>
            </div>
          </div>

          <div className="flex-1">
            <div className="sm:block hidden max-w-md mx-auto">
              <Image
                alt="Header Image"
                className="w-full h-full"
                src={header}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Countries */}
      <section className="container-page px-3 relative mb-5">
        <Swiper
          loop={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".countries-carousel-swiper-button-next",
            prevEl: ".countries-carousel-swiper-button-prev",
          }}
          breakpoints={{
            // when window width is >= 340px
            340: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // when window width is >= 440px
            440: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 700px
            700: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 950px
            950: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Pagination]}
          className="countries-carousel rounded-lg px-3 py-6 bg-[#F2F2F7]"
        >
          {countries?.map((country, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex min-[340px]:place-content-center place-content-start items-center gap-2">
                  <div>
                    <Image
                      alt={"Country Image"}
                      className="rounded-lg"
                      src={country?.image}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{country?.title}</h3>
                    <p className="text-[#8E8E93]">{country?.subtitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Image
          alt="Chevron Left"
          src={chevronLeft}
          className="countries-carousel-swiper-button-prev absolute transform -translate-y-1/2  top-1/2 md:left-10 left-5 z-50 cursor-pointer w-2"
        />
        <Image
          alt="Chevron Right"
          src={chevronRight}
          className="countries-carousel-swiper-button-next absolute transform -translate-y-1/2  top-1/2 md:right-10 right-5 z-50 cursor-pointer w-2"
        />
      </section>

      {/* Browser Subjects and Tutors */}
      <section className="bg-[#F2F2F7] ">
        <div className="container-page px-3 py-12">
          <h3 className="flex sm:items-center items-start font-bold text-xl">
            <Image
              alt="User Add Icon"
              className="w-6 inline-block me-2"
              src={bookOpen}
            />{" "}
            Browse our subjects and tutors to find the right Fit for You.
          </h3>

          <p className="text-sm text-[#8E8E93] mt-1 font-bold">
            Meet our top-rated tutors and learn at your own pace.
          </p>

          <div className="relative">
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
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                // when window width is >= 400px
                400: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                // when window width is >= 500px
                500: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                // when window width is >= 720px
                720: {
                  slidesPerView: 6,
                  spaceBetween: 10,
                },
                // when window width is >= 950px
                950: {
                  slidesPerView: 8,
                  spaceBetween: 0,
                },
              }}
              modules={[Navigation, Pagination]}
              className="subjects-carousel rounded-xl px-3 py-4 my-3 bg-white"
            >
              {subjects?.map((subject, index) => {
                return (
                  <SwiperSlide key={index} className="flex place-content-center">
                    <h3
                      className={`${
                        subject?.selected
                          ? "bg-black text-white rounded-lg w-[90px] mx-auto"
                          : ""
                      } font-bold cursor-pointer py-1 text-center`}
                    >
                      {subject?.name}
                    </h3>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <Image
              alt="Chevron Left"
              src={chevronLeft}
              className="subjects-carousel-swiper-button-prev absolute transform -translate-y-1/2  top-1/2 left-3 z-50 cursor-pointer w-2"
            />
            <Image
              alt="Chevron Right"
              src={chevronRight}
              className="subjects-carousel-swiper-button-next absolute transform -translate-y-1/2  top-1/2 right-3 z-50 cursor-pointer w-2"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
            <div className="bg-white rounded-b-xl rounded-t-xl">
              <Image
                alt={"Tutor Video Image"}
                className="w-full rounded-t-xl"
                src={tutorVideoPreview}
              />

              <div className="p-3.5">
                <div className="flex gap-3">
                  <div className="relative">
                    <Image
                      alt={"Tutor Image"}
                      className="rounded-lg"
                      src={tutorImagePreview}
                    />

                    <div className="absolute right-1 bottom-1 rounded-full w-2.5 h-2.5 bg-[#00FF47]"></div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#48484A]">Alexandra</h3>
                    <div className="flex gap-2 items-center">
                      <Image
                        alt={"Country Image"}
                        className="w-5 rounded-md"
                        src={unitedKingdom}
                      />

                      <h4 className="text-[#8E8E93] text-sm font-medium">
                        Teaches English
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 items-center justify-between my-3.5">
                  <ul className="flex items-center text-sm font-medium gap-3">
                    <li>English</li>
                    <li className="p-1 rounded-lg bg-black text-white">
                      Native
                    </li>
                    <li>French</li>
                    <li className="p-1 rounded-lg bg-[#A3FFBD]">Fluent C2</li>
                  </ul>

                  <div className="flex  items-center  justify-center bg-[#F5F5F7] w-6 h-6 rounded-full">
                    <h4 className="text-sm text-center font-bold text-[#48484A] tracking-tighter">
                      +1
                    </h4>
                  </div>
                </div>

                <h4 className="text-[#8E8E93] text-sm font-extrabold">
                  Lesson rate
                </h4>
                <h3 className="font-bold">
                  <span className="text-lg">8 USD/</span>30 mins
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-b-xl rounded-t-xl">
              <Image
                alt={"Tutor Video Image"}
                className="w-full rounded-t-xl"
                src={tutorVideoPreview}
              />

              <div className="p-3.5">
                <div className="flex gap-3">
                  <div className="relative">
                    <Image
                      alt={"Tutor Image"}
                      className="rounded-lg"
                      src={tutorImagePreview}
                    />

                    <div className="absolute right-1 bottom-1 rounded-full w-2.5 h-2.5 bg-[#00FF47]"></div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#48484A]">Alexandra</h3>
                    <div className="flex gap-2 items-center">
                      <Image
                        alt={"Country Image"}
                        className="w-5 rounded-md"
                        src={unitedKingdom}
                      />

                      <h4 className="text-[#8E8E93] text-sm font-medium">
                        Teaches English
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 items-center justify-between my-3.5">
                  <ul className="flex items-center text-sm font-medium gap-3">
                    <li>English</li>
                    <li className="p-1 rounded-lg bg-black text-white">
                      Native
                    </li>
                    <li>French</li>
                    <li className="p-1 rounded-lg bg-[#A3FFBD]">Fluent C2</li>
                  </ul>

                  <div className="flex  items-center  justify-center bg-[#F5F5F7] w-6 h-6 rounded-full">
                    <h4 className="text-sm text-center font-bold text-[#48484A] tracking-tighter">
                      +1
                    </h4>
                  </div>
                </div>

                <h4 className="text-[#8E8E93] text-sm font-extrabold">
                  Lesson rate
                </h4>
                <h3 className="font-bold">
                  <span className="text-lg">8 USD/</span>30 mins
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-b-xl rounded-t-xl">
              <Image
                alt={"Tutor Video Image"}
                className="w-full rounded-t-xl"
                src={tutorVideoPreview}
              />

              <div className="p-3.5">
                <div className="flex gap-3">
                  <div className="relative">
                    <Image
                      alt={"Tutor Image"}
                      className="rounded-lg"
                      src={tutorImagePreview}
                    />

                    <div className="absolute right-1 bottom-1 rounded-full w-2.5 h-2.5 bg-[#00FF47]"></div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#48484A]">Alexandra</h3>
                    <div className="flex gap-2 items-center">
                      <Image
                        alt={"Country Image"}
                        className="w-5 rounded-md"
                        src={unitedKingdom}
                      />

                      <h4 className="text-[#8E8E93] text-sm font-medium">
                        Teaches English
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 items-center justify-between my-3.5">
                  <ul className="flex items-center text-sm font-medium gap-3">
                    <li>English</li>
                    <li className="p-1 rounded-lg bg-black text-white">
                      Native
                    </li>
                    <li>French</li>
                    <li className="p-1 rounded-lg bg-[#A3FFBD]">Fluent C2</li>
                  </ul>

                  <div className="flex  items-center  justify-center bg-[#F5F5F7] w-6 h-6 rounded-full">
                    <h4 className="text-sm text-center font-bold text-[#48484A] tracking-tighter">
                      +1
                    </h4>
                  </div>
                </div>

                <h4 className="text-[#8E8E93] text-sm font-extrabold">
                  Lesson rate
                </h4>
                <h3 className="font-bold">
                  <span className="text-lg">8 USD/</span>30 mins
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-b-xl rounded-t-xl">
              <Image
                alt={"Tutor Video Image"}
                className="w-full rounded-t-xl"
                src={tutorVideoPreview}
              />

              <div className="p-3.5">
                <div className="flex gap-3">
                  <div className="relative">
                    <Image
                      alt={"Tutor Image"}
                      className="rounded-lg"
                      src={tutorImagePreview}
                    />

                    <div className="absolute right-1 bottom-1 rounded-full w-2.5 h-2.5 bg-[#00FF47]"></div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#48484A]">Alexandra</h3>
                    <div className="flex gap-2 items-center">
                      <Image
                        alt={"Country Image"}
                        className="w-5 rounded-md"
                        src={unitedKingdom}
                      />

                      <h4 className="text-[#8E8E93] text-sm font-medium">
                        Teaches English
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 items-center justify-between my-3.5">
                  <ul className="flex items-center text-sm font-medium gap-3">
                    <li>English</li>
                    <li className="p-1 rounded-lg bg-black text-white">
                      Native
                    </li>
                    <li>French</li>
                    <li className="p-1 rounded-lg bg-[#A3FFBD]">Fluent C2</li>
                  </ul>

                  <div className="flex  items-center  justify-center bg-[#F5F5F7] w-6 h-6 rounded-full">
                    <h4 className="text-sm text-center font-bold text-[#48484A] tracking-tighter">
                      +1
                    </h4>
                  </div>
                </div>

                <h4 className="text-[#8E8E93] text-sm font-extrabold">
                  Lesson rate
                </h4>
                <h3 className="font-bold">
                  <span className="text-lg">8 USD/</span>30 mins
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-b-xl rounded-t-xl">
              <Image
                alt={"Tutor Video Image"}
                className="w-full rounded-t-xl"
                src={tutorVideoPreview}
              />

              <div className="p-3.5">
                <div className="flex gap-3">
                  <div className="relative">
                    <Image
                      alt={"Tutor Image"}
                      className="rounded-lg"
                      src={tutorImagePreview}
                    />

                    <div className="absolute right-1 bottom-1 rounded-full w-2.5 h-2.5 bg-[#00FF47]"></div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#48484A]">Alexandra</h3>
                    <div className="flex gap-2 items-center">
                      <Image
                        alt={"Country Image"}
                        className="w-5 rounded-md"
                        src={unitedKingdom}
                      />

                      <h4 className="text-[#8E8E93] text-sm font-medium">
                        Teaches English
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 items-center justify-between my-3.5">
                  <ul className="flex items-center text-sm font-medium gap-3">
                    <li>English</li>
                    <li className="p-1 rounded-lg bg-black text-white">
                      Native
                    </li>
                    <li>French</li>
                    <li className="p-1 rounded-lg bg-[#A3FFBD]">Fluent C2</li>
                  </ul>

                  <div className="flex  items-center  justify-center bg-[#F5F5F7] w-6 h-6 rounded-full">
                    <h4 className="text-sm text-center font-bold text-[#48484A] tracking-tighter">
                      +1
                    </h4>
                  </div>
                </div>

                <h4 className="text-[#8E8E93] text-sm font-extrabold">
                  Lesson rate
                </h4>
                <h3 className="font-bold">
                  <span className="text-lg">8 USD/</span>30 mins
                </h3>
              </div>
            </div>
            <div className="bg-[#1C1C1E] text-whit p-3 rounded-b-xl rounded-t-xl">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl text-white font-bold">
                    Discovers more{" "}
                    <span className="sm:block inline">teachers</span>
                  </h3>
                  <p className="font-medium text-white my-6">
                    Search through 1000+ qualified teachers and select the
                    perfect fit based on your target subject, goals and budget.
                  </p>
                </div>

                <div>
                  <Link href={"#"} className="btn btn-white text-center">
                    Discover more teachers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Easy */}
      <section className="container-page px-3 py-12">
        <h3 className="flex sm:items-center items-start font-bold text-xl">
          <Image
            alt="User Walking Icon"
            className="w-4 inline-block me-2"
            src={walking}
          />{" "}
          Only few easy steps to get started
        </h3>

        <p className="text-sm text-[#8E8E93] mt-1 font-bold">
          In only four words, choose, schedule, pay, start.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          <div className="bg-[#F2F2F7] text-center rounded-xl py-5 px-8">
            <Image
              alt={"Icon 3 Users"}
              className="w-12 mx-auto"
              src={threeUsers}
            />

            <h2 className="text-[#48484A] text-lg font-bold my-1.5">
              Choose a tutor
            </h2>
            <p className="text-[#8E8E93] font-medium">
              Browse qualified tutors based on level, goals, budget, and
              availability.
            </p>
          </div>

          <div className="bg-[#F2F2F7] text-center rounded-xl py-5 px-8">
            <Image
              alt={"Icon Calendar"}
              className="w-12 mx-auto"
              src={calendar}
            />

            <h2 className="text-[#48484A] text-lg font-bold my-1.5">
              Schedule a lesson
            </h2>
            <p className="text-[#8E8E93] font-medium">
              Pick the date and time that works for you and get ready to conquer
              your goals.
            </p>
          </div>

          <div className="bg-[#F2F2F7] text-center rounded-xl py-5 px-8">
            <Image alt={"Icon Card"} className="w-12 mx-auto" src={card} />

            <h2 className="text-[#48484A] text-lg font-bold my-1.5">
              Pay as you go
            </h2>
            <p className="text-[#8E8E93] font-medium">
              Pay only for the lessons you take, no contracts or hidden fees.
            </p>
          </div>

          <div className="bg-[#F2F2F7] text-center rounded-xl py-5 px-8">
            <Image
              alt={"Icon Screen User"}
              className="w-12 mx-auto"
              src={userScreen}
            />

            <h2 className="text-[#48484A] text-lg font-bold my-1.5">
              Start learning
            </h2>
            <p className="text-[#8E8E93] font-medium">
              Pay only for the lessons you take, no contracts or hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Meet our services */}
      <section className="bg-[#F2F2F7]">
        <div className="container-page px-3 py-12">
          <h3 className="flex sm:items-center items-start font-bold text-xl">
            <Image
              alt="Sparkle Icon"
              className="w-5 inline-block me-2"
              src={sparkle}
            />{" "}
            Meet our services
          </h3>

          <p className="text-sm text-[#8E8E93] mt-1 font-bold">
            Start learning today
          </p>

          <article className="flex flex-col-reverse md:flex-row gap-5 mt-5">
            <div className="flex-1">
              <div className="flex flex-col justify-between">
                <div className="bg-white flex-1 text-center rounded-xl py-5 px-8 mb-6">
                  <Image
                    alt={"2 Users Icon"}
                    className="w-16 mx-auto"
                    src={twoUsers}
                  />

                  <h2 className="text-[#48484A] text-lg font-bold my-1.5">
                    Dedicated lessons
                  </h2>
                  <p className="text-[#8E8E93] font-medium">
                    Find teachers from all over the world sharing their
                    languages, dialects, and cultures.
                  </p>
                </div>

                <div className="bg-white flex-1 text-center rounded-xl py-5 px-8">
                  <Image
                    alt={"Icon library"}
                    className="w-16 mx-auto"
                    src={library}
                  />

                  <h2 className="text-[#48484A] text-lg font-bold my-1.5">
                    Library access
                  </h2>
                  <p className="text-[#8E8E93] font-medium">
                    Find teachers from all over the world sharing their
                    languages, dialects, and cultures.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-[30%]">
              <div className="max-w-full mx-auto">
                <Image
                  alt="Woman Working"
                  className="w-full h-[23rem] object-cover rounded-2xl"
                  src={womanWorking}
                />{" "}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Get Started Not Easy*/}
      <section className="container-page px-3 py-12">
        <h3 className="flex sm:items-center items-start font-bold text-xl">
          <Image
            alt="User Add Icon"
            className="w-6 inline-block me-2"
            src={badge}
          />{" "}
          Only few steps to get started
        </h3>

        <p className="text-sm text-[#8E8E93] mt-1 font-bold">
          Start learning today
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          <div className="bg-[#F2F2F7] text-center rounded-xl py-5 px-8">
            <Image
              alt={"Icon Calculator"}
              className="w-12 mx-auto"
              src={calculator}
            />

            <h2 className="text-[#48484A] text-lg font-bold my-1.5">
              Scientific subjects
            </h2>
            <p className="text-[#8E8E93] font-medium">
              Browse qualified tutors based on level, goals, budget, and
              availability.
            </p>
          </div>

          <div className="bg-[#F2F2F7] text-center rounded-xl py-5 px-8">
            <Image
              alt={"Icon Message"}
              className="w-16 mx-auto"
              src={messages}
            />

            <h2 className="text-[#48484A] text-lg font-bold my-1.5">
              Linguistic subjects
            </h2>
            <p className="text-[#8E8E93] font-medium">
              Pick the date and time that works for you and get ready to conquer
              your goals.
            </p>
          </div>

          <div className="bg-[#F2F2F7] text-center rounded-xl py-5 px-8">
            <Image alt={"Icon Pencil"} className="w-16 mx-auto" src={pencil} />

            <h2 className="text-[#48484A] text-lg font-bold my-1.5">
              Artistic subjects
            </h2>
            <p className="text-[#8E8E93] font-medium">
              Pay only for the lessons you take, no contracts or hidden fees.
            </p>
          </div>

          <div className="bg-[#F2F2F7] text-center rounded-xl py-5 px-8">
            <Image alt={"Icon Wrist"} className="w-16 mx-auto" src={wrist} />

            <h2 className="text-[#48484A] text-lg font-bold my-1.5">
              Practical subjects
            </h2>
            <p className="text-[#8E8E93] font-medium">
              Pay only for the lessons you take, no contracts or hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Discover how our lessons support you */}
      <section className="bg-[#F2F2F7]">
        <div className="container-page px-3 py-12">
          <h3 className="flex sm:items-center items-start font-bold text-xl">
            <Image
              alt="Sparkle Icon"
              className="w-5 inline-block me-2"
              src={sparkle}
            />{" "}
            Discover how our lessons can support You
          </h3>

          <p className="text-sm text-[#8E8E93] mt-1 font-bold">
            From school support to professional skill improvement, find lessons
            that fit your needs and learning style.
          </p>

          <article className="flex flex-col-reverse md:flex-row gap-5 my-8">
            <div className="flex-1">
              <div className="flex flex-col justify-between">
                <div className="bg-white flex-1 text-center rounded-xl py-5 px-8">
                  <Image
                    alt={"Parachute Icon"}
                    className="w-12 mx-auto"
                    src={parachute}
                  />

                  <h2 className="text-[#48484A] text-lg font-bold my-1.5">
                    School support
                  </h2>
                  <p className="text-[#8E8E93] font-medium">
                    Get personalized help to reinforce what you’re learning in
                    class.
                  </p>
                </div>

                <div className="bg-white flex-1 text-center rounded-xl py-5 px-8 my-6">
                  <Image
                    alt={"Luggage Icon"}
                    className="w-12 mx-auto"
                    src={luggage}
                  />

                  <h2 className="text-[#48484A] text-lg font-bold my-1.5">
                    Conversational lessons
                  </h2>
                  <p className="text-[#8E8E93] font-medium">
                    Practice real-life conversations to improve fluency and
                    confidence.
                  </p>
                </div>

                <div className="bg-white flex-1 text-center rounded-xl py-5 px-8">
                  <Image
                    alt={"Badge Star Icon"}
                    className="w-6 mx-auto"
                    src={badgeStar}
                  />

                  <h2 className="text-[#48484A] text-lg font-bold my-1.5">
                    Exam preparation
                  </h2>
                  <p className="text-[#8E8E93] font-medium">
                    Focused guidance to help you excel in your upcoming exams.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-[30%]">
              <div className="max-w-full mx-auto">
                <Image
                  alt="Woman Working"
                  className="w-full h-[35.8rem] object-cover rounded-2xl"
                  src={womanWorking}
                />{" "}
              </div>
            </div>
          </article>

          <article className="flex flex-col md:flex-row gap-5">
            <div className="flex-[30%]">
              <div className="max-w-full mx-auto">
                <Image
                  alt="Woman Working"
                  className="w-full h-[23.2rem] object-cover rounded-2xl"
                  src={womanWorking}
                />{" "}
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col justify-between">
                <div className="bg-white flex-1 text-center rounded-xl py-5 px-8 mb-6">
                  <Image alt={"Icon Sun"} className="w-12 mx-auto" src={sun} />

                  <h2 className="text-[#48484A] text-lg font-bold my-1.5">
                    Initiation lessons
                  </h2>
                  <p className="text-[#8E8E93] font-medium">
                    Start from the basics and build a strong foundation in any
                    subject.
                  </p>
                </div>

                <div className="bg-white flex-1 text-center rounded-xl py-5 px-8">
                  <Image alt={"Icon Bee"} className="w-12 mx-auto" src={bee} />

                  <h2 className="text-[#48484A] text-lg font-bold my-1.5 leading-5">
                    Professional skills improvement
                  </h2>
                  <p className="text-[#8E8E93] font-medium">
                    Enhance your career by developing essential skills for the
                    workplace.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Save learning environment */}
      <section className="container-page px-3 py-12">
        <h3 className="flex sm:items-center items-start font-bold text-xl">
          <Image
            alt="Shield Icon"
            className="w-6 inline-block me-2"
            src={shield}
          />{" "}
          Safe learning environment
        </h3>

        <p className="text-sm text-[#8E8E93] mt-1 font-bold">
          Our platform provides a secure, monitored space with verified tutors,
          ensuring a safe and supportive learning experience for all.
        </p>

        <article className="flex flex-col-reverse md:flex-row gap-5 mt-5">
          <div className="flex-1">
            <div className="bg-[#F2F2F7] flex-1 text-center rounded-xl py-8 px-8 mb-6">
              <Image
                alt={"Camera Icon"}
                className="w-14 mx-auto"
                src={camera}
              />

              <h2 className="text-[#48484A] text-lg font-bold my-1.5">
                Monitored Sessions
              </h2>
              <p className="text-[#8E8E93] font-medium">
                Tutors and lessons are monitored for quality and safety.
              </p>
            </div>
          </div>

          <div className="flex-[30%]">
            <div className="max-w-full mx-auto">
              <Image
                alt="Woman Working"
                className="w-full h-[13rem] object-cover rounded-2xl"
                src={womanWorkingAlt}
              />{" "}
            </div>
          </div>
        </article>
      </section>

      {/* Footer */}
      <footer>
        <div className="bg-[#F2F2F7] ">
          <div className="container-page px-3 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 sm:place-items-stretch place-items-center sm:text-start text-center md:gap-3 gap-6 text-[#1C1C1E]">
              <div>
                <h3 className="font-bold text-lg mb-3">Linguistic subjects</h3>
                <div className="space-y-1.5">
                  <Link className="font-medium block" href={"#"}>
                    Learn English
                  </Link>
                  <Link className="font-medium block" href={"#"}>
                    Learn French
                  </Link>
                  <Link className="font-medium block" href={"#"}>
                    Learn Spanish
                  </Link>
                  <Link className="font-medium block" href={"#"}>
                    Learn Italian
                  </Link>
                  <Link className="font-medium block" href={"#"}>
                    Learn Japenese
                  </Link>
                  <Link className="font-medium block" href={"#"}>
                    Learn Arabic
                  </Link>
                  <Link className="font-medium block" href={"#"}>
                    Learn Chinese
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Scientific subjects</h3>
                <div className="space-y-1.5">
                  <Link className="font-medium block" href={"#"}>
                    Learn mathematic
                  </Link>
                  <Link className="font-medium block" href={"#"}>
                    Learn science
                  </Link>
                  <Link className="font-medium block" href={"#"}>
                    Learn physics
                  </Link>
                  <Link className="font-medium block" href={"#"}>
                    Learn coding
                  </Link>
                  <Link className="font-medium block" href={"#"}>
                    Learn design
                  </Link>
                  <Link className="font-medium block" href={"#"}>
                    Learn accounting
                  </Link>
                  <Link className="font-medium block" href={"#"}>
                    Learn economics
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Artistic subjects</h3>
                <div className="space-y-1.5">
                  <Link className="font-medium block" href={"#"}>
                    Learn drawing
                  </Link>
                  <Link className="font-medium block" href={"#"}>
                    Learn singing
                  </Link>
                  <Link className="font-medium block" href={"#"}>
                    Learn fashion
                  </Link>
                  <Link className="font-medium block" href={"#"}>
                    Learn history
                  </Link>
                  <Link className="font-medium block" href={"#"}>
                    Learn 3D sculpting
                  </Link>
                  <Link className="font-medium block" href={"#"}>
                    Learn 3D modeling
                  </Link>
                  <Link className="font-medium block" href={"#"}>
                    Learn animation
                  </Link>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-3">Services</h3>
                  <div className="space-y-1.5">
                    <Link className="font-medium block" href={"#"}>
                      Conversational lessons
                    </Link>
                    <Link className="font-medium block" href={"#"}>
                      School support
                    </Link>
                    <Link className="font-medium block" href={"#"}>
                      Family mode
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3 sm:mt-0 mt-3">Teaching</h3>
                  <div className="space-y-1.5">
                    <Link className="font-medium block" href={"#"}>
                      Become a teacher
                    </Link>
                    <Link className="font-medium block" href={"#"}>
                      Code of conduct
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-3">Support</h3>
                  <div className="space-y-1.5">
                    <Link className="font-medium block" href={"#"}>
                      Support center
                    </Link>
                    <Link className="font-medium block" href={"#"}>
                      Report a concern
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3 sm:mt-0 mt-3">Legal</h3>
                  <div className="space-y-1.5">
                    <Link className="font-medium block" href={"#"}>
                      Terms of use
                    </Link>
                    <Link className="font-medium block" href={"#"}>
                      Privacy
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-3">Promotion</h3>
                  <div className="space-y-1.5">
                    <Link className="font-medium block" href={"#"}>
                      Refer to a friend
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3 sm:mt-0 mt-3">More</h3>
                  <div className="space-y-1.5">
                    <Link className="font-medium block" href={"#"}>
                      FAQ
                    </Link>
                    <Link className="font-medium block" href={"#"}>
                      iPractis Blog
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <Link href={"#"}>
                    <Image alt="Linkedin" src={linkedin} className="w-8" />
                  </Link>

                  <Link href={"#"}>
                    <Image alt="Youtube" src={youtube} className="w-8" />
                  </Link>

                  <Link href={"#"}>
                    <Image alt="Instagram" src={instagram} className="w-8" />
                  </Link>

                  <Link href={"#"}>
                    <Image alt="Facebook" src={facebook} className="w-8" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1C1C1E] ">
          <div className="container-page px-3 py-3">
            <div className="flex flex-col-reverse sm:flex-row sm:items-start items-center sm:gap-9 gap-3 text-white font-medium">
              <div>
                <p>&copy; 2024 iPractis Limited.</p>
              </div>

              <div className="space-x-6">
                <Link href={"#"}>About us</Link>
                <Link href={"#"}>Careers</Link>
                <Link href={"#"}>Contact us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
