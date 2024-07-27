"use client";
import { motion } from "framer-motion";

const LinearProgress = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 h-[6px] rounded-sm overflow-hidden">
      <motion.div
        className="bg-primary h-full rounded-sm"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
      />
    </div>
  );
};

export default LinearProgress;
