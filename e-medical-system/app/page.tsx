"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function LandingPage() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <main className="bg-white text-gray-800">
      {/*  Navbar */}
      <header className="bg-white shadow-[0_4px_6px_-1px_rgba(59,130,246,0.3),0_2px_4px_-1px_rgba(59,130,246,0.06)] fixed w-full z-50 top-0">

        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Brand */}
          <Link
            href="/"
            className="text-2xl font-bold text-blue-700 hover:text-blue-900 transition"
          >
            EyeCare<span className="text-gray-800">AI</span>
          </Link>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 transition"
              >
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-1 hover:text-blue-600 transition"
              >
                Services <ChevronDown size={16} />
              </button>

              {showDropdown && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg border rounded-md w-56 z-50">
                  <li>
                    <Link
                      href="/auth/login"
                      className="block px-4 py-2 hover:bg-blue-50"
                    >
                      AI Screening
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/auth/login"
                      className="block px-4 py-2 hover:bg-blue-50"
                    >
                      Teleconsult
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/auth/login"
                      className="block px-4 py-2 hover:bg-blue-50"
                    >
                      Doctor Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/auth/login"
                      className="block px-4 py-2 hover:bg-blue-50"
                    >
                      Map Service
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a href="#about" className="hover:text-blue-600 transition">
                About Us
              </a>
            </li>

            <li>
              <a
                href="tel:+880123456789"
                className="text-blue-600 font-semibold hover:underline"
              >
                Hotline: +880-1234-56789
              </a>
            </li>
          </ul>

          {/* Telemedicine Button */}
          <Link
            href="/auth/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm md:text-base font-medium transition"
          >
            Telemedicine
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            AI-Powered Eye Health & Medical Screening
          </h1>
          <p className="text-lg text-gray-600">
            Experience the future of healthcare. Detect eye diseases and manage
            your health with AI-driven precision and expert consultation.
          </p>
          <div className="flex gap-4">
            <Link
              href="/auth/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
            >
              Get Started
            </Link>
            <Link
              href="/auth/login"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image
            src="/image/eye-ai.png"
            alt="AI Eye Scan"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose EyeCareAI</h2>
          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                title: "AI Eye Screening",
                desc: "Detect diabetic retinopathy, glaucoma, and more using AI.",
                img: "/image/ai-scan.png",
              },
              {
                title: "Doctor Consultation",
                desc: "Consult eye specialists online or in person.",
                img: "/image/consult.png",
              },
              {
                title: "Secure & Private",
                desc: "Your medical data is encrypted and confidential.",
                img: "/image/data-secure.png",
              },
              {
                title: "Map Service",
                desc: "Find nearby hospitals and doctors easily.",
                img: "/image/map.png",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl shadow-[0_4px_6px_-1px_rgba(59,130,246,0.3),0_2px_4px_-1px_rgba(59,130,246,0.06)] hover:shadow-[0_10px_15px_-3px_rgba(59,130,246,0.3),0_4px_6px_-2px_rgba(59,130,246,0.05)] transition"
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  width={60}
                  height={60}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5 text-gray-600">
              <p>
                <strong>EyeCareAI</strong> is a next-generation medical platform
                designed to bridge the gap between technology and healthcare.
              </p>
              <p>
                Our AI-powered tools assist in early detection of eye diseases,
                providing accessible, affordable, and accurate healthcare.
              </p>
              <p>
                With integrated telemedicine, map-based hospital discovery, and
                home-doctor services, we’re transforming how people access care
                in Bangladesh.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/image/about1.png"
                alt="Doctor AI Analysis"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
              />
              <Image
                src="/image/about2.png"
                alt="Eye Exam"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
              />
              <Image
                src="/image/about3.png"
                alt="AI System"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
              />
              <Image
                src="/image/about4.png"
                alt="Telemedicine"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
{/* What Inspires Us Section */}
      {/* What Inspires Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            What Inspires Us
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
            Our passion for technology and healthcare drives us to make eye health more accessible,
            accurate, and intelligent. Each of us brings our unique expertise to build EyeCareAI with purpose and precision.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              {
                name: "Sababa Hoque Saba",
                role: "Frontend Developer",
                desc: "Designed and implemented the user interface, ensuring accessibility and a modern user experience.",
                img: "/image/Saba.jpg",
              },
              {
                name: "Md. Omor Faruq Sikder",
                role: "Backend Engineer",
                desc: "Built the backend infrastructure, managing secure data flow and efficient API integrations.",
                img: "/image/Omor.jpg",
              },
              {
                name: "Safaet Hasan Toufiq",
                role: "AI Model Developer",
                desc: "Trained and optimized deep learning models for eye disease detection using medical imaging data.",
                img: "/image/Safeat.jpg",
              },
              {
                name: "Hasnay Hasin Maliha",
                role: "Research & Documentation",
                desc: "Conducted research and documented project progress for scientific accuracy.",
                img: "/image/Maliha.jpg",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-[0_4px_6px_-1px_rgba(59,130,246,0.3),0_2px_4px_-1px_rgba(59,130,246,0.06)] hover:shadow-[0_10px_15px_-3px_rgba(59,130,246,0.3),0_4px_6px_-2px_rgba(59,130,246,0.05)] transition flex flex-col items-center"
              >
                <div className="relative w-48 h-48 mb-4">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover shadow-md"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Take Control of Your Health Today
        </h2>
        <p className="text-lg mb-8 text-blue-100">
          Join thousands using AI to improve their health outcomes.
        </p>
        <Link
          href="/auth/signup"
          className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          Sign Up Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center">
        <p>© {new Date().getFullYear()} EyeCareAI — All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-white">
            Contact Us
          </Link>
        </div>
      </footer>
    </main>
  );
}
