"use client";
import axiosCommon from "@/lib/axios/axiosCommon";
import { useQuery } from "@tanstack/react-query";
import { FaCheck, FaExclamationTriangle } from "react-icons/fa";
import ProjectDetailsModal from "@/app/components/modal/projectDetailsModal/projectDetailsModal";
import { useState } from "react";
import ProjectsTable from "./projectsTable/projectsTable";
import ProjectEditModal from "@/app/components/modal/projectEditModal/projectEditModal";
import Modal404 from "@/app/components/modal/modal404/modal404";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Projects = () => {
  const dropdownOptions = ["Edit", "Update", "View Details"];
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const [isErrorOpen, setErrorOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const {
    data: projects = [],
    isLoading,
    refetch,
    isError,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/projects/api");
      return data.projects;
    },
  });

  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const handleOptionSelect = (option, project) => {
    if (option === "View Details") {
      setSelectedProject(project);
      setDetailsOpen(true);
    }
    if (option === "Edit") {
      setSelectedProject(project);
      setEditOpen(true);
    }
    if (option === "Update") {
      setErrorOpen(true);
    }
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl text-primary" />
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600">
        <FaExclamationTriangle className="text-3xl mr-2" />
        <span>Error: {error?.message}</span>
      </div>
    );

  return (
    <div className="mt-10 p-10 border border-gray-200 rounded bg-white shadow overflow-x-auto">
      <Header />
      <ProjectsTable
        projects={projects}
        formatDate={formatDate}
        dropdownOptions={dropdownOptions}
        onOptionSelect={handleOptionSelect}
      />
      <ProjectDetailsModal
        isOpen={isDetailsOpen}
        setIsOpen={setDetailsOpen}
        project={selectedProject}
      />
      <ProjectEditModal
        isOpen={isEditOpen}
        setIsOpen={setEditOpen}
        project={selectedProject}
        refetch={refetch}
      />
      <Modal404 isOpen={isErrorOpen} setIsOpen={setErrorOpen} />
    </div>
  );
};

const Header = () => (
  <div className="pl-5">
    <h1 className="text-3xl font-teko font-bold text-gray-900">Projects</h1>
    <span className="flex items-center gap-2 font-bold text-xs my-3">
      <FaCheck className="text-green-500" /> 30 done this month
    </span>
  </div>
);

export default Projects;
