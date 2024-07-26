import Image from "next/image";
import { SlOptionsVertical } from "react-icons/sl";
const Projects = () => {
  const projects = [
    {
      img: "/blogs/news-4.png",
      title: "Blogie",
      category: "blog",
      deadline: "7/22/2024",
      price: 70,
    },
    {
      img: "/blogs/news-5.png",
      title: "Blogie",
      category: "blog",
      deadline: "7/22/2024",
      price: 70,
    },
    {
      img: "/blogs/news-6.png",
      title: "Blogie",
      category: "blog",
      deadline: "7/22/2024",
      price: 70,
    },
    {
      img: "/blogs/news-7.png",
      title: "Blogie",
      category: "blog",
      deadline: "7/22/2024",
      price: 70,
    },
  ];
  return (
    <div className="mt-10  overflow-x-auto">
        <h1 className="text-3xl font-semibold">Projects</h1>
      <table className="min-w-full divide-y">
        <thead>
          <tr>
            <th className="py-3 px-5">#</th>
            <th className="py-3 px-5">Title</th>
            <th className="py-3 px-5">Category</th>
            <th className="py-3 px-5">Deadline</th>
            <th className="py-3 px-5">Price</th>
            <th className="py-3 px-5">Options</th>
          </tr>
        </thead>
        <tbody className="gap-3 divide-y ">
          {projects?.map((project, i) => (
            <tr key={i} className="">
              <td className="py-3 px-5 flex justify-center">
                <Image
                  src={project?.img}
                  alt={project?.title}
                  className="rounded"
                  width={50}
                  height={50}
                />
              </td>
              <td className="py-3 px-5 font-semibold text-center">{project?.title}</td>
              <td className="py-3 px-5 font-semibold text-center">{project?.category}</td>
              <td className="py-3 px-5 font-semibold text-center">{project?.deadline}</td>
              <td className="py-3 px-5 font-bold text-center">{project?.price}</td>
              <td className="py-3 px-5 font-bold flex justify-center"><SlOptionsVertical /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Projects;
