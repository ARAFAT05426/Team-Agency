"use client"
import { FaQuestion } from "react-icons/fa";
import Image from "next/image";
import BookForm from "./bookForm/bookForm";
import { Fade } from "react-awesome-reveal";

const BookNow = () => {
  return (
    <div id="booknow" className="w-full lg:w-container mx-auto flex flex-col-reverse lg:flex-row justify-between gap-16 lg:gap-5 py-20 px-5 lg:px-0">
      <BookForm />
      <Fade direction="right">
        <div className="relative w-fit mx-auto">
          <div className="absolute -top-10 right-5 animate-bounce w-36 h-36 rounded-full bg-primary flex items-center justify-center p-3">
            <FaQuestion className="text-5xl text-white h-full w-full p-7 border border-dotted rounded-full" />
          </div>
          <div className="absolute bottom-10 hidden lg:flex w-[25rem] lg:h-[25rem] bg-primary rounded-3xl z-[-1] rotate-[-25deg]" />
          <Image
            width={350}
            height={500}
            src="/services/form-image.png"
            alt="Service Form"
            className="max-w-full"
          />
          <Image  
            className="absolute bottom-1/4 rounded-md -left-16 max-w-xs"
            src="/services/author-2.png"
            alt="Author 2"
            height={50}
            width={75}
          />
          <Image
            className="absolute -bottom-10 rounded-md -right-10 max-w-xs"
            src="/services/author-3.png"
            alt="Author 3"
            height={50}
            width={75}
          />
        </div>
      </Fade>
    </div>
  );
};

export default BookNow;
