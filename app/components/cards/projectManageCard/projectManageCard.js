import Image from "next/image";
import { FaRegCalendarAlt, FaTasks, FaUser } from "react-icons/fa";
import { IoMdAttach } from "react-icons/io";

const ProjectManageCard = ({ project }) => {
  const {
    projectTitle,
    category,
    description,
    client,
    status,
    priority,
    progressPercentage,
    dates,
    teamMembers,
    projectFiles,
  } = project;

  return (
    <div className="border shadow-md rounded-lg p-4 flex flex-col gap-4">
      {/* Project Title and Status */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">{projectTitle}</h2>
        <span
          className={`text-sm px-2 py-1 rounded-md ${
            status === "completed"
              ? "bg-green-100 text-green-800"
              : status === "in progress"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Category and Priority */}
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-sm">{category}</p>
        <span
          className={`text-sm px-2 py-1 rounded-md ${
            priority === "High"
              ? "bg-red-100 text-red-800"
              : priority === "Medium"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {priority} Priority
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600">{description}</p>

      {/* Client Info */}
      <div className="flex items-center gap-4">
        <Image
          width={75}
          height={50}
          src={client.profileImageUrl}
          alt={client.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-gray-700 font-medium">{client.name}</p>
          <p className="text-gray-500 text-sm">{client.email}</p>
        </div>
      </div>

      {/* Dates and Progress */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-500">
          <FaRegCalendarAlt />
          <p className="text-sm">
            {new Date(dates.creationDate).toLocaleDateString()} -{" "}
            {new Date(dates.deadlineDate).toLocaleDateString()}
          </p>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <FaTasks />
          <p className="text-sm">{progressPercentage}% Complete</p>
        </div>
      </div>

      {/* Team Members */}
      <div>
        <h3 className="text-gray-700 font-medium mb-2">Team Members:</h3>
        <div className="flex flex-wrap gap-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-md"
            >
              <FaUser className="inline-block mr-2" />
              {member.fullName} - {member.role}
            </div>
          ))}
        </div>
      </div>

      {/* Project Files */}
      {projectFiles.length > 0 && (
        <div>
          <h3 className="text-gray-700 font-medium mb-2">Project Files:</h3>
          <div className="flex flex-wrap gap-2">
            {projectFiles.map((file, index) => (
              <a
                key={index}
                href={file.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-500 text-sm hover:underline"
              >
                <IoMdAttach />
                {file.fileName}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectManageCard;
