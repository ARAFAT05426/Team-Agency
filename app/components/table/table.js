import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useState } from "react";

const Table = ({
  className,
  topHeading = <></>,
  headers = [],
  columns = [],
  rowsPerPage = 5,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(columns.length / rowsPerPage);

  const handlePageClick = (page) => setCurrentPage(page);
  const handlePrevious = () =>
    currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = columns.slice(startIndex, startIndex + rowsPerPage);

  const getPaginationButtons = () => {
    const pages = [];
    const maxButtons = 3;
    const half = Math.floor(maxButtons / 2);

    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    if (currentPage - half <= 1) end = Math.min(totalPages, maxButtons);
    if (currentPage + half >= totalPages)
      start = Math.max(1, totalPages - maxButtons + 1);

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`px-3 md:px-4 py-2 text-sm font-montserrat font-semibold ${
            currentPage === i
              ? "bg-primary text-white"
              : "text-gray-600 hover:bg-primary hover:text-white"
          }`}
        >
          {i}
        </button>
      );
    }

    if (start > 1) {
      pages.unshift(
        <span key="start-ellipsis" className="px-3 md:px-4 py-2 text-gray-500">
          ...
        </span>
      );
    }

    if (end < totalPages) {
      pages.push(
        <span key="end-ellipsis" className="px-3 md:px-4 py-2 text-gray-500">
          ...
        </span>
      );
    }

    return pages;
  };

  return (
    <div className={`${className} bg-white rounded shadow border my-5`}>
      <h1 className="font-montserrat font-medium text-xl px-5 py-1 border-l-2 border-l-primary flex items-center justify-between mt-3">
        {topHeading}
      </h1>
      <hr className="mt-5" />
      <div className="overflow-x-auto px-5 py-3">
        <table className="min-w-full overflow-x-auto">
          <thead className="font-montserrat bg-gray-100/75">
            <tr className="rounded-md">
              {headers?.map((column, index) => (
                <th
                  key={index}
                  className="text-left py-3 px-3 md:px-4 rounded font-semibold text-gray-700"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-medium divide-y">
            {currentData?.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="text-sm hover:bg-gray-50/75 transition-all duration-200"
              >
                {headers.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="py-3 px-3 md:px-4 text-gray-700 whitespace-nowrap"
                  >
                    {row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="ml-auto w-fit border flex items-center rounded divide-x mr-3 lg:mr-5 mb-3 lg:mb-5">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-2 md:px-3 py-2 rounded-s text-sm text-gray-600 hover:bg-primary hover:text-white disabled:bg-gray-200/75 disabled:text-gray-400"
        >
          <MdOutlineKeyboardArrowLeft className="w-5 h-5" />
        </button>
        {getPaginationButtons()}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-2 md:px-3 py-2 rounded-e text-sm text-gray-600 hover:bg-primary hover:text-white disabled:bg-gray-200/75 disabled:text-gray-400"
        >
          <MdOutlineKeyboardArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
export default Table;
