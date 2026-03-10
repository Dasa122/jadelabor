import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          className="text-lg text-gray-500 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
