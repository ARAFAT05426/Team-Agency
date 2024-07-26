"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegUserCircle, FaSignOutAlt } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { TbWorldSearch } from "react-icons/tb";
import { LiaBlogSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";
import { RxHome } from "react-icons/rx";
import { useState } from "react";
const Sidebar = () => {
  const path = usePathname();
  const [act, setAct] = useState(false);
  const dashboardLinks = [
    {
      icon: RxHome,
      path: "/dashboard",
      title: "Admin Panel",
    },
    {
      icon: TbWorldSearch,
      path: "/dashboard/seo",
      title: "Seo",
    },
    {
      icon: LiaBlogSolid,
      path: "/dashboard/addblogs",
      title: "Blogs",
    },
    {
      icon: FaRegUserCircle,
      path: "/dashboard/userprofile",
      title: "Profile",
    },
  ];
  return (
    <nav>
      <HiOutlineBars3
      key={5}
        onClick={() => setAct(!act)}
        className={`fixed flex lg:hidden text-3xl left-2 top-2 ${
          act ? "rotate-[360deg]" : "rotate-0"
        } bg-primary text-white p-2 rounded-full cursor-pointer z-50 transition-all duration-300`}
      />
      <aside
        className={`${
          act ? "opacity-100 translate-x-0" : "-translate-x-full opacity-0"
        } w-52 md:translate-x-0 md:opacity-100 h-screen bg-slate-100 fixed inset-y-0 left-0 flex flex-col items-center shadow py-8 lg:py-5 z-40 transition-all duration-300 overflow-hidden`}
      >
        <Link href={"/"}>
          <Image
            src={"/common/navlogo.svg"}
            alt="logo"
            width={125}
            height={125}
            className="text-5xl text-primary"
          />
        </Link>
        <div className="flex flex-col items-start gap-2 mt-14 flex-1">
          {dashboardLinks?.map((dashboardLink, i) => (
            <Link
              key={i}
              href={dashboardLink?.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-sm font-semibold font-teko ${
                path === dashboardLink?.path ? "bg-opct text-primary" : ""
              } hover:bg-opct hover:text-primary transition-all duration-300 w-full`}
            >
              <dashboardLink.icon className="text-xl mb-1" />
              {dashboardLink?.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 font-teko font-bold cursor-pointer">
          <FaSignOutAlt className="text-xl" />
          Log Out
        </div>
      </aside>
    </nav>
  );
};
export default Sidebar;
