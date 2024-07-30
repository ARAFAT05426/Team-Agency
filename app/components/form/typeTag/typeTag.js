"use client";
import { useState, useEffect } from "react";
import { FaHashtag } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const TypeTag = ({ initialTags = [], onTagsChange, bg, placeholder }) => {
  const [isFocused, setFocused] = useState(false);
  const [tags, setTags] = useState(initialTags || []);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    onTagsChange(tags);
  }, [tags]);

  const handleAdd = () => {
    if (inputValue?.trim() && !tags?.includes(inputValue.trim())) {
      setTags([...tags, inputValue?.trim()]);
      setInputValue("");
    }
  };

  const handleRemove = (index) => {
    setTags(tags?.filter((_, i) => i !== index));
  };

  return (
    <div className={`w-full overflow-hidden space-y-2`}>
      <div
        className={`w-full px-2 flex items-center gap-3 border rounded-sm ${
          isFocused ? "border-primary" : "border-secondary/75"
        } ${bg ? bg : ""} transition-all duration-300`}
      >
        <input
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full bg-transparent outline-none pl-3 py-2 md:py-3 ${
            isFocused
              ? "placeholder-primary text-primary"
              : "placeholder-secondary text-secondary"
          }`}
          placeholder={placeholder}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <span
          onClick={handleAdd}
          className={`px-3 py-1 bg-primary font-semibold text-white rounded ${
            isFocused ? "opacity-100" : "opacity-0"
          } transition-all duration-300 cursor-pointer`}
        >
          Add
        </span>
        <FaHashtag
          className={`transition-all duration-300 ${
            isFocused ? "text-primary" : "text-secondary"
          }`}
        />
      </div>
      <div className="flex flex-wrap items-center gap-1 md:gap-2 px-1">
        {tags?.map((tag, i) => (
          <div
            key={i}
            className={`text-[.5rem] md:text-xs px-2 py-1 ${
              bg ? bg : "bg-gray-100"
            } text-black shadow flex items-center gap-[.3rem]`}
          >
            {tag}{" "}
            <IoCloseSharp
              onClick={() => handleRemove(i)}
              className="cursor-pointer text-xs md:text-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeTag;
