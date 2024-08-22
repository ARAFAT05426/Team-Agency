"use client";
import { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";

const CustomDropdown = ({
  options = [],
  selected,
  onSelect,
  className = "",
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    if (option === selected) {
      onSelect("");
    } else {
      onSelect(option);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative text-xs md:text-base">
      <div
        className={`cursor-pointer w-full peer ${
          isOpen ? "border-primary" : "border-gray-300"
        } ${
          className || "py-3 px-5 border shadow-sm"
        } rounded-sm text-md font-normal flex gap-3 justify-between items-center transition-all duration-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected ? selected : placeholder}</span>
        <VscTriangleDown
          className={`${
            isOpen ? "-rotate-180" : "rotate-0"
          } text-gray-500 transition-all duration-300`}
        />
      </div>
      {isOpen && (
        <ul
          className={`absolute z-10 font-montserrat font-medium text-xs md:text-sm mt-1 w-full border bg-slate-100 border-gray-200 shadow-md rounded-sm max-h-60 overflow-y-auto transition-all duration-300`}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className={`cursor-pointer text-black py-2 px-4 hover:bg-slate-200 ${
                option === selected ? "bg-slate-200" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
