"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-white text-black min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 py-12">
    
      <motion.div
        className="lg:w-1/2 max-w-xl space-y-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Vertex Studio
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          At <span className="font-semibold">Vertex Studio</span>, we transform
          raw footage into stunning, cinematic experiences. From dynamic
          storytelling to crisp visual effects, our team delivers unmatched
          quality in video editing for brands and creators worldwide.
        </motion.p>

        <motion.a
          href="/contact"
          className="inline-block mt-4 px-6 py-3 bg-black hover:bg-gray-900 text-white rounded-lg text-lg font-medium transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>

      <motion.div
        className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <video
          className="w-full h-full object-cover  transition"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </section>
  );
}
