import ExplainedInfo from "@/app/sections/about/explainedInfo/explainedInfo";
import AboutHeader from "@/app/sections/about/header/aboutHeader";
import OurAgency from "@/app/sections/about/ourAgency/ourAgency";
import OurTeam from "@/app/sections/about/ourTeam/ourTeam";
import Testimonial from "@/app/sections/about/testimonial/testimonial";
import FolowUs from "@/app/sections/common/folowUs/folowUs";
import Gallery from "@/app/sections/common/gallery/gallery";

const Page = () => {
  return (
    <>
      <AboutHeader />
      <OurAgency />
      <ExplainedInfo />
      <Gallery />
      <OurTeam />
      <FolowUs />
      <Testimonial />
    </>
  );
};
export default Page;
