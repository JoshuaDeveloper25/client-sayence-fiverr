"use client"; // top to the file
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import unitedKingdom from "./assets/countries/united-kingdom.png";
import france from "./assets/countries/france.png";
import header from "./assets/images/header.png";
import italy from "./assets/countries/italy.png";
import spain from "./assets/countries/spain.png";

import chevronRight from "./assets/icons/chevron-right.png";
import chevronLeft from "./assets/icons/chevron-left.png";
import bookOpen from "./assets/icons/book-open.png";

import Image from "next/image";

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
                <div className="flex items-center min-[340px]:ms-0 ms-4 gap-2 min-[440px]:px-5">
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
          <h3 className="font-bold text-xl">
            <Image
              alt="User Add Icon"
              className="align-text-bottom w-6 inline-block me-2"
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
              className="subjects-carousel rounded-xl px-3 py-2 my-3 bg-white"
            >
              {subjects?.map((subject) => {
                return (
                  <SwiperSlide className="min-[340px]:ps-0 ps-16">
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
        </div>
      </section>
    </main>
  );
}
