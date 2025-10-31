"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PatientProfilePage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    address: "",
    phone: "",
    medicalHistory: "",
    familyHistory: "",
    medications: "",
    allergies: "",
    emergencyContact: "",
    bloodGroup: "",
  });

  // ✅ Load saved profile only once, safely
useEffect(() => {
  const savedData = localStorage.getItem("patientProfile");
  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);
      if (parsedData && typeof parsedData === "object") {
        // ✅ Use microtask to delay state update
        setTimeout(() => setFormData(parsedData), 0);
      }
    } catch (err) {
      console.error("Error parsing profile data:", err);
    }
  }
}, []);

  // ✅ Generic input handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ✅ Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("patientProfile", JSON.stringify(formData));
    alert("Profile saved successfully!");
    router.push("/paitient/dashboard");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 shadow rounded mt-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">
        My Health Profile
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-gray-700 font-medium">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Age + Gender */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="age" className="block text-gray-700 font-medium">
              Age
            </label>
            <input
              id="age"
              type="number"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block text-gray-700 font-medium"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-gray-700 font-medium">
            Address
          </label>
          <input
            id="address"
            type="text"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="e.g., +880 1234 567890"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Medical Info */}
        <div>
          <label
            htmlFor="medicalHistory"
            className="block text-gray-700 font-medium"
          >
            Medical History
          </label>
          <textarea
            id="medicalHistory"
            name="medicalHistory"
            placeholder="Describe your medical history"
            value={formData.medicalHistory}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="familyHistory"
            className="block text-gray-700 font-medium"
          >
            Family History
          </label>
          <textarea
            id="familyHistory"
            name="familyHistory"
            placeholder="Any family medical history"
            value={formData.familyHistory}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="medications"
            className="block text-gray-700 font-medium"
          >
            Current Medications
          </label>
          <textarea
            id="medications"
            name="medications"
            placeholder="List current medications"
            value={formData.medications}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="allergies"
            className="block text-gray-700 font-medium"
          >
            Allergies
          </label>
          <input
            id="allergies"
            type="text"
            name="allergies"
            placeholder="List known allergies"
            value={formData.allergies}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Emergency Contact */}
        <div>
          <label
            htmlFor="emergencyContact"
            className="block text-gray-700 font-medium"
          >
            Emergency Contact
          </label>
          <input
            id="emergencyContact"
            type="text"
            name="emergencyContact"
            placeholder="Enter emergency contact number"
            value={formData.emergencyContact}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Blood Group */}
        <div>
          <label
            htmlFor="bloodGroup"
            className="block text-gray-700 font-medium"
          >
            Blood Group
          </label>
          <input
            id="bloodGroup"
            type="text"
            name="bloodGroup"
            placeholder="e.g., A+, O-, etc."
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-medium px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}
