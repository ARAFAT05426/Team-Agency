import BlogCard from "@/app/components/cards/blogCard/blogCard";
import Heading from "@/app/components/header/heading/heading";
import Image from "next/image";

const ShortBlogs = () => {
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
  ];
  return (
    <div className="relative py-20 space-y-5">
      <Image
        className="absolute bottom-0 left-0 -z-[1]"
        src="/patterns/pattern-17.png"
        alt=""
        width={500}
        height={500}
      />
      <div className="flex flex-col items-center pb-3">
        <Heading title={"News & Blogs"} />
        <h1 className="text-7xl font-teko font-semibold text-center">
          News & <span className="text-primary">Articles</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full lg:w-container mx-auto">
        {blogs?.map((blog, i) => (
          <BlogCard key={i} blog={blog} />
        ))}
      </div>
    </div>
  );
};
export default ShortBlogs;
