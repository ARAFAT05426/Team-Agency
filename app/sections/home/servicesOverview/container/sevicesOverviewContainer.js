"use client";
import Heading from "@/app/components/header/heading/heading";
import { useState } from "react";
import { RiArrowLeftWideFill } from "react-icons/ri";
import ReportingAnalysis from "../Tabs/reporting&Analysis/reportingAnalysis";
import KeywordResult from "../Tabs/keywordResult/keywordResult";
import GoogleAnalytics from "../Tabs/googleAnalytics/googleAnalytics";
import MarketingStrategy from "../Tabs/marketingStrategy/marketingStrategy";
import MapsSeo from "../Tabs/mapsSeo/mapsSeo";
import { Fade, Slide } from "react-awesome-reveal";

const SevicesOverviewContainer = () => {
  const [act, setAct] = useState(0);
  const tabs = [
    "Reporting & Analysis",
    "Keyword Result",
    "Google Analytics",
    "Marketing Strategy",
    "Maps Seo",
  ];

  return (
    <div className="w-full lg:w-container mx-auto py-16 flex flex-col lg:flex-row items-start justify-between px-3 md:px-14 lg:px-20">
      <div
        className="bg-controller w-full max-w-full lg:max-w-sm px-5 pt-10 pb-20 flex flex-col gap-5 mt-10 rounded-lg h-[35rem]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 95%)" }}
      >
        {tabs.map((tab, i) => (
          <Fade direction="left" key={i} duration={500} delay={i * 200}>
            <div
              onClick={() => setAct(i)}
              className={`group flex items-center rounded-md px-5 py-3 font-teko text-2xl ${
                act === i ? "bg-white" : "bg-transparent"
              } hover:bg-white transition-all duration-500 cursor-pointer min-w-80`}
            >
              <RiArrowLeftWideFill
                className={`transform opacity-0 ${
                  act === i
                    ? "text-primary translate-x-0 opacity-100"
                    : "translate-x-5"
                } group-hover:text-primary group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500`}
              />
              {tab}
            </div>
          </Fade>
        ))}
      </div>
      <div className="w-fit pl-0 md:pl-5 lg:pl-10 py-0 lg:py-10 ml-auto mr-0 overflow-hidden">
        <Heading title={"Services Overview"} />
        <div className="pl-0 lg:pl-5">
          {act === 0 && (
            <Slide direction="left" duration={500}>
              <ReportingAnalysis />
            </Slide>
          )}
          {act === 1 && (
            <Slide direction="left" duration={500}>
              <KeywordResult />
            </Slide>
          )}
          {act === 2 && (
            <Slide direction="left" duration={500}>
              <GoogleAnalytics />
            </Slide>
          )}
          {act === 3 && (
            <Slide direction="left" duration={500}>
              <MarketingStrategy />
            </Slide>
          )}
          {act === 4 && (
            <Slide direction="left" duration={500}>
              <MapsSeo />
            </Slide>
          )}
        </div>
      </div>
    </div>
  );
};

export default SevicesOverviewContainer;
