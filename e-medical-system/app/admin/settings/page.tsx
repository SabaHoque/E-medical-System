"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminSettings() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    systemName: "EyeCareAI",
    maintenanceMode: false,
    contactEmail: "support@eyecare.ai",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save logic or API call can go here
    alert("✅ Admin settings saved successfully!");

    // Redirect to Admin Dashboard
    router.push("/admin/dashboard");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-8 border border-gray-200">
      <h1 className="text-3xl font-semibold text-blue-700 mb-6">
        Admin Settings
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* System Name */}
        <div>
          <label
            htmlFor="systemName"
            className="block font-medium text-gray-700 mb-1"
          >
            System Name
          </label>
          <input
            id="systemName"
            type="text"
            name="systemName"
            value={formData.systemName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter system name (e.g., EyeCareAI)"
            required
          />
        </div>

        {/* Contact Email */}
        <div>
          <label
            htmlFor="contactEmail"
            className="block font-medium text-gray-700 mb-1"
          >
            Contact Email
          </label>
          <input
            id="contactEmail"
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="admin@eyecare.ai"
            required
          />
        </div>

        {/* Maintenance Mode */}
        <div className="flex items-center gap-3">
          <input
            id="maintenanceMode"
            type="checkbox"
            name="maintenanceMode"
            checked={formData.maintenanceMode}
            onChange={handleChange}
            className="h-4 w-4 accent-blue-600 cursor-pointer"
          />
          <label
            htmlFor="maintenanceMode"
            className="text-gray-700 cursor-pointer"
          >
            Enable Maintenance Mode
          </label>
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}
