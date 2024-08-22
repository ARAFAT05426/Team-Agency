"use client";
import axiosCommon from "@/lib/axios/axiosCommon";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaExclamationTriangle } from "react-icons/fa";
import { useState, useCallback } from "react";
import ManagementHeader from "../managementHeader/managementHeader";
import ProjectsGrid from "./projectsGrid/projectsGrid";
import AddWorker from "@/app/components/modal/addWorker/addWorker";
import EditProjectModal from "@/app/components/modal/editProjectModal/editProjectModal";
import AddProjectModal from "@/app/components/modal/addProjectModal/addProjectModal";

const ManageProjects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCriteria, setFilterCriteria] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddWorkerModalOpen, setIsAddWorkerModalOpen] = useState(false);
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);

  const handleResetFilters = () => {
    setSearchTerm("");
    setFilterCriteria("");
  };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["manageProjects", searchTerm, filterCriteria],
    queryFn: async () => {
      try {
        const response = await axiosCommon.get(
          `/projects/api?search=${searchTerm}&status=${filterCriteria}`
        );
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch projects");
      }
    },
    keepPreviousData: true,
  });

  const handleOpenAddWorkerModal = (project) => {
    setIsAddWorkerModalOpen(true);
    setSelectedProject(project);
  };

  const handleOpenEditProjectModal = (project) => {
    setIsEditModalOpen(true);
    setSelectedProject(project);
  };

  const handleCloseModals = () => {
    setSelectedProject(null);
    setIsEditModalOpen(false);
    setIsAddWorkerModalOpen(false);
    setIsAddProjectModalOpen(false);
  };

  const memoizedSetSearchTerm = useCallback((term) => setSearchTerm(term), []);

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
        filterBy={filterCriteria}
        searchValue={searchTerm} // Pass searchTerm as searchValue
        setSearch={memoizedSetSearchTerm}
        handleReset={handleResetFilters}
        setFilterBy={setFilterCriteria}
        setIsAddProjectModalOpen={setIsAddProjectModalOpen}
      />
      <hr className="mt-1" />
      <ProjectsGrid
        projects={data?.projects}
        handleAddWorker={handleOpenAddWorkerModal}
        handleEditProject={handleOpenEditProjectModal}
      />
      <AddProjectModal
        isOpen={isAddProjectModalOpen}
        setIsOpen={handleCloseModals}
        refetch={refetch}
      />
      <EditProjectModal
        refetch={refetch}
        project={selectedProject}
        isOpen={isEditModalOpen}
        setIsOpen={handleCloseModals}
      />
      <AddWorker
        project={selectedProject}
        isOpen={isAddWorkerModalOpen}
        setIsOpen={handleCloseModals}
        refetch={refetch}
      />
    </>
  );
};

export default ManageProjects;
