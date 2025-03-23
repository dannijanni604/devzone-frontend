"use client";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

const TasksCompletedChart = ({ barChartData }) => {
  return (
    <div className="p-6 bg-gray-700 text-white rounded-lg shadow-lg w-full">
      <h3 className="text-lg font-bold mb-4">Tasks Completed</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={barChartData}>
          <XAxis dataKey="week" stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="tasks" fill="#4CAF50" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TasksCompletedChart;
