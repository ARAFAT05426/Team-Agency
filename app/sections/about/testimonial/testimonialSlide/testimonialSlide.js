"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Image from "next/image";
const TestimonialSlide = () => {
  const testimonials = [
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, repellat! Dignissimos ipsum quibusdam tenetur, quidem est aut voluptas perferendis culpa laborum ratione minima quia! Accusamus saepe quis, excepturi a ipsa vel alias at laborum maxime.",
      clientName: "John Doe",
      clientPosition: "CEO, Example Corp",
      clientImage:
        "/about/author-6.png",
    },
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, repellat! Dignissimos ipsum quibusdam tenetur, quidem est aut voluptas perferendis culpa laborum ratione minima quia! Accusamus saepe quis, excepturi a ipsa vel alias at laborum maxime.",
      clientName: "Jane Smith",
      clientPosition: "CTO, Sample Inc",
      clientImage:
        "/public/about/author-9.png",
    },
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, repellat! Dignissimos ipsum quibusdam tenetur, quidem est aut voluptas perferendis culpa laborum ratione minima quia! Accusamus saepe quis, excepturi a ipsa vel alias at laborum maxime.",
      clientName: "Mark Johnson",
      clientPosition: "Manager, Company XYZ",
      clientImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="relative w-full max-w-sm md:max-w-2xl pl-0 lg:pl-5">
      <Swiper
        className="relative"
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000 }}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 flex flex-col gap-5 w-full max-w-full lg:max-w-2xl">
              <p className="text-lg md:text-xl italic mb-2">
                <FaQuoteLeft className="text-3xl md:text-4xl text-primary inline mr-3" />{" "}
                {testimonial?.message} ...
                <FaQuoteRight className="text-3xl md:text-4xl text-primary inline ml-3" />
              </p>
              <div className="flex gap-3">
                <Image
                  className="h-16 w-16 lg:h-20 lg:w-20 p-2 bg-controller object-cover rounded-full"
                  src={testimonial?.clientImage}
                  alt=""
                  width={100}
                  height={100}
                />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-teko font-medium">
                    {testimonial?.clientName}
                  </h3>
                  <p className="text-md sm:text-lg font-medium text-primary">
                    {testimonial?.clientPosition}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute w-24 text-4xl font-black flex items-center justify-between right-3 lg:right-5 bottom-0">
          <MdOutlineKeyboardArrowLeft className="prev w-11 sm:w-12 rounded-sm text-gray-400 cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 z-10" />
          <MdOutlineKeyboardArrowRight className="next w-11 sm:w-12 text-controller cursor-pointer bg-primary rounded-sm z-10" />
        </div>
      </Swiper>
    </div>
  );
};
export default TestimonialSlide;
