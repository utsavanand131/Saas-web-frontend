import { motion } from "framer-motion";

export default function Card({ children }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white border rounded-xl shadow-sm p-6"
    >
      {children}
    </motion.div>
  );
}
