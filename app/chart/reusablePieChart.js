import { Cell, Pie, PieChart, Legend, Tooltip } from "recharts";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ReusablePieChart = ({ data, colors, width, height, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl text-primary" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <PieChart width={width} height={height} className="mx-auto">
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        startAngle={360}
        endAngle={0}
        innerRadius={70}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        cornerRadius={3}
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={colors[index % colors.length]}
            stroke="#fff"
            strokeWidth={2}
          />
        ))}
      </Pie>
      <Tooltip />
      <Legend
        verticalAlign="bottom"
        align="center"
        iconType="diamond"
        iconSize={10}
        wrapperStyle={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: ".75rem",
          fontWeight: "600",
        }}
      />
    </PieChart>
  );
};

export default ReusablePieChart;
