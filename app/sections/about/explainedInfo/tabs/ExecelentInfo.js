import { BiSolidSelectMultiple } from "react-icons/bi";

const ExecelentInfo = () => {
  return (
    <div className="space-y-7">
      <p className="text-xl opacity-75">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which dont look even slightly believable. If you are
        going to useery
      </p>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex items-start gap-3 max-w-xl text-md lg:text-xl">
          <BiSolidSelectMultiple
            size={35}
            className="mt-1 text-primary text-4xl lg:text-2xl"
          />
          Preaching Worship An Online Family
        </div>
        <div className="flex items-start gap-3 max-w-xl text-md lg:text-xl">
          <BiSolidSelectMultiple
            size={35}
            className="mt-1 text-primary text-4xl lg:text-2xl"
          />
          Don’t wait make a smart & logical quote here. Its pretty easy.
        </div>
        <div className="flex items-start gap-3 max-w-xl text-md lg:text-xl">
          <BiSolidSelectMultiple
            size={35}
            className="mt-1 text-primary text-4xl lg:text-2xl"
          />
          It uses a dictionary of over 200 combined with a handful of model
          sentence
        </div>
        <div className="flex items-start gap-3 max-w-xl text-md lg:text-xl">
          <BiSolidSelectMultiple
            size={35}
            className="mt-1 text-primary text-4xl lg:text-2xl"
          />
          you need to be sure there isn!t anything embarrassing hidden in the
          middle of text
        </div>
      </div>
    </div>
  );
};
export default ExecelentInfo;
