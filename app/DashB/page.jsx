"use client";
import { User } from "lucide-react";
import SideNavbar from "../components/ui/SideNavbar";
import ScoreRook from "../components/ui/ScoreRook";
import TaskProgressChart from "../components/ui/TaskProgressChart";
import TasksCompletedChart from "../components/ui/TasksCompletedChart";

const lineChartData = [
  { name: "Week 1", progress: 10 },
  { name: "Week 2", progress: 30 },
  { name: "Week 3", progress: 50 },
  { name: "Week 4", progress: 70 },
  { name: "Week 5", progress: 80 },
  { name: "Week 6", progress: 90 },
];

const barChartData = [
  { week: "Week 1", tasks: 10 },
  { week: "Week 2", tasks: 15 },
  { week: "Week 3", tasks: 20 },
  { week: "Week 4", tasks: 25 },
  { week: "Week 5", tasks: 30 },
  { week: "Week 6", tasks: 35 },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white overflow-auto">
      {/* Sidebar */}
      <SideNavbar />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 flex flex-col">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <User className="w-8 h-8 cursor-pointer text-white" />
          </div>
        </div>

        {/* Score Rook (Donut Chart) */}
        <ScoreRook barChartData={barChartData} />

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TaskProgressChart lineChartData={lineChartData} />
          <TasksCompletedChart barChartData={barChartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
