"use client"; // Client Component

import { useState, useEffect } from "react"; // React Hooks for state  and side effects  management 
import { motion } from "framer-motion"; // framer motion for animation 
import Link from "next/link"; //Next.js link for routing 
import { Canvas } from "@react-three/fiber"; //3D model libraries
import { OrbitControls, useGLTF } from "@react-three/drei"; //3D model libraries 
import Particles from "react-tsparticles"; //Particles.js for background animations 
import { loadFull } from "tsparticles"; //Particles.js for background animations 
import { Typewriter } from "react-simple-typewriter"; //Typewriter effect for text animation

// 3D Robot Model Component with Animation
const Robot = () => {
  const { scene } = useGLTF("/robot_playground.glb");
  return (
    <primitive 
      object={scene} 
      scale={3} 
      position={[0, -1, 0]} 
      onPointerOver={(e) => (e.object.rotation.y += 0.1)}
    />
  );
};

// Navbar Component
const Navbar = () => { 
  //const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); //Mobile menu toggle
  const [scrolling, setScrolling] = useState(false); //Navbarscrolling effect

  useEffect(() => { // useEffect for scrolling effect 
    const handleScroll = () => { //handleScroll function for scrolling effect 
      setScrolling(window.scrollY > 50); //setScrolling function 
    };
    window.addEventListener("scroll", handleScroll); //event listner for scrolling effect 
    return () => window.removeEventListener("scroll", handleScroll); //
  }, []);

  return ( //returning the main content page 
    //text color  className="text-linear-gradient(to right,  #00897B, #00796B) text-2xl font-bold"
    <nav
      className={`w-full p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolling ? "bg-black shadow-lg" : "bg-transprent"
      }`}
    >
      <Link href="/" className="bg-gradient-to-r from-[#00897B] to-[#00796B] bg-clip-text text-transparent text-3xl font-bold">
        Dev Zone
      </Link>
      <button //Mobile Menu toggle Button 
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)} //onClick Function for menu toggle 
      >
        {menuOpen ? "✖" : "☰"}
      </button>
  
      <div //Naviation Links 
      //bg-[#190d2e] black purple  color 
      //neon color code #39ff14
      //bg-gray-900 dark grey color 
      

        className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 transition-transform duration-300 ${menuOpen ? "block" : "hidden md:flex"}`}
      >
        <Link href="/sign-in">
          <button className="px-4 py-2 bg-teal-400 hover:bg-teal-900 text-white rounded-lg transition-all">
            Sign In
          </button>
        </Link>
        <Link href="/sign-up"> 
          <button className="px-4 py-2 bg-teal-400 hover:bg-teal-900 text-white rounded-lg transition-all">
            Sign Up
          </button>
        </Link>
        <Link href="/home">
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all">
            Home
          </button>
        </Link>
        <Link href="/about">
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all">
            About
          </button>
        </Link>
        
      </div>
    </nav>
  );
};

// HomePage Component
//linear gradient code linear-gradient(45deg,#2C3E50,#34495E,#2C3E50,#353b3a,#2C3E50,#2C3E50)
//bg-black
const HomePage = () => {
  return (
    <div className="min-h-screen animate-gradient bg-black bg-[size:400%] text-white px-4 sm:px-6 py-12 relative flex flex-col md:flex-row items-center justify-center overflow-hidden">
      <Navbar />
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            animation: gradientAnimation 10s infinite alternate ease-in-out;
          }
        `}
      </style>
      <Particles
        id="tsparticles"
        init={loadFull}
        options={{
          particles: {
            number: { value: 80 },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
            color: { value: "#00ffff" },
            line_linked: { enable: true, color: "#00ffff" },
          },
        }}
      />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 text-left p-4 z-10"
      >
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Typewriter
            words={["Welcome to Dev Zone", "Master Coding", "Build Real-World Projects"]}
            loop={0}
            cursor
            cursorStyle="|"
          />
        </motion.h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          A space for mastering the art of coding through projects, challenges, and real-world applications.
        </p>
        <Link href="/sign-up">
          <motion.button
            className="px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 hover:bg-teal-700 text-white text-lg font-bold rounded-full shadow-md transition transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Join Now 🚀
          </motion.button>
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 h-96 z-10"
      >
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.3} intensity={1.5} />
          <OrbitControls enableZoom={true} />
          <Robot />
        </Canvas>
      </motion.div>
    </div>
  );
};

export default HomePage;
