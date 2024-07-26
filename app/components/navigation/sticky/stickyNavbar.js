"use client";
import useScrollY from "@/lib/hooks/ui/useScrollY";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Links from "../links/links";
import NavToggle from "../../buttons/navToggle/navToggle";

const StickyNavbar = () => {
  const [act, setAct] = useState(false);
  const scrollY = useScrollY();

  return (
    <nav
      className={`${
        scrollY > 100 ? "lg:h-20 opacity-100" : "h-0 opacity-0"
      } bg-white w-full fixed inset-x-0 top-0 z-50 overflow-y-hidden transition-all duration-500 shadow-lg`}
    >
      <div className="flex items-center justify-between w-full lg:w-container mx-auto px-1 py-3">
        <Link href={"/"} className="relative ml-3 lg:ml-0 h-14 w-28">
          <Image
            className="h-12 w-full"
            src={"/common/navlogo.svg"}
            alt=""
            fill
          />
        </Link>
        <Links act={act} setAct={setAct} />
        <NavToggle isOpen={act} onClick={() => setAct(!act)} />
      </div>
    </nav>
  );
};

export default StickyNavbar;
