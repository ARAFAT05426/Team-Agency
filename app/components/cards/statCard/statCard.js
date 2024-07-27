import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const StatCard = ({ Icon, gradiant, title, value, inc, dec }) => {
  return (
    <div className={`relative w-full max-w-sm flex shadow-md border border-opacity-50 rounded-lg px-7 py-5 min-h-40`}>
      <Icon
        className={`absolute -top-5 p-3 text-7xl bg-gradient-to-bl ${gradiant} rounded-xl shadow-lg`}
      />
      <div className="flex items-end justify-between w-full">
        <div>
          {inc && (
            <div className="flex items-center gap-2 font-semibold text-lg text-green-500">
              <FaArrowUp className="text-base" />
              {inc}%
            </div>
          )}
          {dec && (
            <div className="flex items-center gap-2 font-semibold text-lg text-red-500">
              <FaArrowDown className="text-base" />
              {dec}%
            </div>
          )}
        </div>
        <div className="flex flex-col items-end gap-2 font-teko">
          <h1 className="text-4xl font-bold">{value}</h1>
          <h3 className="font-semibold text-lg mr-[2px] opacity-75">{title}</h3>
        </div>
      </div>
    </div>
  );
};
export default StatCard;
