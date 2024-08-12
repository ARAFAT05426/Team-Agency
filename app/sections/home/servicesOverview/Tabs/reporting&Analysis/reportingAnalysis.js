import AudienceCard from "@/app/components/cards/audienceCard/audienceCard";
import Progressbar from "@/app/components/progressbar/Progressbar";

const ReportingAnalysis = () => {
  return (
    <div className="space-y-7">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-loose">
        How <span className="text-primary">Analytics</span> Helping Face
        Challenges
      </h1>
      <p className="text-sm md:text-base">
        “Analysis of the current business model, assessment of the company’s
        competitiveness and market position, financial condition, as well as all
        possible risks and their minimization in the medium and long-term
        prospects.”
      </p>
      <Progressbar title={"DIGITAL STRATEGY"} progress={90} />
      <Progressbar title={"FINANCIAL SERVICES"} progress={81} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
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

export default ReportingAnalysis;
