import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaSkype,
} from "react-icons/fa";
import "./socialbox.css";
import Image from "next/image";
const Socialbox = () => {
  return (
    <div className="relative hidden md:block h-80 lg:h-96 w-80 lg:w-[27rem] text-white/25 text-5xl">
      <Image
        src="/patterns/earth.png"
        alt="Earth"
        className="earth"
        width={200}
        height={200}
      />
      <div className="icon icon-facebook">
        <FaFacebookF />
      </div>
      <div className="icon icon-twitter">
        <FaTwitter />
      </div>
      <div className="icon icon-linkedin">
        <FaLinkedinIn />
      </div>
      <div className="icon icon-instagram">
        <FaInstagram />
      </div>
      <div className="icon icon-pinterest">
        <FaPinterestP />
      </div>
      <div className="icon icon-skype">
        <FaSkype />
      </div>
    </div>
  );
};
export default Socialbox;
