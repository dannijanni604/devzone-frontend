"use client";
import { useState, useEffect } from "react";
import { UserGroupIcon, TrashIcon } from "@heroicons/react/24/solid";


const TeamManagement = () => {
  const [teams, setTeams] = useState([]);
  const [newMemberEmail, setNewMemberEmail] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(true); // Assume user is authorized

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch("/api/teams");
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams();
  }, []);

  const handleAddMember = async (teamId) => {
    if (!newMemberEmail.trim()) return;

    if (!isAuthorized) {
      alert("You are not authorized to add team members."); // Alert for unauthorized users
      return;
    }

    try {
      const response = await fetch(`/api/teams/${teamId}/members`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: newMemberEmail }),
      });

      if (response.ok) {
        const updatedTeams = teams.map((team) =>
          team.id === teamId
            ? { ...team, members: [...team.members, newMemberEmail] }
            : team
        );
        setTeams(updatedTeams);
        setNewMemberEmail("");
      }
    } catch (error) {
      console.error("Error adding member:", error);
    }
  };

  const handleRemoveMember = async (teamId, memberEmail) => {
    try {
      const response = await fetch(`/api/teams/${teamId}/members`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: memberEmail }),
      });

      if (response.ok) {
        const updatedTeams = teams.map((team) =>
          team.id === teamId
            ? {
                ...team,
                members: team.members.filter((email) => email !== memberEmail),
              }
            : team
        );
        setTeams(updatedTeams);
      }
    } catch (error) {
      console.error("Error removing member:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Team Management</h3>
      <div className="space-y-4">
        {teams.map((team) => (
          <div key={team.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold">Team {team.name}</h4>
              <div className="flex items-center space-x-2">
                <input
                  type="email"
                  value={newMemberEmail}
                  onChange={(e) => setNewMemberEmail(e.target.value)}
                  placeholder="Enter member email"
                  className="border rounded-lg px-2 py-1 text-sm"
                />
                  <button
                    onClick={() => handleAddMember(team.id)}
                    className="bg-blue-500 text-white p-1 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Add Member

                </button>
              </div>
            </div>
            <div className="space-y-2">
              {team.members.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
                >
                  <span>{member}</span>
                  <button
                    onClick={() => handleRemoveMember(team.id, member)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamManagement;
