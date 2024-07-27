"use client"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Heading from "@/app/components/header/heading/heading";
import { Fade, Zoom } from 'react-awesome-reveal';
import Image from "next/image";
import Link from "next/link";
import "./ourTeam.css";

const OurTeam = () => {
  const teammembers = [
    {
      name: "John Doe",
      position: "Digital Marketer",
      image: "/about/team1.png",
      socials: [
        { icon: FaFacebookF, to: "#" },
        { icon: FaTwitter, to: "#" },
        { icon: FaLinkedinIn, to: "#" },
        { icon: FaInstagram, to: "#" },
      ],
    },
    {
      name: "Jane Smith",
      position: "SEO Specialist",
      image: "/about/team2.png",
      socials: [
        { icon: FaFacebookF, to: "#" },
        { icon: FaTwitter, to: "#" },
        { icon: FaLinkedinIn, to: "#" },
        { icon: FaInstagram, to: "#" },
      ],
    },
    {
      name: "Sam Wilson",
      position: "Designer",
      image: "/about/team3.png",
      socials: [
        { icon: FaFacebookF, to: "#" },
        { icon: FaTwitter, to: "#" },
        { icon: FaLinkedinIn, to: "#" },
        { icon: FaInstagram, to: "#" },
      ],
    },
  ];
  
  return (
    <div className="py-20">
      <div className="flex flex-col items-center justify-center">
        <Heading title={"Our Team"} />
        <Fade delay={200}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-teko font-semibold text-center mb-10">
            Our <span className="text-primary">Expert</span> Members
          </h1>
        </Fade>
        <div className="grid gap-5 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5">
          {teammembers?.map((member, index) => (
            <Fade direction="up" key={index} delay={index * 200} triggerOnce>
              <div
                className="teamcard relative overflow-hidden rounded-md bg-controllers p-1 shadow-lg space-y-5 min-w-80 lg:min-w-96 group"
              >
                <div className="teamimg">
                  <Image
                    src={member?.image}
                    alt={member?.name}
                    className="w-full rounded object-cover transition-transform duration-700 ease-in-out"
                    width={500}
                    height={500}
                  />
                  <div className="teamimgoverlay"></div>
                </div>
                <div className="flex flex-col items-center teamcontent bg-white py-3 transition-all duration-500 ease-in-out">
                  <h1 className="text-2xl font-teko font-medium">
                    {member?.name}
                  </h1>
                  <span className="font-medium text-primary opacity-90 text-lg">
                    {member?.position}
                  </span>
                  <div className="socials opacity-0 group-hover:opacity-100 flex justify-center items-center gap-3 transition-all duration-500 ease-in-out overflow-hidden mt-7">
                    {member?.socials?.map((social, i) => (
                      <Link key={i} href={social.to}>
                        <social.icon className="bg-[rgba(255,74,23,0.10)] text-primary rounded-full p-3 text-4xl transition-all duration-500 ease-in-out hover:bg-primary hover:text-white" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
