"use client";
import { useState } from "react";
import { FaHashtag } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const TypeTag = () => {
  const [isFocused, setFocused] = useState(false);
  const [tags, setTags] = useState([]);
  const handleAdd = (e) => {
    e.preventDefault();
    const tag = e.target.tag.value;
    setTags([...tags, tag]);
    e.target.reset();
  };
  const handleRemove = (index) =>{
    console.log(index);
  }
  return (
    <div className="w-full overflow-hidden space-y-2">
      <div
        className={`w-full px-2 flex items-center gap-3 border rounded-sm ${
          isFocused ? "border-primary" : "border-secondary/75"
        } transition-all duration-300`}
      >
        <form className="flex items-center gap-3 flex-1" onSubmit={handleAdd}>
          <input
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={`w-full bg-transparent outline-none p-3 ${
              isFocused
                ? "placeholder-primary text-primary"
                : "placeholder-secondary text-secondary"
            }`}
            placeholder="Enter search tags"
            type="text"
            name="tag"
            id=""
          />

          <button
            type="submit"
            className={`px-3 py-1 bg-primary font-semibold text-white rounded ${
              isFocused ? "opacity-100" : "opacity-0"
            } transition-all duration-300`}
          >
            add
          </button>
        </form>
        <FaHashtag
          className={` transition-all duration-300 ${
            isFocused ? "text-primary" : "text-secondary"
          }`}
        />
      </div>
      <div className="flex flex-wrap items-center gap-3 px-1">
        {tags?.map((tag, i) => (
          <div
            key={i}
            className="text-xs px-2 py-1 bg-gray-100 shadow flex items-center gap-[.3rem]"
          >
            {tag} <IoCloseSharp onClick={() =>handleRemove(i)} className="cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TypeTag;
