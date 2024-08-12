"use client";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Heading from "@/app/components/header/heading/heading";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";
import Link from "next/link";

const OurServices = () => {
  const services = [
    {
      icon: "/icons/search.png",
      subicon: "/icons/whitesearch.png",
      title: "Media Marketing.",
      description:
        "Precious ipsum, or lipsum as it is sometimes known, is dummy text used in laying outing ...",
    },
    {
      icon: "/icons/notebook.png",
      subicon: "/icons/whitenotebook.png",
      title: "Email Marketing.",
      description:
        "Ut id scelerisque sapien. Ut , turpis vel pharetra tempor, velit magna, in dignissim velit libero ...",
    },
    {
      icon: "/icons/human-brain.png",
      subicon: "/icons/whitehumanbrain.png",
      title: "Social Media Strategy.",
      description:
        "Quisque facilisis sit amet nunc quis tempus. Integer facilisis odio sit amet sollicitudin vestibulum. Sed ultrices ...",
    },
    {
      icon: "/icons/report.png",
      subicon: "/icons/whitereport.png",
      title: "Social Media Strategy.",
      description:
        "Quisque facilisis sit amet nunc quis tempus. Integer facilisis odio sit amet sollicitudin vestibulum. Sed ultrices ...",
    },
    {
      icon: "/icons/dashboard.png",
      subicon: "/icons/whitedashboard.png",
      title: "Customer strategy.",
      description:
        "Duis vel tristique turpis, hendrerit ac tincidunt quam. Vivamus auctor hendrerit ipsum, et commodo elit facilisis ...",
    },
    {
      icon: "/icons/padlock.png",
      subicon: "/icons/whitepadlock.png",
      title: "Security Management.",
      description:
        "Aliquam scelerisque bibendum enim, at rutrum urna gravida non. Proin libero quam, pretium nec magna gravida ...",
    },
  ];

  return (
    <div className="relative py-12">
      <div className="flex flex-col items-center mb-8">
        <Heading title={"Our Services"} />
        <Slide direction="up">
          <h1 className="font-teko font-semibold text-7xl text-center">
            Our <span className="text-primary">Special</span> Services
          </h1>
        </Slide>
      </div>
      <div className="relative w-full lg:w-container mx-auto px-4 lg:px-16">
        <Swiper
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          loop={true}
          modules={[Navigation]}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          className="relative"
        >
          {services?.map((service, index) => (
            <SwiperSlide key={index}>
              <Fade direction="down" delay={index * 150}>
                <div className="group flex flex-col gap-6 max-w-sm h-[30rem] bg-gray-100 px-10 py-12 rounded">
                  <div className="flex flex-col flex-1">
                    <div className="relative h-20 w-20 p-3 bg-[rgba(255,74,23,0.10)] group-hover:bg-primary rounded mb-5 transition-all duration-500">
                      <Image
                        className="scale-100 opacity-100 rotate-0 group-hover:-rotate-90 group-hover:scale-0 group-hover:opacity-0 transition-all duration-500 ease-in-out"
                        src={service?.icon}
                        alt=""
                        height={50}
                        width={50}
                      />
                      {/* Hover state */}
                      <Image
                        className="absolute inset-2 scale-0 opacity-0 rotate-90 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                        src={service?.subicon}
                        alt=""
                        height={50}
                        width={50}
                      />
                    </div>
                    <h2 className="text-3xl font-teko font-semibold mb-2">
                      {service?.title}
                    </h2>
                    <p className="text-gray-600">{service?.description}</p>
                  </div>
                  <Link href={"#booknow"}>
                  <BsArrowRight className="h-12 w-12 p-3 mt-auto mb-0 text-5xl bg-slate-200 text-black/50 shadow-sm transition-all duration-500 group-hover:bg-primary group-hover:text-white rounded-sm" />
                  </Link>
                </div>
              </Fade>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hidden lg:flex items-center justify-between absolute inset-x-0 top-1/2 transform -translate-y-1/2 w-full px-4 lg:px-0">
          <MdOutlineKeyboardArrowLeft className="prev bg-[rgba(255,74,23,0.10)] cursor-pointerhover:bg-primary hover:text-white text-4xl lg:text-5xl cursor-pointer text-primary p-2 rounded-sm transition-all duration-300 z-20" />
          <MdOutlineKeyboardArrowRight className="next bg-[rgba(255,74,23,0.10)] cursor-pointerhover:bg-primary hover:text-white text-4xl lg:text-5xl cursor-pointer text-primary p-2 rounded-sm transition-all duration-300 z-20" />
        </div>
      </div>
    </div>
  );
};
export default OurServices;
