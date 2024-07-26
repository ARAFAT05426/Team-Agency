import BlogCard from "@/app/components/cards/blogCard/blogCard";
import Heading from "@/app/components/header/heading/heading";
import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { IoChatbubbleOutline, IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const OurBlogs = () => {
  const blogs = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      img: "/blogs/news-4.png",
      date: "July 1 2024",
      commentCount: 15,
      author: "John Doe",
    },
    {
      title: "10 Tips for Effective Remote Working",
      img: "/blogs/news-5.png",
      date: "June 25 2024",
      commentCount: 8,
      author: "Jane Smith",
    },
    {
      title: "Understanding JavaScript Closures From Basic",
      img: "/blogs/news-6.png",
      date: "June 20 2024",
      commentCount: 20,
      author: "Chris Lee",
    },
    {
      title: "Understanding JavaScript Closures From Basic",
      img: "/blogs/news-6.png",
      date: "June 20 2024",
      commentCount: 20,
      author: "Chris Lee",
    },
    {
      title: "10 Tips for Effective Remote Working",
      img: "/blogs/news-5.png",
      date: "June 25 2024",
      commentCount: 8,
      author: "Jane Smith",
    },
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      img: "/blogs/news-4.png",
      date: "July 1 2024",
      commentCount: 15,
      author: "John Doe",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto space-y-10 py-20">
      <div className="flex flex-col items-center">
        <Heading title={"Our Blogs"} />
        <h1 className="text-7xl font-semibold font-teko text-center">
          Explore Our <span className="text-primary">Popular</span> Blogs
        </h1>
      </div>

      <div className="relative group flex flex-col md:flex-row gap-5 bg-white shadow-md overflow-hidden border border-slate-300">
        <div className="glassy  group-hover:before:left-3/4 relative w-full md:w-1/2">
          <div className="group-hover:opacity-25 transition-all duration-300 w-full h-full bg-primary absolute opacity-0 z-10" />
          <div className="absolute top-5 right-5 h-20 w-20 bg-primary z-10 flex items-center justify-center text-center font-teko text-2xl text-white rounded font-semibold">
            22 <br />
            March
          </div>
          <Image
            className="w-full h-full object-cover group-hover:rotate-3 group-hover:scale-110"
            src="/blogs/news-7.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col px-5 py-10 flex-1 gap-3">
          <h1 className="font-teko font-semibold text-5xl group-hover:text-primary transition-all duration-300">
            App Promotes Sales and Profits In IT Solutions
          </h1>
          <div className="space-y-5 flex-1">
            <div className="flex gap-5">
              <span className="flex items-center gap-2 opacity-75 font-semibold">
                <FaRegUser className="mb-1" />
                By aginco
              </span>
              <span className="flex items-center gap-2 opacity-75 font-semibold">
                <IoChatbubbleOutline className="mb-1" />0 Comments
              </span>
              <span className="flex items-center gap-2 opacity-75 font-semibold">
                <IoPricetagsOutline className="mb-1" />
                Latest News
              </span>
            </div>
            <hr className="w-full mx-auto border-b-controller my-5" />
            <p className="max-w-sm font-medium opacity-75">
              We have covered many special events such as fireworks, fairs,
              parades, races, walks, awards ceremonies, fashion shows, sporting
              events, and even a memorial service. Donec lectus enim, dapibus
              sed augue nec, adipiscing elit. Curabitur vulputate vestibulum
              rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc,
              vitae ultricies erat elit eu lacus. Vestibulum non justo fun […]
            </p>
          </div>
          <Link
            href={`/blogs/${1}`}
            className="relative py-1 flex items-center font-teko text-xl gap-3 text-primary transition-all duration-500 cursor-pointer translate-x-0 w-fit hover:translate-x-5"
          >
            Read More
            <MdOutlineKeyboardDoubleArrowRight className="mb-[2px] transition-all duration-500" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {blogs?.map((blog, i) => (
          <BlogCard key={i} blog={blog} />
        ))}
      </div>
    </div>
  );
};
export default OurBlogs;
