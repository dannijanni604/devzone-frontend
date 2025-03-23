"use client";
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#ff6b6b", "#4a4a4a"];

const ScoreRook = ({ barChartData }) => {
  const [rookScore, setRookScore] = useState(0);

  useEffect(() => {
    const completedTasks = barChartData.reduce((sum, entry) => sum + entry.tasks, 0);
    const totalTasks = 210;
    const calculatedScore = Math.min((completedTasks / totalTasks) * 100, 100);
    setRookScore(calculatedScore.toFixed(0));
  }, [barChartData]);

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg flex flex-col items-center mb-6 relative">
      <h3 className="text-4xl font-bold mb-4 text-center">Rook Score</h3>
      <div className="relative w-[200px] h-[200px] flex items-center justify-center">
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie
              data={[{ name: "Completed", value: rookScore }, { name: "Remaining", value: 100 - rookScore }]}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
            >
              {[{ name: "Completed", value: rookScore }, { name: "Remaining", value: 100 - rookScore }].map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute text-2xl font-bold text-white flex items-center justify-center w-full h-full">{rookScore}%</div>
      </div>
    </div>
  );
};

export default ScoreRook;
