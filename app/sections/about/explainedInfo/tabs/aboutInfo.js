import { BiSolidSelectMultiple } from "react-icons/bi";

const AboutInfo = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="max-w-6xl text-xl font-medium opacity-75 ">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words look even slightly believable. If you are going to use
        a passage of Lorem Ipsum, you need to be sure there isn!t anything
        embarrassing hidden in the middle of text. Ipsum generators on the
        Internet tend to repeat predefined chunks as necessary, making this the
        first true generator on the Internet. It uses a dictionary of over 200
        combined with a handful of model sentence structures, to generate Lorem
        Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
        always free from characteristic words etc.
      </p>
      <h1 className="font-teko text-2xl font-medium">
        World best education site - (Computer engeenering)
      </h1>
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
export default AboutInfo;
