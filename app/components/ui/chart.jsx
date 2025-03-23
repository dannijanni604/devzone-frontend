// app/components/ui/Chart.jsx
"use client";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Chart({ chartData }) {
  return (
    <div className="bg-black p-6 rounded-xl shadow-xl">
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Task Performance",
              color: "#ffffff",
              font: {
                size: 16,
              },
            },
            legend: {
              labels: {
                color: "#ffffff",
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: "#ffffff",
              },
            },
            y: {
              ticks: {
                color: "#ffffff",
              },
            },
          },
        }}
      />
    </div>
  );
}
