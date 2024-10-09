"use client";
import Image from "next/image";
import { countries } from "../db/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Images && Icons
import chevronRight from "../assets/icons/chevron-right.png";
import chevronLeft from "../assets/icons/chevron-left.png";

const CountriesCarousel = () => {
  return (
    <section className="container-page px-3">
      <div className="rounded-lg bg-[#F2F2F7] px-[20px] relative mb-14">
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
            // when window width is >= 550px
            550: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 860px
            860: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 1140px
            1140: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          modules={[Navigation, Pagination]}
          className="countries-carousel"
        >
          {countries?.map((country, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex min-[340px]:place-content-center place-content-start leading-4 items-center gap-2">
                  <div>
                    <Image
                      alt={"Country Image"}
                      className="rounded-lg"
                      src={country?.image}
                    />
                  </div>
                  <div>
                    <h3 className="ST-SB-3">{country?.title}</h3>
                    <p className="text-[#8E8E93]">{country?.subtitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="countries-carousel-swiper-button-prev absolute transform -translate-y-1/2 top-1/2 left-4 z-50 cursor-pointer w-[25px] h-[25px] object-contain animation-fade transition-all duration-300 ease-in rounded-md p-2 hover:bg-[#C0BDB9]">
          <Image
            alt="Chevron Left"
            src={chevronLeft}
            className=" w-full h-full object-contain"
          />
        </div>

        <div className="countries-carousel-swiper-button-next absolute transform -translate-y-1/2 top-1/2 right-4 z-50 cursor-pointer w-[25px] h-[25px] object-contain animation-fade transition-all duration-300 ease-in rounded-md p-2 hover:bg-[#C0BDB9]">
          <Image
            alt="Chevron Right"
            src={chevronRight}
            className=" w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CountriesCarousel;
