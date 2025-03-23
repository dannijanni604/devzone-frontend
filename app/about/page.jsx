"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";

const aboutSections = [
  {
    title: "Our Mission",
    text: "Empowering coders with interactive tutorials, real-time feedback, and hands-on projects.",
    image: "/a1.png",
  },
  {
    title: "Our Vision",
    text: "To build a thriving community of developers who grow through collaboration and innovation.",
    image: "/v1.png",
  },
  {
    title: "Networking",
    text: "You'll get networking opportunity with like minded indiviuals to learn and explore.",
    image: "/n1.png",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
      {/* Header */}
      <div className="w-full fixed top-0 z-50 bg-gray-900 shadow-lg">
        <Header />
      </div>

      {/* Title */}
      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold mt-24 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        About US
      </motion.h1>

      {/* About Sections */}
      <div className="mt-12 w-full max-w-5xl space-y-12">
        {aboutSections.map((section, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center gap-8`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <img
              src={section.image}
              alt={section.title}
              className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-64"
            />
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-teal-400">{section.title}</h2>
              <p className="text-gray-300 mt-2">{section.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
