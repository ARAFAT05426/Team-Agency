"use client";
import StatCard from "@/app/components/cards/statCard/statCard";
import { GiMoneyStack } from "react-icons/gi";
import { ImStatsBars } from "react-icons/im";
import { LuCalendarClock } from "react-icons/lu";
import { RiProgress5Line } from "react-icons/ri";
import { TbBriefcase } from "react-icons/tb";

const ProjectStatCards = ({ data }) => {
  const deadlineDate = data?.data?.dates?.deadlineDate;
  const deadline = new Date(deadlineDate);
  const timeLeft = Math.max(
    Math.ceil((deadline - new Date()) / (1000 * 60 * 60 * 24)),
    0
  );

  return (
    <div className="flex flex-wrap gap-3">
      <StatCard
        Icon={GiMoneyStack}
        title="Budget"
        description="Estimate Profit"
        gradiant="from-teal-400 via-blue-600 to-purple-700"
        value={`$${data?.data?.budget}`}
      />
      <StatCard
        Icon={RiProgress5Line}
        title="Progress"
        description="Progress Status"
        gradiant="from-green-300 via-green-500 to-green-700"
        value={`${data?.data?.progressPercentage}%`}
      />
      <StatCard
        Icon={LuCalendarClock}
        title="Deadline"
        description="Days Left"
        gradiant="from-orange-400 via-red-500 to-red-700"
        value={`${timeLeft || 0} days`}
      />
      <StatCard
        Icon={TbBriefcase}
        title="Priority"
        description="Priority Level"
        gradiant="from-blue-400 via-slate-700 to-blue-600"
        value={data?.data?.priority}
      />
    </div>
  );
};

export default ProjectStatCards;
