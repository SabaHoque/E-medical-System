"use client";

import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20">
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

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Why Choose EyeCareAI
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <Image
                src="/image/ai-scan.png"
                alt="AI Scan"
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">AI Eye Screening</h3>
              <p className="text-gray-600">
                Get early detection of diabetic retinopathy, glaucoma, and other
                conditions using AI analysis.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <Image
                src="/image/consult.png"
                alt="Consultation"
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Doctor Consultation</h3>
              <p className="text-gray-600">
                Connect with certified eye specialists for online or in-person
                consultations.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <Image
                src="/image/data-secure.png"
                alt="Data Security"
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Your medical data is encrypted and handled with complete privacy
                and care.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <Image
                src="/image/map.png"
                alt="Map"
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Map Service</h3>
              <p className="text-gray-600">
                Locate nearby eye care centers and specialists with our integrated
                map service.
              </p>
            </div>
          </div>
        </div>
      </section>

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
