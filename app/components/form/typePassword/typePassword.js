import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const TypePassword = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  return (
    <div
      className={`w-full border px-4 py-1 rounded-[3px] flex items-center justify-between ${
        isFocused ? "border-primary" : "border-secondary/50"
      } transition-all duration-300 border`}
    >
      <input
        className={`outline-none flex-1 py-3 bg-transparent ${
          isFocused
            ? "placeholder-primary text-primary"
            : "placeholder-black text-secondary"
        }`}
        placeholder={` password *`}
        type={isPassword ? "text" : "password"}
        name={"password"}
        id={"password"}
        required
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className="h-6">
        {isPassword ? (
          <FaEyeSlash
            onClick={() => setIsPassword(!isPassword)}
            className={`${
              isFocused ? "text-primary" : ""
            } transition-all duration-300 cursor-pointer mt-1`}
          />
        ) : (
          <FaEye
            onClick={() => setIsPassword(!isPassword)}
            className={`${
              isFocused ? "text-primary" : ""
            } transition-all duration-300 cursor-pointer mt-1`}
          />
        )}
      </div>
    </div>
  );
};
export default TypePassword;
