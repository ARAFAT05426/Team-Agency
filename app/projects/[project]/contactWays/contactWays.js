import { BsChatFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaRegClock,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { RiContactsBook3Line } from "react-icons/ri";
const ContactWays = () => {
  return (
    <div className="bg-white shadow px-5 py-7 w-full max-w-full lg:max-w-sm divide-y border lg:border-none border-slate-200">
      <div className="space-y-4 p-5">
        <h1 className="text-3xl font-teko font-semibold flex items-center gap-3">
          <GrMapLocation className="text-primary text-4xl mb-1" />
          Our Address
        </h1>
        <p className="text-lg">
          Level 13, 2 Elizabeth St, Melbourne <br /> Victoria 3000, Australia
        </p>
      </div>
      <div className="space-y-4 p-5">
        <h1 className="text-3xl font-teko font-semibold flex items-center gap-3">
          <RiContactsBook3Line className="text-primary text-4xl mb-1" />
          Contact Way
        </h1>
        <div className="flex items-center gap-2">
          <BsChatFill className="text-2xl mb-1 text-primary" />
          deanna.curtis@example.com
        </div>
        <div className="flex items-center gap-2">
          <FaPhone className="text-2xl mb-1 text-primary" />
          (406)-555-0120
        </div>
      </div>
      <div className="space-y-4 p-5">
        <div className="text-3xl font-teko font-semibold flex items-center gap-x-3">
          <FaRegClock className="h-full p-5 bg-opct text-primary text-7xl mb-1 rounded" />
          <div className="-space-y-2">
            <h1>Opening Hours</h1>
            <p className="text-lg font-thin">
              Mon - Sat(8.00am - 6.00pm) <br /> Sunday - Closed
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaFacebookF className="text-primary text-4xl p-3 hover:text-white hover:bg-primary transition-all duration-300 cursor-pointer rounded-full bg-opct" />
          <FaTwitter className="text-primary text-4xl p-3 hover:text-white hover:bg-primary transition-all duration-300 cursor-pointer rounded-full bg-opct" />
          <FaLinkedinIn className="text-primary text-4xl p-3 hover:text-white hover:bg-primary transition-all duration-300 cursor-pointer rounded-full bg-opct" />
          <FaSkype className="text-primary text-4xl p-3 hover:text-white hover:bg-primary transition-all duration-300 cursor-pointer rounded-full bg-opct" />
        </div>
      </div>
    </div>
  );
};
export default ContactWays;
