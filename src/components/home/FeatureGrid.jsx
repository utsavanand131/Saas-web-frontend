import { motion } from "framer-motion";
import { Check, Zap, Layers, Rocket } from "lucide-react";

const features = [
  {
    title: "Fast Performance",
    icon: Zap,
    points: [
      "Optimized UI",
      "Smooth animations",
      "Instant navigation",
      "Vite powered",
    ],
  },
  {
    title: "Clean Architecture",
    icon: Layers,
    points: [
      "Reusable components",
      "Scalable structure",
      "Best practices",
      "Easy to maintain",
    ],
  },
  {
    title: "Launch Ready",
    icon: Rocket,
    points: [
      "Production friendly",
      "SEO ready layout",
      "Responsive design",
      "Modern stack",
    ],
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {features.map((feature, i) => {
        const Icon = feature.icon;

        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-xl p-8 shadow-lg border border-slate-200"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-slate-100">
                <Icon className="w-6 h-6 text-slate-900" />
              </div>
            </div>

            <h3 className="text-lg font-semibold text-center mb-4 text-slate-900">
              {feature.title}
            </h3>

            <ul className="space-y-3">
              {feature.points.map((point) => (
                <li key={point} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-black mt-0.5" />
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}
