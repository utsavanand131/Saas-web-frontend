import { motion } from "framer-motion";

const logos = [
  {
    name: "Google",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Meta",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
  },
  {
    name: "Microsoft",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Netflix",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
];

export default function UsedByTeams() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h3 className="text-center text-sm font-semibold text-slate-600 uppercase tracking-wide mb-10">
          Used by teams at
        </h3>

        {/* Marquee */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.name}
                className="h-10 object-contain opacity-70 hover:opacity-100 transition"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
