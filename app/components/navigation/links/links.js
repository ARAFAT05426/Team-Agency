"use client";
import { motion, AnimatePresence } from "framer-motion";
import routelinks from "@/app/routes/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./link.css";

const Links = ({ act, setAct }) => {
  const path = usePathname();

  const largeDeviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const smallDeviceVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (i) => ({
      opacity: 1,
      delay: 0.2,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.4,
        type: "spring",
        stiffness: 150,
      },
    }),
  };

  return (
    <>
      {/* Large Device Links */}
      <div className="relative hidden lg:flex items-center gap-5 font-semibold font-teko text-lg">
        {routelinks?.map((routelink, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={largeDeviceVariants}
          >
            <Link
              href={routelink?.path}
              className={`routelink ${
                path === routelink?.path ? "active" : ""
              }`}
            >
              <div className="mask">
                <div className="link-container">
                  <span className="title link-title1">{routelink?.title}</span>
                  <span className="title link-title2">{routelink?.title}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Small Device Links */}
      <AnimatePresence>
        {act && (
          <motion.div
            className="linksbox bg-white/95 flex lg:hidden gap-5 font-semibold font-teko text-xl"
            initial={{ opacity: 0, width: 0, transform: "translateX(100%) rotateY(-90deg)" }}
            animate={{ opacity: 1, width: '75vw', transform: "translateX(0%) rotateY(0deg)" }}
            exit={{ opacity: 0, width: 0, transform: "translateX(100%) rotateY(135deg)" }}
            transition={{ 
              opacity: { duration: 0.7 },
              width: { duration: 0.1, ease: "easeInOut" },
              transform: { duration: 0.7, ease: "easeInOut" }
            }}
          >
            {routelinks?.map((routelink, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={smallDeviceVariants}
              >
                <Link
                  onClick={() => setAct(false)}
                  href={routelink?.path}
                  className={`routelink ${
                    path === routelink?.path ? "active" : ""
                  } text-center w-fit`}
                >
                  <div className="mask">
                    <div className="link-container">
                      <span className="title link-title1">
                        {routelink?.title}
                      </span>
                      <span className="title link-title2">
                        {routelink?.title}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Links;
