"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const CustomDropdown = ({
  options,
  selected,
  onSelect,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className={`cursor-pointer w-full py-4 px-5 bg-controller border ${
          isOpen ? "border-primary" : "border-gray-400/75"
        } rounded-sm shadow-sm text-md font-normal flex justify-between items-center`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected ? selected : placeholder}</span>
        <FaChevronDown
          className={`${
            isOpen ? "-rotate-180" : "rotate-0"
          } text-gray-500 transition-all duration-300`}
        />
      </div>
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full border bg-controller border-gray-400/75 rounded-sm shadow-lg max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <li
              key={index}
              className="cursor-pointer text-black py-2 px-4 hover:bg-gray-100"
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
