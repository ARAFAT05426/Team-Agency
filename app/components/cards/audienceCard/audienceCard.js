import "./AudienceCard.css";
import Image from "next/image";

const AudienceCard = ({ icon, subicon, title, subtitle }) => {
  return (
    <div className="audience group p-5 relative overflow-hidden bg-controller rounded-md flex flex-col items-center gap-5 w-full min-h-fit lg:min-h-56 shadow">
      {/* Normal state */}
      <div className="relative">
        <Image
          className="scale-100 opacity-100 rotate-0 group-hover:-rotate-90 group-hover:scale-0 group-hover:opacity-0 transition-all duration-500 ease-in-out"
          src={icon}
          alt=""
          width={75}
          height={75}
        />
        {/* Hover state */}
        <Image
          className="absolute top-0 left-0 scale-0 opacity-0 rotate-90 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-in-out"
          src={subicon}
          alt=""
          width={75}
          height={75}
        />
      </div>
      <div className="text-center space-y-2 z-10">
        <h3 className="text-5xl font-teko group-hover:text-white transition-all duration-500">
          {title}
        </h3>
        <p className="text-lg opacity-75 group-hover:opacity-100 group-hover:text-white transition-all duration-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AudienceCard;
