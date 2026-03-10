import { motion } from "framer-motion";
import { pageTransition } from "../animations";

export default function PageLayout({ children, className = "bg-gray-50" }) {
  return (
    <motion.div className={`min-h-screen ${className} py-12 px-4`} {...pageTransition}>
      {children}
    </motion.div>
  );
}
