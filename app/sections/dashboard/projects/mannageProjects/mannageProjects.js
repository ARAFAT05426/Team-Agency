"use client";
import axiosCommon from "@/lib/axios/axiosCommon";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaExclamationTriangle } from "react-icons/fa";
import { useEffect, useState } from "react";
import ManagementHeader from "../managementHeader/managementHeader";
import ProjectsGrid from "./projectsGrid/projectsGrid";

const ManageProjects = () => {
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("");

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["manageProjects"],
    queryFn: async () => {
      try {
        const { data } = await axiosCommon.get(
          `/projects/api?search=${search}&status=${filterBy}`
        );
        return data;
      } catch (error) {
        throw new Error("Failed to fetch projects");
      }
    },
  });
  useEffect(() => {
    refetch()
  }, [search, filterBy]);
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
        <span>Error: {error.message}</span>
      </div>
    );
  }

  return (
    <>
      <ManagementHeader
        setSearch={setSearch}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      <hr className="mt-1" />
      <ProjectsGrid projects={data?.projects} />
    </>
  );
};

export default ManageProjects;
