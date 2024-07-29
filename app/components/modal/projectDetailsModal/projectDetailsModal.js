import { AnimatePresence, motion } from "framer-motion";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { TbCopy, TbCopyCheck } from "react-icons/tb";
import { FaProjectDiagram } from "react-icons/fa";
import { VscProject } from "react-icons/vsc";
import { useState } from "react";
import Image from "next/image";

const ProjectDetailsModal = ({ isOpen, setIsOpen, project }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !project) return null;

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(
      () => setCopied(true),
      (err) => console.error("Failed to copy text: ", err)
    );
  };

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
            className="bg-gradient-to-br from-primary via-orange-600 to-primary text-white p-10 rounded-2xl flex flex-col items-center w-full max-w-3xl shadow-2xl cursor-default relative overflow-hidden"
          >
            {/* Background Icons */}
            <FaProjectDiagram className="text-white/10 rotate-6 text-[18rem] absolute z-0 -top-12 -left-12 opacity-60" />
            <VscProject className="text-white/10 rotate-12 text-[22rem] absolute z-0 -bottom-10 -right-10 opacity-60" />
            <IoFileTrayFullOutline className="text-white/10 rotate-12 text-[22rem] absolute z-0 translate-x-1/4 translate-y-1/4 opacity-60" />

            {/* Project Details */}
            <div className="flex flex-col items-center mb-6 relative z-10">
              <Image
                src={project.clientImage}
                alt={project.client}
                className="rounded-full w-24 h-24 object-cover mb-4 shadow-lg"
                width={96}
                height={96}
              />
              <h1 className="text-5xl font-teko font-bold mb-2">
                {project.title}
              </h1>
              <p className="text-lg font-semibold mb-4">{project.description}</p>
              <div className="grid grid-cols-2 gap-3 w-full text-sm font-semibold">
                <div>
                  <span className="font-bold">Category:</span>{" "}
                  {project.category}
                </div>
                <div>
                  <span className="font-bold">Status:</span> {project.status}
                </div>
                <div>
                  <span className="font-bold">Deadline:</span>{" "}
                  {formatDate(project?.deadline)}
                </div>
                <div>
                  <span className="font-bold">Priority:</span>{" "}
                  {project.priority}
                </div>
                <div>
                  <span className="font-bold">Created Date:</span>{" "}
                  {formatDate(project?.createdDate)}
                </div>
                <div>
                  <span className="font-bold">Progress:</span>{" "}
                  {project.progress}%
                </div>
                <div>
                  <span className="font-bold">Team Members:</span>{" "}
                  {project.teamMembers.join(", ")}
                </div>
                <div>
                  <span className="font-bold">Client Name:</span>{" "}
                  {project.client}
                </div>
                <div
                  onClick={() => handleCopy(project.email)}
                  className="cursor-pointer flex items-center"
                >
                  <span className="font-bold">Client Email:</span>{" "}
                  <span className="ml-2">{project.email}</span>
                  {copied ? (
                    <TbCopyCheck className="ml-2 text-xl" />
                  ) : (
                    <TbCopy className="ml-2 text-xl" />
                  )}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="text-center relative z-10">
              <button
                onClick={() => {
                  setCopied(false);
                  setIsOpen(false);
                }}
                className="bg-white hover:bg-slate-100 px-4 py-2 text-primary font-semibold font-teko text-xl rounded text-center w-fit mx-auto cursor-pointer"
              >
                Understood!
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;
