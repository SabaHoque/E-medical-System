"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          EyeCare<span className="text-gray-800">AI</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center text-sm">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <Link href="/patient/map" className="text-gray-700 hover:text-blue-600">Map</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/auth/login" className="px-4 py-2 rounded-lg border text-blue-600 border-blue-600 hover:bg-blue-50">Login</Link>
          <Link href="/auth/signup" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Sign Up</Link>
        </div>
      </div>
    </motion.nav>
  );
}
