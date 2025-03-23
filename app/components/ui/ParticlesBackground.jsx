// app/components/ui/ParticlesBackground.jsx
import { motion } from "framer-motion";

export default function ParticlesBackground() {
  return (
    <div className="absolute inset-0 opacity-20">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-teal-400 rounded-full"
          initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", scale: 0 }}
          animate={{ scale: [0, 1, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
