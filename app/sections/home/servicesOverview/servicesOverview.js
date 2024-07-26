import SevicesOverviewContainer from "./container/sevicesOverviewContainer";
const ServicesOverview = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute -left-0 lg:-left-[10%] -top-1/4 w-[45rem] h-[45rem] bg-primary rounded-[6rem] rotate-45 -z-[1]" />
        <SevicesOverviewContainer />
    </div>
  );
};
export default ServicesOverview;
