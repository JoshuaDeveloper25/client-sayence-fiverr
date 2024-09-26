"use client";
import warning from "@/app/assets/icons/warning.png";
import { useState } from "react";
import Image from "next/image";

export const Input = ({
  inputProp,
  imgPath,
  alt,
  errorName,
  errorDesc,
  twoColumns = false,
  iconStyles = false,
  handlePasswordChange,
  setInputValue, // Esta función se pasa desde el padre
  disableInternalValidation,
  wrongCredentialsMessage,
  maxTextLength = 0,
}) => {
  const [inputComponentValue, setInputComponentValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;

    setInputComponentValue(value);

    // Verifica que setInputValue es una función antes de llamarla
    if (
      !maxTextLength &&
      setInputValue &&
      typeof setInputValue === "function"
    ) {
      setInputValue(value);
    }

    if (maxTextLength && value.length <= maxTextLength) {
      setInputValue(value);
    }

    // Marca el input como tocado
    setIsTouched(true);

    if (!disableInternalValidation) {
      setIsInvalid(!e.target.validity.valid);
    }

    if (inputProp.type === "password" && handlePasswordChange) {
      handlePasswordChange(e);
    }

    if (inputProp.onChange) inputProp.onChange(e);
  };
  return (
    <>
      <label
        className={`group flex rounded-md overflow-hidden mb-3 ${
          isInvalid
            ? "bg-[#FFCCCF] border border-[#F01]"
            : isTouched && isInvalid === false && inputComponentValue !== ""
            ? "border border-[#00AD30] bg-[#F2F2F7]"
            : "bg-[#F2F2F7] has-[input:focus]:border-[#1A47FF] border  "
        }`}
      >
        {imgPath && (
          <div className="transition-colors flex items-center gap-3 px-1.5 group-hover:bg-[#F1F0ED]">
            <Image
              alt={alt}
              className={iconStyles ? iconStyles : "w-6 h-6"}
              src={imgPath}
            />
            <div
              className={`flex-1 ${
                twoColumns ? "h-3.5 w-3.5" : "h-4 w-1.5"
              } bg-[#1C1C1E]/70`}
            ></div>
          </div>
        )}

        <input
          className={`bg-transparent group-hover:bg-[#F1F0ED] outline-none w-full placeholder-[#1C1C1E] ST-3 px-1.5 py-3.5`}
          onChange={handleInputChange}
          {...inputProp}
        />
      </label>

      {!wrongCredentialsMessage ? (
        isTouched &&
        isInvalid && (
          <div className="transition-all duration-300 transform opacity-100 translate-y-0 mb-3 max-h-screen">
            <div className="flex items-center gap-3 my-2.5 rounded-md p-2 bg-[#FFED8F]">
              <Image className="w-10" src={warning} alt="Warning Icon" />
              <div>
                <h3 className="text-[#1C1C1E] ST-SB-3">{errorName}</h3>
                <p className="text-[#48484A] ST-3">{errorDesc}</p>
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="transition-all duration-300 transform opacity-100 translate-y-0 mb-3 max-h-screen">
          <div className="flex items-center gap-3 my-2.5 rounded-md p-2 bg-[#FFED8F]">
            <Image className="w-10" src={warning} alt="Warning Icon" />
            <div>
              <h3 className="text-[#1C1C1E] ST-SB-3">{errorName}</h3>
              <p className="text-[#48484A] ST-3">{errorDesc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const Select = ({
  selectProp = {},
  imgPath,
  alt,
  errorName,
  errorDesc,
  twoColumns = false,
  iconStyles = false,
  defaultOption = "",
  options = [],
}) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleSelectChange = (e) => {
    // Mark the input as touched
    setIsTouched(true);

    // Validate the input
    setIsInvalid(!e.target.validity.valid);
    if (selectProp.onChange) selectProp.onChange(e);
  };

  return (
    <>
      <label
        className={`group flex rounded-md overflow-hidden ${
          isInvalid
            ? "bg-[#FFCCCF] border border-[#F01] "
            : "bg-[#F2F2F7] mb-3 has-[select:focus]:border-[#1A47FF] has-[select:valid]:border-[#00AD30] border "
        }`}
      >
        {imgPath && (
          <div className="transition-colors flex items-center gap-3 px-1.5 group-hover:bg-[#F1F0ED]">
            <Image
              alt={alt}
              className={iconStyles ? iconStyles : "w-6"}
              src={imgPath}
            />
            <div
              className={`flex-1 ${
                twoColumns ? "h-3.5 w-3.5" : "h-4 w-1.5"
              } bg-[#1C1C1E]/70`}
            ></div>
          </div>
        )}

        <select
          className="text-[#48484A] bg-[#F2F2F7] outline-none w-full placeholder-[#1C1C1E] ST-3 px-1.5 py-3 transition-colors group-hover:bg-[#F1F0ED]"
          onChange={handleSelectChange}
          {...selectProp}
        >
          <option value={""}>{defaultOption}</option>
          {options?.map((option) => (
            <option key={option?.value}>{option?.text}</option>
          ))}
        </select>
      </label>

      {/* Show error if input is touched and is invalid */}
      {isTouched && (
        <div
          className={`transition-all duration-300 transform ${
            isInvalid
              ? "opacity-100 translate-y-0 mb-3"
              : "opacity-0 -translate-y-2"
          } ${isInvalid ? "max-h-screen" : "max-h-0 overflow-hidden"}`}
        >
          <div className="flex items-center gap-3 my-2.5 rounded-md p-2 bg-[#FFED8F]">
            <Image className="w-10" src={warning} alt="Warning Icon" />
            <div>
              <h3 className="text-[#1C1C1E] ST-SB-3">{errorName}</h3>
              <p className="text-[#48484A] ST-3">{errorDesc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const Textarea = ({
  textAreaProp = {},
  errorName,
  errorDesc,
  setTextareaText,
  maxTextLength,
}) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleTextareaChange = (e) => {
    const value = e.target.value;

    if (value.length <= maxTextLength) {
      setTextareaText(value);
    }

    // Mark the input as touched
    setIsTouched(true);

    // Validate the input
    setIsInvalid(!e.target.validity.valid);
    if (textAreaProp.onChange) textAreaProp.onChange(e);
  };

  return (
    <>
      <label
        className={`flex h-32 rounded-md overflow-hidden mt-2 ${
          isInvalid
            ? "bg-[#FFCCCF] border border-[#F01]"
            : "bg-[#F2F2F7] mb-3 has-[textarea:focus]:border-[#1A47FF] has-[textarea:valid]:border-[#00AD30] border"
        }`}
      >
        <textarea
          className="transition-colors hover:bg-[#F1F0ED] bg-[#F2F2F7] text-[#48484A] outline-none h-full w-full placeholder-[#48484A] ST-3 py-2.5 px-2.5 resize-none"
          onChange={handleTextareaChange}
          {...textAreaProp}
        ></textarea>
      </label>

      {/* Show error if input is touched and is invalid */}
      {isTouched && (
        <div
          className={`transition-all duration-300 transform ${
            isInvalid
              ? "opacity-100 translate-y-0 mb-3"
              : "opacity-0 -translate-y-2"
          } ${isInvalid ? "max-h-screen" : "max-h-0 overflow-hidden"}`}
        >
          <div className="flex items-center gap-3 my-2.5 rounded-md p-2 bg-[#FFED8F]">
            <Image className="w-10" src={warning} alt="Warning Icon" />
            <div>
              <h3 className="text-[#1C1C1E] ST-SB-3">{errorName}</h3>
              <p className="text-[#48484A] ST-3">{errorDesc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
