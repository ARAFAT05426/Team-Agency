import { useState } from "react";
const TypeText = ({
  name,
  placeholder,
  icon: IconComponent,
  isRequired = false,
  bg,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={`w-full border px-4 py-1 rounded-[3px] flex items-center justify-between ${
        isFocused ? "border-primary" : "border-secondary/50"
      } transition-all duration-300 border ${bg ? bg : "bg-none"}`}
    >
      <input
        className={`outline-none flex-1 py-3 bg-transparent ${
          isFocused
            ? "placeholder-primary text-primary"
            : "placeholder-black text-secondary"
        }`}
        placeholder={
          placeholder +
          " " +
          name +
          (isRequired === true ? " *" : " (optional)")
        }
        type="text"
        name={name.toLowerCase()}
        id={name}
        required={isRequired}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className="h-6">
        <IconComponent
          className={`${
            isFocused && "text-primary"
          } transition-all duration-300 cursor-pointer`}
        />
      </div>
    </div>
  );
};
export default TypeText;
