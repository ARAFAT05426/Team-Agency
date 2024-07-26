"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
const Partners = () => {
  const partners = [
    "/common/dark-1.svg",
    "/common/dark-2.svg",
    "/common/dark-3.svg",
    "/common/dark-4.svg",
    "/common/dark-8.svg",
  ];
  return (
    <div className="w-full h-fit md:h-32 lg:h-40 bg-controller">
      <div className="w-full md:w-container mx-auto py-10">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          className="flex items-center"
        >
          {partners?.map((partner, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <div className="flex items-center justify-center gap-3">
                <Image
                  src={partner}
                  className="p-3 lg:p-5 max-h-16 lg:max-h-full"
                  alt={`Partner ${i + 1}`}
                  width={250}
                  height={100}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Partners;
