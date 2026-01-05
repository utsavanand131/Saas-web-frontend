import { motion } from "framer-motion";
import Section from "../ui/Section";

export default function Hero() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          Build Better Products, Faster
        </h1>
        <p className="text-gray-600 mb-8  text-slate-800">
          A modern SaaS UI focused on clarity and performance.
        </p>
      </motion.div>
    </Section>
  );
}
