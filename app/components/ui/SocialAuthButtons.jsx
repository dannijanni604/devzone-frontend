
// app/components/ui/SocialAuthButtons.jsx

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function SocialAuthButtons() {
  const services = [
    { icon: <FiGithub className="text-2xl text-white" />, text: "GitHub" },
    { icon: <FiLinkedin className="text-2xl text-white"/>, text: "LinkedIn" },
  ];

  return (
    <div className="mt-8 grid grid-cols-2 gap-4">
      {services.map((service, index) => (
        <motion.button
          key={index}
          whileHover={{ y: -3 }}
          className="flex items-center justify-center space-x-2 py-3 bg-teal-400/10 rounded-xl border border-teal-400 hover:border-teal-300 transition-all"
        >
          {service.icon}
          <span className="text-white">{service.text}</span>
        </motion.button>
      ))}
    </div>
  );
}