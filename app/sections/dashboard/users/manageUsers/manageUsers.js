import PaginationBtns from "@/app/components/buttons/paginationBtns/paginationBtns";
import CustomDropdown from "@/app/components/form/customDropdown/customDropdown";
import Table from "@/app/components/table/table";
import { MdOutlineRotateRight } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

const ManageUsers = ({
  users,
  handleOptionSelect,
  currentPage,
  onPageChange,
  totalPages,
  onRoleFilterChange,
  selectedRole,
  onReset,
  searchQuery,
  setSearchQuery,
}) => {
  const [searchParam, setSearchParam] = useState("");

  const handleSearch = () => {
    setSearchQuery(searchParam);
  };

  const headers = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
    { header: "Actions", accessor: "actions" },
  ];

  const columns = users?.map((user) => ({
    name: user.name,
    email: user.email,
    role: user.role,
    actions: (
      <div className="flex space-x-2">
        <button
          className="bg-blue-200 px-3 py-1 rounded font-montserrat text-xs text-blue-500 hover:underline"
          onClick={() => handleOptionSelect("Edit", user)}
        >
          Edit
        </button>
        <button
          className="bg-red-200 px-3 py-1 rounded font-montserrat text-xs text-red-500 hover:underline"
          onClick={() => handleOptionSelect("Delete", user)}
        >
          Delete
        </button>
      </div>
    ),
  }));

  return (
    <div>
      <Table
        topHeading={
          <>
            <div className="flex justify-between items-center">
              <h2>Manage Users</h2>
            </div>
            <div className="flex items-center space-x-3 my-2">
              <button
                className="border p-2 rounded-sm text-gray-700"
                onClick={onReset}
              >
                <MdOutlineRotateRight />
              </button>
              <div className="relative flex items-center border border-gray-200 rounded-sm">
                <input
                  type="text"
                  value={searchParam}
                  onChange={(e) => setSearchParam(e.target.value)}
                  placeholder="Search users"
                  className="outline-none px-3 py-2 font-montserrat text-gray-500 text-sm"
                />
                <IoIosSearch
                  onClick={handleSearch}
                  className="absolute right-2 text-gray-600 cursor-pointer"
                />
              </div>
              <CustomDropdown
                className="border border-gray-200 rounded-sm px-4 py-2 font-montserrat text-gray-500 text-sm font-semibold hover:border-primary/75 w-full sm:w-44"
                selected={selectedRole}
                onSelect={onRoleFilterChange}
                placeholder="Filter by role"
                options={["client", "team-member", "admin"]}
              />
            </div>
          </>
        }
        headers={headers}
        columns={columns}
      />
      <PaginationBtns
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPages={totalPages}
        maxButtons={5}
      />
    </div>
  );
};

export default ManageUsers;
