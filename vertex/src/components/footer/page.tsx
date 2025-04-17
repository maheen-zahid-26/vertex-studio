"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/logo.png"
            alt="Vertex Studio Logo"
            width={200}
            height={200}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h2 className="text-xl font-bold text-white mb-2">Contact Us</h2>
          <p className="text-gray-300">📞 +92 300 1234567</p>
          <p className="text-gray-300">📍 Vertex Studio, Lahore, Pakistan</p>
          <p className="text-gray-300">📩 vertex.studio.va@gmail.com</p>
        </motion.div>

        <div className="flex flex-col items-center md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex space-x-6 text-2xl"
          >
            {[
              { href: "https://facebook.com/vertexstudio", icon: FaFacebookF },
              { href: "https://instagram.com/vertexstudio", icon: FaInstagram },
              {
                href: "https://linkedin.com/company/vertexstudio",
                icon: FaLinkedinIn,
              },
              { href: "https://youtube.com/@vertexstudio", icon: FaYoutube },
            ].map(({ href, icon: Icon }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                aria-label="Social Link"
              >
                <motion.div
                  whileHover={{ scale: 1.1, color: "#ccc" }}
                  className="transition duration-200 text-white hover:text-gray-400"
                >
                  <Icon />
                </motion.div>
              </Link>
            ))}
          </motion.div>

          <div className="text-gray-400 text-sm text-center md:text-right mt-4">
            &copy; {new Date().getFullYear()} Vertex Studio. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
