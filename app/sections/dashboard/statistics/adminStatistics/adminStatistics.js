import StatCard from "@/app/components/cards/statCard/statCard";
import { FaUsers } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { TiInputChecked } from "react-icons/ti";

const AdminStatistics = () => {
  const adminStats = [
    {
      icon: FaUsers,
      title: "Visitors",
      value: "413/day",
      className: "from-blue-400 via-blue-500 to-blue-600",
      upPercentage: 5,
      downPercentage: null,
    },
    {
      icon: RiCalendarScheduleLine,
      title: "Active Projects",
      value: "2",
      className: "from-yellow-400 via-yellow-500 to-yellow-600",
      upPercentage: null,
      downPercentage: 3,
    },
    {
      icon: TiInputChecked,
      title: "Completed Projects",
      value: "117",
      className: "from-green-400 via-green-500 to-green-600",
      upPercentage: 10,
      downPercentage: null,
    },
    {
      icon: GiMoneyStack,
      title: "Total Earning",
      value: "2230 $",
      className: "from-red-400 via-red-500 to-red-600",
      upPercentage: null,
      downPercentage: 2,
    },
  ];
  return (
    <div className="flex flex-wrap gap-5 items-center">
      {adminStats?.map((stat, i) => (
        <StatCard
          key={i}
          Icon={stat?.icon}
          title={stat?.title}
          value={stat?.value}
          gradiant={stat?.className}
          inc={stat?.upPercentage}
          dec={stat?.downPercentage}
        />
      ))}
    </div>
  );
};
export default AdminStatistics;
