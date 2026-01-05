import { motion } from "framer-motion";
import { Check } from "lucide-react";

const testimonials = [
  {
    name: "Trisha",
    role: "Founder, StartupX",
    points: [
      "Clean and modern UI",
      "Easy to customize",
      "Great performance",
      "Perfect SaaS structure",
    ],
  },
  {
    name: "Udit roy",
    role: "Product Manager",
    points: [
      "Well-organized codebase",
      "Reusable components",
      "Smooth animations",
      "Production ready",
    ],
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2">
        {testimonials.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-md border border-slate-200"
          >
            <h4 className="text-lg font-semibold text-slate-900">
              {item.name}
            </h4>
            <p className="text-sm text-slate-600 mb-4">{item.role}</p>

            <ul className="space-y-3">
              {item.points.map((point) => (
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
