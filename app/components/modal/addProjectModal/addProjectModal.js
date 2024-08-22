import CustomDropdown from "../../form/customDropdown/customDropdown";
import ReusableModal from "../reusableModal/reusableModal";
import TypeText from "../../form/typeText/typeText";
import TypeDate from "../../form/typeDate/typeDate";
import TypeArea from "../../form/typeArea/typeArea";
import { FaRegFileAlt } from "react-icons/fa";
import { RiCoinsLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { useState } from "react";
import { BsEnvelopeAt } from "react-icons/bs";
import axiosCommon from "@/lib/axios/axiosCommon";

const AddProjectModal = ({ isOpen, setIsOpen, refetch }) => {
  const [date, setDate] = useState(new Date());
  const [priority, setPriority] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({}); // State to track errors

  const priorityOptions = ["high", "medium", "low"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const target = e.target;
    const projectTitle = target.projecttitle.value;
    const budget = target.budget.value;
    const client = target.client.value;
    const clientEmail = target.clientemail.value;
    const description = target.description.value;

    const newErrors = {};

    // Validate each field
    if (!projectTitle) newErrors.projectTitle = "Project title is required";
    if (!budget) newErrors.budget = "Budget is required";
    if (!priority) newErrors.priority = "Priority is required";
    if (!client) newErrors.client = "Client is required";
    if (!clientEmail) newErrors.clientEmail = "Client email is required";
    if (!description) newErrors.description = "Description is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed with submission
    const projectData = {
      projectTitle,
      date,
      budget,
      priority,
      client,
      clientEmail,
      description,
    };

    setLoading(true);

    try {
      const response = await axiosCommon.post("/projects/api", projectData);
      await refetch();
      // Handle success
      console.log("Project added successfully:", response.data);
      setLoading(false);
      setIsOpen(false);
      setErrors({}); // Clear errors
    } catch (error) {
      console.error("Error adding project:", error);
      setLoading(false);
      // Optionally set a general error message
      setErrors({ general: "Failed to add project. Please try again later." });
    }
  };

  return (
    <ReusableModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="max-h-[75vh] max-w-xs md:max-w-3xl"
    >
      <IoClose
        onClick={() => setIsOpen(false)}
        className="absolute top-5 right-5 cursor-pointer text-2xl text-gray-400 hover:text-gray-500 transition duration-200"
        aria-label="Close modal"
      />
      <h1 className="mt-5 text-xl font-montserrat font-semibold">
        Add Project
      </h1>
      <form className="grid grid-cols-2 gap-2 mt-3" onSubmit={handleSubmit}>
        <div>
          <TypeText
            placeholder="Set"
            name="projecttitle"
            icon={FaRegFileAlt}
            isRequired
          />
          {errors.projectTitle && (
            <p className="text-red-500 text-[0.5rem]">{errors.projectTitle}</p>
          )}
        </div>
        <TypeDate selectedDate={date} setSelectedDate={setDate} />
        <div>
          <TypeText
            placeholder="Set"
            name="Budget"
            type="number"
            icon={RiCoinsLine}
            isRequired
          />
          {errors.budget && (
            <p className="text-red-500 text-[0.5rem]">{errors.budget}</p>
          )}
        </div>
        <div>
          <CustomDropdown
            placeholder="Set Priority"
            options={priorityOptions}
            selected={priority}
            onSelect={setPriority}
          />
          {errors.priority && (
            <p className="text-red-500 text-[0.5rem]">{errors.priority}</p>
          )}
        </div>
        <div>
          <TypeText placeholder="Set" name="Client" icon={FiUser} isRequired />
          {errors.client && (
            <p className="text-red-500 text-[0.5rem]">{errors.client}</p>
          )}
        </div>
        <div>
          <TypeText
            placeholder="Set"
            name="ClientEmail"
            type="email"
            icon={BsEnvelopeAt}
            isRequired
          />
          {errors.clientEmail && (
            <p className="text-red-500 text-[0.5rem]">{errors.clientEmail}</p>
          )}
        </div>
        <>
          <TypeArea name="Description" placeholder="Set" />
          {errors.description && (
            <p className="text-red-500 text-[0.5rem]">{errors.description}</p>
          )}
        </>
        {errors.general && (
          <div className="col-span-2 text-red-500 text-sm text-center">
            {errors.general}
          </div>
        )}
        <div className="col-span-2 mt-3 flex items-center justify-end gap-2">
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-3 font-montserrat font-semibold bg-primary text-white rounded-sm hover:bg-secondary transition duration-200"
          >
            {loading ? "Adding..." : "Add Project"}
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

export default AddProjectModal;
