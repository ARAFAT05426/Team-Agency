import AudienceCard from "@/app/components/cards/audienceCard/audienceCard";

const DesignStudio = () => {
  const cards = [
    {
      icon: "/icons/group.png",
      subicon: "/icons/whitegroup.png",
      title: "320M",
      subtitle: "Audience reach",
    },
    {
      icon: "/icons/notebook.png",
      subicon: "/icons/whitenotebook.png",
      title: "980+",
      subtitle: "Success Projects",
    },
  ];
  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-5 lg:px-0 flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-5">
        <h1 className="font-teko font-semibold text-white text-3xl sm:text-5xl lg:text-7xl text-center lg:text-left max-w-2xl">
          DESIGN <span className="text-primary">STUDIO</span> THAT GETS EXCITED
          ABOUT
        </h1>
        <div className="flex flex-col items-center md:flex-row gap-5 w-full md:w-fit">
          {cards.map((card, i) => (
            <div key={i} className="w-full min-w-full md:min-w-56">
              <AudienceCard
                icon={card?.icon}
                subicon={card?.subicon}
                title={card?.title}
                subtitle={card?.subtitle}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DesignStudio;
