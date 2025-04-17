"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    const formAction = "https://formsubmit.co/evibessolutions@gmail.com";

    const form = document.createElement("form");
    form.method = "POST";
    form.action = formAction;

    const hiddenFields = {
      _subject: "Thank You for Contacting Vertex Studio!",
      _autoresponse:
        "Thank you for contacting us! We appreciate your interest in our services. Our team will review your message and get back to you as soon as possible. If you have any urgent inquiries, feel free to reach out directly. Looking forward to working with you!",
      _template: "table",
    };

    Object.entries({ ...formData, ...hiddenFields }).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    alert("Form submitted successfully! Check your email.");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
    setCaptchaValue(null);
  };

  return (
    <section className="min-h-screen bg-white text-black py-12 px-4 sm:px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-md sm:text-lg text-gray-700 mt-4 text-center max-w-xl mx-auto"
        >
          Feel free to reach out! Just send us an email, and we’ll take care of
          the rest. We’ll get in touch, discuss your project details, and
          hopefully, bring your vision to life with a professionally edited
          video.
        </motion.p>

        <div className="p-4 sm:p-8 rounded-lg">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="flex flex-col">
              <label className="text-black font-semibold mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-black font-semibold mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label className="text-black font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label className="text-black font-semibold mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label className="text-black font-semibold mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                placeholder="Enter your company name"
                value={formData.company}
                onChange={handleChange}
                className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label className="text-black font-semibold mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              ></textarea>
            </div>

            <div className="flex justify-center sm:col-span-2">
              <ReCAPTCHA
                sitekey="6LdZXP8qAAAAAB4e6rHycGMNO0e6A4gn79VyR59i"
                size={window.innerWidth < 768 ? "compact" : "normal"}
                onChange={setCaptchaValue}
              />
            </div>

            <div className="sm:col-span-2 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md"
              >
                Submit
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
