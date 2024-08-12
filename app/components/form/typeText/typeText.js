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
  return (
    <div
      className={`w-full px-3 py-1 rounded-[3px] flex items-center justify-between border transition-all duration-300 focus-within:border-primary ${
        bg ? bg : "bg-none"
      }`}
    >
      <input
        className="outline-none flex-1 py-2 md:py-2 bg-transparent placeholder-black text-secondary focus:placeholder-primary focus:text-primary"
        placeholder={`${placeholder} ${name}${
          isRequired ? " *" : " (optional)"
        }`}
        type={type}
        name={name.toLowerCase()}
        id={name}
        required={isRequired}
        value={value}
        onChange={onChange}
      />
      <div className="h-6">
        <IconComponent className="transition-all duration-300 cursor-pointer text-secondary" />
      </div>
    </div>
  );
};

export default TypeText;
