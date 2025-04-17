"use client";

import { motion } from "framer-motion";
import {
  FaFilm,
  FaMusic,
  FaHeart,
  FaBuilding,
  FaShareSquare,
  FaVideo,
} from "react-icons/fa";

const pageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: index * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Services() {
  const services = [
    {
      title: "Wedding & Event Editing",
      description:
        "Beautifully edited wedding and event videos that capture emotions and special moments.",
      icon: () => <FaHeart size={40} />,
      link: "#contactus",
    },
    {
      title: "Social Media Content Editing",
      description:
        "Short-form, high-impact videos optimized for Instagram, TikTok, and other platforms.",
      icon: () => <FaShareSquare size={40} />,
      link: "#contactus",
    },
    {
      title: "Corporate & Commercial Video Editing",
      description:
        "Professional corporate videos and brand promos with a high production value.",
      icon: () => <FaBuilding size={40} />,
      link: "#contactus",
    },
    {
      title: "Documentary & Short Film Editing",
      description:
        "Editing that enhances storytelling, pacing, and overall visual appeal for filmmakers and storytellers.",
      icon: () => <FaVideo size={40} />,
      link: "#contactus",
    },
    {
      title: "Youtube Content Editing",
      description:
        "Crisp, smooth, and engaging edits that enhance the flow and impact of your footage.",
      icon: () => <FaFilm size={40} />,
      link: "#contactus",
    },
    {
      title: "Audio Editing & Sound Design",
      description:
        "Clear and immersive sound with noise reduction, background music, and professional sound effects.",
      icon: () => <FaMusic size={40} />,
      link: "#contactus",
    },
  ];

  return (
    <motion.div
      className="bg-white text-black"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={pageVariants}
      viewport={{ once: false }}
    >
      <section
        id="services"
        className="min-h-screen py-12 px-6 flex flex-col items-center"
      >
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-bold text-black text-center"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-md md:text-lg text-gray-700 mt-2 text-center max-w-lg"
          >
            High-quality, professional video editing services tailored to your
            needs.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          viewport={{ once: false }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              viewport={{ once: false }}
              whileHover="hover"
              className="relative w-full h-[400px] bg-gray-100 border border-gray-300 shadow-lg rounded-lg overflow-hidden text-center flex flex-col items-center justify-between p-6 transition duration-300 ease-in-out hover:bg-black hover:text-white group"
            >
              <div className="mb-4 p-4 text-black bg-gray-200 rounded-full flex items-center justify-center">
                {service.icon()}
              </div>
              <h3 className="text-3xl font-semibold">{service.title}</h3>
              <p className="text-lg max-w-[250px] mb-4">
                {service.description}
              </p>
              <motion.a
                href={service.link}
                className="px-4 py-2 bg-black text-white rounded-lg text-lg font-medium transition group-hover:bg-white group-hover:text-black"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
