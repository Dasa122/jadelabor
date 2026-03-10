import { motion, AnimatePresence } from "framer-motion";

export default function Accordion({ id, icon, title, subtitle, children, isOpen, onToggle }) {
  return (
    <div id={id} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-6 text-left bg-white hover:bg-gray-50 transition border-0 cursor-pointer"
      >
        <span className="text-4xl flex-shrink-0">{icon}</span>
        <div className="flex-grow">
          <h2 className="text-xl font-bold text-gray-800 mb-1">{title}</h2>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
        <motion.svg
          className="w-5 h-5 text-gray-400 flex-shrink-0"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-gray-100">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
