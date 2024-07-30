import { useState } from "react";

const TypeText = ({
  name,
  placeholder,
  icon: IconComponent,
  isRequired = false,
  bg,
  value,
  onChange,
  type = "text",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`w-full border px-3 py-1 rounded-[3px] flex items-center justify-between ${
        isFocused ? "border-primary" : "border-secondary/50"
      } transition-all duration-300 border ${bg ? bg : "bg-none"}`}
    >
      <input
        className={`outline-none flex-1 py-2 md:py-3 bg-transparent ${
          isFocused
            ? "placeholder-primary text-primary"
            : "placeholder-black text-secondary"
        }`}
        placeholder={
          placeholder +
          " " +
          name +
          (isRequired ? " *" : " (optional)")
        }
        type={type}
        name={name.toLowerCase()}
        id={name}
        required={isRequired}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className="h-6">
        <IconComponent
          className={`${
            isFocused ? "text-primary" : "text-secondary"
          } transition-all duration-300 cursor-pointer`}
        />
      </div>
    </div>
  );
};

export default TypeText;
