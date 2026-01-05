import { motion } from "framer-motion";

const faqs = [
  {
    question: "Is this frontend only?",
    answer: "Yes, this project is purely frontend with no backend integration.",
  },
  {
    question: "Can I customize it?",
    answer: "Absolutely. The components are reusable and easy to extend.",
  },
  {
    question: "Is it production ready?",
    answer: "Yes, the UI structure follows modern SaaS best practices.",
  },
];

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {faqs.map((faq, i) => (
        <motion.div
          key={faq.question}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-6 border border-slate-200"
        >
          <h4 className="font-semibold text-slate-900">
            {faq.question}
          </h4>
          <p className="mt-2 text-slate-600">
            {faq.answer}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

