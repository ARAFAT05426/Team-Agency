import AudienceCard from "@/app/components/cards/audienceCard/audienceCard";
import Progressbar from "@/app/components/progressbar/Progressbar";

const MarketingStrategy = () => {
  return (
    <div className="w-full lg:max-w-xl space-y-7">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-loose">
        The <span className="text-primary">Best Marketing</span>
        Agency In BDes
      </h1>
      <p className="text-sm md:text-base">
        “Vestibulum at porta business model, assessment of the company’s compet
        itiveness and market position, financial condition, as well as all
        possible risks and their minimization in the medium and long-term
        prospects.”
      </p>
      <Progressbar title={"DIGITAL STRATEGY"} progress={73} />
      <Progressbar title={"FINANCIAL SERVICES"} progress={93} />
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-5">
        <AudienceCard
          icon="/icons/group.png"
          subicon="/icons/whitegroup.png"
          title="320M"
          subtitle="Audience reach"
        />
        <AudienceCard
          icon="/icons/notebook.png"
          subicon="/icons/whitenotebook.png"
          title="980+"
          subtitle="Success Projects"
        />
        <AudienceCard
          icon="/icons/user.png"
          subicon="/icons/whiteuser.png"
          title="1278"
          subtitle="Employee World"
        />
      </div>
    </div>
  );
};
export default MarketingStrategy;
