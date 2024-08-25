import Table from "@/app/components/table/table";
import { BiLayerPlus } from "react-icons/bi";

const ProjectMembers = ({ data, handleOpenAddWorkerModal }) => {
  const headers = [
    { header: "#", accessor: "i" },
    { header: "Member Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Skilled", accessor: "skilled" },
  ];

  // Mapping the data to match the table structure
  const columns = data?.map((member, index) => ({
    i: index + 1, // Properly increments the index
    name: member.name,
    skilled: member.role || "Not assigned", // Ensures consistency with the headers
    email: member.email,
  }));

  return (
    <div className="w-full">
      <Table
        topHeading={
          <>
            Assigned Members
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold">{data?.length}</span>
              <button
                onClick={handleOpenAddWorkerModal}
                className="p-1 bg-primary rounded-md hover:bg-primary/80 transition-all duration-300"
              >
                <BiLayerPlus className="text-sm text-white" />
              </button>
            </div>
          </>
        }
        headers={headers}
        columns={columns}
      />
    </div>
  );
};

export default ProjectMembers;
