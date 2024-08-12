import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <div className="group relative overflow-hidden w-full h-full shadow-md flex flex-col max-w-lg border border-slate-200 rounded-sm z-10">
      <div className="relative group-hover:before:left-3/4 w-full h-60 glassy">
        <div className="group-hover:opacity-25 transition-all duration-300 w-full h-full bg-primary absolute opacity-0 z-10" />
        <Image
          src={blog?.img}
          alt={blog?.title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover group-hover:rotate-3 group-hover:scale-105"
        />
        <div
          className="absolute inset-y-1/2 -left-12 bg-primary w-[10rem] h-10 text-center py-2 px-3 font-teko text-lg font-semibold rotate-90 text-white z-20"
          style={{
            clipPath:
              "polygon(10% 0, 90% 0, 95% 51%, 100% 100%, 0 100%, 5% 49%)",
          }}
        >
          {blog?.date}
        </div>
      </div>
      <div className="flex flex-col p-5 gap-3 flex-1">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <FaUser className="text-primary mb-1" />
            <span className="opacity-75">{blog?.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <RiMessage2Fill className="text-primary mb-1" />
            <span className="opacity-75">{blog?.commentCount} Comments</span>
          </div>
        </div>
        <div className="font-teko font-medium text-3xl flex-1 hover:text-primary transition-all duration-300">
          {blog.title}
        </div>
      </div>
      <Link
        href={`/blogs/${blog?.commentCount}`}
        className="relative group py-1 flex items-center font-teko text-xl gap-3 m-5 hover:text-primary transition-all duration-500 cursor-pointer translate-x-0 w-fit hover:translate-x-5"
      >
        Read More
        <MdOutlineKeyboardDoubleArrowRight className="" />
      </Link>
    </div>
  );
};

export default BlogCard;
