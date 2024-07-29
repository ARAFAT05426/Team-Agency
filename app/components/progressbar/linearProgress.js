"use client";
import { motion } from "framer-motion";

const LinearProgress = ({ progress }) => {
  const getColor = (progress) => {
    if (progress >= 100) return "#14cf93"; // Complete
    if (progress >= 99) return "#FF4A17"; // 99%
    if (progress >= 75) return "#ff6347"; // 75%
    if (progress >= 50) return "#ffa500"; // 50%
    if (progress >= 25) return "#ffd700"; // 25%
    return "#9CA3AF";
  };

  return (
    <div className="w-full bg-gray-200/75 h-[6px] rounded-sm overflow-hidden">
      <motion.div
        className="h-full rounded-sm"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        style={{ backgroundColor: getColor(progress) }}
      />
    </div>
  );
};

export default LinearProgress;
