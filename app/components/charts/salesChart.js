"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  {
    name: "Jan",
    revenue: 4000,
    profit: 2400,
  },
  {
    name: "Feb",
    revenue: 3000,
    profit: 1398,
  },
  {
    name: "Mar",
    revenue: 9800,
    profit: 2000,
  },
  {
    name: "Apr",
    revenue: 3908,
    profit: 2780,
  },
  {
    name: "May",
    revenue: 4800,
    profit: 1890,
  },
  {
    name: "Jun",
    revenue: 3800,
    profit: 2390,
  },
  {
    name: "May",
    revenue: 4800,
    profit: 1890,
  },
  {
    name: "Jun",
    revenue: 3800,
    profit: 2390,
  },
  {
    name: "May",
    revenue: 4800,
    profit: 1890,
  },
  {
    name: "Jun",
    revenue: 3800,
    profit: 2390,
  },
  {
    name: "May",
    revenue: 4800,
    profit: 1890,
  },
  {
    name: "Jun",
    revenue: 3800,
    profit: 2390,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-white border border-gray-200 shadow rounded-lg">
        <p className="text-lg font-semibold">{label}</p>
        <p className="text-blue-500">
          Revenue:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-purple-500">
          Profit:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

const SalesChart = () => {
  return (
    <div className="max-w-5xl bg-white border border-gray-200 shadow-lg mt-10 p-5 rounded-lg">
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={salesData}>
          <XAxis
            dataKey="name"
            tick={{ fill: "#4a4a4a", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#4a4a4a", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={36}
            wrapperStyle={{ color: "#4a4a4a", fontSize: 12 }}
          />
          <Bar dataKey="revenue" fill="url(#revenueGradient)" barSize={30} radius={[4, 4, 0, 0]} />
          <Bar dataKey="profit" fill="url(#profitGradient)" barSize={30} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563eb" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#2563eb" stopOpacity={0.2} />
          </linearGradient>
          <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.2} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SalesChart;
