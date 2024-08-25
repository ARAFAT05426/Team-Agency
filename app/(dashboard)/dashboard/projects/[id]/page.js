"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";
import ProjectStatsHeader from "@/app/sections/dashboard/projects/projectStats/projectStatsHeader/projectStatsHeader";
import ProjectStatCards from "@/app/sections/dashboard/projects/projectStats/projectStatCards/projectStatCards";
import TasksManagement from "@/app/sections/dashboard/projects/projectStats/tasksManagement/tasksManagement";
import ProjectMembers from "@/app/sections/dashboard/projects/projectStats/projectMembers/projectMembers";
import ClientCard from "@/app/sections/dashboard/projects/projectStats/clientCard/clientCard";
import EditProjectModal from "@/app/components/modal/editProjectModal/editProjectModal";
import AddTaskModal from "@/app/components/modal/addTaskModal/addTaskModal";
import DeleteModal from "@/app/components/modal/deleteModal/deleteModal";
import AddWorker from "@/app/components/modal/addWorker/addWorker";
import EditTaskModal from "@/app/components/modal/editTaskModal/editTaskModal";
import axiosCommon from "@/lib/axios/axiosCommon";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaExclamationTriangle } from "react-icons/fa";

const Page = () => {
  const { id } = useParams();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isAddWorkerModalOpen, setIsAddWorkerModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["projectDetails", id],
    queryFn: async () => {
      try {
        const response = await axiosCommon.get(`/projects/api/${id}`);
        setSelectedProject(response?.data?.data);
        return response?.data;
      } catch (error) {
        throw new Error("Failed to fetch project details");
      }
    },
  });

  const handleOpenEditModal = (task) => {
    setSelectedTask(task);
    setIsEditTaskModalOpen(true);
  };

  const handleOpenDeleteModal = (taskId) => {
    setSelectedTask(taskId);
    setIsDeleteModalOpen(true);
  };

  const handleCloseModals = () => {
    setSelectedTask(null);
    setIsEditModalOpen(false);
    setIsEditTaskModalOpen(false);
    setIsAddTaskModalOpen(false);
    setIsDeleteModalOpen(false);
    setIsAddWorkerModalOpen(false);
  };

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
      <ProjectStatsHeader
        title={data?.data?.title}
        handleOpenEditModal={() => setIsEditModalOpen(true)}
        members={data?.data?.teamMembers?.length}
        handleOpenAddWorkerModal={() => setIsAddWorkerModalOpen(true)}
      />
      <ProjectStatCards data={data} />

      {/* Use flexbox for responsiveness */}
      <div className="flex flex-col md:flex-row gap-3 w-full">
        {/* Project Members and Client Card */}
        <ProjectMembers
          data={data?.data?.teamMembers}
          handleOpenAddWorkerModal={() => setIsAddWorkerModalOpen(true)}
        />
        <ClientCard client={data?.data?.client} />
      </div>

      <TasksManagement
        tasks={data?.data?.tasks}
        setAddTaskModalOpen={setIsAddTaskModalOpen}
        handleOpenEditModal={handleOpenEditModal}
        handleOpenDeleteModal={handleOpenDeleteModal}
      />

      {/* Modals for various actions */}
      <EditProjectModal
        refetch={refetch}
        project={selectedProject}
        isOpen={isEditModalOpen}
        setIsOpen={handleCloseModals}
      />
      <AddWorker
        refetch={refetch}
        project={selectedProject}
        isOpen={isAddWorkerModalOpen}
        setIsOpen={handleCloseModals}
      />
      <AddTaskModal
        refetch={refetch}
        id={data?.data?._id}
        isOpen={isAddTaskModalOpen}
        setIsOpen={handleCloseModals}
        members={data?.data?.teamMembers}
      />
      <EditTaskModal
        projectId={selectedProject?._id}
        refetch={refetch}
        task={selectedTask}
        isOpen={isEditTaskModalOpen}
        setIsOpen={handleCloseModals}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        setIsOpen={handleCloseModals}
        id={selectedTask}
        refetch={refetch}
        text="task"
        api={`/projects/api/${data?.data?._id}?taskId=${selectedTask}`}
      />
    </>
  );
};

export default Page;
