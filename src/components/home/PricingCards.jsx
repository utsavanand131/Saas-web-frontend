import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹99",
    points: [
      "Basic analytics",
      "Single project",
      "Email support",
      "Community access",
    ],
  },
  {
    name: "Pro",
    price: "₹299",
    popular: true,
    points: [
      "Advanced analytics",
      "Unlimited projects",
      "Priority support",
      "Team collaboration",
    ],
  },
  {
    name: "Enterprise",
    price: "₹999",
    points: [
      "Custom solutions",
      "Dedicated support",
      "Enterprise security",
      "SLA guarantee",
    ],
  },
];

export default function PricingCards() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className={`relative bg-white rounded-xl p-8 shadow-lg border ${
              plan.popular
                ? "border-indigo-600"
                : "border-slate-200"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 right-6 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <h3 className="text-xl font-semibold text-slate-900">
              {plan.name}
            </h3>

            <p className="mt-4 text-4xl font-bold text-slate-900">
              {plan.price}
              <span className="text-base font-medium text-slate-600">/mo</span>
            </p>

            <ul className="mt-6 space-y-3">
              {plan.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full rounded-lg bg-indigo-600 py-2.5 text-white font-medium hover:bg-indigo-500 transition">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
