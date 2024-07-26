import Heading from "@/app/components/header/heading/heading";
import Image from "next/image";

const Achievement = () => {
  const achievements = [
    {
      title: "2020 - 2021",
      investment: "795K",
      profit: "2M",
      icon: "/icons/uparrow.png",
      percentage: "183%",
    },
    {
      title: "2021 - 2021",
      investment: "759K",
      profit: "2.3M",
      icon: "/icons/arrow.png",
      percentage: "270%",
    },
    {
      title: "2022 - 2023",
      investment: "$1M",
      profit: "4M",
      icon: "/icons/uparrow.png",
      percentage: "128%",
    },
  ];
  const overview = [
    {
      icon: "/icons/group.png",
      title: "2020 - 2021",
    },
    {
      icon: "/icons/bar-chart.png",
      title: "2021 - 2022",
    },
    {
      icon: "/icons/social-reach.png",
      title: "2022 - 2023",
    },
  ];
  return (
    <div className="relative overflow-hidden">
      <div className="absolute w-[30rem] lg:w-[40rem] h-[30rem] lg:h-[40rem] bg-primary hidden md:flex z-[-1] rounded-[5rem] -top-[15%] -right-16 rotate-45" />
      <Image
        className="absolute bottom-0 left-0 z-[-1]"
        src="/patterns/pattern-16.png"
        alt="pattern"
        width={250}
        height={750}
      />
      <div className="py-20 w-full lg:w-container mx-auto px-4 lg:px-20">
        <Heading title={"Our Achievement"} />
        <div className="p-0 lg:p-5 flex flex-col md:flex-row items-start md:gap-36">
          <div className="space-y-10 w-full lg:w-2/3">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-teko font-semibold leading-tight">
              We Achieved <span className="text-primary">Success</span>
              <br />
              Awards & Rewards
            </h1>
            <div className="flex items-start lg:items-center gap-5">
              <Image
                src="/icons/achievement.png"
                alt="achievement"
                className="w-16 h-16"
                width={50}
                height={50}
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl lg:text-2xl font-bold">
                  Outsourced Digital Awards
                </h1>
                <p className="max-w-md text-sm opacity-75">
                  Digital Marketing Service is the name of a kind of magic to
                  boost up your business number of your customers and generate
                  sales.
                </p>
              </div>
            </div>
            <div className="bg-controller rounded shadow-lg w-full max-w-full md:max-w-xl space-y-5 px-6 py-8">
              {achievements?.map((achievement, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between text-lg sm:text-xl lg:text-2xl font-medium ${
                    i < achievements?.length - 1 ? "border-b-2 pb-3" : ""
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className="font-bold">{achievement?.title}</span>
                    <span>{achievement?.investment}</span>
                    <span>{achievement?.profit}</span>
                  </div>
                  <Image
                    className={`${
                      achievement?.profit?.includes("2.3M") ? "rotate-180" : ""
                    } hidden lg:flex`}
                    src={achievement.icon}
                    alt="icon"
                    width={25}
                    height={25}
                  />
                  <h1 className="text-primary text-2xl sm:text-3xl font-semibold">
                    {achievement?.percentage}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 mx-auto space-y-5 mt-10 lg:mt-0">
            {overview.map((item, i) => (
              <div
                key={i}
                className="h-40 w-full md:w-52 bg-white shadow-lg rounded-md flex flex-col items-center gap-4 p-6 z-[1] border-b-8 border-b-transparent hover:border-b-primary transition-all duration-500"
              >
                <Image
                  src={item?.icon}
                  alt="overview icon"
                  className="w-10 h-10"
                  width={25}
                  height={25}
                />
                <h1 className="font-teko font-medium text-2xl ">
                  {item?.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Achievement;
