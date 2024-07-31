import { MdDeleteOutline, MdEdit } from "react-icons/md";

const UsersTable = ({ users, onEdit, onDelete }) => {
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded border-x">
        <thead className="bg-gray-100 font-teko text-xl text-gray-800">
          <tr>
            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-left">Email</th>
            <th className="px-6 py-4 text-left">Role</th>
            <th className="px-6 py-4 text-left">Joined</th>
            <th className="px-6 py-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="font-semibold">
          {users?.map((user) => (
            <tr key={user?._id}>
              <td className="border-t px-6 py-4">{user?.name}</td>
              <td className="border-t px-6 py-4">{user?.email}</td>
              <td className="border-t px-6 py-4">{user?.role}</td>
              <td className="border-t px-6 py-4">
                {formatDate(user?.timestamp)}
              </td>
              <td className="border-t px-6 py-4 flex items-center gap-3">
                <button
                  onClick={() => onEdit("Edit", user)}
                  className="flex items-center gap-2 font-medium border rounded-md px-3 py-1"
                >
                  <MdEdit /> Edit
                </button>
                <button
                  onClick={() => onDelete("Delete", user)}
                  className="flex items-center gap-2 font-medium border rounded-md px-3 py-1"
                >
                  <MdDeleteOutline /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
