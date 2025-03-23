"use client";
import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import SideNavbar from "../components/ui/SideNavbar";

const ProfileSettings = () => {
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [links, setLinks] = useState({ github: "", linkedin: "" });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex min-h-screen bg-[#121212] text-white overflow-hidden">
      {/* Sidebar */}
      <SideNavbar />

      {/* Profile Content */}
      <div className="relative flex flex-col items-center justify-center w-full px-6 py-10 md:px-12 lg:px-20">
        {/* Profile Image & Name at Top Right */}
        <div className="absolute top-6 right-6 flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full  overflow-hidden border border-gray-400 bg-gray-600">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-300 text-black">
                <span className="text-sm font-semibold">U</span>
              </div>
            )}
          </div>
          <span className="text-lg font-semibold">{username || "User"}</span>
        </div>

        {/* Profile Card */}
        <div className="w-full max-w-md p-6 bg-[#242C3A]  rounded-xl shadow-lg border border-gray-700">
          <div className="flex flex-col space-y-4">
            {/* Profile Image Editing */}
            <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border border-gray-500">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-500 text-white">
                  <span className="text-lg font-semibold">U</span>
                </div>
              )}
              <label className="absolute bottom-0 right-0 bg-gray-800 text-white p-1 rounded-full cursor-pointer">
                📷
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </label>
            </div>

            {/* Username Input */}
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border p-2 rounded-md w-full bg-[#242C3A]  text-white placeholder-gray-400 focus:ring-2 focus:ring-[#6200EA] focus:outline-none"
            />

            {/* Links Inputs */}
            <input
              type="text"
              placeholder="GitHub Profile"
              value={links.github}
              onChange={(e) => setLinks({ ...links, github: e.target.value })}
              className="border p-2 rounded-md w-full bg-[#242C3A]  text-white placeholder-gray-400 focus:ring-2 focus:ring-[#6200EA] focus:outline-none"
            />
            <input
              type="text"
              placeholder="LinkedIn Profile"
              value={links.linkedin}
              onChange={(e) => setLinks({ ...links, linkedin: e.target.value })}
              className="border p-2 rounded-md w-full bg-[#242C3A]  text-white placeholder-gray-400 focus:ring-2 focus:ring-[#6200EA] focus:outline-none"
            />

            {/* Display Updated Username & Links */}
            <div className="mt-4 p-4 bg-[#242C3A]  rounded-lg text-white border border-gray-600">
              <p className="font-semibold text-[#A0A0A0]">Profile Overview</p>
              <p>Username: {username || "Not Set"}</p>
              <p>GitHub: {links.github || "Not Set"}</p>
              <p>LinkedIn: {links.linkedin || "Not Set"}</p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <Button className="w-full max-w-md mt-6 bg-[#2b54da] hover:bg-[#304fa7] text-white transition-all duration-200">
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default ProfileSettings;
