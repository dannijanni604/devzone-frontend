"use client";

import { motion } from "framer-motion";
import { FiUser, FiGithub, FiLinkedin, FiCamera, FiHome, FiGrid, FiLogOut, FiEdit } from "react-icons/fi";
import { useState } from "react";

export default function EditProfilePage() {
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState("john_doe");
  const [github, setGithub] = useState("https://github.com/johndoe");
  const [linkedin, setLinkedin] = useState("https://www.linkedin.com/in/johndoe");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-row">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-teal-600 p-6 min-h-screen flex flex-col space-y-6 text-white">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <nav className="flex flex-col space-y-4">
          <a href="#" className="flex items-center space-x-2 hover:text-gray-200"><FiHome /><span>Home</span></a>
          <a href="#" className="flex items-center space-x-2 hover:text-gray-200"><FiUser /><span>Profile</span></a>
          <a href="#" className="flex items-center space-x-2 hover:text-gray-200"><FiGrid /><span>Dashboard</span></a>
          <a href="#" className="flex items-center space-x-2 hover:text-gray-200"><FiLogOut /><span>Sign Out</span></a>
        </nav>
      </div>
      
      {/* Edit Profile Section */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-300 rounded-3xl p-10 border-2 border-black shadow-lg w-full max-w-3xl flex flex-col items-center relative"
        >
          {/* Profile Image Section */}
          <div className="relative -top-12 w-32 h-32 rounded-full border-4 border-black overflow-hidden">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <FiUser className="text-6xl text-black mx-auto mt-6" />
            )}
            <label className="absolute bottom-0 right-0 bg-black p-2 rounded-full cursor-pointer">
              <FiCamera className="text-white" />
              <input type="file" className="hidden" onChange={handleImageUpload} />
            </label>
          </div>

          {/* Editable Fields */}
          <div className="w-full flex flex-col items-center space-y-4 mt-4">
            <div className="flex items-center space-x-4 w-full">
              <FiUser className="text-black" />
              <input type="text" className="flex-1 p-2 border rounded-lg text-black" value={username} onChange={(e) => setUsername(e.target.value)} />
              <button className="bg-teal-600 text-white p-2 rounded-lg">Save</button>
            </div>
            <div className="flex items-center space-x-4 w-full">
              <FiGithub className="text-black" />
              <input type="text" className="flex-1 p-2 border rounded-lg text-black" value={github} onChange={(e) => setGithub(e.target.value)} />
              <button className="bg-teal-600 text-white p-2 rounded-lg">Save</button>
            </div>
            <div className="flex items-center space-x-4 w-full">
              <FiLinkedin className="text-black" />
              <input type="text" className="flex-1 p-2 border rounded-lg text-black" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
              <button className="bg-teal-600 text-white p-2 rounded-lg">Save</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
