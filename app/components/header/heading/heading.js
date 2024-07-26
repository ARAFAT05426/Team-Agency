import { DiMagento } from "react-icons/di";
const Heading = ({title}) => {
  return (
    <div
      className="bg-no-repeat bg-center bg-contain min-h-12 max-w-fit p-3"
      style={{ backgroundImage: `url('/patterns/heading-bg.png')` }}
    >
      <h1 className="flex items-center px-5 py-3 text-2xl font-teko font-semibold text-primary">
        <DiMagento /> {title}
      </h1>
    </div>
  );
};
export default Heading;
