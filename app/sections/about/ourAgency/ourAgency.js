"use client";
import PrimaryButton from "@/app/components/buttons/primaryButton/primaryButton";
import Heading from "@/app/components/header/heading/heading";
import { Fade, Zoom, Slide } from 'react-awesome-reveal';
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const OurAgency = () => {
  return (
    <div className="relative py-10 lg:py-20 px-4">
      <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-1 md:p-5 space-y-10 lg:space-y-0">
        <div className="relative flex-1">
          <Fade>
            <Image
              className="absolute animate-slow-zoom inset-0 z-[-1] max-w-full"
              src="/patterns/blubvector.png"
              alt="Background vector"
              width={500}
              height={250}
            />
          </Fade>
          <Zoom>
            <Image
              className="absolute animate-slow-spin top-0 left-0 z-[-1] max-w-full"
              src="/patterns/dotvector.png"
              alt="Dot vector"
              width={75}
              height={75}
            />
          </Zoom>
          <div className="relative grid grid-cols-2 gap-5 p-4 md:p-7">
            <Fade direction="left" delay={200}>
              <Image
                className="rounded-md mt-7"
                src="/about/about1.png"
                alt="About 1"
                width={500}
                height={250}
              />
            </Fade>
            <Fade direction="down" delay={400}>
              <Image
                className="rounded-md -mt-4"
                src="/about/about2.png"
                alt="About 2"
                width={200}
                height={200}
              />
            </Fade>
            <Fade direction="left" delay={600}>
              <Image
                className="rounded-md ml-auto mr-0"
                src="/about/about3.png"
                alt="About 3"
                width={125}
                height={125}
              />
            </Fade>
            <Fade direction="up" delay={800}>
              <Image
                className="rounded-md -mt-28"
                src="/about/about4.png"
                alt="About 4"
                width={250}
                height={250}
              />
            </Fade>
          </div>
        </div>
        <div className="flex-1">
          <Fade delay={200}>
            <Heading title={"Our Agency"} />
          </Fade>
          <div className="px-1 lg:px-4 space-y-8">
            <Fade delay={400}>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-teko font-semibold">
                Your Trusted <span className="text-primary">partners</span> <br />{" "}
                For Business
              </h1>
            </Fade>
            <Fade delay={600}>
              <p className="max-w-xl opacity-75">
                No matter how much you know about a particular medical healthcare
                professional, you always need to be thinking about what’s?
              </p>
            </Fade>
            <Fade delay={800}>
              <div className="flex gap-5 max-w-lg">
                <Image
                  className="h-12 w-12"
                  src="/icons/achievement.png"
                  alt="Achievement icon"
                  width={50}
                  height={50}
                />
                <h1 className="text-xl">
                  <span className="font-bold">10+ Years Experience</span> In this
                  game, Means Product Designing
                </h1>
              </div>
            </Fade>
            <Fade delay={1000}>
              <p className="max-w-xl opacity-75">
                I love to work in User Experience & User Interface designing.
                Because I love to solve the design problem and find easy and
                better solutions to solve it. I always try my best to make good
                user interface with the best user experience. I have been working
                as a UX Designer.
              </p>
            </Fade>
            <Fade delay={1200}>
              <PrimaryButton
                text="Explore More"
                className="bg-primary before:bg-secondary rounded"
              >
                <BsArrowRight />
              </PrimaryButton>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAgency;
