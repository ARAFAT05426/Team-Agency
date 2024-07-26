import { FaPlay } from "react-icons/fa";
import "./playVideo.css"
const PlayVideo = ({ className }) => {
  return (
    <div className={``}>
      <button className={`playvideo ${className}`}>
        <FaPlay size={26} className="icon-white" />
        <div className="vidpulse-circle"></div>
        <div className="vidpulse-circle"></div>
        <div className="vidpulse-circle"></div>
      </button>
    </div>
  );
};
export default PlayVideo;
