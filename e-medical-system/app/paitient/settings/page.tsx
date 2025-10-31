"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PatientSettings() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    notifications: true,
  });

  // ✅ Generic input handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Handle save and redirect
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Here you can later send data to backend via API
    alert("Settings saved successfully!");

    // ✅ Redirect back to patient dashboard
    router.push("/paitient/dashboard");
  };

  return (
    <div className="max-w-2xl mx-auto py-8 bg-white shadow rounded-lg px-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">
        Patient Settings
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full mt-1 border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Omor"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="saba@example.com"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mt-1 border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="+880 123-456-7890"
            required
          />
        </div>

        {/* Notifications */}
        <div className="flex items-center gap-2">
          <input
            id="notifications"
            type="checkbox"
            name="notifications"
            checked={formData.notifications}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label
            htmlFor="notifications"
            className="text-gray-700 select-none cursor-pointer"
          >
            Enable notifications for appointments and updates
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 transition"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}
