"use client";
import { DiMagento } from "react-icons/di";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import StaticNavbar from "@/app/components/navigation/static/staticNavbar";
import PrimaryButton from "@/app/components/buttons/primaryButton/primaryButton";
import Socialbox from "./socialbox/socialbox";
import { Fade, Slide } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(3, 4, 27, 0.65), rgba(3, 4, 27, 0.65)), url('/bg/banner.jpg')`,
      }}
    >
      <StaticNavbar />

      <Slide direction="left" duration={600}>
        <div className="hidden lg:flex absolute w-64 h-64 rotate-45 bg-primary rounded-3xl items-center justify-center -left-36 inset-y-1/4">
          <div className="h-56 w-56 m-3 border-2 border-dotted border-white rounded-3xl" />
        </div>
      </Slide>

      {/* Main Content */}
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto h-[calc(100vh-175px)] font-teko">
        {/* Text and Buttons */}
        <div className="space-y-3 overflow-hidden">
          <Fade direction="up" duration={600}>
            <div className="text-2xl text-primary font-semibold flex items-center gap-x-2">
              <DiMagento />
              <h1>Your Trusted Agency</h1>
            </div>
          </Fade>
          <Slide direction="left" duration={600} delay={200}>
            <h1 className="text-white text-7xl lg:text-8xl font-semibold">
              Digital Marketing <br /> Agency
            </h1>
          </Slide>
          <Fade direction="up" duration={600} delay={400}>
            <div className="flex items-center gap-x-5">
              <button className="text-lg lg:text-2xl px-3 py-3 lg:py-4 lg:px-5 rounded-sm bg-white/25 backdrop-blur-md text-white font-semibold flex items-center gap-x-2 transition-all duration-300 hover:bg-white hover:text-primary">
                Discover More <HiArrowRight size={25} />
              </button>
              <PrimaryButton
                text="Learn More"
                className="before:bg-white bg-primary rounded-sm"
              >
                <HiArrowRight size={25} />
              </PrimaryButton>
            </div>
          </Fade>
        </div>

        {/* Social Box */}
        <Fade direction="up" duration={600} delay={600}>
          <div>
            <Socialbox />
          </div>
        </Fade>
      </div>

      {/* Decorative Patterns */}
      <Fade className="hidden md:flex" direction="up">
        <div className="absolute bottom-0 left-0">
          <Image
            src="/patterns/vector-6.png"
            alt="Decorative pattern"
            width={350}
            height={200}
          />
        </div>
      </Fade>
      <Fade className="hidden md:flex" direction="up">
        <div className="absolute bottom-0 left-0">
          <Image
            src="/patterns/vector-7.png"
            alt="Decorative pattern"
            width={400}
            height={250}
          />
        </div>
      </Fade>
    </div>
  );
};

export default Banner;
