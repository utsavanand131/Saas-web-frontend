import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  {
    title: "Fast Performance",
    points: [
      "Optimized React architecture",
      "Lightning-fast load times",
      "Minimal bundle size",
      "Smooth UI interactions",
    ],
  },
  {
    title: "Secure by Design",
    points: [
      "Modern best practices",
      "Safe client-side routing",
      "No unnecessary dependencies",
      "Predictable state flow",
    ],
  },
  {
    title: "Scalable UI",
    points: [
      "Reusable components",
      "Clean folder structure",
      "Easy feature expansion",
      "Production-ready setup",
    ],
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-md border border-slate-200"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              {feature.title}
            </h3>

            <ul className="space-y-3">
              {feature.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
