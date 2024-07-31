"use client"
import Heading from "@/app/components/header/heading/heading";
import StretagyContainer from "./container/stretagyContainer";
import { Fade, Slide } from "react-awesome-reveal";

const Stretagy = () => {
  const overviews = [
    {
      title: "HIGHEST SUCCES RATES",
      description:
        "Tempus nec urna et, tincidunt aliquet ligula. is dummy text used in",
    },
    {
      title: "EFFECTIVE TEAM WORK",
      description:
        "Morbi vitae massa eget quam sagittis bibendum. Donec enim nisi,",
    },
    {
      title: "WE GROW BUSINESS",
      description: "Pellentesque et erat at iaculis. Sed interdum posuere diam",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 lg:py-24">
      <div className="w-full lg:w-container mx-auto flex flex-col md:flex-row items-start gap-10 md:gap-20 px-5 pt-14">
        <Fade direction="left" cascade>
          <div className="flex flex-col bg-white px-6 py-8 divide-y-[0.5px] h-fit rounded shadow w-full lg:w-auto">
            {overviews?.map((overview, i) => (
              <div key={i} className="group flex items-start gap-4 p-5">
                <div className="w-12 h-12 bg-controller group-hover:bg-primary group-hover:text-white p-3 rounded-full flex items-center justify-center font-bold text-primary transition-all duration-300">
                  0{i + 1}
                </div>
                <div className="max-w-64 space-y-2">
                  <h1 className="font-teko font-medium text-2xl">
                    {overview?.title}
                  </h1>
                  <p className="font-medium opacity-75">
                    {overview?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Fade>
        <div className="space-y-5 w-full lg:w-auto">
          <div className="space-y-3">
            <Heading title={"Our Stretagy"} />
            <Slide direction="up">
              <h1 className="font-teko text-3xl lg:text-6xl font-semibold max-w-xl">
                How <span className="text-primary">Analytics</span> Helping To
                Face Challenges
              </h1>
            </Slide>
          </div>
          <Fade direction="up">
            <StretagyContainer />
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default Stretagy;
