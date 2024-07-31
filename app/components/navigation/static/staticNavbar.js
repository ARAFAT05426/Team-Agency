"use client";

import { motion } from "framer-motion";
import { IoDocumentText, IoSearch } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavToggle from "../../buttons/navToggle/navToggle";
import Links from "../links/links";
import logo from "@/public/common/staticlogo.svg";

const revealAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const StaticNavbar = () => {
  const [act, setAct] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={revealAnimation}
      className="w-full lg:w-container mx-auto p-0 lg:p-3 font-teko space-y-0 lg:space-y-2 z-50"
    >
      {/* Top contents */}
      <div className="hidden lg:flex items-center justify-between text-xl">
        <div className="flex items-center gap-x-2">
          <IoDocumentText className="text-primary text-xl mb-1" />
          <p>
            Bespoke Solutions Tailored to Your Business.{" "}
            <Link
              href="/contact"
              className="text-primary hover:text-blue-800 transition-colors duration-300"
            >
              Free Consultant
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <MdLocationPin className="text-primary text-2xl mb-1" />
          <span>684 West College St. Sun City, USA</span>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white p-0 lg:p-2 rounded-none lg:rounded-sm flex items-center justify-between">
        <div className="bg-primary p-3 rounded-none lg:rounded">
          <Image
            className="object-cover rounded h-10 lg:h-[4.7rem] w-full p-2"
            src={logo}
            alt="logo"
          />
        </div>
        <Links act={act} setAct={setAct} />
        <div className="text-black hidden lg:flex items-center gap-x-3 mr-8 cursor-pointer">
          <Link href="/dashboard">
            <FaUser
              size={45}
              className="p-3 hover:bg-primary transition-all duration-500 border-black/50 hover:text-white rounded-sm border cursor-pointer"
            />
          </Link>
          <IoSearch
            size={45}
            className="p-3 hover:bg-primary transition-all duration-500 border-black/50 hover:text-white rounded-sm border cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-2">
          <Link className="flex md:hidden" href="/dashboard">
            <FaUser
              size={45}
              className="p-3 hover:text-primary transition-all duration-500 rounded-sm cursor-pointer"
            />
          </Link>
          <NavToggle isOpen={act} onClick={() => setAct(!act)} />
        </div>
      </div>
    </motion.div>
  );
};

export default StaticNavbar;
