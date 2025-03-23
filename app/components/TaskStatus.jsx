"use client";
import { useState, useEffect } from "react";
import { CheckCircleIcon, LockClosedIcon, ClockIcon } from "@heroicons/react/24/solid";

const TaskStatus = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("/api/tasks");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircleIcon className="w-6 h-6 text-green-500" />;
      case "locked":
        return <LockClosedIcon className="w-6 h-6 text-red-500" />;
      default:
        return <ClockIcon className="w-6 h-6 text-yellow-500" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Task Status</h3>
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-4">
              {getStatusIcon(task.status)}
              <div>
                <p className="font-medium">{task.name}</p>
                <p className="text-sm text-gray-500">{task.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">{task.points} points</span>
              <span className={`px-2 py-1 text-sm rounded-full ${
                task.status === "completed" ? "bg-green-100 text-green-700" :
                task.status === "locked" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
              }`}>
                {task.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskStatus;
