
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is SaaSify?",
    answer:
      "SaaSify is a modern frontend SaaS UI template built with React, Tailwind CSS, React Router, and Framer Motion to help you launch faster.",
  },
  {
    question: "Is this template production ready?",
    answer:
      "Yes. It follows scalable architecture, reusable components, and responsive design best practices.",
  },
  {
    question: "Does SaaSify include a backend?",
    answer:
      "No. SaaSify is frontend-only. You can connect any backend or API of your choice.",
  },
  {
    question: "Can I customize the UI?",
    answer:
      "Absolutely. Tailwind CSS makes it easy to customize colors, spacing, typography, and layouts.",
  },
  {
    question: "Is it mobile friendly?",
    answer:
      "Yes. SaaSify is fully responsive and optimized for mobile, tablet, and desktop devices.",
  },
];export default function FAQ() {
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
              className={`w-5 h-5 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {openIndex === index && (
            <div className="px-6 pb-6 text-slate-600">
              {faq.answer}
            </div>
          )}        </div>
      ))}
    </div>
  );}
