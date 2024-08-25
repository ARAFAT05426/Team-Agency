"use client";
import { motion } from "framer-motion";

const LinearProgress = ({ progress }) => {
  const getColor = (progress) => {
    if (progress === 100) return "#008000";
    if (progress >= 99) return "#FF4500";
    if (progress >= 75) return "#FFD700";
    if (progress >= 50) return "#FFA500";
    if (progress >= 25) return "#FF6347";
    return "#A0AEC0";
  };

  return (
    <div className="w-full bg-gray-200 h-[6px] rounded-sm overflow-hidden">
      <motion.div
        className="h-full rounded"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        style={{ backgroundColor: getColor(progress) }}
      />
    </div>
  );
};

export default LinearProgress;