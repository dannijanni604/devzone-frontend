// app/components/ui/InputField.jsx

import { motion } from "framer-motion";

export default function InputField({ icon, name, type = "text", placeholder, value, onChange }) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
      <div className="flex items-center space-x-3 border-b-2 border-teal-400 pb-2">
        <span className="text-teal-400 text-xl">{icon}</span>
        <input
          type={type}
          name={name}
          required
          placeholder={placeholder}
          className="w-full  bg-transparent py-3 text-gray-200 placeholder-gray-500 focus:outline-none"
          value={value}
          onChange={onChange}
        />
      </div>
    </motion.div>
  );
}