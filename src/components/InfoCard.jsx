import { motion } from "framer-motion";

export default function InfoCard({ icon, title, text, delay = 0 }) {
  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{icon}</span>
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      </div>
      <p className="text-gray-600">{text}</p>
    </motion.div>
  );
}
