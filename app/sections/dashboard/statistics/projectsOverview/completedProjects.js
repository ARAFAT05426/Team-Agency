"use client";
import ProjectsOverview from "./overviewChart";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaExclamationTriangle } from "react-icons/fa";
import axiosCommon from "@/lib/axios/axiosCommon";
import Table from "@/app/components/table/table";
import { useQuery } from "@tanstack/react-query";

const OverviewChart = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["completedProjects"],
    queryFn: async () => {
      try {
        const { data } = await axiosCommon.get(
          "/projects/api?status=completed"
        );
        return data;
      } catch (error) {
        throw new Error("Failed to fetch projects");
      }
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl text-primary" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-96 text-red-600">
        <FaExclamationTriangle className="text-3xl mr-2" />
        <span>Error: {error?.message}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 md:gap-5">
      <Table
        rowsPerPage={4}
        className="w-full"
        topHeading={
          <>
            Completed Projects
            <span className="text-xs font-semibold">
              {data?.projects?.length} completed of {data?.total}
            </span>
          </>
        }
        headers={[
          { header: "Project Name", accessor: "title" },
          { header: "Category", accessor: "category" },
          { header: "Priority", accessor: "priority" },
          { header: "Started At", accessor: "started" },
          { header: "Finished", accessor: "finished" },
        ]}
        columns={data?.projects?.map((project) => ({
          ...project,
          priority: (
            <span
              className={`px-3 py-1 text-xs rounded text-white ${
                project.priority === "High" ? "bg-primary" : "bg-green-400"
              }`}
            >
              {project.priority}
            </span>
          ),
          started: new Date(project?.dates?.creationDate).toLocaleDateString(
            "en-US",
            {
              month: "short",
              day: "numeric",
              year: "numeric",
            }
          ),
          finished: new Date(project?.dates?.deadlineDate).toLocaleDateString(
            "en-US",
            {
              month: "short",
              day: "numeric",
              year: "numeric",
            }
          ),
        }))}
      />
      <ProjectsOverview />
    </div>
  );
};

export default OverviewChart;
