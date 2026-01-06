import { motion } from "framer-motion";
<<<<<<< HEAD
import { Check } from "lucide-react";
=======
import { Check, Zap, Layers, Rocket } from "lucide-react";
>>>>>>> 2ede370 (Add animated feature grid with icons)

const features = [
  {
    title: "Fast Performance",
<<<<<<< HEAD
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
=======
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
    title: "Modern Stack",
    icon: Rocket,
    points: [
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide Icons",
>>>>>>> 2ede370 (Add animated feature grid with icons)
    ],
  },
];

export default function FeatureGrid() {
  return (
<<<<<<< HEAD
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {features.map((feature, i) => (
=======
    <div className="grid gap-8 md:grid-cols-3">
      {features.map((feature, i) => {
        const Icon = feature.icon;

        return (
>>>>>>> 2ede370 (Add animated feature grid with icons)
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-md border border-slate-200"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
=======
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

            <h3 className="text-lg font-semibold text-center mb-4">
>>>>>>> 2ede370 (Add animated feature grid with icons)
              {feature.title}
            </h3>

            <ul className="space-y-3">
              {feature.points.map((point) => (
<<<<<<< HEAD
                <li key={point} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
=======
                <li key={point} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-black mt-0.5" />
>>>>>>> 2ede370 (Add animated feature grid with icons)
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
<<<<<<< HEAD
        ))}
      </div>
    </section>
  );
}
=======
        );
      })}
    </div>
  );
}

        
>>>>>>> 2ede370 (Add animated feature grid with icons)
