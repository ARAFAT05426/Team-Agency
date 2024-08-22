import React, { useState } from "react";
import ProjectManageCard from "@/app/components/cards/projectManageCard/projectManageCard";
import PaginationBtns from "@/app/components/buttons/paginationBtns/paginationBtns";

const ProjectsGrid = ({
  projects = [],
  handleAddWorker,
  handleEditProject,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  const totalPages = Math.ceil(projects.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = projects.slice(startIndex, startIndex + rowsPerPage);

  return (
    <>
      <div className="my-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentData.map((project, i) => (
            <ProjectManageCard
              key={i}
              project={project}
              setAddWorker={handleAddWorker}
              setEditProject={handleEditProject}
            />
          ))}
        </div>
      </div>
      <PaginationBtns
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ProjectsGrid;
