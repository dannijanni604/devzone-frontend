"use client";
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";

const TaskProgressChart = ({ lineChartData }) => {
  return (
    <div className="p-6 bg-purple-600 text-white rounded-lg shadow-lg w-full">
      <h3 className="text-lg font-bold mb-4">Task Progress</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={lineChartData}>
          <XAxis dataKey="name" stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="progress" stroke="#4CAF50" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskProgressChart;
