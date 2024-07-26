"use client";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";
import { BiRightArrowAlt } from "react-icons/bi";
import Heading from "@/app/components/header/heading/heading";
import PrimaryButton from "@/app/components/buttons/primaryButton/primaryButton";
import AgencyCards from "./agencycards/agencyCards";
import { motion } from "framer-motion";

const Agency = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <motion.div
      className="relative bg-[#F7F6FE]/35 border-b border-b-[#F7F6FE] shadow-sm"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
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
        <motion.div
          className="w-full lg:w-1/2 space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={textVariants}>
            <Heading title={"About Our Agency"} />
            <motion.h1 variants={textVariants} className="font-teko text-4xl md:text-7xl font-semibold">
              The Best <span className="text-primary">Marketing</span> <br />
              Agency In BDes
            </motion.h1>
          </motion.div>
          <motion.p variants={textVariants} className="max-w-lg">
            No matter how much you know about a particular medical healthcare
            professional, you always need to be thinking about what’s?
          </motion.p>
          <motion.div variants={textVariants} className="space-y-5">
            <motion.div variants={textVariants} className="flex items-center gap-2">
              <GiCheckMark className="h-8 w-8 bg-[#F7F6FE] shadow-md rounded-full p-2 text-primary" />
              particular Ipsum generators on the tend to repeat.
            </motion.div>
            <motion.div variants={textVariants} className="flex items-center gap-2">
              <GiCheckMark className="h-8 w-8 bg-[#F7F6FE] shadow-md rounded-full p-2 text-primary" />
              If you are going to use a passage.
            </motion.div>
            <motion.div variants={textVariants} className="flex items-center gap-2">
              <GiCheckMark className="h-8 w-8 bg-[#F7F6FE] shadow-md rounded-full p-2 text-primary" />
              Marketing generators on the tend to repeat.
            </motion.div>
          </motion.div>
          <motion.div variants={textVariants}>
            <PrimaryButton
              text="Learn More"
              className="bg-primary before:bg-[#0D1418] w-full max-w-xs"
            >
              <BiRightArrowAlt size={35} />
            </PrimaryButton>
          </motion.div>
        </motion.div>
        <AgencyCards className="w-full lg:w-1/2 mt-10 md:mt-0" />
      </div>
    </motion.div>
  );
};

export default Agency;
