import { BiSolidShoppingBags } from "react-icons/bi";
import { FaUsers, FaUserShield } from "react-icons/fa6";
import { TfiBarChartAlt } from "react-icons/tfi";

export const sideBarLinks = [
  {
    icon: TfiBarChartAlt,
    path: "/dashboard",
    title: "Statistics",
  },
  {
    icon: BiSolidShoppingBags,
    path: "/dashboard/projects",
    title: "Projects",
  },
  {
    icon: FaUsers,
    path: "/dashboard/users",
    title: "Users",
  },
  {
    icon: FaUserShield,
    path: "/dashboard/profile",
    title: "Profile",
  },
];
