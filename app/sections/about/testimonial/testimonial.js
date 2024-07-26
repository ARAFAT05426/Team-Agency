import Heading from "@/app/components/header/heading/heading";
import { IoTriangleOutline } from "react-icons/io5";
import TestimonialSlide from "./testimonialSlide/testimonialSlide";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="relative py-10 lg:py-20">
      <div className="relative w-full lg:w-container mx-auto flex flex-col lg:flex-row items-center gap-5 justify-between">
        <IoTriangleOutline className="absolute top-0 left-0 text-primary animate-slow-spin text-3xl" />
        <div className="relative">
          <Image
            className="mx-auto w-4/5 lg:w-full"
            src="/about/author_img.png"
            alt=""
            width={500}
            height={500}
          />
          <Image
            className="w-24 lg:w-fit absolute top-0 lg:top-5 left-5 p-2 bg-controller shadow-lg rounded-full"
            src="/about/author-6.png"
            alt=""
            width={75}
            height={75}
          />
          <Image
            className="absolute top-5 right-5 w-fit"
            src="/about/tm_quote.png"
            alt=""
            width={50}
            height={50}
          />
          <Image
            className="absolute bottom-0 left-0 lg:bottom-1/4  lg:left-10 bg-controller p-1 rounded-full shadow-md"
            src="/about/author-9.png"
            alt=""
            width={65}
            height={65}
          />
          <Image
            className="absolute bottom-0 right-0 lg:bottom-1/4  lg:right-1/4 bg-controller p-1 rounded-full shadow-md"
            src="/about/author-7.png"
            alt=""
            width={50}
            height={50}
          />
        </div>
        <div className="space-y-2 p-2 lg:p-1">
          <Heading title={"Client Testimonial"} />
          <h1 className="font-teko text-4xl sm:text-5xl md:text-7xl font-semibold pl-5">
            Client <span className="text-primary">Testimonial</span>{" "}
            <br className="hidden lg:flex" /> About Aginco
          </h1>
          <TestimonialSlide />
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
