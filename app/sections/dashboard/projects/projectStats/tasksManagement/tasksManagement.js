import LinearProgress from "@/app/components/progressbar/linearProgress";
import Table from "@/app/components/table/table";
import { MdEditCalendar } from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";
import { TbCalendarPlus } from "react-icons/tb";

const TasksManagement = ({
  tasks = [],
  setAddTaskModalOpen,
  handleOpenEditModal,
  handleOpenDeleteModal,
}) => {
  const headers = [
    { header: "Title", accessor: "title" },
    { header: "Status", accessor: "status" },
    { header: "Assigned To", accessor: "assigned" },
    { header: "Progress", accessor: "progress" },
    { header: "Deadline", accessor: "dueDate" },
    { header: "Actions", accessor: "actions" },
  ];

  const rows = tasks.map((task) => ({
    title:
      task.title.length > 30 ? `${task.title.slice(0, 30)}...` : task.title,
    status: (
      <span className="px-3 py-[2px] text-xs bg-opct rounded">
        {task.status}
      </span>
    ),
    assigned: task.assignedMember || "Unassigned",
    progress: <LinearProgress progress={task?.progress} />,
    dueDate: task.dueDate
      ? new Date(task.dueDate).toLocaleDateString("en-ES", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "-",
    actions: (
      <div className="flex gap-2">
        <button className="px-2 py-1 rounded bg-blue-500 text-white">
          <MdEditCalendar
            className=""
            onClick={() => handleOpenEditModal(task)}
          />
        </button>
        <button className="px-2 py-1 rounded bg-red-600 text-white">
          <RiDeleteBin7Line
            className=""
            onClick={() => handleOpenDeleteModal(task.id)}
          />
        </button>
      </div>
    ),
  }));

  return (
    <Table
      topHeading={
        <>
          Tasks
          <TbCalendarPlus
            onClick={() => setAddTaskModalOpen(true)}
            className="cursor-pointer text-2xl"
          />
        </>
      }
      headers={headers}
      columns={rows}
    />
  );
};

export default TasksManagement;
