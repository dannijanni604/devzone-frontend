"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      console.log("Stored Token:", token); // ✅ Debugging step
      if (!token) {
        setError("Token missing. Please login.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:8000/api/profile", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`, // ✅ Ensure 'Bearer' is added
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Failed to fetch profile");

        setProfileData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/"); // ✅ Redirect to homepage or sign-in
  };

  if (loading) return <div className="text-white p-6">Loading your profile...</div>;
  if (error) return <div className="text-red-500 p-6">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Profile Page</h1>

      <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-md shadow-lg">
        <p><span className="font-semibold">Name:</span> {profileData.name}</p>
        <p><span className="font-semibold">Email:</span> {profileData.email}</p>
        <p><span className="font-semibold">Role:</span> {profileData.role}</p>
      </div>

      <button
        onClick={handleLogout}
        className="mt-8 px-6 py-3 bg-red-600 rounded-2xl font-semibold"
      >
        Sign Out
      </button>
    </div>
  );
}
