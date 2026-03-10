import { motion } from "framer-motion";

export default function SectionHeading({ children, className = "" }) {
  return (
    <motion.h2
      className={`text-2xl font-bold text-gray-800 mb-6 text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h2>
  );
}
