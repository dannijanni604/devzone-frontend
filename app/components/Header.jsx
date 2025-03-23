import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useUser, SignOutButton } from "@clerk/nextjs";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isSignedIn } = useUser();
  //fixed
  //w-full

  return (
    <motion.header
      className=" w-full z-50 bg-black text-white shadow-lg p-4 backdrop-blur-md bg-opacity-100"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="bg-gradient-to-r from-[#00897B] to-[#00796B] bg-clip-text text-transparent text-3xl font-bold">Dev Zone</h1>
        
        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 absolute md:static top-16 left-0 right-0 bg-black md:bg-transparent p-4 md:p-0 rounded-md md:rounded-none transition-all duration-300 ease-in-out`}
        >
          <Link href="/" className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-2 px-4 rounded-full font-semibold hover:text-teal-300 transition-all duration-300">
            Home
          </Link>
          <Link href="/about" className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-2 px-4 rounded-full font-semibold hover:text-teal-300 transition-all duration-300">
            About
          </Link>
          {isSignedIn ? (
            <>
              <Link href="/profile" className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-2 px-4 rounded-full font-semibold hover:text-teal-300 transition-all duration-300">
                Profile
              </Link>
              <Link href="/dashboard" className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-2 px-4 rounded-full font-semibold hover:text-teal-300 transition-all duration-300">
                Dashboard
              </Link>
              <SignOutButton>
                <button className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-2 px-4 rounded-full font-semibold hover:text-teal-300 transition-all duration-300">
                  Sign Out
                </button>
              </SignOutButton>
            </>
          ) : (
            <>
              <Link href="/sign-up" className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-2 px-4 rounded-full font-semibold hover:text-teal-300 transition-all duration-300">
                Sign Up
              </Link>
              <Link href="/sign-in" className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-2 px-4 rounded-full font-semibold hover:text-teal-300 transition-all duration-300">
                Sign In
              </Link>
            </>
          )}
        </nav>

        {/* Dark/Light Mode Toggle (Commented Out) */}
        {/*
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="hidden md:block bg-gradient-to-r from-gray-600 to-gray-800 text-white p-2 rounded-full hover:scale-105 transition-all shadow-md"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: theme === "dark" ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.div>
        </button>
        */}
      </div>
    </motion.header>
  );
};

export default Header;

// Updated header background color from gray to black for consistency
// Commented out the dark/light theme toggle