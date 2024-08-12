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
  return (
    <div className="w-full col-span-2">
      <div className="w-full border py-2 px-4 md:py-3 md:px-5 flex items-start border-gray-300 transition-all duration-300 rounded-sm bg-controller peer-focus:border-primary">
        <textarea
          className="bg-transparent outline-none placeholder-secondary/80 text-secondary/80 w-full peer focus:placeholder-primary focus:text-primary"
          placeholder={placeholder}
          rows={rows}
          required={required}
          name={name}
          onChange={onChange}
          value={value}
        />
        <AiOutlineEdit className={`h-6 transition-all duration-300 text-black peer-focus:text-primary ${iconClass}`} />
      </div>
    </div>
  );
};

export default TypeArea;
