import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const PaginationBtns = ({
  currentPage,
  totalPages,
  onPageChange,
  maxButtons = 3,
}) => {
  const handlePrevious = () => currentPage > 1 && onPageChange(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && onPageChange(currentPage + 1);

  const getPaginationButtons = () => {
    const pages = [];
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
          onClick={() => onPageChange(i)}
          className={`px-2 md:px-3 py-1 text-xs md:text-sm font-montserrat font-semibold ${
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
        <span
          key="start-ellipsis"
          className="px-2 md:px-3 py-1 text-gray-500 text-xs md:text-sm"
        >
          ...
        </span>
      );
    }

    if (end < totalPages) {
      pages.push(
        <span
          key="end-ellipsis"
          className="px-2 md:px-3 py-1 text-gray-500 text-xs md:text-sm"
        >
          ...
        </span>
      );
    }

    return pages;
  };

  return (
    <div className="ml-auto w-fit border flex items-center rounded divide-x my-3">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-2 md:px-3 py-1 text-xs md:text-sm text-gray-600 hover:bg-primary hover:text-white disabled:bg-gray-200/75 disabled:text-gray-400"
      >
        <MdOutlineKeyboardArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
      </button>
      {getPaginationButtons()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-2 md:px-3 py-1 text-xs md:text-sm text-gray-600 hover:bg-primary hover:text-white disabled:bg-gray-200/75 disabled:text-gray-400"
      >
        <MdOutlineKeyboardArrowRight className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </div>
  );
};

export default PaginationBtns;
