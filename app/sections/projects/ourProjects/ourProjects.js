import ProjectCard from "@/app/components/cards/projectCard/projectCard";
import Heading from "@/app/components/header/heading/heading";

const OurProjects = () => {
  const projects = [
    {
      img: "/blogs/news-4.png",
      title: "Business Growth",
    },
    {
      img: "/blogs/news-5.png",
      title: "Digital Campaign",
    },
    {
      img: "/blogs/news-6.png",
      title: "Finance Consulting",
    },
    {
      img: "/blogs/news-4.png",
      title: "Marketing Advice",
    },
    {
      img: "/blogs/news-4.png",
      title: "Substantial Business",
    },
    {
      img: "/blogs/news-6.png",
      title: "Top-Notch Consulting",
    },
  ];
  return (
    <div className="w-full lg:w-container mx-auto space-y-5 lg:space-y-10">
      <div className="flex flex-col items-center">
        <Heading title={"Our Portfolio"} />
        <h1 className="text-7xl font-teko font-semibold">
          Our <span className="text-primary">Work</span> Project
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
};
export default OurProjects;
