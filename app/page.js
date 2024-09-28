"use client";
import womanWorkingAlt from "./assets/images/working-woman-alt.png";
import womanWorking from "./assets/images/working-woman.png";

import calculator from "./assets/icons/calculator.png";

import twoUsers from "./assets/icons/2-users.png";
import sparkle from "./assets/icons/sparkle.png";
import library from "./assets/icons/library.png";

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

// Components Sections
import Header from "./components/Header";
import CountriesCarousel from "./components/CountriesCarousel";
import LanguagesCarousel from "./components/LanguagesCarousel";
import GetStartedEasy from "./components/GetStartedEasy";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <Header />

      {/* Countries */}
      <CountriesCarousel />

      {/* Browser Subjects and Tutors */}
      <LanguagesCarousel />

      {/* Get Started Easy */}
      <GetStartedEasy />

      {/* Meet our services */}
      <section className="bg-[#F2F2F7]">
        <div className="container-page px-3 py-12">
          <h3 className="flex sm:items-center items-start MT-SB-2">
            <Image
              alt="Sparkle Icon"
              className="w-5 inline-block me-2"
              src={sparkle}
            />{" "}
            Meet our services
          </h3>

          <p className=" text-[#8E8E93] mt-1 ST-3">Start learning today</p>

          <article className="flex flex-col-reverse md:flex-row gap-5 mt-5">
            <div className="flex-1">
              <div className="flex flex-col justify-between">
                <div className="bg-white flex-1 text-center rounded-xl py-5 px-8 mb-6">
                  <Image
                    alt={"2 Users Icon"}
                    className="w-16 mx-auto"
                    src={twoUsers}
                  />

                  <h2 className="text-[#48484A] MT-SB-1 my-1.5">
                    Dedicated lessons
                  </h2>
                  <p className="text-[#8E8E93] ST-3">
                    Find teachers from all over the world sharing their
                    languages, dialects, and cultures.
                  </p>
                </div>

                <div className="bg-white flex-1 text-center rounded-xl py-5 px-5">
                  <Image
                    alt={"Icon library"}
                    className="w-16 mx-auto"
                    src={library}
                  />

                  <h2 className="text-[#48484A] MT-SB-1 my-1.5">
                    Library access
                  </h2>
                  <p className="text-[#8E8E93] ST-3">
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
                  className="w-full h-[23.5rem] object-cover rounded-2xl"
                  src={womanWorking}
                />{" "}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Get Started Not Easy*/}
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

            <h2 className="text-[#48484A] MT-SB-1 my-1.5">
              Scientific subjects
            </h2>
            <p className="text-[#8E8E93] ST-3">
              Browse qualified tutors based on level, goals, budget, and
              availability.
            </p>
          </div>

          <div className="bg-[#F2F2F7] text-center rounded-xl py-5 px-5">
            <Image
              alt={"Icon Message"}
              className="w-16 mx-auto"
              src={messages}
            />

            <h2 className="text-[#48484A] MT-SB-1 my-1.5">
              Linguistic subjects
            </h2>
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

            <h2 className="text-[#48484A] MT-SB-1 my-1.5">
              Practical subjects
            </h2>
            <p className="text-[#8E8E93] ST-3">
              Pay only for the lessons you take, no contracts or hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Discover how our lessons support you */}
      <section className="bg-[#F2F2F7]">
        <div className="container-page px-3 py-12">
          <h3 className="flex sm:items-center items-start MT-SB-2">
            <Image
              alt="Sparkle Icon"
              className="w-5 inline-block me-2"
              src={sparkle}
            />{" "}
            Discover how our lessons can support You
          </h3>

          <p className=" text-[#8E8E93] mt-1 ST-3">
            From school support to professional skill improvement, find lessons
            that fit your needs and learning style.
          </p>

          <article className="flex flex-col-reverse md:flex-row gap-5 my-8">
            <div className="flex-1">
              <div className="flex flex-col justify-between">
                <div className="bg-white flex-1 text-center rounded-xl py-5 px-5">
                  <Image
                    alt={"Parachute Icon"}
                    className="w-12 mx-auto"
                    src={parachute}
                  />

                  <h2 className="text-[#48484A] MT-SB-1 my-1.5">
                    School support
                  </h2>
                  <p className="text-[#8E8E93] ST-3">
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

                  <h2 className="text-[#48484A] MT-SB-1 my-1.5">
                    Conversational lessons
                  </h2>
                  <p className="text-[#8E8E93] ST-3">
                    Practice real-life conversations to improve fluency and
                    confidence.
                  </p>
                </div>

                <div className="bg-white flex-1 text-center rounded-xl py-5 px-5">
                  <Image
                    alt={"Badge Star Icon"}
                    className="w-6 mx-auto"
                    src={badgeStar}
                  />

                  <h2 className="text-[#48484A] MT-SB-1 my-1.5">
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
                  className="w-full h-[33.4rem] object-cover rounded-2xl"
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
                  className="w-full h-[23rem] object-cover rounded-2xl"
                  src={womanWorking}
                />{" "}
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col justify-between">
                <div className="bg-white flex-1 text-center rounded-xl py-5 px-8 mb-6">
                  <Image alt={"Icon Sun"} className="w-12 mx-auto" src={sun} />

                  <h2 className="text-[#48484A] MT-SB-1 my-1.5">
                    Initiation lessons
                  </h2>
                  <p className="text-[#8E8E93] ST-3">
                    Start from the basics and build a strong foundation in any
                    subject.
                  </p>
                </div>

                <div className="bg-white flex-1 text-center rounded-xl py-5 px-5">
                  <Image alt={"Icon Bee"} className="w-12 mx-auto" src={bee} />

                  <h2 className="text-[#48484A] MT-SB-1 my-1.5 leading-5">
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

      {/* Save learning environment */}
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
              <Image
                alt={"Camera Icon"}
                className="w-14 mx-auto"
                src={camera}
              />

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

      {/* Footer */}
      <footer>
        <div className="bg-[#F2F2F7] ">
          <div className="px-3 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 sm:place-items-stretch place-items-center sm:text-start text-center md:gap-3 gap-6 text-[#1C1C1E]">
              <div>
                <h3 className="MT-SB-1 mb-3">Linguistic subjects</h3>
                <div className="space-y-1.5">
                  <Link className="ST-3 block" href={"#"}>
                    Learn English
                  </Link>
                  <Link className="ST-3 block" href={"#"}>
                    Learn French
                  </Link>
                  <Link className="ST-3 block" href={"#"}>
                    Learn Spanish
                  </Link>
                  <Link className="ST-3 block" href={"#"}>
                    Learn Italian
                  </Link>
                  <Link className="ST-3 block" href={"#"}>
                    Learn Japenese
                  </Link>
                  <Link className="ST-3 block" href={"#"}>
                    Learn Arabic
                  </Link>
                  <Link className="ST-3 block" href={"#"}>
                    Learn Chinese
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="MT-SB-1 mb-3">Scientific subjects</h3>
                <div className="space-y-1.5">
                  <Link className="ST-3 block" href={"#"}>
                    Learn mathematic
                  </Link>
                  <Link className="ST-3 block" href={"#"}>
                    Learn science
                  </Link>
                  <Link className="ST-3 block" href={"#"}>
                    Learn physics
                  </Link>
                  <Link className="ST-3 block" href={"#"}>
                    Learn coding
                  </Link>
                  <Link className="ST-3 block" href={"#"}>
                    Learn design
                  </Link>
                  <Link className="ST-3 block" href={"#"}>
                    Learn accounting
                  </Link>
                  <Link className="ST-3 block" href={"#"}>
                    Learn economics
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="MT-SB-1 mb-3">Artistic subjects</h3>
                <div className="space-y-1.5">
                  <Link className="ST-3 block" href={"#"}>
                    Learn drawing
                  </Link>
                  <Link className="ST-3 block" href={"#"}>
                    Learn singing
                  </Link>
                  <Link className="ST-3 block" href={"#"}>
                    Learn fashion
                  </Link>
                  <Link className="ST-3 block" href={"#"}>
                    Learn history
                  </Link>
                  <Link className="ST-3 block" href={"#"}>
                    Learn 3D sculpting
                  </Link>
                  <Link className="ST-3 block" href={"#"}>
                    Learn 3D modeling
                  </Link>
                  <Link className="ST-3 block" href={"#"}>
                    Learn animation
                  </Link>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="MT-SB-1 mb-3">Services</h3>
                  <div className="space-y-1.5">
                    <Link className="ST-3 block" href={"#"}>
                      Conversational lessons
                    </Link>
                    <Link className="ST-3 block" href={"#"}>
                      School support
                    </Link>
                    <Link className="ST-3 block" href={"#"}>
                      Family mode
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="MT-SB-1 mb-3 mt-3">Teaching</h3>
                  <div className="space-y-1.5">
                    <Link className="ST-3 block" href={"#"}>
                      Become a teacher
                    </Link>
                    <Link className="ST-3 block" href={"#"}>
                      Code of conduct
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="MT-SB-1 mb-3">Support</h3>
                  <div className="space-y-1.5">
                    <Link className="ST-3 block" href={"#"}>
                      Support center
                    </Link>
                    <Link className="ST-3 block" href={"#"}>
                      Report a concern
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="MT-SB-1 mb-3 mt-3">Legal</h3>
                  <div className="space-y-1.5">
                    <Link className="ST-3 block" href={"#"}>
                      Terms of use
                    </Link>
                    <Link className="ST-3 block" href={"#"}>
                      Privacy
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="MT-SB-1 mb-3">Promotion</h3>
                  <div className="space-y-1.5">
                    <Link className="ST-3 block" href={"#"}>
                      Refer to a friend
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="MT-SB-1 mb-3 mt-3">More</h3>
                  <div className="space-y-1.5">
                    <Link className="ST-3 block" href={"#"}>
                      FAQ
                    </Link>
                    <Link className="ST-3 block" href={"#"}>
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
          <div className="px-3 py-3">
            <div className="flex flex-col-reverse sm:flex-row sm:items-start items-center sm:gap-9 gap-3 text-white font-medium">
              <div>
                <p className="ST-2">&copy; 2024 iPractis Limited.</p>
              </div>

              <div className="space-x-6 ST-2">
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
