"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiMail, FiLock } from "react-icons/fi";
import ThreeDCanvas from "../components/ui/ThreeDCanvas";
import InputField from "../components/ui/InputField";

export default function SignInPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔄 Auto-redirect if token exists
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("TOKEN Present");
      router.push("/DashB"); // ✅ Redirect to dashboard if token is found
    }
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");

      if (data.token) {
        console.log("Token received:", data.token);
        localStorage.setItem("token", data.token); // ✅ Store token
        console.log("TOKEN STORED");
        localStorage.setItem("user", JSON.stringify(data.loggedInUser)); // ✅ Store user info
      } else {
        throw new Error("Token missing in response");
      }

      router.push("/DashB"); // ✅ Redirect after login
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col md:flex-row relative">
      <div className="absolute inset-0 w-full h-full">
        <ThreeDCanvas />
      </div>

      <div className="hidden md:flex md:w-3/5 justify-center items-center text-center p-6 md:p-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent mb-4">
            Welcome Back to DevZone
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            Code. Learn. Build. Connect.
          </p>
        </motion.div>
      </div>

      <div className="w-full md:w-2/5 flex justify-center items-center p-6 sm:p-8 md:p-12 z-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-lg"
        >
          <form
            onSubmit={handleSignIn}
            className="bg-black/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-teal-400 shadow-2xl shadow-teal-400"
          >
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent"
            >
              Sign In
            </motion.h1>

            <div className="space-y-4">
              {[
                {
                  icon: <FiMail />,
                  name: "email",
                  placeholder: "hello@devzone.com",
                },
                { icon: <FiLock />, name: "password", type: "password" },
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

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="w-full mt-6 px-6 py-3 bg-teal-600 rounded-2xl font-bold text-lg tracking-wide text-white disabled:opacity-50"
            >
              {loading ? "Signing In..." : "Sign In"}
            </motion.button>

            <p className="mt-6 text-center text-gray-400">
              New here?{" "}
              <Link
                href="/sign-up"
                className="text-white hover:text-emerald-400 underline"
              >
                Join Now
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
