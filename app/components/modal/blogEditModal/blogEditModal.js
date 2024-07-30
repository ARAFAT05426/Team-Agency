"use client";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { FaEdit, FaEnvelope, FaImage } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import TypeText from "../../form/typeText/typeText";
import TypeArea from "../../form/typeArea/typeArea";
import TypeTag from "../../form/typeTag/typeTag";
import Image from "next/image";

const BlogEditModal = ({ isOpen, setIsOpen, blog, refetch }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    image: null,
    tags: [],
    categories: [],
  });

  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title,
        author: blog.author,
        content: blog.content,
        image: null,
        tags: blog.tags || [],
        categories: blog.categories || [],
      });
      setPreview(blog.image);
    }
  }, [blog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTagsChange = (tags) => {
    setFormData((prev) => ({
      ...prev,
      tags,
    }));
  };

  const handleCategoriesChange = (categories) => {
    setFormData((prev) => ({
      ...prev,
      categories,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const mutation = useMutation({
    mutationFn: async () => {
      let imageUrl = formData.image;

      if (formData.image && formData.image instanceof File) {
        const imgForm = new FormData();
        imgForm.append("image", formData.image);

        try {
          const { data } = await axios.post(
            `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
            imgForm,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          imageUrl = data.data.display_url;
        } catch (error) {
          console.error("Image upload error:", error);
          throw new Error("Failed to upload image");
        }
      }

      const response = await axios.put(
        "/blogs/api",
        { ...formData, image: imageUrl, id: blog._id },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
    onSuccess: async () => {
      toast.success("Blog updated successfully!");
      await refetch();
      setIsOpen(false);
    },
    onError: (error) => {
      toast.error(`An error occurred: ${error.message}`);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-gray-900/80 backdrop-blur-md flex items-center justify-center z-50 cursor-pointer overflow-hidden"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-500 text-white p-4 sm:p-8 rounded-xl sm:rounded-2xl w-full max-w-lg sm:max-w-2xl shadow-2xl cursor-default relative"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-4">
                {preview && (
                  <Image
                    src={preview}
                    alt="Image preview"
                    className="w-full h-28 md:h-32 object-contain rounded-md"
                    width={100}
                    height={75}
                  /> 
                )}
                <label className="flex items-center gap-3 cursor-pointer bg-controller text-secondary p-2 rounded-md">
                  <FaImage className="text-xl" />
                  <span className="text-sm sm:text-base">Upload Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
              <TypeText
                name="title"
                placeholder="Title"
                bg={"bg-controller"}
                value={formData.title}
                onChange={handleChange}
                icon={FaEdit}
              />
              <TypeArea
                name="content"
                placeholder="Content"
                value={formData.content}
                onChange={handleChange}
                icon={FaEnvelope}
              />
              <div className="grid grid-cols-2 gap-4">
                <TypeTag
                  initialTags={blog.tags}
                  onTagsChange={handleTagsChange}
                  bg={"bg-controller"}
                  placeholder="Tags"
                />
                <TypeTag
                  initialTags={blog.categories}
                  onTagsChange={handleCategoriesChange}
                  bg={"bg-controller"}
                  placeholder="Categories"
                />
              </div>
              <div className="flex items-center justify-center gap-3">
                <button
                  type="submit"
                  disabled={mutation.isLoading}
                  className={`bg-green-500 hover:bg-green-600 h-full min-w-[120px] px-5 py-2 text-white font-semibold font-teko text-lg sm:text-2xl rounded text-center cursor-pointer ${
                    mutation.isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {mutation.isLoading ? "Saving..." : "Save Changes"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:bg-slate-100 h-full min-w-[120px] px-4 py-2 text-primary font-semibold font-teko text-lg sm:text-2xl rounded text-center cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BlogEditModal;
