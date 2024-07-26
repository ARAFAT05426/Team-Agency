"use client";
import { DiMagento } from "react-icons/di";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import StaticNavbar from "@/app/components/navigation/static/staticNavbar";
import PrimaryButton from "@/app/components/buttons/primaryButton/primaryButton";
import Socialbox from "./socialbox/socialbox";
import { motion } from "framer-motion";

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(3, 4, 27, 0.65), rgba(3, 4, 27, 0.65)), url('/bg/banner.jpg')`,
      }}
    >
      <StaticNavbar />

      {/* Decorative Element */}
      <motion.div
        className="hidden lg:flex absolute w-64 h-64 bg-primary rounded-3xl items-center justify-center -left-36 inset-y-1/4"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: 45,
          transition: { duration: 0.6, ease: "easeOut" },
        }}
      >
        <div className="h-56 w-56 m-3 border-2 border-dotted border-white rounded-3xl" />
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-[calc(100vh-175px)]">
        <motion.div
          className="w-full lg:w-3/5 mx-auto px-3 lg:px-0 flex items-center justify-between text-primary font-teko space-y-4"
          initial="hidden"
          animate="visible"
          variants={revealVariants}
        >
          {/* Text and Buttons */}
          <div className="space-y-3">
            <motion.div
              className="text-2xl font-semibold flex items-center gap-x-2"
              initial="hidden"
              animate="visible"
              variants={revealVariants}
              transition={{ delay: 0.2 }}
            >
              <DiMagento />
              <h1>Your Trusted Agency</h1>
            </motion.div>
            <motion.h1
              className="text-white text-7xl lg:text-8xl font-semibold"
              initial="hidden"
              animate="visible"
              variants={revealVariants}
              transition={{ delay: 0.4 }}
            >
              Digital Marketing <br /> Agency
            </motion.h1>
            <div className="flex items-center gap-x-5">
              <motion.button
                className="text-lg lg:text-2xl px-3 py-4 lg:px-5 rounded-sm bg-white/25 backdrop-blur-md text-white font-semibold flex items-center gap-x-2 transition-all duration-300 hover:bg-white hover:text-primary"
                initial="hidden"
                animate="visible"
                variants={revealVariants}
                transition={{ delay: 0.6 }}
              >
                Discover More <HiArrowRight size={25} />
              </motion.button>
              <PrimaryButton
                text="Learn More"
                className="before:bg-white bg-primary rounded-sm"
              >
                <HiArrowRight size={25} />
              </PrimaryButton>
            </div>
          </div>

          {/* Social Box */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            transition={{ delay: 0.8 }}
          >
            <Socialbox />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Patterns */}
      <motion.div
        className="absolute bottom-0 left-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/patterns/vector-6.png"
          alt="Decorative pattern"
          width={400}
          height={200}
        />
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/patterns/vector-7.png"
          alt="Decorative pattern"
          width={500}
          height={250}
        />
      </motion.div>
    </div>
  );
};

export default Banner;
