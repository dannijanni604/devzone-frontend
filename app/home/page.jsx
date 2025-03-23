"use client"; //Client component
import Link from "next/link"; //importing link from next js for routing 
import { motion } from "framer-motion"; //importing framer motion for animation 
import { useState, useEffect } from "react"; // using react hooks for the management of state and side effects 
import { Canvas } from "@react-three/fiber"; //install libraries for 3d model
import { OrbitControls, useGLTF } from "@react-three/drei"; //install libraries for 3d model
import Header from "../components/Header"; //importing header page 

export default function LandingPage() {
  const [isMounted, setIsMounted] = useState(false); //using react hooks for the management of state and side effects

  useEffect(() => { 
    setIsMounted(true); 
  }, []);

  const floatingVariants = {
    float: {
      y: [-10, 10, -10], //floating animation for 3D model
      transition: { //transition for floating animation 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  if (!isMounted) return null; //if not mounted return null

  return ( //returning the main content of the page 
    //grdientanimation effects colors [linear-gradient(45deg,#2C3E50,#2C3E50,#353b3a,#2C3E50,#2C3E50)]
    <div className="min-h-screen flex flex-col items-center justify-center bg-black  text-white px-6 relative overflow-hidden">
      <style jsx global>{` 
        @keyframes gradient-pan {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        } 

        .animated-gradient {
          animation: gradient-pan 20s linear infinite;
          background: radial-gradient(circle at center, 
            rgba(59, 130, 246, 0.2) 0%, 
            rgba(59, 130, 246, 0) 70%);
        }
      `}</style> 
      

      {/*header page embeding start  */} 
      <div className="w-full fixed top-0 z-50 bg-gray-900 shadow-lg">
      <Header />
    </div>
    {/*header page embeding end */} 





      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full mt-24 md:mt-32"> {/*animation for the text component */} 
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16"> 
          <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} 
            className="text-5xl md:text-7xl font-extrabold mb-6"
            style={{ background: "linear-gradient(to right,  #00897B, #00796B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Welcome to Dev Zone 🚀
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Dev Zone is an interactive web application for code crafting, learning, and collaboration. Start your coding journey today!
          </motion.p>
          <motion.div className="flex justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/sign-up">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-teal-600 rounded-xl text-lg font-bold hover:bg-teal-700 transition-all relative overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* 3D Robot Model */}
        <motion.div className="w-full h-64 md:h-96 flex justify-center items-center">  {/* 3D animation for the robot  model */}
          <Canvas>  {/* using three.js for 3Drendering  */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 5, 2]} intensity={1} />
            <OrbitControls enableZoom={false} />
            <motion.group variants={floatingVariants} animate="float">
              <RobotModel />
            </motion.group> {/* using motion for animation  */}
          </Canvas>
        </motion.div>

        {/* Feature Cards */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {[
            { icon: "💻", title: "Learning", text: "Real-time Interacting environment" },
            { icon: "👥", title: "Collaboration", text: "Networking  and team collaboration" },
            { icon: "🔧", title: "Hands-on Practice", text: "Practical Approach" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-10 bg-gray-800 rounded-2xl h-80 backdrop-blur-sm hover:bg-gray-700 transition-all shadow-lg hover:shadow-teal-500/50"
            >
              <div className="text-teal-400 mb-6 text-5xl">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
} //end of the main content of the page

// 3D Robot Model Component
function RobotModel() {
  const { scene } = useGLTF("/robot_playground.glb"); // robot model path
  return <primitive object={scene} scale={2.5} position={[0, -1.5, 0]} />; //returning the 3D model  of the robot
}
