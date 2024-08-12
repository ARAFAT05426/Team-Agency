const StatCard = ({ Icon, title, value, description, gradiant }) => {
  return (
    <div className="w-full max-w-xs lg:max-w-sm shadow rounded px-5 py-6 transition-all duration-300 hover:shadow-md border border-orange-400/25">
      <div className="flex items-start justify-between">
        <div className="font-montserrat">
          <h4 className="text-lg tracking-wider font-semibold">{title}</h4>
          <h1 className={`text-3xl tracking-wide font-bold text-transparent bg-clip-text bg-gradient-to-tr ${gradiant}`}>
            {value}
          </h1>
          {description && <p className="text-xs font-semibold mt-1">{description}</p>}
        </div>
        <div className={`p-3 rounded-full bg-gradient-to-tr ${gradiant}`}>
          <Icon className="w-9 h-9 text-white" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
