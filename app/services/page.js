import BookNow from "@/app/sections/services/bookNow/bookNow";
import ServicesConsult from "@/app/sections/services/consult/servicesConsult";
import DesignStudio from "@/app/sections/services/designStudio/designStudio";
import ServicesHeader from "@/app/sections/services/header/servicesHeader";
import OurServices from "@/app/sections/services/ourServices/ourServices";
import Stretagy from "@/app/sections/services/stretagy/stretagy";

const Page = () => {
  return (
    <>
      <ServicesHeader />
      <OurServices />
      <ServicesConsult />
      <Stretagy />
      <DesignStudio />
      <BookNow />
    </>
  );
};
export default Page;
