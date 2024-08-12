"use client";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import "./agencyCards.css";
import Link from "next/link";

const AgencyCards = () => {
  const shortContents = [
    {
      icon: "/icons/search.png",
      subicon: "/icons/whitesearch.png",
      title: "MEDIA MARKETING.",
      description: "Lorem Quisque facilisis nunc quis tempus. Integer",
      link: "",
    },
    {
      icon: "/icons/notebook.png",
      subicon: "/icons/whitenotebook.png",
      title: "EMAIL MARKETING.",
      description: "Lorem Quisque facilisis sit amet nunc quis tempus. Integer",
      link: "",
    },
    {
      icon: "/icons/human-brain.png",
      subicon: "/icons/whitehumanbrain.png",
      title: "SOCIAL MEDIA STRATEGY.",
      description: "Lorem Quisque facilisis hello . Integer",
      link: "",
    },
    {
      icon: "/icons/report.png",
      subicon: "/icons/whitereport.png",
      title: "REPORTING & ANALYSIS.",
      description: "Lorem Quisque facilisis sit amet nunc quis tempus. Integer",
      link: "",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-0 lg:p-5 gap-5">
      {shortContents?.map((content, i) => (
        <Fade
          key={i}
          direction="up"
          duration={500}
          delay={i * 200}
          cascade
        >
          <div
            className={`group transition-all duration-500 relative min-w-72 h-full px-10 pt-10 pb-20 bg-white shadow-md overflow-hidden rounded-md space-y-5 inner-box ${
              i === 1 || i === 3 ? "mt-0 md:mt-5 lg:mt-10" : ""
            } hover:text-white`}
          >
            <Image
              className="absolute top-14 right-14 rotate-45 h-8 w-8 animate-slow-spin"
              src="/icons/bleach.png"
              alt=""
              width={25}
              height={25}
            />
            <div className="relative w-fit p-1 z-10">
              <Image
                className={`absolute top-0 left-0 z-[1] opacity-100 group-hover:opacity-0 transition-opacity duration-500`}
                src="/patterns/blubBG.png"
                alt=""
                width={50}
                height={50}
              />
              <Image
                className={`z-[2] scale-100 opacity-100 rotate-0 group-hover:-rotate-90 group-hover:scale-0 group-hover:opacity-0 transition-all duration-500 ease-in-out`}
                src={content?.icon}
                alt=""
                width={60}
                height={60}
              />
              <Image
                className={`absolute top-0 left-0 scale-0 opacity-0 rotate-90 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-in-out`}
                src={content?.subicon}
                alt=""
                width={60}
                height={60}
              />
            </div>
            <h1 className="font-teko text-2xl font-medium z-10">
              {content?.title}
            </h1>
            <p className="max-w-64 z-10">
              {content?.description}....
            </p>
            <Link href={"/services"} className="flex items-center gap-2 font-teko text-primary text-xl z-10 group-hover:text-white transition-all duration-500 cursor-pointer">
              View Subject <GoArrowRight className="mb-1" />
            </Link>
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default AgencyCards;
