"use client"
import Modal404 from "@/app/components/modal/modal404/modal404";
import LinearProgress from "@/app/components/progressbar/linearProgress";
import Image from "next/image";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
const Projects = () => {
  const [isOpen, setOpen] = useState(false)
  const projects = [
    {
      img: "/blogs/news-4.png",
      title: "Blogie",
      category: "blog",
      deadline: "24 hours left",
      price: 70,
    },
    {
      img: "/blogs/news-5.png",
      title: "Blogie",
      category: "blog",
      deadline: "5 dasys left",
      price: 70,
    },
    {
      img: "/blogs/news-6.png",
      title: "Blogie",
      category: "blog",
      deadline: "2 dasys left",
      price: 70,
    },
    {
      img: "/blogs/news-7.png",
      title: "Blogie",
      category: "blog",
      deadline: "7 dasys left",
      price: 70,
    },
  ];
  return (
    <div className="mt-10 max-w-5xl py-5 border border-slate-100 rounded-md bg-white shadow-md overflow-x-auto">
      <div className="pl-5">
        <h1 className="text-3xl font-teko font-bold">Projects</h1>
        <span className="flex items-center gap-2 font-bold text-xs my-3">
          <FaCheck className="text-green-500" /> 30 done this month
        </span>
      </div>
      <table className="min-w-full divide-y">
        <thead>
          <tr>
            <th className="py-3 px-5 text-left text-lg opacity-75 font-bold font-teko">
              Client
            </th>
            <th className="py-3 px-5 text-left text-lg opacity-75 font-bold font-teko">
              Category
            </th>
            <th className="py-3 px-5 text-left text-lg opacity-75 font-bold font-teko">
              Budget
            </th>
            <th className="py-3 px-5 text-left text-lg opacity-75 font-bold font-teko">
              Deadline
            </th>
            <th className="py-3 px-5 text-left text-lg opacity-75 font-bold font-teko">
              Status
            </th>
            <th className="py-3 px-5 text-left text-lg opacity-75 font-bold font-teko">
              Options
            </th>
          </tr>
        </thead>
        <tbody className="gap-3 divide-y font-teko font-semibold">
          {projects?.map((project, i) => (
            <tr key={i} className="">
              <td className="py-3 px-5 flex items-center gap-2">
                <Image
                  src={project?.img}
                  alt={project?.title}
                  className="rounded-md w-7 h-7 object-cover"
                  width={50}
                  height={50}
                />
                <h1>{project?.title}</h1>
              </td>
              <td className="py-3 px-5 font-semibold">{project?.category}</td>
              <td className="py-3 px-5 text-sm font-bold text-gray-600">
                $ {project?.price}
              </td>
              <td className="py-3 px-5 text-sm text-gray-600 font-bold">
                {project?.deadline}
              </td>
              <td className="py-3 px-5 font-bold">
                <LinearProgress progress={70} />
              </td>
              <td className="py-3 px-5 font-bold flex justify-center">
                <SlOptionsVertical onClick={() =>setOpen(true)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal404 isOpen={isOpen} setIsOpen={setOpen} />
    </div>
  );
};
export default Projects;
