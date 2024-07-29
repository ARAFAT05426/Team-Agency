import { useState } from "react";

const HoverDropdown = ({ options, onSelect, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative"
    >
      <div className="text-center">{children}</div>
      {isOpen && (
        <ul className="text-left absolute z-10 -left-14 top-3 min-w-24 border bg-white border-gray-200 rounded shadow-lg overflow-auto transition-opacity duration-300 ease-in-out opacity-100">
          {options.map((option, index) => (
            <li
              key={index}
              className="cursor-pointer font-semibold text-xs text-black py-2 px-4 hover:bg-gray-200 transition-colors duration-200 ease-in-out"
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HoverDropdown;
