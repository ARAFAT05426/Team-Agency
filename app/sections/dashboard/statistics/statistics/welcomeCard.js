import Image from "next/image";

const WelcomeCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between shadow-md rounded-md px-7 py-5 border border-primary/25 mb-7 bg-white">
      <div className="text-center md:text-left">
        <h1 className="bg-gradient-to-br from-primary via-orange-500 to-orange-800 text-2xl md:text-4xl text-transparent bg-clip-text font-montserrat font-bold mb-4">
          Welcome back, ready to customize <br className="hidden md:block" /> client-template
          <span className="text-black">👋</span>
        </h1>
        <p className="text-gray-600 font-montserrat font-medium">
          We're glad to see you again.
        </p>
        <button className="mt-3 bg-primary/75 font-montserrat font-medium text-white py-3 px-7 rounded hover:bg-primary transition duration-300">
          View Details
        </button>
      </div>
      <Image
        height={350}
        width={500}
        className="w-full md:max-w-xs max-h-60 object-cover mt-5 md:mt-0"
        src="/common/welcome.png"
        alt="Welcome"
      />
    </div>
  );
};

export default WelcomeCard;
