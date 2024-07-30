import { AnimatePresence, motion } from "framer-motion";
import CustomDropdown from "../../form/customDropdown/customDropdown";
import { useMutation } from "@tanstack/react-query";
import axiosCommon from "@/lib/axios/axiosCommon";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const UserEditModal = ({ isOpen, setIsOpen, user, refetch }) => {
  const [formData, setFormData] = useState({
    role: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        role: user.role,
      });
    }
  }, [user]);

  const mutation = useMutation({
    mutationFn: async () => {
      console.log({ ...formData, id: user?._id });
      const response = await axiosCommon.put(
        `/auth/api`,
        { ...formData, id: user?._id }
      );
      return response.data;
    },
    onSuccess: async () => {
      toast.success("User updated successfully!");
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

  const handleDelete = async () => {
    try {
      await axiosCommon.delete(`/auth/api/${user?._id}`);
      toast.success("User deleted successfully!");
      await refetch();
      setIsOpen(false);
    } catch (error) {
      toast.error(`An error occurred: ${error.message}`);
    }
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
          className="fixed inset-0 bg-gray-900/80 backdrop-blur-md flex items-center justify-center z-50 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-500 p-5 rounded-xl w-full max-w-lg shadow-2xl"
          >
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center gap-4">
                <div className="w-full">
                  <CustomDropdown
                    options={["client", "admin", "editor"]}
                    selected={formData.role}
                    onSelect={(role) =>
                      setFormData((prev) => ({ ...prev, role }))
                    }
                  />
                </div>
                <div className="flex items-center justify-end gap-2 w-fit">
                  <button
                    type="submit"
                    disabled={mutation.isLoading}
                    className={`bg-blue-600 hover:bg-blue-700 px-5 py-2 text-white font-semibold rounded ${
                      mutation.isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {mutation.isLoading ? "Saving..." : "Save"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="bg-white hover:bg-slate-100 px-4 py-2 text-primary font-semibold rounded border border-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserEditModal;
