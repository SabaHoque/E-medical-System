"use client";

import { useState } from "react";
import DashboardHeader from "../../components/layout/Header";

export default function HomeDoctorAvailability() {
  const [availability, setAvailability] = useState({
    day: "",
    startTime: "",
    endTime: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAvailability((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Availability updated successfully!");
  };

  return (
    <div>
      <DashboardHeader title="Doctor Availability" />
      <div className="bg-white p-6 mt-4 rounded shadow-md max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Day Selector */}
          <div>
            <label htmlFor="day" className="block text-gray-700 font-medium mb-1">
              Select Day
            </label>
            <select
              id="day"
              name="day"
              value={availability.day}
              onChange={handleChange}
              className="w-full border rounded p-2"
              title="Select Day"
            >
              <option value="">-- Choose a day --</option>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>
          </div>

          {/* Start Time */}
          <div>
            <label htmlFor="startTime" className="block text-gray-700 font-medium mb-1">
              Start Time
            </label>
            <input
              id="startTime"
              type="time"
              name="startTime"
              value={availability.startTime}
              onChange={handleChange}
              className="w-full border rounded p-2"
              title="Select start time"
              placeholder="Start Time"
            />
          </div>

          {/* End Time */}
          <div>
            <label htmlFor="endTime" className="block text-gray-700 font-medium mb-1">
              End Time
            </label>
            <input
              id="endTime"
              type="time"
              name="endTime"
              value={availability.endTime}
              onChange={handleChange}
              className="w-full border rounded p-2"
              title="Select end time"
              placeholder="End Time"
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-gray-700 font-medium mb-1">
              Clinic / Service Location
            </label>
            <input
              id="location"
              type="text"
              name="location"
              value={availability.location}
              onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder="Enter your clinic or area name"
              title="Enter clinic or area name"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Save Availability
          </button>
        </form>
      </div>
    </div>
  );
}
