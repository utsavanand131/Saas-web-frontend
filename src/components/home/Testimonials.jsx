import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Trisha Mehta",
    role: "Product Manager",
    image: "/avatars/trisha.jpg",
    quote:
      "This SaaS UI saved us weeks of development time. Clean, modern, and incredibly easy to customize.",
  },
  {
    name: "Udit Roy",
    role: "Startup Founder",
    image: "/avatars/udit.jpg",
    quote:
      "The component structure and animations are top-notch. It looks premium out of the box.",
  },
  {
    name: "Ananya Sharma",
    role: "UX Designer",
    image: "/avatars/ananya.jpg",
    quote:
      "A beautifully designed UI that balances aesthetics and usability perfectly.",
  },
];

export default function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
        >
          <p className="text-slate-600 mb-4">“{t.quote}”</p>

          <div className="flex items-center gap-3 mt-6">
            <img
              src={t.image}
              alt={t.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-slate-900">{t.name}</p>
              <p className="text-sm text-slate-500">{t.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
