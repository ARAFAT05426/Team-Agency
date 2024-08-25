import { RiCalendar2Line, RiProgress6Line } from "react-icons/ri";
import { BiLayerPlus } from "react-icons/bi";
import { LuClipboardEdit } from "react-icons/lu";
import { ImStatsBars2 } from "react-icons/im";
import { TbUsersPlus } from "react-icons/tb";
import Link from "next/link";

const ProjectManageCard = ({ project = {}, setAddWorker, setEditProject }) => {
  const {
    progressPercentage,
    title,
    description,
    teamMembers,
    priority,
    status,
    client,
    createdOn,
    deadline,
  } = project;

  return (
    <div className="relative font-montserrat border border-gray-300 shadow rounded pt-10 p-5 flex flex-col gap-3">
      {/* Priority ribbon shape */}
      <div
        className={`absolute top-0 left-0 ${
          (priority?.toLowerCase() === "high" && "bg-primary") ||
          (priority?.toLowerCase() === "medium" && "bg-yellow-500") ||
          (priority?.toLowerCase() === "low" && "bg-green-500")
        } text-white px-4 py-1 rounded-tl-sm rounded-tr-2xl rounded-bl-2xl`}
      >
        <span className="text-xs font-semibold">Priority - {priority}</span>
      </div>

      {/* Project Title and Status */}
      <Link
        href={`/dashboard/projects/${project?._id}`}
        className="relative text-xl font-semibold text-gray-800 pr-3"
      >
        {title}{" "}
      </Link>
      <LuClipboardEdit
        onClick={() => setEditProject(project)}
        className="absolute right-1 inset-y-1 cursor-pointer text-2xl p-1 rounded bg-primary text-white"
      />

      {/* Dates */}
      <div className="flex items-center gap-2 text-xs text-gray-700">
        <RiCalendar2Line className="text-primary" />
        <p className="font-semibold">
          {new Date(createdOn)?.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}{" "}
          ---{" "}
          {new Date(deadline)?.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm font-medium">
        {description?.slice(0, 150)}
      </p>

      {/* Client Info */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-800 text-xs font-semibold">{client?.name}</p>
          <p className="text-gray-600 text-[0.6rem] font-medium">
            {client?.email}
          </p>
        </div>
        <div
          className={`flex items-center gap-1 px-3 py-1 ${
            (status === "completed" && "bg-green-200 text-green-500") ||
            (status === "in progress" && "bg-blue-200 text-blue-500") ||
            (status === "pending" && "bg-orange-200 text-orange-500") ||
            (status === "canceled" && "bg-red-200 text-red-500")
          } rounded-lg`}
        >
          <ImStatsBars2 className="text-xs" />
          <span className="text-[0.60rem] font-medium">{status}</span>
        </div>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2 text-gray-700">
        <RiProgress6Line className="text-primary" />
        <p className="text-xs font-semibold">{progressPercentage}% Complete</p>
      </div>

      {/* Team Members */}
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-gray-800 text-sm font-semibold mb-3 flex items-center gap-1">
            <TbUsersPlus className="" />
            Team Members:
          </h3>
          <BiLayerPlus
            onClick={() => setAddWorker(project)}
            className="cursor-pointer text-2xl p-1 rounded-md bg-primary text-white"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {teamMembers?.map((member, index) => (
            <div
              key={index}
              className="text-[0.6rem] bg-blue-50 text-gray-800 px-3 py-1 rounded-md flex items-center gap-2"
            >
              <BiLayerPlus className="text-primary" />
              {member?.name} - {member?.role}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectManageCard;
