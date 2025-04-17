"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        <div className="flex items-center space-x-3">
          <Image src="/logoblack.png" alt="Logo" width={100} height={100} />
        </div>

        <ul className="hidden md:flex text-lg space-x-6">
          {["Services", "About Us", "Workflow", "Contact Us"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                className="text-black font-bold hover:text-gray-300 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-black absolute right-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={30} />
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center backdrop-blur-lg py-4 space-y-4 absolute w-full left-0 bg-white shadow-lg">
          {["Services", "About Us", "Workflow", "Contact Us"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                className="text-black font-bold hover:text-gray-300 transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
