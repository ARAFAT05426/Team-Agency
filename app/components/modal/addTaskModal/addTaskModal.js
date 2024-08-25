import CustomDropdown from "../../form/customDropdown/customDropdown";
import ReusableModal from "../reusableModal/reusableModal";
import TypeText from "../../form/typeText/typeText";
import TypeDate from "../../form/typeDate/typeDate";
import { useMutation } from "@tanstack/react-query";
import axiosCommon from "@/lib/axios/axiosCommon";
import { GrDocumentTxt } from "react-icons/gr";
import { useState } from "react";
import { toast } from "sonner";

const AddTaskModal = ({ id, isOpen, setIsOpen, members, project, refetch }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [assignedMember, setAssignedMember] = useState("");

  const { mutateAsync: addTask } = useMutation({
    mutationKey: ["addTask"],
    mutationFn: async (taskData) => {
      try {
        setLoading(true);
        const { data } = await axiosCommon.put(`/projects/api/${id}`, {
          task: taskData,
        });
        return data;
      } catch (error) {
        throw new Error("Failed to add task");
      } finally {
        setLoading(false);
      }
    },
    onSuccess: async () => {
      await refetch();
      setTitle("");
      setStatus("");
      setDate(new Date());
      setAssignedMember("");
      setIsOpen(false);
      toast.success("Task added successfully!");
    },
    onError: (error) => {
      console.error(error.message);
      toast.error("Failed to add task!");
    },
  });

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!title || !status || !assignedMember) {
      toast.error("Please fill in all required fields");
      return;
    }

    const task = {
      title,
      status,
      dueDate: date,
      assignedMember,
    };

    try {
      await addTask(task);
    } catch (error) {
      console.error("Error adding task:", error.message);
    }
  };

  return (
    <ReusableModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="max-h-[75vh] max-w-xs md:max-w-xl"
    >
      <h1 className="my-3 text-xl font-montserrat font-semibold">Add Task</h1>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
        onSubmit={handleAddTask}
      >
        <TypeText
          name="Title"
          icon={GrDocumentTxt}
          isRequired
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <CustomDropdown
          placeholder="Add Status"
          options={["pending", "in progress", "completed"]}
          selected={status}
          onSelect={setStatus}
        />
        <TypeDate selectedDate={date} setSelectedDate={setDate} />

        <CustomDropdown
          placeholder="Assign Member"
          options={members?.map((member) => member.name)}
          selected={assignedMember}
          onSelect={setAssignedMember}
        />

        <div className="col-span-2 mt-3 flex items-center justify-end gap-2">
          <button
            type="submit"
            className="px-5 py-3 font-montserrat font-semibold bg-primary text-white rounded-sm hover:bg-secondary transition duration-200"
            disabled={loading}
          >
            {loading ? "Adding..." : "Submit"}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="px-5 py-3 font-montserrat font-semibold bg-secondary/75 text-white rounded-sm hover:bg-primary transition duration-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </ReusableModal>
  );
};

export default AddTaskModal;
