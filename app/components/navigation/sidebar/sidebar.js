"use client";
import { FaSignOutAlt, FaUserCircle, FaBell } from "react-icons/fa";
import { sideBarLinks } from "./sideBarLinks/sideBarLinks";
import ToggleBar from "./toggleBar/toggleBar";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";

const Sidebar = () => {
  const path = usePathname();
  const [act, setAct] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div>
      <nav className="fixed inset-x-0 top-0 h-16 bg-slate-50/25 backdrop-blur-2xl flex items-center justify-between z-50 px-5 md:px-10 border-b border-b-primary/15">
        <div className="block lg:hidden">
          <ToggleBar isActive={act} onClick={() => setAct(!act)} />
        </div>
        <Link href="/">
          <h1 className="text-2xl text-primary font-montserrat font-bold">
            LoGo
          </h1>
        </Link>
        <FaBell className="text-2xl cursor-pointer hover:text-teal-500 transition-colors duration-300" />
      </nav>
      <aside
        className={`fixed inset-y-0 left-0 overflow-hidden flex flex-col justify-between bg-slate-50 ${
          act ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } lg:translate-x-0 lg:opacity-100 h-screen w-60 transition-all duration-500 border border-r-primary/15 z-40`}
      >
        <div className="flex flex-col items-center mt-20">
          <div className="w-full flex flex-col gap-2 font-montserrat font-medium">
            {sideBarLinks.map((sideBarLink, i) => (
              <Link
                key={i}
                href={sideBarLink.path}
                onClick={() => setAct(false)}
                className={`font-montserrat font-semibold flex items-center gap-3 px-10 py-3 transition-all duration-300 border-r-2 ${
                  path === sideBarLink.path
                    ? "border-r-primary text-primary"
                    : "border-r-transparent hover:border-r-primary hover:tracking-[0.15em] hover:text-primary/75"
                }`}
              >
                <sideBarLink.icon className="text-xl" />
                {sideBarLink.title}
              </Link>
            ))}
          </div>
        </div>
        <FaSignOutAlt
          onClick={handleSignOut}
          className="text-3xl mx-auto mb-8 cursor-pointer hover:text-teal-500 transition-colors duration-300"
        />
      </aside>
    </div>
  );
};

export default Sidebar;
