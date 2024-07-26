"use client"
import PrimaryButton from "@/app/components/buttons/primaryButton/primaryButton";
import TypeText from "@/app/components/form/typeText/typeText";
import { FaQuestion } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi2";
import {
  AiOutlineEdit,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
const BookNow = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="w-full lg:w-container mx-auto flex flex-col-reverse lg:flex-row justify-between gap-16 lg:gap-5 py-20 px-5 lg:px-0">
      <div className="py-5 grid grid-cols-1 lg:grid-cols-2 gap-7 w-full lg:w-1/2">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:col-span-2 w-full">
          <TypeText
            placeholder="Enter your"
            bg={"bg-controller"}
            name="Name"
            icon={AiOutlineUser}
            isRequired
          />
          <TypeText
            placeholder="Enter your"
            bg={"bg-controller"}
            name="Mail"
            icon={AiOutlineMail}
            isRequired
          />
          <TypeText
            placeholder=""
            bg={"bg-controller"}
            name="Service"
            icon={AiOutlineShoppingCart}
            isRequired
          />
          <TypeText
            placeholder="Enter your"
            bg={"bg-controller"}
            name="Number"
            icon={AiOutlinePhone}
          />
        </div>
        <div className="w-full lg:col-span-2">
          <div
            className={`w-full border py-3 px-5 flex items-start ${
              isFocused ? "border-primary" : "border-gray-300"
            } transition-all duration-300 rounded-sm bg-controller`}
          >
            <textarea
              className="bg-controller outline-none placeholder-black w-full"
              placeholder="Enter your message *"
              rows={5}
              required
              name="message"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <AiOutlineEdit
              className={`h-6 transition-all duration-300 ${
                isFocused && "text-primary"
              } text-black`}
            />
          </div>
        </div>
        <PrimaryButton
          text="Send Message"
          className="bg-secondary before:bg-primary hover:text-white rounded mt-7 lg:mt-0"
        >
          <HiOutlineArrowRight className="mb-1" />
        </PrimaryButton>
      </div>
      <div className="relative w-fit mx-auto">
        <div className="absolute -top-10 right-5 animate-bounce w-36 h-36 rounded-full bg-primary flex items-center justify-center p-3">
          <FaQuestion className="text-5xl text-white h-full w-full p-7 border border-dotted rounded-full" />
        </div>
        <div className="absolute bottom-10 hidden lg:flex w-[25rem]  lg:h-[25rem] bg-primary rounded-3xl z-[-1] rotate-[-25deg]" />
        <Image width={100} height={75} src="/services/form-image.png" alt="" className="max-w-full" />
        <Image
          className="absolute bottom-1/4 rounded-md -left-16 max-w-xs"
          src="/services/author-2.png"
          alt=""
          height={50}
          width={75} 
        />
        <Image
          className="absolute -bottom-10 rounded-md -right-10 max-w-xs"
          src="/services/author-3.png"
          alt=""
          height={50}
          width={75}    
        />
      </div>
    </div>
  );
};
export default BookNow;
