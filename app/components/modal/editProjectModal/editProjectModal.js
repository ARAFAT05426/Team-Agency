import { IoClose } from "react-icons/io5";
import ReusableModal from "../reusableModal/reusableModal";
import TypeText from "../../form/typeText/typeText";
import { FaRegFolderOpen } from "react-icons/fa6";
import { useEffect, useState } from "react";
import TypeDate from "../../form/typeDate/typeDate";
import CustomDropdown from "../../form/customDropdown/customDropdown";
import { GoSortDesc } from "react-icons/go";
import { GiProgression } from "react-icons/gi";
import TypeArea from "../../form/typeArea/typeArea";
import { useMutation } from "@tanstack/react-query";
import axiosCommon from "@/lib/axios/axiosCommon";

const statusOptions = ["pending", "in progress", "completed", "canceled"];
const priorityOptions = ["low", "medium", "high"];

const EditProjectModal = ({ isOpen, setIsOpen, project = {}, refetch }) => {
  const [updatedData, setUpdatedData] = useState({ ...project });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setUpdatedData(project);
  }, [project]);

  const handleInputChange = (name, value) => {
    setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (field, date) => {
    setUpdatedData((prevData) => ({
      ...prevData,
      dates: { ...prevData.dates, [field]: date },
    }));
  };

  const { mutateAsync: updateProject } = useMutation({
    mutationKey: ["updateProject"],
    mutationFn: async () => {
      try {
        setLoading(true);
        setError(null);
        const { _id, ...dataToUpdate } = updatedData;
        const { data } = await axiosCommon.put("/projects/api", {
          id: project?._id,
          formData: { ...dataToUpdate },
        });
        return data;
      } catch (error) {
        setError("Failed to update project");
        throw new Error("Failed to update project");
      } finally {
        setLoading(false);
      }
    },
    onSuccess: async () => {
      await refetch();
      setIsOpen(false);
    },
    onError: (error) => {
      console.error(error.message);
    },
  });

  return (
    <ReusableModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="max-h-[75vh] max-w-xs md:max-w-2xl"
    >
      <IoClose
        onClick={() => setIsOpen(false)}
        className="absolute top-5 right-5 cursor-pointer text-2xl text-gray-400 hover:text-gray-500 transition duration-200"
        aria-label="Close modal"
      />
      <h1 className="font-montserrat font-semibold text-xl mt-3">
        Edit Project
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
        <div>
          <h3 className="font-montserrat text-xs md:text-sm font-semibold mb-1">
            Title
          </h3>
          <TypeText
            isRequired={true}
            icon={FaRegFolderOpen}
            value={updatedData?.projectTitle}
            onChange={(e) => handleInputChange("projectTitle", e.target.value)}
          />
        </div>
        <div>
          <h3 className="font-montserrat text-xs md:text-sm font-semibold mb-1">
            Status
          </h3>
          <CustomDropdown
            options={statusOptions}
            selected={updatedData?.status}
            onSelect={(value) => handleInputChange("status", value)}
          />
        </div>
        <div>
          <h3 className="font-montserrat text-xs md:text-sm font-semibold mb-1">
            Priority
          </h3>
          <CustomDropdown
            options={priorityOptions}
            selected={updatedData?.priority}
            onSelect={(value) => handleInputChange("priority", value)}
          />
        </div>
        <div>
          <h3 className="font-montserrat text-xs md:text-sm font-semibold mb-1">
            Progress
          </h3>
          <TypeText
            type="number"
            isRequired={true}
            icon={GiProgression}
            value={updatedData?.progressPercentage}
            onChange={(e) =>
              handleInputChange("progressPercentage", e.target.value)
            }
          />
        </div>
        <div>
          <h3 className="font-montserrat text-xs md:text-sm font-semibold mb-1">
            Budget
          </h3>
          <TypeText
            type="number"
            isRequired={true}
            icon={GiProgression}
            value={updatedData?.budget}
            onChange={(e) => handleInputChange("budget", e.target.value)}
          />
        </div>
        <div>
          <h3 className="font-montserrat text-xs md:text-sm font-semibold mb-1">
            Deadline
          </h3>
          <TypeDate
            selectedDate={updatedData?.dates?.deadlineDate}
            setSelectedDate={(date) => handleDateChange("deadlineDate", date)}
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-montserrat text-xs md:text-sm font-semibold mb-1">
            Description
          </h3>
          <TypeArea
            isRequired={true}
            icon={GoSortDesc}
            bg="bg-controller"
            value={updatedData?.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
          />
        </div>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="flex items-center justify-end gap-3 mt-3">
        <button
          onClick={() => setIsOpen(false)}
          className="px-5 py-3 font-montserrat font-semibold bg-secondary/75 text-white rounded-sm hover:bg-primary transition duration-200"
        >
          Cancel
        </button>
        <button
          onClick={updateProject}
          className={`px-5 py-3 font-montserrat font-semibold text-white rounded-sm transition duration-200 ${
            loading ? "bg-gray-400" : "bg-primary hover:bg-secondary"
          }`}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </ReusableModal>
  );
};

export default EditProjectModal;
