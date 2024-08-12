import CustomDropdown from "@/app/components/form/customDropdown/customDropdown";
import { FaPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const ManagementHeader = ({ search, setSearch, filterBy, setFilterBy }) => {
  const handleFilterBy = (option) => {
    setFilterBy(option);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-3 px-1">
      <h1 className="font-montserrat pl-3 font-medium text-xl mb-3 sm:mb-0 sm:mr-4 border-l-2 border-l-primary">
        Projects
      </h1>
      <div className="flex flex-wrap items-start md:items-center gap-3 w-full sm:w-auto">
        {/* Search Bar */}
        <div className="relative flex items-center w-full sm:w-64">
          <label
            htmlFor="search"
            className="relative flex items-center border border-gray-300 rounded-sm py-2 px-3 bg-white shadow-sm transition-all duration-300 focus-within:border-primary w-full"
          >
            <IoSearch className="text-gray-500 absolute left-3" />
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="peer outline-none w-full bg-transparent pl-10 text-gray-700 placeholder-gray-400 rounded-md"
              onChange={handleSearchChange}
              value={search}
            />
          </label>
        </div>

        {/* Sort By Dropdown */}
        <CustomDropdown
          className="border border-gray-200 rounded-sm px-4 py-[0.65rem] font-montserrat text-gray-500 text-sm font-semibold hover:border-primary/75 w-full sm:w-44"
          options={["completed", "in progress", "pending", "canceled"]}
          selected={filterBy}
          onSelect={handleFilterBy}
          placeholder="Sort By"
        />

        {/* Add Project Button */}
        <button className="flex items-center gap-2 px-4 py-[0.8rem] rounded-sm font-montserrat font-semibold text-xs text-white bg-primary">
          <FaPlus className="mr-1" />
          Add Project
        </button>
      </div>
    </div>
  );
};

export default ManagementHeader;
