import PlayVideo from "../../common/folowUs/playVideo/playVideo";

const ServicesConsult = () => {
  return (
    <div className="-mb-14 relative h-auto lg:h-36 w-full md:w-container mx-auto flex flex-col md:flex-row items-center justify-between bg-secondary md:bg-gradient-to-r from-[#1A1A2A]/90 via-secondary to-primary px-5 lg:px-16 py-4 lg:py-0 rounded">
      <img
        className="absolute -top-1 left-5 animate-slow-spin hidden lg:block"
        src="/icons/vector7.png"
        alt=""
      />
      <h1 className="font-teko text-center lg:text-left font-semibold text-2xl lg:text-3xl text-white">
        Want to <span className="text-primary mx-2">consult</span> with our
        team?
      </h1>
      <img
        className="absolute top-10 inset-x-[35%] animate-slow-spin hidden lg:block"
        src="/icons/vector8.png"
        alt=""
      />
      <div className="flex flex-col-reverse md:flex-row items-center">
        <h1 className="font-teko text-center lg:text-left font-semibold text-2xl lg:text-3xl text-white my-4 lg:my-0">
          See Our <span className="text-primary ml-1">Video</span> To Know More!
        </h1>
        <div className="mt-4 lg:mt-0">
          <PlayVideo className="bg-white/75 text-primary w-12 h-12 lg:w-16 lg:h-16" />
        </div>
      </div>
    </div>
  );
};
export default ServicesConsult;
