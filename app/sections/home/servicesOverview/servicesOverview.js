"use client";
import SevicesOverviewContainer from "./container/sevicesOverviewContainer";
import { Fade, Zoom } from "react-awesome-reveal";

const ServicesOverview = () => {
  return (
    <div className="relative overflow-hidden px-4 lg:px-8 bg-gray-50">
      <Fade direction="left"  duration={1000} delay={200} triggerOnce className="relative">
        <div
          className="absolute top-0 -left-1/2 md:-left-[17.5%] lg:-left-20 translate-y-0 md:-translate-y-[20%] lg:-translate-y-1/4 w-96 h-96 md:w-[25rem] lg:w-[35rem] md:h-[30rem] lg:h-[40rem] rotate-45 bg-primary rounded-[2.5rem] lg:rounded-[5rem] -z-10"
        />
      </Fade>
      <Fade duration={1000} delay={500}>
        <div className="relative z-10 p-3 lg:p-5">
          <SevicesOverviewContainer />
        </div>
      </Fade>
    </div>
  );
};

export default ServicesOverview;
