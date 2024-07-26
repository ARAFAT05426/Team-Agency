"use client";
import PrimaryButton from "@/app/components/buttons/primaryButton/primaryButton";
import TypeText from "@/app/components/form/typeText/typeText";
import { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineShoppingCart,
  AiOutlinePhone,
  AiOutlineEdit,
} from "react-icons/ai";
import { FaUsers } from "react-icons/fa";

const ContactForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="w-full lg:w-container mx-auto p-6 lg:p-16 border rounded mb-10">
      <div className="space-y-3">
        <h1 className="font-teko font-semibold text-5xl">Drop Us a Line</h1>
        <p className="opacity-75">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <div className="py-5 grid grid-cols-1 md:grid-cols-2 gap-7">
        <TypeText
          placeholder="Enter your"
          name="Name"
          icon={AiOutlineUser}
          isRequired
        />
        <TypeText
          placeholder="Enter your"
          name="Mail"
          icon={AiOutlineMail}
          isRequired
        />
        <TypeText
          placeholder=""
          name="Service"
          icon={AiOutlineShoppingCart}
          isRequired
        />
        <TypeText
          placeholder="Enter your"
          name="Number"
          icon={AiOutlinePhone}
        />
        <div className="w-full md:col-span-2">
          <div
            className={`w-full border py-3 px-5 flex items-start ${
              isFocused ? "border-primary" : "border-secondary/50"
            } transition-all duration-300 rounded-sm`}
          >
            <textarea
              className={`outline-none ${
                isFocused
                  ? "placeholder-primary text-primary"
                  : "placeholder-secondary text-secondary"
              } w-full`}
              placeholder="Enter your message *"
              rows={10}
              required
              name="message"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <AiOutlineEdit className="h-6 text-black" />
          </div>
        </div>
        <PrimaryButton
          text="Submit Now"
          className="bg-primary before:bg-secondary rounded-sm col-span-1 md:col-span-2"
        />
      </div>
    </div>
  );
};
export default ContactForm;
