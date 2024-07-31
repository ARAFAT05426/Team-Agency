"use client";
import axiosCommon from "@/lib/axios/axiosCommon";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import BlogEditModal from "@/app/components/modal/blogEditModal/blogEditModal";
import BlogsTable from "@/app/(dashboard)/dashboard/blogs/blogsTable/blogsTable";
import DeleteModal from "@/app/components/modal/deleteModal/deleteModal";
import AddBlogModal from "@/app/components/modal/addBlogModal/addBlogModal";
import { FaExclamationTriangle, FaPlus } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [isAddOpen, setAddOpen] = useState(false);
  const {
    data: blogs = [],
    isLoading,
    refetch,
    isError,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/blogs/api");
      return data.blogs;
    },
  });

  const handleOptionSelect = (option, blog) => {
    if (option === "Edit") {
      setSelectedBlog(blog);
      setEditOpen(true);
    }
    if (option === "Delete") {
      setSelectedBlog(blog);
      setDeleteOpen(true);
    }
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl text-primary" />
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600">
        <FaExclamationTriangle className="text-3xl mr-2" />
        <span>Error: {error?.message}</span>
      </div>
    );

  return (
    <div className="mt-10 p-4 sm:p-10 border border-gray-200 rounded bg-white shadow min-w-full overflow-x-auto space-y-3">
      <Header setAddOpen={setAddOpen} />
      <div className="overflow-x-auto">
        <BlogsTable blogs={blogs} onEdit={handleOptionSelect} />
      </div>
      <BlogEditModal
        isOpen={isEditOpen}
        setIsOpen={setEditOpen}
        blog={selectedBlog}
        refetch={refetch}
      />
      <DeleteModal
        isOpen={isDeleteOpen}
        id={selectedBlog?._id}
        setIsOpen={setDeleteOpen}
        refetch={refetch}
        text={"blog post"}
        api={"/blogs/api"}
      />
      <AddBlogModal
        isOpen={isAddOpen}
        setIsOpen={setAddOpen}
        refetch={refetch}
      />
    </div>
  );
};

const Header = ({ setAddOpen }) => (
  <div className="flex justify-between items-center mb-5 w-full">
    <div className="flex flex-col gap-2 px-2">
      <h1 className="text-2xl sm:text-3xl font-teko font-bold text-gray-900">
        Blogs
      </h1>
      <p className="text-gray-600 text-sm">Manage and create your blog posts</p>
    </div>
    <button
      onClick={() => setAddOpen(true)}
      className="text-xs px-4 py-2 rounded-md border-2 font-semibold flex items-center gap-2 transition-all duration-300 ease-in-out mt-2 sm:mt-0"
    >
      <FaPlus className="w-3 h-3" />
      Add Blog
    </button>
  </div>
);

export default Blogs;
