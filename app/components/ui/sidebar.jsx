// components/ui/sidebar.jsx
import { FiUser, FiEdit, FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="w-64 bg-teal-600 p-6 flex flex-col items-center space-y-8 shadow-lg glow-effect">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white">Profile</h2>
      </div>
      <button className="w-full text-white py-2 mt-4 hover:bg-teal-500 rounded-lg flex items-center justify-start space-x-3">
        <FiEdit className="text-xl" />
        <span>Edit Profile</span>
      </button>
      <button className="w-full text-white py-2 mt-4 hover:bg-teal-500 rounded-lg flex items-center justify-start space-x-3">
        <FiLogOut className="text-xl" />
        <span>Sign Out</span>
      </button>
    </div>
  );
}
