"use client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AnimatePresence, motion } from "framer-motion";
import axiosCommon from "@/lib/axios/axiosCommon";
const DeleteModal = ({ isOpen, setIsOpen, id, refetch, text }) => {
  const mutation = useMutation({
    mutationFn: async () => {
      const response = await axiosCommon.delete(`/blogs/api`, {
        data: { id: id },
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    },
    onSuccess: async () => {
      toast.success("Blog deleted successfully!");
      await refetch();
      setIsOpen(false);
    },
    onError: (error) => {
      toast.error(`An error occurred: ${error.message}`);
    },
  });

  const handleDelete = async () => {
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
            className="bg-gray-500 text-white p-4 sm:p-8 rounded-xl sm:rounded-2xl w-full max-w-lg md:max-w-xl shadow-2xl cursor-default relative flex flex-col items-center"
          >
            <h2 className="text-lg md:text-4xl font-teko font-semibold mb-4">
              Confirm Deletion
            </h2>
            <p>Are you sure you want to delete this {text || ""}?</p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={handleDelete}
                disabled={mutation.isLoading}
                className={`bg-red-600 hover:bg-red-700 h-full min-w-[120px] px-5 py-2 text-white font-semibold font-teko text-lg sm:text-2xl rounded text-center cursor-pointer ${
                  mutation.isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {mutation.isLoading ? "Deleting..." : "Delete"}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-white hover:bg-slate-100 h-full min-w-[120px] px-4 py-2 text-primary font-semibold font-teko text-lg sm:text-2xl rounded text-center cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default DeleteModal;
