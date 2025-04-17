"use client";
import { motion } from "framer-motion";
import { FaFilm, FaClock, FaCogs, FaDollarSign } from "react-icons/fa";

export default function WhyChooseUs() {
const steps = [
  {
    title: "High-Quality Editing",
    description:
      "Professional-grade edits with cinematic quality, ensuring your content stands out and leaves a lasting impression.",
    icon: <FaFilm />,
  },
  {
    title: "Fast Turnaround Time",
    description:
      "Depending on your video, we’ll deliver the first draft within 24 hours, ensuring a quick and efficient editing process.",
    icon: <FaClock />,
  },
  {
    title: "Custom Solutions",
    description:
      "We work closely with you to deliver high-quality edits tailored to your vision, ensuring the best possible outcome.",
    icon: <FaCogs />,
  },
  {
    title: "Affordable Pricing",
    description:
      "Get premium-quality video editing at competitive prices without compromising on speed or the final output's excellence.",
    icon: <FaDollarSign />,
  },
];


  return (
    <section className="bg-white text-gray-900 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Why Choose Us?
          </h1>
          <p className="mt-4 text-lg  text-gray-600 max-w-3xl mx-auto">
            At <span className="font-semibold">Vertex Studio</span>, we turn
            your raw footage into visually stunning masterpieces. Whether its
            crafting compelling narratives or delivering seamless visual
            effects, our team ensures every project meets the highest standards
            of excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)",
              }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg transform transition-transform"
            >
              <motion.div
                initial={{ rotate: -45, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: false }}
                className="text-5xl mb-6 text-black"
              >
                {step.icon}
              </motion.div>
              <h2 className="text-2xl font-semibold mb-4">{step.title}</h2>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
