"use client";
import Heading from "@/app/components/header/heading/heading";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Fade, Zoom } from "react-awesome-reveal";

const CoreFeatures = () => {
  const cores = [
    {
      icon: "/icons/feature-1.png",
      title: "Business Planning",
      description:
        "Trusted results Business Consulting Unlimited Access. Always Facts. Privacy The Best Resources. Answers.",
    },
    {
      icon: "/icons/feature-2.png",
      title: "Market Analysis",
      description:
        "Comprehensive insights to guide your strategy. Focused on data-driven results and actionable recommendations.",
    },
    {
      icon: "/icons/feature-3.png",
      title: "SEO Optimization",
      description:
        "Effective SEO strategies for better visibility. Tailored solutions to improve your search engine rankings.",
    },
  ];

  return (
    <div className="relative w-full py-10 overflow-hidden">
      <Image
        className="absolute bottom-0 rotate-0 lg:inset-x-0 w-fit"
        src={"/patterns/pattern-14.png"}
        alt=""
        fill
      />
      <div className="w-full lg:w-container mx-auto text-center space-y-5">
        <div className="flex items-center justify-center">
          <Fade duration={500}>
            <Heading title={"Core Features"} />
          </Fade>
        </div>
        <Fade duration={500} delay={100}>
          <h1 className="font-teko text-3xl sm:text-5xl md:text-7xl font-semibold">
            Digital Seo Marketing <br />
            <span className="text-primary">Solution</span> Process
          </h1>
        </Fade>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-5 space-y-5 md:space-y-0">
          {cores?.map((core, i) => (
            <Zoom key={i} duration={500} delay={200 * i}>
              <div className="group relative flex flex-col items-center gap-3 w-full md:w-auto">
                <div className="relative flex items-center justify-center h-40 w-40 mx-auto">
                  <Image
                    className="absolute animate-slow-spin"
                    src={"/patterns/rotatevector.png"}
                    alt=""
                    fill
                  />
                  <Image
                    className="absolute"
                    src={core?.icon}
                    alt=""
                    width={150}
                    height={150}
                  />
                </div>
                <div className="max-w-xs space-y-3 text-center">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-teko font-medium group-hover:text-primary transition-all duration-300">
                    {core?.title}
                  </h1>
                  <p className="opacity-75 text-sm sm:text-base md:text-lg">
                    {core?.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 group-hover:text-primary font-teko font-medium transition-all duration-300 cursor-pointer text-lg sm:text-xl">
                  Read More <IoIosArrowRoundForward />
                </div>
              </div>
              {i < cores?.length - 1 && (
                <Image
                  key={i + 1}
                  className="hidden md:block"
                  src="/icons/feature-arrow.png"
                  alt=""
                  width={200}
                  height={20}
                />
              )}
            </Zoom>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
