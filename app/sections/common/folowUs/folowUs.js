import Image from "next/image";
import { BiSolidUserBadge } from "react-icons/bi";
import PlayVideo from "./playVideo/playVideo";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

const FolowUs = () => {
  const socialIcons = [
    { icon: FaFacebookF, href: "" },
    { icon: FaTwitter, href: "" },
    { icon: FaLinkedinIn, href: "" },
    { icon: FaSkype, href: "" },
  ];

  return (
    <div className="relative h-full lg:h-44 flex flex-col md:flex-row items-center w-full lg:w-container mx-auto bg-controller rounded overflow-hidden">
      <div className="relative flex flex-col items-center lg:items-start w-full max-w-sm  space-y-5 px-5 py-7 z-10 bg-controller">
        <div className="flex items-center gap-2 text-3xl font-semibold font-teko">
          <BiSolidUserBadge className="text-5xl text-primary" />
          <h1>Folow Us</h1>
        </div>
        <div className="flex items-center gap-3">
          {socialIcons?.map((socialIcon, i) => (
            <Link
              key={i}
              href={socialIcon.href}
              className="bg-controller text-primary p-3 shadow rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              <socialIcon.icon className={`text-lg`} />
            </Link>
          ))}
        </div>
      </div>
      <div className="relative bg-primary flex-1 py-7 px-5 h-full flex flex-col items-center justify-center">
        <div className="static lg:absolute inset-y-1/3 -left-10 z-10">
          <PlayVideo className={`bg-secondary text-white p-5`} />
        </div>
        <div className="text-white text-center lg:text-start space-y-3">
          <h1 className="text-3xl lg:text-5xl font-teko font-semibold flex flex-col lg:flex-row items-center gap-2 ">
            Still Need Our Help?{" "}
            <span className="text-xl flex items-center gap-1">
              <FaPhoneAlt /> (406) 555-0120
            </span>
          </h1>
          <p>
            Don’t wait, make a smart & logical quote here. It`s pretty easy.
          </p>
        </div>
      </div>
    </div>
  );
};
export default FolowUs;
