"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { GiHorseHead } from "react-icons/gi";
const Gallery = () => {
  const images = [
    {
      image: "/gallery/gallery1.jpg",
      title: "Automatic Management",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, placeat.",
    },
    {
      image: "/gallery/gallery2.jpg",
      title: "Finance Management",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, placeat.",
    },
    {
      image: "/gallery/gallery3.jpg",
      title: "Security Management",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, placeat.",
    },
    {
      image: "/gallery/gallery4.jpg",
      title: "Security Management",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, placeat.",
    },
    {
      image: "/gallery/gallery5.jpg",
      title: "Automatic Management",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, placeat.",
    },
  ];

  const [act, setAct] = useState(0);

  const handleAct = (swiper) => {
    setAct(swiper?.realIndex);
  };
  return (
    <div className="relative w-full overflow-hidden h-full mt-5 px-3 lg:px-0">
      <div
        className="hidden lg:flex absolute h-[33rem] w-60 rounded bg-primary z-10 -rotate-45 -bottom-1/3 -left-[7%]"
        style={{
          boxShadow: "0px 0px 0px 25px rgba(255,74,23,0.3)",
        }}
      />
      <div
        className="hidden lg:flex absolute h-[33rem] w-60 rounded bg-primary z-10 -rotate-45 -top-1/3 -right-[7%]"
        style={{
          boxShadow: "0px 0px 0px 25px rgba(255,74,23,0.7)",
        }}
      />
      <Swiper
        loop={true}
        centeredSlides={true}
        onSlideChange={handleAct}
        modules={[Navigation]}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        <div className="absolute inset-y-1/2 inset-x-[26%] hidden lg:flex items-center justify-between max-w-4xl z-10">
          <Image
            className="h-8 prev cursor-pointer"
            src="/icons/arrow.png"
            alt="Previous"
            width={200}
            height={25}
          />
          <Image
            className="rotate-180 h-8 next cursor-pointer"
            src="/icons/arrow.png"
            alt="Next"
            width={200}
            height={25}
          />
        </div>
        {images.map((image, i) => (
          <SwiperSlide key={i} className="relative max-w-5xl h-96">
            <Image
              src={image?.image}
              alt={image?.title}
              className="rounded w-full object-cover cursor-grab"
              width={850}
              height={500}
            />
            {act === i ? (
              <div
                className="h-20 lg:h-36 bg-white w-[90%] lg:w-3/5 absolute bottom-4 inset-x-[5%] lg:inset-x-[20%] flex items-center justify-center"
                style={{
                  clipPath:
                    "polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0% 50%)",
                }}
              >
                <div className="group flex px-5 py-5 items-center">
                  <div className="flex flex-col">
                    <h1 className="font-teko text-xl lg:text-3xl font-semibold text-primary">
                      {image?.title}
                    </h1>
                    <p className="text-xs lg:text-base max-w-xs opacity-75">
                      {image?.description}
                    </p>
                  </div>
                  <div className="p-1 border border-dotted border-primary rounded-full ml-2">
                    <div className="border border-dotted p-3 bg-primary rounded-full">
                      <GiHorseHead className="text-2xl lg:text-4xl text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 bg-[#05061C] bg-opacity-50 rounded-lg swiper-slide-shadow" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Gallery;
