import Image from "next/image";
import InfoContainer from "./container/infoContainer";

const ExplainedInfo = () => {
  return     <div className="relative py-10 lg:py-20 px-4 lg:px-0">
  <Image
    className="absolute bottom-0 left-0 z-[-1] min-h-72 "
    src="/about/infos_bg.png"
    alt=""
    width={500}
    height={500}
  />
  <Image
    className="absolute bottom-0 right-0 z-[-1]"
    src="/patterns/pattern-15.png"
    alt=""
    width={500}
    height={500}
  />
  <div className="max-w-7xl mx-auto flex flex-col gap-10">
    <InfoContainer />
  </div>
</div>
};
export default ExplainedInfo;