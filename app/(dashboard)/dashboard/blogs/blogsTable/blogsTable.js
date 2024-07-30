import { MdDeleteOutline, MdEdit } from "react-icons/md";

const BlogsTable = ({ blogs, onEdit }) => {
  return (
    <table className="min-w-full border-x">
      <thead className="bg-gray-100/75">
        <tr>
          {["#", "Title", "Added", "Categories", "Reading Time", "Action"].map(
            (header) => (
              <th
                key={header}
                className="py-3 px-5 text-left text-lg text-gray-600 font-bold font-teko"
              >
                {header}
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody className="bg-white">
        {blogs.map((blog, i) => (
          <tr
            key={i}
            className={`${
              i < blogs.length - 1 ? "border-b" : ""
            } hover:bg-gray-50 transition-colors duration-300 cursor-pointer`}
          >
            <td className="py-4 px-6 text-xl font-teko font-semibold text-gray-500">
              {i + 1}
            </td>
            <td className="py-4 px-6 text-gray-700 font-semibold flex items-center gap-2">
              {blog.title}
            </td>
            <td className="py-4 px-6 text-xs font-bold text-gray-500">
              {new Date(blog.date).toDateString()}
            </td>
            <td className="py-4 px-6 text-sm text-gray-500">
              {blog.categories.join(", ")}
            </td>
            <td className="py-4 px-6 text-sm font-semibold text-gray-500">
              {blog.readingTime}
            </td>
            <td className="py-4 px-6 text-sm text-gray-700 flex items-center gap-3">
              <button
                onClick={() => onEdit("Edit", blog)}
                className="flex items-center gap-2 font-medium border rounded-md px-3 py-1"
              >
                <MdEdit /> Edit
              </button>
              <button
                onClick={() => onEdit("Delete", blog)}
                className="flex items-center gap-2 font-medium border rounded-md px-3 py-1"
              >
                <MdDeleteOutline /> Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BlogsTable;
