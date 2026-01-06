import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

        <p className="mb-8 text-slate-600">
          A modern SaaS UI focused on clarity and performance.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex justify-center gap-4">
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition"
          >
            Get Started for Free
          </Link>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-slate-700 hover:bg-slate-100 transition"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}
