"use client";
import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Cards";
//import SideNavbar from "../components/ui/SideNavbar";

const projectsData = [
  {
    week: 1,
    title: "Solo Project 1",
    videoUrl: "https://www.youtube.com/embed/0YFrGy_mzjY",
    unlocked: true,
  },
  {
    week: 2,
    title: "Solo Project 2",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    unlocked: false,
  },
  {
    week: 3,
    title: "Team Project 1",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    unlocked: false,
  },
  {
    week: 4,
    title: "Team Project 2",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    unlocked: false,
  },
  {
    week: 5,
    title: "Team Project 3",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    unlocked: false,
  },
  {
    week: 6,
    title: "Team Project 4",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    unlocked: false,
  },
  {
    week: 7,
    title: "Team Project 5",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    unlocked: false,
  },
];

export default function ProjectPage() {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);
  const [submission, setSubmission] = useState({
    repoLink: "",
    skills: "",
    projectUrl: "",
  });

  const handleInputChange = (e) => {
    setSubmission({ ...submission, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Submission:", submission);
    alert("Project Submitted Successfully!");
    setSubmission({ repoLink: "", skills: "", projectUrl: "" });
  };

  return (
    <div className="flex bg-black text-white min-h-screen">
      {/*<SideNavbar />*/}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>

        {/* Week Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {projectsData.map((project) => (
            <Button
              key={project.week}
              className={`rounded-2xl p-4 shadow-lg ${
                project.unlocked ? "bg-teal-600 hover:bg-teal-700" : "bg-gray-700 cursor-not-allowed"
              }`}
              onClick={() => project.unlocked && setSelectedProject(project)}
            >
              Week {project.week}<br />
              <span className="text-sm">{project.title}</span>
            </Button>
          ))}
        </div>

        {/* Project Video */}
        <Card className="bg-gray-900 rounded-2xl p-4 shadow-2xl">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-4">{selectedProject.title}</h2>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={selectedProject.videoUrl}
                title="Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Submission Form */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Project Submission</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="GitHub Repository Link"
                  name="repoLink"
                  value={submission.repoLink}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="text"
                  placeholder="Skills Used"
                  name="skills"
                  value={submission.skills}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="text"
                  placeholder="Project Video / Drive URL"
                  name="projectUrl"
                  value={submission.projectUrl}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <Button
                  className="bg-teal-600 hover:bg-teal-700 rounded-xl px-6 py-3"
                  onClick={handleSubmit}
                >
                  Submit Project
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
