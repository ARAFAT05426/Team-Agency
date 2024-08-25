"use client";

import axiosCommon from "@/lib/axios/axiosCommon";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaCaretDown, FaExclamationTriangle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import ReusableModal from "../reusableModal/reusableModal";

const AddWorker = ({ project, isOpen = false, setIsOpen, refetch }) => {
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [members, setMembers] = useState(project?.teamMembers || []);
  useEffect(() => {
    if (project?.teamMembers) {
      setMembers(project?.teamMembers);
    }
  }, [project]);
  const {
    data: teamMembers = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["teamMembers"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/auth/api?role=team-member");
      return data?.users || [];
    },
  });

  const handleSelectMember = (member) => {
    if (!members.some((m) => m?.name === member?.name) && !loading) {
      setMembers((prevMembers) => [
        ...prevMembers,
        {
          name: member?.name,
          role: member?.position || "",
          email: member?.email,
        },
      ]);
    }
    setIsDropdownOpen(false);
  };

  const handleRemoveMember = (memberName) => {
    if (!loading) {
      setMembers((prevMembers) =>
        prevMembers?.filter((m) => m?.name !== memberName)
      );
    }
  };

  const { mutateAsync: addWorkers } = useMutation({
    mutationKey: ["addWorker"],
    mutationFn: async () => {
      try {
        setLoading(true);
        const { data } = await axiosCommon.patch("/projects/api", {
          id: project?._id,
          formData: { teamMembers: members },
        });
        return data;
      } catch (error) {
        throw new Error("Failed to update team members");
      } finally {
        setLoading(false);
      }
    },
    onSuccess: async () => {
      await refetch();
      setIsOpen(false);
      setIsDropdownOpen(false);
    },
    onError: (error) => {
      console.error(error.message);
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl text-primary" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-96 text-red-600">
        <FaExclamationTriangle className="text-3xl mr-2" />
        <span>Error: {error.message}</span>
      </div>
    );
  }

  return (
    <ReusableModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <IoClose
        onClick={() => setIsOpen(false)}
        className="absolute top-5 right-5 cursor-pointer text-2xl text-gray-400 hover:text-gray-500 transition duration-200"
      />
      <h2 className="text-xl font-semibold mb-4 mt-3">Add Worker</h2>
      <div className="relative w-full">
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full px-5 py-2 border rounded bg-white text-gray-700 font-semibold flex justify-between items-center shadow-sm hover:bg-gray-50 transition duration-200"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          {members.length > 0 ? "Selected members" : "Select members"}
          <FaCaretDown
            className={`transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-10 w-full mt-2 border rounded bg-white shadow-lg overflow-y-auto max-h-60"
            >
              {teamMembers.length > 0 ? (
                teamMembers.map((option) => (
                  <div
                    key={option._id}
                    onClick={() => handleSelectMember(option)}
                    className="p-2 cursor-pointer hover:bg-gray-100 transition duration-150"
                  >
                    {option.name}
                  </div>
                ))
              ) : (
                <div className="p-2 text-gray-500">No members available</div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex flex-wrap items-center gap-1 mt-2">
        {members.map((member, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-1 px-2 py-1 border rounded bg-gray-100"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-[0.6rem] font-medium">{member.name}</span>
            <IoClose
              onClick={() => handleRemoveMember(member.name)}
              className={`cursor-pointer text-gray-500 hover:text-red-500 transition duration-200 ${
                loading ? "pointer-events-none" : ""
              }`}
            />
          </motion.div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-end gap-2">
        <button
          onClick={() => setIsOpen(false)}
          className="px-5 py-3 font-montserrat font-semibold bg-secondary/75 text-white rounded-sm hover:bg-primary transition duration-200"
        >
          Cancel
        </button>
        <button
          onClick={addWorkers}
          disabled={loading}
          className="px-5 py-3 font-montserrat font-semibold bg-primary text-white rounded-sm hover:bg-secondary transition duration-200"
        >
          {loading ? "Adding..." : "Add Worker"}
        </button>
      </div>
    </ReusableModal>
  );
};

export default AddWorker;
