"use client";
import { useState, useEffect } from "react";
import { VideoCameraIcon, MegaphoneIcon } from "@heroicons/react/24/solid";

const WeeklyTutorial = () => {
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    const fetchWeeks = async () => {
      try {
        const response = await fetch("/api/weeks");
        const data = await response.json();
        setWeeks(data);
      } catch (error) {
        console.error("Error fetching weeks:", error);
      }
    };

    fetchWeeks();
  }, []);

  const getTaskIcon = (type) => {
    switch (type) {
      case "project":
        return <VideoCameraIcon className="w-6 h-6 text-blue-500" />;
      case "marketing":
        return <MegaphoneIcon className="w-6 h-6 text-purple-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Weekly Tasks</h3>
      <div className="space-y-4">
        {weeks.map((week, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Week {week.number}</h4>
            <div className="space-y-2">
              {week.tasks.map((task, taskIndex) => (
                <div key={taskIndex} className="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-lg">
                  {getTaskIcon(task.type)}
                  <div className="flex-1">
                    <p className="font-medium">{task.name}</p>
                    <p className="text-sm text-gray-500">{task.description}</p>
                  </div>
                  <span className="text-sm text-gray-500">{task.points} points</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyTutorial;
