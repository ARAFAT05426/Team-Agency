import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";

const TypeArea = ({
  name,
  placeholder,
  rows = 5,
  required = false,
  onChange,
  value,
  iconClass = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full lg:col-span-2">
      <div
        className={`w-full border py-3 px-5 flex items-start ${
          isFocused ? "border-primary" : "border-gray-300"
        } transition-all duration-300 rounded-sm bg-controller`}
      >
        <textarea
          className={`bg-transparent outline-none ${isFocused ? "placeholder-primary text-primary" : "placeholder-secondary/80 text-secondary/80"} w-full`}
          placeholder={placeholder}
          rows={rows}
          required={required}
          name={name}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          onChange={onChange}
          value={value}
        />
        <AiOutlineEdit
          className={`h-6 transition-all duration-300 ${
            isFocused ? "text-primary" : "text-black"
          } ${iconClass}`}
        />
      </div>
    </div>
  );
};

export default TypeArea;
