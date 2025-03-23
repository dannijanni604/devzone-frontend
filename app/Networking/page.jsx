"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import SideNavbar from "../components/ui/SideNavbar"; // Embedding sidebar

const usersData = [
  { id: 1, name: "John Doe", code: "DEV-001", github: "#", linkedin: "#" },
  { id: 2, name: "Jane Smith", code: "DEV-002", github: "#", linkedin: "#" },
  { id: 3, name: "Alice Brown", code: "DEV-003", github: "#", linkedin: "#" },
  { id: 4, name: "Bob Marley", code: "DEV-004", github: "#", linkedin: "#" },
  { id: 5, name: "Lisa Ray", code: "DEV-005", github: "#", linkedin: "#" },
];

export default function NetworkingPage() {
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("name");
  const [activeTab, setActiveTab] = useState("all");
  const [myRequests, setMyRequests] = useState([]);
  const [myNetwork, setMyNetwork] = useState([]);

  const filteredUsers = usersData.filter((user) =>
    searchBy === "name"
      ? user.name.toLowerCase().includes(search.toLowerCase())
      : user.code.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddToNetwork = (user) => {
    if (myNetwork.length >= 4) {
      alert("You can add maximum 4 members in your network!");
      return;
    }
    if (!myNetwork.find((u) => u.id === user.id)) {
      setMyNetwork([...myNetwork, user]);
    }
  };

  const handleRemoveFromNetwork = (userId) => {
    setMyNetwork(myNetwork.filter((user) => user.id !== userId));
  };

  const handleSendRequest = (user) => {
    if (!myRequests.find((u) => u.id === user.id)) {
      setMyRequests([...myRequests, user]);
    }
  };

  return (
    <div className="flex bg-black min-h-screen text-white">
      {/* Sidebar */}
      <SideNavbar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Networking</h1>
          {/* Profile Section */}
          <div className="flex items-center gap-2">
            <img
              src="/robot.jpeg"
              alt="User"
              className="w-10 h-10 rounded-full border border-gray-500"
            />
            <span className="text-sm">Joe</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-6">
          <button
            onClick={() => setActiveTab("all")}
            className={`p-2 rounded-md ${activeTab === "all" ? "bg-teal-600" : "bg-gray-700"}`}
          >
            All Users
          </button>
          <button
            onClick={() => setActiveTab("requests")}
            className={`p-2 rounded-md ${activeTab === "requests" ? "bg-teal-600" : "bg-gray-700"}`}
          >
            My Requests
          </button>
          <button
            onClick={() => setActiveTab("network")}
            className={`p-2 rounded-md ${activeTab === "network" ? "bg-teal-600" : "bg-gray-700"}`}
          >
            My Network ({myNetwork.length}/4)
          </button>
        </div>

        {/* Search Section */}
        <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-4 mb-6">
          <IoSearch className="text-gray-400 text-xl" />
          <input
            type="text"
            placeholder={`Search by ${searchBy}`}
            className="bg-transparent outline-none text-white w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="bg-gray-800 p-2 rounded-md"
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
          >
            <option value="name">Search by Name</option>
            <option value="code">Search by Code</option>
          </select>
        </div>

        {/* Content Rendering Based on Active Tab */}
        <div className="space-y-4">
          {activeTab === "all" &&
            filteredUsers.map((user) => (
              <div
                key={user.id}
                className="bg-gray-800 p-4 rounded-lg flex items-center justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold">{user.name}</h3>
                  <p className="text-gray-400 text-sm">{user.code}</p>
                </div>
                <div className="flex gap-4">
                  <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-blue-500 text-2xl hover:opacity-80" />
                  </a>
                  <a href={user.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-gray-300 text-2xl hover:opacity-80" />
                  </a>
                  <button
                    className="bg-teal-600 px-4 py-2 rounded hover:bg-teal-700"
                    onClick={() => handleSendRequest(user)}
                  >
                    Send Request
                  </button>
                  <button
                    className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
                    onClick={() => handleAddToNetwork(user)}
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}

          {activeTab === "requests" &&
            (myRequests.length ? (
              myRequests.map((user) => (
                <div
                  key={user.id}
                  className="bg-gray-800 p-4 rounded-lg flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{user.name}</h3>
                    <p className="text-gray-400 text-sm">{user.code}</p>
                  </div>
                  <span className="bg-yellow-600 px-4 py-2 rounded">Request Sent</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No requests sent.</p>
            ))}

          {activeTab === "network" &&
            (myNetwork.length ? (
              myNetwork.map((user) => (
                <div
                  key={user.id}
                  className="bg-gray-800 p-4 rounded-lg flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{user.name}</h3>
                    <p className="text-gray-400 text-sm">{user.code}</p>
                  </div>
                  <button
                    className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                    onClick={() => handleRemoveFromNetwork(user.id)}
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Your network is empty.</p>
            ))}
        </div>
      </div>
    </div>
  );
}
