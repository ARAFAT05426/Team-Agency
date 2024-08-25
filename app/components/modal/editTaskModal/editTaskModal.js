import { useMutation } from "@tanstack/react-query";
import CustomDropdown from "../../form/customDropdown/customDropdown";
import TypeDate from "../../form/typeDate/typeDate";
import TypeText from "../../form/typeText/typeText";
import ReusableModal from "../reusableModal/reusableModal";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import axiosCommon from "@/lib/axios/axiosCommon";

const EditTaskModal = ({ isOpen, setIsOpen, task, projectId, refetch }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setStatus(task.status || "");
      setDate(task.dueDate ? new Date(task.dueDate) : "");
      setProgress(task.progress || 0);
    }
  }, [task]);

  const { mutateAsync: editTask } = useMutation({
    mutationKey: ["editTask"],
    mutationFn: async (taskData) => {
      try {
        const { data } = await axiosCommon.patch(`/projects/api/${projectId}`, {
          taskId: task.id,
          updateData: taskData,
        });
        return data;
      } catch (error) {
        throw new Error("Failed to edit task");
      }
    },
    onSuccess: async () => {
      await refetch();
      setTitle("");
      setStatus("");
      setDate("");
      setProgress(0);
      setIsOpen(false);
      toast.success("Task edited successfully!");
    },
    onError: (error) => {
      console.error(error.message);
      toast.error("Failed to edit task!");
    },
  });

  const handleSave = async () => {
    setLoading(true);
    try {
      await editTask({ title, status, dueDate: date, progress });
    } catch (error) {
      console.error("Failed to save task:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ReusableModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
        className="grid grid-cols-2 gap-3"
      >
        <TypeText
          name="Title"
          isRequired
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TypeDate
          selectedDate={date}
          setSelectedDate={(newDate) => setDate(newDate)}
        />
        <CustomDropdown
          placeholder="Add Status"
          options={["pending", "in progress", "completed"]}
          selected={status}
          onSelect={setStatus}
        />
        <TypeText
          name="Progress"
          isRequired
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
          type="number"
        />
        <div className="col-span-2 mt-3 flex items-center justify-end gap-2">
          <button
            type="submit"
            className="px-5 py-3 font-montserrat font-semibold bg-primary text-white rounded-sm hover:bg-secondary transition duration-200"
            disabled={loading}
          >
            {loading ? "Saving..." : "Submit"}
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

export default EditTaskModal;
