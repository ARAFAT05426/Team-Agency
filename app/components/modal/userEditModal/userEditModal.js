import { AnimatePresence, motion } from "framer-motion";
import CustomDropdown from "../../form/customDropdown/customDropdown";
import { useMutation } from "@tanstack/react-query";
import axiosCommon from "@/lib/axios/axiosCommon";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const UserEditModal = ({ isOpen, setIsOpen, user, refetch }) => {
  const [formData, setFormData] = useState({
    role: "",
    position: "",
  });

  // Set the form data when the user prop changes
  useEffect(() => {
    if (user) {
      setFormData({
        role: user?.role || "",
        position: user?.position || "",
      });
    }
  }, [user]);

  // Update user role mutation
  const updateUserMutation = useMutation({
    mutationFn: async () => {
      const response = await axiosCommon.patch("/auth/api", {
        email: user?.email,
        role: formData.role,
        position: formData.position, // Include position if backend supports it
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success("User updated successfully!");
      refetch();
      setIsOpen(false);
    },
    onError: (error) => {
      toast.error(`An error occurred: ${error?.message}`);
    },
  });

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserMutation.mutate();
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
            className="bg-white p-5 rounded-xl w-full max-w-sm shadow-2xl"
          >
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <div className="w-full space-y-3">
                  <CustomDropdown
                    placeholder="Set a role"
                    options={["client", "team-member", "admin"]}
                    selected={formData.role}
                    onSelect={(role) =>
                      setFormData((prev) => ({ ...prev, role }))
                    }
                  />
                  <CustomDropdown
                    placeholder="Set a position"
                    options={["developer", "designer", "editor", "seo expert"]}
                    selected={formData.position}
                    onSelect={(position) =>
                      setFormData((prev) => ({ ...prev, position })) // Correct field updated
                    }
                  />
                </div>
                <div className="flex items-center justify-end gap-2">
                  <button
                    type="submit"
                    className="px-5 py-3 font-montserrat font-semibold bg-primary text-white rounded-sm hover:bg-secondary transition duration-200"
                    disabled={updateUserMutation.isLoading} // Disable when loading
                  >
                    {updateUserMutation.isLoading ? "Saving..." : "Submit"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-5 py-3 font-montserrat font-semibold bg-secondary/75 text-white rounded-sm hover:bg-primary transition duration-200"
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
