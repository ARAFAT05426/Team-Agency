import {
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
  FaTasks,
  FaProjectDiagram,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import TypeArea from "../../form/typeArea/typeArea";
import TypeText from "../../form/typeText/typeText";
import TypeDate from "../../form/typeDate/typeDate";
import { useMutation } from "@tanstack/react-query";
import axiosCommon from "@/lib/axios/axiosCommon";
import TypeTag from "../../form/typeTag/typeTag";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const ProjectEditModal = ({ isOpen, setIsOpen, project, refetch }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    deadline: "",
    priority: "",
    progress: "",
    teamMembers: [],
    client: "",
    email: "",
  });

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        description: project.description,
        status: project.status,
        deadline: project.deadline ? new Date(project.deadline) : "",
        priority: project.priority,
        progress: project.progress.toString(),
        teamMembers: project?.teamMembers || [],
        client: project.client,
        email: project.email,
      });
    }
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTeamMembersChange = (newTeamMembers) => {
    setFormData((prev) => ({
      ...prev,
      teamMembers: newTeamMembers,
    }));
  };

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await axiosCommon.put("/projects/api", {
        formData,
        id: project._id,
      });
      return response.data;
    },
    onSuccess: async () => {
      toast.success("Project updated successfully!");
      await refetch();
      setIsOpen(false);
    },
    onError: (error) => {
      toast.error("An error occurred. Please try again later.");
      console.error("Error:", error);
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
            initial={{ scale: 0.8, rotate: "4deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0.8, rotate: "4deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-primary via-orange-600 to-primary text-white p-8 rounded-2xl w-full max-w-2xl shadow-2xl cursor-default relative"
          >
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-2 gap-4"
            >
              <h1 className="text-5xl text-center font-teko font-semibold mb-4 col-span-2">
                Edit Project
              </h1>
              <TypeText
                name="title"
                icon={FaProjectDiagram}
                placeholder="Project Title"
                value={formData.title}
                onChange={handleChange}
                isRequired
                bg={"bg-controller"}
              />

              <TypeText
                name="status"
                icon={FaTasks}
                placeholder="Status"
                value={formData.status}
                onChange={handleChange}
                isRequired
                bg={"bg-controller"}
              />

              <TypeDate
                selectedDate={formData.deadline}
                name="deadline"
                icon={FaCalendarAlt}
                placeholder="Deadline"
                setSelectedDate={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    deadline: e.target.value,
                  }));
                }}
                isRequired
                bg={"bg-controller"}
              />

              <TypeText
                name="priority"
                icon={FaTasks}
                placeholder="Priority"
                value={formData.priority}
                onChange={handleChange}
                isRequired
                bg={"bg-controller"}
              />

              <TypeText
                name="progress"
                icon={FaTasks}
                placeholder="Progress"
                type="number"
                value={formData.progress}
                onChange={handleChange}
                isRequired
                bg={"bg-controller"}
              />

              <div className="col-span-2">
                <TypeTag
                  bg={"bg-controller"}
                  placeholder="Members Name"
                  initialTags={project.teamMembers}
                  onTagsChange={handleTeamMembersChange}
                />
              </div>

              <TypeArea
                name="description"
                placeholder="Enter your special instruction | N/A *"
                rows={5}
                required
                onChange={handleChange}
                value={formData.description}
                iconClass="text-black"
              />

              <TypeText
                name="client"
                icon={FaUser}
                placeholder="Client Name"
                value={formData.client}
                onChange={handleChange}
                bg={"bg-controller"}
              />

              <TypeText
                name="email"
                icon={FaEnvelope}
                placeholder="Client Email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                bg={"bg-controller"}
              />

              <div className="flex items-center justify-end gap-3 col-span-2">
                <button
                  type="submit"
                  disabled={mutation.isLoading}
                  className={`bg-green-500 hover:bg-green-600 h-full min-w-28 px-5 py-2 text-white font-semibold font-teko text-2xl rounded text-center cursor-pointer ${
                    mutation.isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {mutation.isLoading ? "Saving..." : "Save"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:bg-slate-100 h-full min-w-28 px-4 py-2 text-primary font-semibold font-teko text-2xl rounded text-center cursor-pointer"
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

export default ProjectEditModal;
