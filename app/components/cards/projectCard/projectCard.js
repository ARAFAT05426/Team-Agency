import { TiArrowRight } from "react-icons/ti";
import Link from "next/link";
import "./projectCard.css";
import Image from "next/image";
const ProjectCard = ({ project }) => {
  return (
    <div className="relative group overflow-hidden">
      <div className="relative projectimg overflow-hidden h-fit">
        <Image
          width={500}
          height={500}
          src={project?.img}
          alt={project?.title}
          className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="project-overlay" />
      </div>
      <div className="project w-[90%] mx-auto shadow-lg bg-white p-8 space-y-2 min-h-36 -translate-y-1/2 group-hover:after:w-full z-10">
        <span className="font-semibold opacity-75 group-hover:text-white transition-all duration-500">
          PROJECTS V1
        </span>
        <h2 className="text-3xl font-teko font-semibold group-hover:text-white transition-all duration-500">
          {project?.title}
        </h2>
        <Link
          href={`/projects/${project?.title}`}
          className="relative py-1 flex items-center font-teko text-xl gap-3 text-primary group-hover:text-white transition-all duration-500 ease-in-out cursor-pointer w-fit group-hover:translate-x-5"
        >
          View Details
          <TiArrowRight className="mb-1 text-3xl transition-transform duration-500 ease-in-out group-hover:-translate-x-28" />
        </Link>
      </div>
    </div>
  );
};
export default ProjectCard;
