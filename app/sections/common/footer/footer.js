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
import { motion } from "framer-motion";

const Footer = () => {
  const pathname = usePathname();

  const socials = [
    {
      icon: FaFacebookF,
      link: "#",
    },
    {
      icon: FaTwitter,
      link: "#",
    },
    {
      icon: FaLinkedinIn,
      link: "#",
    },
    {
      icon: FaInstagram,
      link: "#",
    },
  ];

  const services = [
    {
      title: "Consumer Product",
      link: "",
    },
    {
      title: "Speed Optimization",
      link: "",
    },
    {
      title: "Media Marketing",
      link: "",
    },
    {
      title: "Email Marketing",
      link: "",
    },
    {
      title: "Marketing Analysis",
      link: "",
    },
    {
      title: "Software Marketing",
      link: "",
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <>
      <Partners />
      <motion.footer
        initial="hidden"
        animate="visible"
        className="relative bg-[#09111A] flex flex-col text-white overflow-hidden"
      >
        <div className="relative flex-1">
          <Image
            className="absolute top-5 left-0 z-[-1]"
            src="/patterns/vector-24.png"
            alt=""
            width={250}
            height={500}
          />

          <Image
            className="absolute bottom-0 left-0 z-[-1]"
            src="/patterns/vector-25.png"
            alt=""
            width={250}
            height={500}
          />
          <motion.div
            custom={0}
            variants={variants}
            className="w-full lg:w-container mx-auto flex flex-col py-20 px-4 sm:px-6 lg:px-8 space-y-10 z-10"
          >
            <motion.div
              custom={1}
              variants={variants}
              className="flex flex-col md:flex-row justify-between items-center lg:items-start gap-10"
            >
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
              <PrimaryButton
                text="Get Quote Now"
                className="bg-primary before:bg-white rounded-full w-52 sm:w-72 h-fit py-2"
              >
                <BsArrowRight />
              </PrimaryButton>
            </motion.div>
            <hr className="border-secondary" />
            <motion.div
              custom={2}
              variants={variants}
              className="flex flex-col md:flex-row justify-between items-start gap-10 pt-10"
            >
              <motion.div custom={3} variants={variants} className="max-w-xs space-y-5">
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
              </motion.div>
              <motion.div custom={4} variants={variants} className="flex flex-col gap-3">
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
              </motion.div>
              <motion.div custom={5} variants={variants} className="flex flex-col gap-2">
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
              </motion.div>
              <motion.div custom={6} variants={variants} className="space-y-3 z-10">
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
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          custom={7}
          variants={variants}
          className="h-[6.5rem] bg-[#131B23] flex items-center justify-center"
        >
          <div className="w-container flex flex-col lg:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p>Copyright © 2022 Theme. All Rights Reserved.</p>
            <div className="flex items-center gap-5 text-4xl">
              {socials?.map((social, i) => (
                <social.icon
                  key={i}
                  className="bg-gray-600 p-3 rounded-sm hover:bg-primary transition-all duration-300 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.footer>
    </>
  );
};
export default Footer;
