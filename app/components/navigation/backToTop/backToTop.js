"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.screenY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`fixed bottom-5 right-5 lg:bottom-10 lg:right-10 z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-all duration-300`}
    >
      <FaArrowUp
        onClick={scrollToTop}
        className="text-4xl bg-white text-primary hover:bg-primary hover:text-white p-3 rounded-sm shadow-md focus:outline-none transition-all duration-300 cursor-pointer"
      />
    </div>
  );
};
export default BackToTop;
