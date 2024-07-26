import PrimaryButton from "@/app/components/buttons/primaryButton/primaryButton";
import { MdOutlineDateRange } from "react-icons/md";
import ContactWays from "./contactWays/contactWays";
import { TbListDetails } from "react-icons/tb";
import { GiCheckMark } from "react-icons/gi";
import { CiHome } from "react-icons/ci";
import Image from "next/image";
import ParalaxBanner from "@/app/components/header/paralaxBanner/paralaxBanner";

const Page = ({ params }) => {
  const details = [
    {
      icon: CiHome,
      title: "Client name",
      description: "Leslie Alexander",
    },
    {
      icon: TbListDetails,
      title: "Project Detils",
      description: "E-commerce",
    },
    {
      icon: MdOutlineDateRange,
      title: "Complete Date",
      description: "12 Jan 2018",
    },
  ];
  return (
    <>
      <ParalaxBanner title={"Project Detail"} />
      <div className="max-w-6xl mx-5 lg:mx-auto py-20 space-y-5">
        <Image
          className="w-full border shadow"
          src="https://themexriver.com/wp/aginco/wp-content/uploads/2022/04/8.jpg"
          alt=""
          width={750}
          height={500}
        />
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex flex-wrap items-center gap-10">
            {details.map((detail, i) => (
              <div key={i} className="flex items-center gap-2 p-1">
                <detail.icon className="text-3xl text-primary" />
                <div>
                  <h1 className="font-teko text-xl font-semibold">
                    {detail.title}
                  </h1>
                  <span className="text-sm opacity-75">
                    {detail.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <PrimaryButton
            className="bg-primary before:bg-secondary rounded"
            size={"text-sm lg:text-lg"}
            text="Need This Project"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-5">
          <div className="space-y-3">
            <h1 className="font-teko font-semibold text-3xl">
              DIGITAL MARKETING
            </h1>
            <p className="max-w-4xl text-lg opacity-75">
              Donec enim dolor sit amet, consectetur adipisicing elit. Placeat
              qui ducimus illum modi? perspiciatis accusamus soluta perferendis,
              ad illum, nesciunt, reiciendis iusto et cupidit Repudiandae
              provident to consectetur, sapiente, libero iure necessitatibus
              corporis nulla voluptate, quisquam aut perspiciatis? Fugiat labore
              aspernatur eius, perspiciatis ut molestiae, delectus rem. <br />{" "}
              <br />
              Morbi vitae dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ut
              enim ad minim veniam. when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. <br /> <br />
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat. There are many
              variations of passages.
            </p>
            <h1 className="font-teko font-semibold text-2xl py-3">
              THIS EVENT WILL ALLOW PARTICIPANTS TO:
            </h1>
            <div className="flex items-center gap-2">
              <GiCheckMark className="text-primary text-xs" />
              Business's managers, leaders
            </div>
            <div className="flex items-center gap-2">
              <GiCheckMark className="text-primary text-xs" />
              Downloadable lectures, code and design assets for all projects
            </div>
            <div className="flex items-center gap-2">
              <GiCheckMark className="text-primary text-xs" />
              Anyone who is finding a chance to get the promotion
            </div>
          </div>
          <ContactWays />
        </div>
      </div>
    </>
  );
};
export default Page;
