import Image from "next/image";

export const Input = ({ inputProp, imgPath }) => {
  return (
    <label className="flex rounded-md overflow-hidden has-[input:invalid]:bg-red-500 bg-[#F2F2F7]">
      {imgPath && (
        <div className="flex items-center gap-3 px-1.5">
          <Image alt="Lock Image" className="w-6 h-6" src={imgPath} />{" "}
          <div className="flex-1 h-4 w-1.5 bg-[#1C1C1E]/70"></div>
        </div>
      )}

      <input
        {...inputProp}
        placeholder="Enter your password"
        className="bg-transparent outline-none w-full placeholder-[#1C1C1E] ST-3 px-1.5 py-4"
        required
      />
    </label>
  );
};
