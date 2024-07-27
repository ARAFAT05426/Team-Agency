"use client";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";
import { BiRightArrowAlt } from "react-icons/bi";
import Heading from "@/app/components/header/heading/heading";
import PrimaryButton from "@/app/components/buttons/primaryButton/primaryButton";
import AgencyCards from "./agencycards/agencyCards";
import { Fade } from "react-awesome-reveal";

const Agency = () => {
  return (
    <div className="relative bg-[#F7F6FE]/35 border-b border-b-[#F7F6FE] shadow-sm">
      <Image
        src={"/patterns/pattern-11.png"}
        className="absolute top-0 left-0 z-[-1]"
        alt=""
        width={750}
        height={750}
      />
      <Image
        src={"/patterns/pattern-spring.png"}
        className="absolute top-0 right-0 z-[-1]"
        alt=""
        width={250}
        height={250}
      />
      <div className="w-full px-6 mx-auto lg:max-w-screen-2xl flex flex-col lg:flex-row items-start justify-between gap-5 py-16 lg:py-24">
        <div className="w-full lg:w-1/2 space-y-10">
          <Fade direction="up" duration={600} cascade triggerOnce>
            <Heading title={"About Our Agency"} />
            <h1 className="font-teko text-4xl md:text-7xl font-semibold">
              The Best <span className="text-primary">Marketing</span> <br />
              Agency In BDes
            </h1>
            <p className="max-w-lg">
              No matter how much you know about a particular medical healthcare
              professional, you always need to be thinking about what’s?
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <GiCheckMark className="h-8 w-8 bg-[#F7F6FE] shadow-md rounded-full p-2 text-primary" />
                particular Ipsum generators on the tend to repeat.
              </div>
              <div className="flex items-center gap-2">
                <GiCheckMark className="h-8 w-8 bg-[#F7F6FE] shadow-md rounded-full p-2 text-primary" />
                If you are going to use a passage.
              </div>
              <div className="flex items-center gap-2">
                <GiCheckMark className="h-8 w-8 bg-[#F7F6FE] shadow-md rounded-full p-2 text-primary" />
                Marketing generators on the tend to repeat.
              </div>
            </div>
            <PrimaryButton
              text="Learn More"
              className="bg-primary before:bg-[#0D1418] w-full max-w-xs"
            >
              <BiRightArrowAlt size={35} />
            </PrimaryButton>
          </Fade>
        </div>
        <AgencyCards className="w-full lg:w-1/2 mt-10 md:mt-0" />
      </div>
    </div>
  );
};

export default Agency;
