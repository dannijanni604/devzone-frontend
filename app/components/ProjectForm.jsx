"use client";
import { useState } from "react";

const ProjectForm = ({ setProjects }) => {
  const [formData, setFormData] = useState({
    repositoryLink: "",
    youtubeLink: "",
    skills: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/submit-project", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const newProject = await response.json();
      setProjects((prevProjects) => [newProject, ...prevProjects]);
      setFormData({ repositoryLink: "", youtubeLink: "", skills: "" });
      setMessage("Project submitted successfully!");
    } else {
      setMessage("Error submitting project.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <input type="url" name="repositoryLink" placeholder="Repository Link" value={formData.repositoryLink} onChange={handleChange} required />
      <input type="url" name="youtubeLink" placeholder="YouTube Video Link" value={formData.youtubeLink} onChange={handleChange} required />
      <input type="text" name="skills" placeholder="Skills" value={formData.skills} onChange={handleChange} required />
      <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit Project"}</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default ProjectForm;
