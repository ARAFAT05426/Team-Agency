"use client";
import { toast } from "sonner";
import axiosCommon from "@/lib/axios/axiosCommon";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";

// Reusable Confirm Button Component
const ConfirmButton = ({ onClick, isLoading, children }) => (
  <button
    onClick={onClick}
    disabled={isLoading}
    className={`px-5 py-2 text-white font-semibold font-teko text-lg sm:text-2xl rounded text-center cursor-pointer ${
      isLoading
        ? "bg-red-600 opacity-50 cursor-not-allowed"
        : "bg-red-600 hover:bg-red-700"
    }`}
  >
    {isLoading ? "Deleting..." : children}
  </button>
);

// Reusable Cancel Button Component
const CancelButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-secondary px-5 py-2 text-white font-semibold font-teko text-lg sm:text-2xl rounded text-center cursor-pointer"
  >
    Cancel
  </button>
);

const DeleteModal = ({ isOpen, setIsOpen, id, refetch, text, api }) => {
  const mutation = useMutation({
    mutationFn: async () => {
      const response = await axiosCommon.delete(api, {
        data: { id },
      });
      return response.data;
    },
    onSuccess: async () => {
      toast.success(`${text || "Item"} deleted successfully!`);
      await refetch();
      setIsOpen(false);
    },
    onError: (error) => {
      toast.error(`An error occurred: ${error.message}`);
    },
  });

  const handleDelete = () => {
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
            className="bg-white p-4 sm:p-8 rounded-md w-full max-w-xs md:max-w-md shadow-2xl cursor-default relative flex flex-col items-center"
          >
            <h2 className="text-lg md:text-4xl font-teko font-semibold mb-4">
              Confirm Deletion
            </h2>
            <p>Are you sure you want to delete this {text || "item"}?</p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <ConfirmButton
                onClick={handleDelete}
                isLoading={mutation.isLoading}
              >
                Delete
              </ConfirmButton>
              <CancelButton onClick={() => setIsOpen(false)} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeleteModal;
