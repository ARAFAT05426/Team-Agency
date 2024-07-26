import FolowUs from "./sections/common/folowUs/folowUs";
import Gallery from "./sections/common/gallery/gallery";
import Partners from "./sections/common/partners/partners";
import Achievement from "./sections/home/achievement/achievement";
import Agency from "./sections/home/agency/agency";
import Banner from "./sections/home/banner/banner";
import CoreFeatures from "./sections/home/coreFeatures/coreFeatures";
import Overview from "./sections/home/overview/overview";
import ServicesOverview from "./sections/home/servicesOverview/servicesOverview";
import ShortBlogs from "./sections/home/shortBlogs/shortBlogs";

export default function Home() {
  return (
    <>
      <Banner />
      <Overview />
      <Agency />
      <ServicesOverview />
      <FolowUs />
      <CoreFeatures />
      <Gallery />
      <Achievement />
      <ShortBlogs />
    </>
  );
}
