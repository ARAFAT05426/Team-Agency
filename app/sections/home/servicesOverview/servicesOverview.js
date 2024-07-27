"use client";
import SevicesOverviewContainer from "./container/sevicesOverviewContainer";
import { Fade, Zoom } from "react-awesome-reveal";

const ServicesOverview = () => {
  return (
    <div className="relative overflow-hidden">
      <Zoom duration={800} delay={0} triggerOnce>
        <div
          className="absolute -left-0 lg:-left-[10%] -top-1/4 w-[45rem] h-[45rem] bg-primary rounded-[6rem] -z-[1]"
          style={{ transform: 'rotate(45deg)' }} // Rotate the background
        />
      </Zoom>
      <Fade duration={800} delay={300}>
        <SevicesOverviewContainer />
      </Fade>
    </div>
  );
};

export default ServicesOverview;
