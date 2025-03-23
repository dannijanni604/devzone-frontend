"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiGithub, FiLinkedin, FiUser, FiLock, FiMail } from "react-icons/fi";
import ThreeDCanvas from "../components/ui/ThreeDCanvas";
import InputField from "../components/ui/InputField";
import SocialAuthButtons from "../components/ui/SocialAuthButtons";

export default function SignUpPage() {
  const router = useRouter();

  // ✅ Use 'name' as expected by your backend
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    github: "",
    linkedin: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    const signUpUrl = "http://localhost:8000/api/user/create"; // ✅ Your correct API endpoint

    try {
      const response = await fetch(signUpUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Sign up failed");
      console.log("User created successfully:", data);

      router.push("/sign-in"); // ✅ Redirect to Sign In page on success
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col md:flex-row relative">
      {/* Full-page animated background */}
      <div className="absolute inset-0 w-full h-full">
        <ThreeDCanvas />
      </div>

      {/* Left Side - Welcome Section */}
      <div className="hidden md:flex md:w-3/5 justify-center items-center text-center p-6 md:p-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent mb-4">
            Join the DevZone
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            Code. Learn. Build. Connect.
          </p>
        </motion.div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full md:w-2/5 flex justify-center items-center p-6 sm:p-8 md:p-12 z-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-lg"
        >
          <form
            onSubmit={handleSignUp}
            className="bg-black/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-teal-400 shadow-2xl shadow-teal-400"
          >
            {/* Signup Header */}
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent"
            >
              Create Account
            </motion.h1>

            {/* Input Fields */}
            <div className="space-y-4">
              {[
                {
                  icon: <FiUser />,
                  name: "name", // ✅ Updated here
                  placeholder: "Your Name",
                },
                {
                  icon: <FiMail />,
                  name: "email",
                  placeholder: "hello@devzone.com",
                },
                {
                  icon: <FiLock />,
                  name: "password",
                  type: "password",
                  placeholder: "Password",
                },
                {
                  icon: <FiGithub />,
                  name: "github",
                  placeholder: "https://github.com/username",
                },
                {
                  icon: <FiLinkedin />,
                  name: "linkedin",
                  placeholder: "https://linkedin.com/in/username",
                },
              ].map((field) => (
                <InputField
                  key={field.name}
                  {...field}
                  value={formData[field.name]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.name]: e.target.value })
                  }
                />
              ))}
            </div>

            {/* Sign Up Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 px-6 py-3 bg-teal-600 rounded-2xl font-bold text-lg tracking-wide text-white"
              type="submit"
            >
              Sign Up
            </motion.button>

            {/* Social Media Login */}
            <div className="mt-4 flex justify-center">
              <span className="text-gray-400 text-sm">or continue with</span>
            </div>
            <SocialAuthButtons />

            {/* Already have an account? */}
            <p className="mt-6 text-center text-gray-400">
              Already part of the crew?{" "}
              <Link
                href="/sign-in"
                className="text-white hover:text-emerald-400 underline"
              >
                Beam In Here
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
