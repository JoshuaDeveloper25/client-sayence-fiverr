import addImage from "../../assets/icons/add-image.png";
import camera from "../../assets/icons/camera-alt.png";
import video from "../../assets/icons/video.png";
import link from "../../assets/icons/link.png";
import Image from "next/image";

const TabShowCase = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row gap-14">
      <div className="flex-1">
        <div className="mb-8">
          <h3 className="flex items-center font-bold text-lg">
            <Image
              alt="Video Icon"
              className="w-6 inline-block me-2"
              src={video}
            />{" "}
            Video presentation
          </h3>
          <p className="text-sm text-[#8E8E93] mt-1 font-medium">
            Introduce yourself to students in the language you'll be teaching
            and make sure your video meets the requirements to get approved.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 rounded-lg py-3 px-2.5 bg-[#F2F2F7] mt-2">
            <Image alt="Link Icon" className="w-5" src={link} />
            <div className="h-4 w-[.1rem] bg-[#1C1C1E]/70"></div>
            <input
              placeholder="Enter your video link"
              className="bg-[#F2F2F7] text-[#48484A] outline-none w-full placeholder-[#48484A] text-sm font-medium px-1.5"
              type="text"
            />
          </div>
        </div>

        <ul className="list-disc ps-5 text-[#48484A] font-medium space-y-1">
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
            Uploaded on YouTube and set to 'Public' visibility. Then provide the
            link in the right area.
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <div className="mb-8">
          <h3 className="flex items-center font-bold text-lg">
            <Image
              alt="Camera Icon"
              className="w-6 inline-block me-2"
              src={camera}
            />{" "}
            Profile picture
          </h3>
          <p className="text-sm text-[#8E8E93] mt-1 font-medium">
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
       
        <ul className="list-disc ps-5 text-[#48484A] font-medium space-y-1">
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
