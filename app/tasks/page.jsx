"use client" ;
import React, { useState } from "react";

const Tasks = () => {
  // Weekly tasks for 7 weeks
  const weeks = Array.from({ length: 7 }, (_, weekIndex) => ({
    week: `Week ${weekIndex + 1}`,
    tasks: [
      { title: "Python Basics", mentor: "Ryan", locked: false },
      { title: "Arrays & Hashing", mentor: "Aidan", locked: false },
      { title: "Two Pointers", mentor: "Kunal", locked: true },
      { title: "Sliding Window & Intervals", mentor: "Faizan", locked: false },
    ],
  }));

  return (
    <div className="bg-black min-h-screen text-teal-400 p-6 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 p-4 flex flex-col items-center">
        <div className="bg-teal-900 text-white p-6 shadow-lg border-4 border-teal-400 hover:shadow-teal-300 hover:shadow-xl transition-shadow w-full rounded-lg text-center">
          <h2 className="text-2xl font-bold">Energy Score</h2>
          <div className="mt-4 text-5xl font-extrabold text-teal-300">55⚡</div>
        </div>
        <div className="bg-teal-900 text-white p-8 rounded-lg w-full h-auto flex flex-col items-center mt-6">
          <h2 className="text-xl font-bold">Progress</h2>
          <div className="grid grid-cols-10 gap-1 mt-2 w-full max-w-xs">
            {[...Array(40)].map((_, i) => (
              <div key={i} className={`w-4 h-4 rounded-sm ${i < 20 ? 'bg-green-500' : i < 30 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 overflow-y-auto max-h-screen p-4">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Topics and Problems</h1>
        <div className="space-y-6">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="bg-teal-800 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-3 text-white">{week.week}</h2>
              <div className="space-y-4">
                {week.tasks.map((task, index) => (
                  <div
                    key={index}
                    className="bg-teal-900 text-white p-4 rounded-lg flex justify-between items-center"
                  >
                    <span className="text-lg font-semibold">{task.title}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-teal-200">{task.mentor}</span>
                      {task.locked ? (
                        <button className="bg-gray-600 text-gray-300 px-4 py-2 rounded-md cursor-not-allowed">
                          Locked
                        </button>
                      ) : (
                        <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
                          Open
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
