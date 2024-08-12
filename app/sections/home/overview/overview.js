"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import "./overview.css";

const Overview = () => {
  const overviews = [
    {
      icon: "/icons/whitesearch.png",
      title: "Media Marketing.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quis molestias magnam eos at? Recusandae.",
    },
    {
      icon: "/icons/whitenotebook.png",
      title: "Email Marketing.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quis molestias magnam eos at? Recusandae.",
    },
    {
      icon: "/icons/whitehumanbrain.png",
      title: "Media Marketing.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quis molestias magnam eos at? Recusandae.",
    },
    {
      icon: "/icons/whitereport.png",
      title: "Media Marketing.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quis molestias magnam eos at? Recusandae.",
    },
  ];

  return (
    <div className="relative bg-secondary py-5 min-h-full lg:min-h-72 flex items-center">
      <Image
        className="absolute left-0 bottom-0"
        src={"/patterns/pattern-10.png"}
        alt=""
        width={750}
        height={500}
      />
      <div className="max-w-7xl mx-auto grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {overviews?.map((overview, i) => (
          <Fade 
            key={i}
            direction="up"
            duration={600}
            delay={i * 200}
          >
            <div
              className={`group p-5 text-white/75 hover:text-white transition-all duration-300 space-y-3 ${
                i < 3 ? "border-r-0 lg:border-r" : ""
              } border-r-slate-600 z-[1]`}
            >
              <div className="flex items-center justify-between font-teko">
                <Image
                  className="svgicon p-3 mb-1 bg-white/25 rounded-2xl group-hover:bg-primary group-hover:scale-110 transition-transform duration-300 h-12 w-12"
                  src={overview?.icon}
                  alt=""
                  width={30}
                  height={30}
                />
                <span className="text-4xl">0{i + 1}</span>
              </div>
              <h1 className="font-teko text-2xl font-semibold group-hover:text-primary transition-all duration-300">
                {overview?.title}
              </h1>
              <p className="pr-3 font-thin text-sm">{overview?.description}</p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Overview;
