import linkedin from "../assets/icons/linkedin.png";
import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";
import youtube from "../assets/icons/youtube.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
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
  );
};

export default Footer;
