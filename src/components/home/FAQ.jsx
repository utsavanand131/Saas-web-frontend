<<<<<<< HEAD
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
=======
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is this SaaS UI template?",
    answer:
      "This is a modern, frontend-only SaaS UI template built with React, Tailwind CSS, React Router, and Framer Motion. It helps you quickly build professional SaaS landing pages.",
  },
  {
    question: "Is this template suitable for production use?",
    answer:
      "Yes. It follows clean architecture, reusable components, and responsive design principles, making it production-ready.",
  },
  {
    question: "Does this include backend or API integration?",
    answer:
      "No. This is a frontend-only project. You can integrate any backend or API you prefer.",
  },
  {
    question: "Can I customize the design and components?",
    answer:
      "Yes. Tailwind CSS allows easy customization of colors, spacing, typography, and layouts.",
  },
  {
    question: "Does it support mobile devices?",
    answer:
      "Yes. The entire UI is responsive and optimized for mobile, tablet, and desktop devices.",
>>>>>>> 61b0a70 (Add FAQ accordion)
  },
];

export default function FAQ() {
<<<<<<< HEAD
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
=======
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white border border-slate-200 rounded-xl shadow-sm"
        >
          <button
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="w-full flex justify-between items-center p-6 text-left"
          >
            <span className="font-semibold text-slate-900">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 transition ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {openIndex === index && (
            <div className="px-6 pb-6 text-slate-600">
              {faq.answer}
            </div>
          )}
        </div>
>>>>>>> 61b0a70 (Add FAQ accordion)
      ))}
    </div>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 61b0a70 (Add FAQ accordion)
