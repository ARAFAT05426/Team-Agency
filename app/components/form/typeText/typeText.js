import React from "react";

const TypeText = ({
  name = "",
  placeholder = "",
  icon: IconComponent,
  isRequired = false,
  bg = "",
  value,
  onChange,
  type = "text",
}) => {
  return (
    <div
      className={`w-full px-3 py-1 rounded-[3px] text-xs md:text-base flex items-center justify-between border transition-all duration-300 focus-within:border-primary ${
        bg ? bg : "bg-transparent"
      }`}
    >
      <input
        className="outline-none flex-1 py-2 md:py-2 bg-transparent placeholder-black text-secondary focus:placeholder-primary focus:text-primary"
        placeholder={`${placeholder} ${name}${
          isRequired ? " *" : " (optional)"
        }`}
        name={name?.toLowerCase()}
        value={value ? value : undefined}
        required={isRequired}
        onChange={onChange}
        type={type}
        id={name}
      />
      <div className="h-6">
        {IconComponent && (
          <IconComponent className="transition-all duration-300 cursor-pointer text-secondary" />
        )}
      </div>
    </div>
  );
};

export default TypeText;
