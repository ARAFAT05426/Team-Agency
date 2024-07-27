"use client"
import { DiMagento } from "react-icons/di";
import { motion } from "framer-motion";

const Heading = ({ title }) => {
  return (
    <div
      className="bg-no-repeat bg-center bg-contain min-h-12 max-w-fit p-3"
      style={{ backgroundImage: `url('/patterns/heading-bg.png')` }}
    >
      <motion.h1
        className="flex items-center px-5 py-3 text-2xl font-teko font-semibold text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <DiMagento className="mr-2" /> {title}
      </motion.h1>
    </div>
  );
};

export default Heading;
