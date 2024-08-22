import ReusablePieChart from "@/app/chart/reusablePieChart";
import axiosCommon from "@/lib/axios/axiosCommon";
import { useQuery } from "@tanstack/react-query";

const ProjectsOverview = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["projectsOverview"],
    queryFn: async () => {
      try {
        const { data } = await axiosCommon.get("/projects/api?count=true");
        return data;
      } catch (error) {
        throw new Error("Failed to fetch projects");
      }
    },
  });
  const chartData = [
    { name: "Active", value: data?.counts?.active || 0 },
    { name: "Pending", value: data?.counts?.pending || 0 },
    { name: "Cancelled", value: data?.counts?.canceled || 0 },
    { name: "Completed", value: data?.counts?.completed || 0 },
  ];

  const COLORS = ["#1F77B4", "#FF7F0E", "#D62728", "#2CA02C"];

  return (
    <div className="border shadow-md rounded-md w-full max-w-full lg:max-w-lg mx-auto py-2">
      <h1 className="font-montserrat font-medium text-xl px-5 py-1 border-l-2 border-l-primary flex items-center justify-between mt-3">
        Projects Overview
      </h1>
      <hr className="mt-3 mb-5" />

      <ReusablePieChart
        data={chartData}
        colors={COLORS}
        width={350}
        height={280}
        isLoading={isLoading}
        error={isError ? error : null}
      />
    </div>
  );
};

export default ProjectsOverview;
