import { IoIosArrowForward } from "react-icons/io";
import StaticNavbar from "../../navigation/static/staticNavbar";

const ParalaxBanner = ({ title }) => {
  return (
    <div
      className="h-full max-h-[50vh] bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(3, 4, 27, 0.65), rgba(3, 4, 27, 0.65)), url(${"/bg/banner.jpg"})`,
      }}
    >
      <StaticNavbar />
      <div className="flex flex-col items-center justify-center min-h-72 font-teko text-white">
        <h1 className="text-7xl font-semibold">{title}</h1>
        <span className="text-xl flex items-center gap-2">
          Home <IoIosArrowForward className="mb-1" /> {title}
        </span>
      </div>
    </div>
  );
};
export default ParalaxBanner;
