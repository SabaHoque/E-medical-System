"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";



export default function DoctorSettings() {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    specialization: "",
    available: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Doctor settings saved successfully!");
    router.push("/doctor/dashboard");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">
        Doctor Settings
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="w-full mt-1 border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Dr. Jane Doe"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full mt-1 border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="doctor@example.com"
            required
          />
        </div>

        {/* Specialization */}
        <div>
          <label
            htmlFor="specialization"
            className="block font-medium text-gray-700"
          >
            Specialization
          </label>
          <input
            id="specialization"
            type="text"
            name="specialization"
            value={form.specialization}
            onChange={handleChange}
            className="w-full mt-1 border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Cardiology, Ophthalmology, etc."
            required
          />
        </div>

        {/* Availability */}
        <div className="flex items-center gap-2">
          <input
            id="available"
            type="checkbox"
            name="available"
            checked={form.available}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="available"
            className="text-gray-700 font-medium"
          >
            Available for Appointments
          </label>
        </div>

        {/* Save Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold transition duration-200"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}
