"use client";
import StatCard from "@/app/components/cards/statCard/statCard";
import {
  FaTasks,
  FaRegClock,
  FaCheckCircle,
  FaTimesCircle,
  FaUsers,
} from "react-icons/fa";
import { AiOutlineLoading3Quarters, AiOutlineProject } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import axiosCommon from "@/lib/axios/axiosCommon";
import { useQuery } from "@tanstack/react-query";

const AdminStatistics = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      try {
        const { data } = await axiosCommon.get("/dashboard/api");
        return data;
      } catch (error) {
        throw new Error("Failed to fetch projects");
      }
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-96">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl text-primary" />
      </div>
    );
  if (error) return <div>Error fetching statistics: {error.message}</div>;

  const adminStats = [
    {
      icon: AiOutlineProject,
      title: "Total Projects",
      value: data.adminStats.projects.total.toString(),
      gradiant: "from-blue-400 via-blue-500 to-blue-600",
      description: "Total projects in the system.",
    },
    {
      icon: FaRegClock,
      title: "Active Projects",
      value: data.adminStats.projects.active.toString(),
      gradiant: "from-yellow-400 via-yellow-500 to-yellow-600",
      description: "Currently active projects.",
    },
    {
      icon: FaTasks,
      title: "Pending Projects",
      value: data.adminStats.projects.pending.toString(),
      gradiant: "from-orange-400 via-orange-500 to-orange-600",
      description: "Projects awaiting start.",
    },
    {
      icon: FaCheckCircle,
      title: "Completed Projects",
      value: data.adminStats.projects.completed.toString(),
      gradiant: "from-green-400 via-green-500 to-green-600",
      description: "Projects successfully completed.",
    },
    {
      icon: FaTimesCircle,
      title: "Canceled Projects",
      value: data.adminStats.projects.canceled.toString(),
      gradiant: "from-red-400 via-red-500 to-red-600",
      description: "Projects that were canceled.",
    },
    {
      icon: FaUsers,
      title: "Team Members",
      value: data.adminStats.users.teamMembers.toString(),
      gradiant: "from-indigo-400 via-indigo-500 to-indigo-600",
      description: "Number of team members.",
    },
    {
      icon: FaUserFriends,
      title: "Total Clients",
      value: data.adminStats.users.clients.toString(),
      gradiant: "from-purple-400 via-purple-500 to-purple-600",
      description: "Total number of clients.",
    },
  ];

  return (
    <div className="flex flex-wrap gap-3 items-center">
      {adminStats?.map((stat, i) => (
        <StatCard
          key={i}
          Icon={stat.icon}
          title={stat.title}
          value={stat.value}
          gradiant={stat.gradiant}
          description={stat.description}
        />
      ))}
    </div>
  );
};

export default AdminStatistics;
