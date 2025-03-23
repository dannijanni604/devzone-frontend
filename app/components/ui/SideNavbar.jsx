"use client";
import { User } from "lucide-react";

const SideNavbar = () => {
  return (
    <div className="w-full md:w-64 bg-teal-600 p-6 flex flex-col space-y-6 md:h-screen">
      <h2 className="text-xl font-bold">Dev Zone</h2>
      <nav className="flex flex-col space-y-4">
        <a href="/DashB" className="text-white hover:text-gray-800">Dashboard</a>
        <a href="/tasks" className="text-white hover:text-gray-800">Tasks</a>
        <a href="/projects" className="text-white hover:text-gray-800">Projects</a>
        <a href="/profile" className="text-white hover:text-gray-800"> Profile</a>
        <a href="/editProfile" className="text-white hover:text-gray-800">Edit Profile</a>
        <a href="/Networking" className="text-white hover:text-gray-800">Networking</a>
        <a href="/signout" className="text-white hover:text-gray-800">Signout</a>
      </nav>
    </div>
  );
};

export default SideNavbar;
