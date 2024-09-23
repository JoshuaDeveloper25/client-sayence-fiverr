import { Input } from "@/app/components/InputUtilities";
import addImage from "../../assets/icons/add-image.png";
import camera from "../../assets/icons/camera-alt.png";
import video from "../../assets/icons/video.png";
import link from "../../assets/icons/link.png";
import Image from "next/image";

const TabShowCase = ({ activeTabIndex }) => {
  return (
    <section className="flex flex-col-reverse sm:flex-row gap-14">
      <div className="flex-1">
        <div className="mb-8">
          <h3 className="flex items-center MT-SB-1">
            <Image
              alt="Video Icon"
              className="w-6 inline-block me-2"
              src={video}
            />{" "}
            Video presentation
          </h3>
          <p className="ST-3 text-[#8E8E93] mt-1 ">
            Introduce yourself to students in the language you&apos;ll be
            teaching and make sure your video meets the requirements to get
            approved.
          </p>
        </div>

        <div className="mb-8">
          <Input
            inputProp={{
              placeholder: "Enter your video link",
              name: "videoLink",
              type: "text",
              required: activeTabIndex === 3 ? true : false,
            }}
            iconStyles={"w-[1.3rem] h-[1.3rem] object-contain"}
            errorName={"Invalid link"}
            errorDesc={
              "Please ensure the link provided is a valid YouTube URL."
            }
            boxInputError={true}
            alt={"Link Icon"}
            imgPath={link}
          />
        </div>

        <ul className="list-disc ps-5 text-[#48484A] ST-4 space-y-1">
          <li>You must appear in the video.</li>
          <li>Record in horizontal mode and at eye level.</li>
          <li>The video aspect ratio should be 16:9.</li>
          <li>Your video should be between 1 to 3 minutes long.</li>
          <li>
            You must speak all the languages that you are able to teach with.
          </li>
          <li>
            Highlight your teaching experience and any relevant teaching
            certification(s)
          </li>
          <li>
            Uploaded on YouTube and set to &apos;Public&apos; visibility. Then
            provide the link in the right area.
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <div className="mb-8">
          <h3 className="flex items-center MT-SB-1">
            <Image
              alt="Camera Icon"
              className="w-6 inline-block me-2"
              src={camera}
            />{" "}
            Profile picture
          </h3>
          <p className=" text-[#8E8E93] mt-1 ST-3">
            Upload clear profile picture to help students recognize you and make
            a positive first impression. Ensure your profile picture meets the
            following guidelines:
          </p>
        </div>

        <div className="mb-8">
          <label>
            <div className="max-w-[6.5rem]">
              <Image
                className="w-full h-full cursor-pointer"
                src={addImage}
                alt="Add File Image"
              />
            </div>
            <input type="file" className="hidden" />
          </label>
        </div>

        <ul className="list-disc ps-5 text-[#48484A] ST-4 space-y-1">
          <li>You must be clearly visible and centered in the picture.</li>
          <li>Use a plain background to avoid distractions.</li>
          <li>The picture should be a recent, high-quality image.</li>
          <li>
            Ensure good lighting so your face is well-lit and clearly visible.
          </li>
          <li>Avoid using filters or overly edited images.</li>
        </ul>
      </div>
    </section>
  );
};

export default TabShowCase;
