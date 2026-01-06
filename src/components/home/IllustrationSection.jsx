import { motion } from "framer-motion";
import img1 from "../../assets/illustrations/saas.webp";
import img2 from "../../assets/illustrations/saas2.webp"; 

export default function IllustrationSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 items-center">
        <motion.img
          src={img1}
          alt="SaaS dashboard"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full rounded-xl shadow-xl"
        />

        <motion.img
          src={img2}
          alt="Analytics view"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full rounded-xl shadow-xl"
        />
      </div>
    </section>
  );
}

