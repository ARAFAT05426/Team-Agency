"use client";
import Heading from "@/app/components/header/heading/heading";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Fade, Zoom } from "react-awesome-reveal";
import Image from "next/image";

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
    <div className="relative w-full py-20 overflow-hidden">
      <Image
        className="absolute bottom-0 left-0 w-full lg:w-auto object-cover"
        src="/patterns/pattern-14.png"
        alt="Background Pattern"
        fill
      />
      <div className="relative z-10 w-full lg:w-container mx-auto text-center space-y-8">
        <div className="flex items-center justify-center">
          <Fade duration={500}>
            <Heading title="Core Features" />
          </Fade>
        </div>
        <Fade duration={500} delay={100}>
          <h1 className="font-teko text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
            Digital SEO Marketing <br />
            <span className="text-primary">Solution</span> Process
          </h1>
        </Fade>
        <div className="flex flex-wrap items-center justify-center lg:justify-between pt-10 space-y-8 md:space-y-0">
          {cores.map((core, i) => (
            <Zoom key={i} duration={500} delay={200 * i}>
              <div className="group relative flex flex-col items-center gap-6 w-full">
                <div className="relative flex items-center justify-center h-40 w-40 mx-auto">
                  <Image
                    className="absolute animate-slow-spin"
                    src="/patterns/rotatevector.png"
                    alt="Rotating Pattern"
                    fill
                  />
                  <Image
                    className="relative z-10"
                    src={core.icon}
                    alt={core.title}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="max-w-xs space-y-4 text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-teko font-medium group-hover:text-primary transition duration-300">
                    {core.title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-700">
                    {core.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 group-hover:text-primary font-teko font-medium transition duration-300 cursor-pointer text-lg">
                  Read More <IoIosArrowRoundForward />
                </div>
              </div>
              {i < cores.length - 1 && (
                <div className="hidden lg:block">
                  <Image
                    className="mx-auto"
                    src="/icons/feature-arrow.png"
                    alt="Feature Arrow"
                    width={150}
                    height={20}
                  />
                </div>
              )}
            </Zoom>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
