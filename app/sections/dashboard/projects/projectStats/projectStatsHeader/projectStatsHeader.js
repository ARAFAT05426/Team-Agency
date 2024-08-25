"use client";

import { BiLayerPlus } from "react-icons/bi";
import { LuClipboardEdit } from "react-icons/lu";

const ProjectStatsHeader = ({
  title,
  members,
  handleOpenEditModal,
  handleOpenAddWorkerModal,
}) => {
  return (
    <div className="px-6 py-5 border border-gray-200 rounded shadow mb-4 flex flex-col sm:flex-row items-center justify-between font-montserrat text-sm">
      <h1 className="text-lg font-semibold text-gray-800 max-w-xs sm:max-w-sm">
        {title?.length > 25 ? `${title?.slice(0, 25)}...` : title}
      </h1>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <p className="text-gray-800 font-semibold">
          Assigned members: {members}
        </p>
      </div>
      <div className="flex gap-2 mt-4 sm:mt-0">
        <button
          onClick={handleOpenAddWorkerModal}
          className="p-2 bg-primary rounded-md hover:bg-primary/80 transition-all duration-300"
        >
          <BiLayerPlus className="text-lg text-white" />
        </button>
        <button
          onClick={handleOpenEditModal}
          className="p-2 bg-primary rounded-md hover:bg-primary/80 transition-all duration-300"
        >
          <LuClipboardEdit className="text-lg text-white" />
        </button>
      </div>
    </div>
  );
};

export default ProjectStatsHeader;
