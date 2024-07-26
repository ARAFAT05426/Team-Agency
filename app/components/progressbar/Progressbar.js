import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Progressbar = ({ title, progress }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.round(value));

  useEffect(() => {
    animate(count, progress, {
      duration: 1.7,
      ease: "easeOut",
    });
  }, [count, progress]);

  return (
    <div className="w-full rounded-sm space-y-3">
      <div className="flex items-center justify-between font-teko text-xl font-medium">
        <h1>{title}</h1>
        <div>
          <motion.span>{rounded}</motion.span>%
        </div>
      </div>
      <div className="bg-slate-200 h-2 rounded-sm overflow-hidden">
        <motion.div
          className="bg-primary h-full rounded-sm"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};
export default Progressbar;
