import HoverDropdown from "@/app/components/dropDown/hoverDropDown/hoverDropDown";
import LinearProgress from "@/app/components/progressbar/linearProgress";
import {CgOptions} from "react-icons/cg"
import Image from "next/image";

const ProjectsTable = ({
  projects,
  formatDate,
  dropdownOptions,
  onOptionSelect,
}) => {
  return (
    <table className="border-x min-w-full table-auto">
      <thead>
        <tr className="bg-gray-100/75">
          {["Client", "Category", "Deadline", "Status", "Progress", ""].map(
            (header) => (
              <th
                key={header}
                className="py-3 px-5 text-left text-lg text-gray-600 font-bold font-teko"
              >
                {header}
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody className="text-sm">
        {projects.map((project, i) => (
          <tr
            key={i}
            className={`${
              i < projects.length - 1 && "border-b"
            } hover:bg-gray-50 transition-colors duration-300 cursor-pointer`}
          >
            <td className="py-3 px-5 flex items-center gap-2">
              <Image
                src={project.clientImage}
                alt={project.client}
                className="rounded-md w-10 h-10 object-cover"
                width={50}
                height={50}
              />
              <h1 className="text-gray-700 text-base font-bold">
                {project.client}
              </h1>
            </td>
            <td className="py-3 px-5 font-bold text-xs text-gray-700 uppercase">
              {project.category}
            </td>
            <td className="py-3 px-5 text-sm text-gray-600 font-teko font-semibold">
              {formatDate(project.deadline)}
            </td>
            <td className="py-3 px-5">
              <div
                className={`w-full max-w-20 text-center font-teko px-3 py-1 rounded-full text-gray-700 text-sm font-semibold ${
                  project.status === "completed"
                    ? "bg-green-300"
                    : "bg-yellow-300"
                }`}
              >
                {project.status}
              </div>
            </td>
            <td className="py-3 px-5 font-bold">
              <LinearProgress progress={project.progress || 70} />
            </td>
            <td className="py-3 px-5 text-center">
              <HoverDropdown
                options={dropdownOptions}
                onSelect={(option) => onOptionSelect(option, project)}
              >
                <CgOptions className="mx-auto cursor-pointer text-xl text-gray-700" />
              </HoverDropdown>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ProjectsTable;
