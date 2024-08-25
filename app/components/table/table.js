const Table = ({
  className,
  topHeading = <></>,
  headers = [],
  columns = [],
}) => {
  return (
    <div className={`${className} bg-white rounded shadow border my-5`}>
      <h1 className="font-montserrat font-medium text-xl px-5 py-1 border-l-2 border-l-primary flex items-center justify-between mt-3">
        {topHeading}
      </h1>
      <hr className="mt-5" />
      <div className="overflow-x-auto px-5 py-3">
        <table className="min-w-full overflow-x-auto border border-collapse">
          <thead className="font-montserrat bg-gray-100/75">
            <tr className="rounded-md">
              {headers?.map((column, index) => (
                <th
                  key={index}
                  className="text-left py-3 px-3 md:px-4 rounded border font-semibold text-gray-700"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-medium divide-y">
            {columns?.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="text-sm hover:bg-gray-50/75 transition-all duration-200"
              >
                {headers.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="py-3 px-3 md:px-4 border text-gray-700 whitespace-nowrap"
                  >
                    {row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
