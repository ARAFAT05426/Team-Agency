"use client";
import PrimaryButton from "@/app/components/buttons/primaryButton/primaryButton";
import { BsArrowRight } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegClock,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import routelinks from "@/app/routes/routes";
import Partners from "../partners/partners";
import { usePathname } from "next/navigation";
import { Fade, Slide } from "react-awesome-reveal";

const Footer = () => {
  const pathname = usePathname();
  const isNotUserLayout =
    pathname.startsWith("/dashboard") || pathname.startsWith("/auth");

  if (isNotUserLayout) {
    return null;
  }

  const socials = [
    { icon: FaFacebookF, link: "#" },
    { icon: FaTwitter, link: "#" },
    { icon: FaLinkedinIn, link: "#" },
    { icon: FaInstagram, link: "#" },
  ];

  const services = [
    { title: "Consumer Product", link: "" },
    { title: "Speed Optimization", link: "" },
    { title: "Media Marketing", link: "" },
    { title: "Email Marketing", link: "" },
    { title: "Marketing Analysis", link: "" },
    { title: "Software Marketing", link: "" },
  ];

  return (
    <>
      <Partners />
      <footer className="relative bg-[#09111A] flex flex-col text-white overflow-hidden">
        <div className="relative flex-1">
          <Fade duration={1000}>
            <div className="absolute top-5 left-0 z-[-1]">
              <Image
                src="/patterns/vector-24.png"
                alt=""
                width={250}
                height={500}
              />
            </div>
          </Fade>
          <Fade duration={1000} delay={500}>
            <div className="absolute bottom-0 left-0 z-[-1]">
              <Image
                src="/patterns/vector-25.png"
                alt=""
                width={250}
                height={500}
              />
            </div>
          </Fade>
          <div className="w-full lg:w-container mx-auto flex flex-col py-20 px-4 sm:px-6 lg:px-8 space-y-10 z-10">
            <Slide direction="up" duration={1000}>
              <div className="flex flex-col md:flex-row justify-between items-center lg:items-start gap-10">
                <Fade duration={1000} delay={200}>
                  <div className="flex flex-col gap-3 text-center lg:text-left">
                    <h1 className="font-teko text-4xl lg:text-6xl font-semibold">
                      Still You Need Our{" "}
                      <span className="text-primary">Support</span> ?
                    </h1>
                    <p className="opacity-75 font-semibold">
                      Don’t wait make a smart & logical quote here. It`s pretty
                      easy.
                    </p>
                  </div>
                </Fade>
                <Fade duration={1000} delay={400}>
                  <PrimaryButton
                    text="Get Quote Now"
                    className="bg-primary before:bg-white rounded-full w-52 sm:w-72 h-fit py-2"
                  >
                    <BsArrowRight />
                  </PrimaryButton>
                </Fade>
              </div>
            </Slide>
            <hr className="border-secondary" />
              <div className="flex flex-col md:flex-row justify-between items-start gap-10 pt-10">
                <Fade direction="up" duration={1000} delay={300}>
                  <div className="max-w-xs space-y-5">
                    <Image
                      className="max-w-40"
                      src="/common/logo-3.svg"
                      alt="logo"
                      width={250}
                      height={100}
                    />
                    <p className="opacity-75">
                      Corporate clients and leisure travelers have been relying on
                      Groundlink for dependable, safe, and professional chauffeured
                      car service in major cities across the world.
                    </p>
                    <div className="h-32 flex flex-row gap-3 items-center lg:items-start">
                      <FaRegClock className="bg-primary h-3/5 w-20 p-4 rounded-lg" />
                      <div className="space-y-1">
                        <h1 className="font-teko text-lg">OPENING HOURS</h1>
                        <p className="opacity-75 text-wrap">
                          Mon - Sat (8.00 - 6.00) Sunday - Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </Fade>
                <Fade direction="up" duration={1000} delay={500}>
                  <div className="flex flex-col gap-3">
                    <h1 className="text-2xl lg:text-4xl font-teko font-semibold">
                      Services
                    </h1>
                    {services?.map((service, i) => (
                      <Link
                        key={i}
                        href={service.link}
                        className="opacity-75 hover:underline hover:text-primary transition-all duration-300"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </Fade>
                <Fade direction="up" duration={1000} delay={700}>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl lg:text-4xl font-teko font-semibold">
                      Links
                    </h1>
                    {routelinks?.map((route, i) => (
                      <Link
                        key={i}
                        href={route.path}
                        className="opacity-75 hover:underline hover:text-primary transition-all duration-300"
                      >
                        {route.title}
                      </Link>
                    ))}
                  </div>
                </Fade>
                <Fade direction="up" duration={1000} delay={900}>
                  <div className="space-y-3 z-10">
                    <h1 className="text-2xl lg:text-4xl font-teko font-semibold">
                      About Us
                    </h1>
                    <p className="w-full max-w-xs opacity-75">
                      Corporate clients and leisure travelers have been relying on
                      Groundlink for dependable, safe, and professional chauffeured
                      car end service in major cities across the world.
                    </p>
                    <div className="bg-slate-400/25 backdrop-blur-3xl p-2 rounded flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Enter your email?"
                        className="px-3 outline-none bg-transparent w-full text-white font-teko font-medium text-sm "
                      />
                      <PrimaryButton
                        text="Subscribe"
                        className="text-nowrap bg-primary before:bg-white w-full"
                        size={"text-sm"}
                      />
                    </div>
                  </div>
                </Fade>
              </div>
          </div>
        </div>
          <div className="h-[6.5rem] bg-[#070d14] flex items-center justify-center">
            <div className="w-container flex flex-col lg:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <p>Copyright © 2022 Theme. All Rights Reserved.</p>
              <div className="flex items-center gap-5 text-4xl">
                {socials?.map((social, i) => (
                  <Fade key={i} duration={1000} delay={i * 200}>
                    <social.icon
                      className="bg-gray-600 p-3 rounded-sm hover:bg-primary transition-all duration-300 cursor-pointer"
                    />
                  </Fade>
                ))}
              </div>
            </div>
          </div>
      </footer>
    </>
  );
};

export default Footer;
