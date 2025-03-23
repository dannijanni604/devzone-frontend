"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Typewriter } from "react-simple-typewriter";
import { useRouter } from "next/navigation";

// 3D Robot Model Component
const Robot = () => {
  const { scene } = useGLTF("/robot_playground.glb");
  return <primitive object={scene} scale={3} position={[0, -1, 0]} />;
};

// Navbar Component
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setIsSignedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsSignedIn(false);
    setUser(null);
    router.push("/sign-in");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolling ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <Link
        href="/"
        className="bg-gradient-to-r from-[#00897B] to-[#00796B] bg-clip-text text-transparent text-3xl font-bold"
      >
        Dev Zone
      </Link>

      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      <div
        className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 transition-transform duration-300 ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <Link href="/about">
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all">
            About
          </button>
        </Link>

        {isSignedIn ? (
          <>
            <Link href="/home">
              <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all">
                Home
              </button>
            </Link>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </nav>
  );
};

// HomePage Component
const HomePage = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setIsSignedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

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
            words={[
              "Welcome to Dev Zone",
              "Master Coding",
              "Build Real-World Projects",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
          />
        </motion.h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          A space for mastering the art of coding through projects, challenges,
          and real-world applications.
        </p>
        {isSignedIn ? (
          <Link href="/DashB">
            <motion.button
              className="px-6 sm:px-8 py-3 sm:py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-full shadow-md transition transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              Dashboard 🏠
            </motion.button>
          </Link>
        ) : (
          <Link href="/sign-up">
            <motion.button
              className="px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 hover:bg-teal-700 text-white text-lg font-bold rounded-full shadow-md transition transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              Join Now 🚀
            </motion.button>
          </Link>
        )}
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
