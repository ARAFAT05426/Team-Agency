import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const TypePassword = () => {
  const [isPassword, setIsPassword] = useState(false);

  return (
    <div className="w-full border px-4 py-1 rounded-[3px] flex items-center justify-between border-secondary/50 transition-all duration-300 peer-focus-within:border-primary">
      <input
        className="outline-none flex-1 py-3 bg-transparent placeholder-black text-secondary peer focus:placeholder-primary focus:text-primary"
        placeholder="password *"
        type={isPassword ? "text" : "password"}
        name="password"
        id="password"
        required
      />
      <div className="h-6">
        {isPassword ? (
          <FaEyeSlash
            onClick={() => setIsPassword(!isPassword)}
            className="transition-all duration-300 cursor-pointer mt-1 text-secondary peer-focus:text-primary"
          />
        ) : (
          <FaEye
            onClick={() => setIsPassword(!isPassword)}
            className="transition-all duration-300 cursor-pointer mt-1 text-secondary peer-focus:text-primary"
          />
        )}
      </div>
    </div>
  );
};

export default TypePassword;
