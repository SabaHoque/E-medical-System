"use client";
import DashboardHeader from "../../components/layout/Header";

export default function AdminHospitals() {
  const hospitals = [
    { id: 1, name: "Square Hospital", location: "Dhaka", contact: "+880-2-8144400" },
    { id: 2, name: "United Hospital", location: "Dhaka", contact: "+880-2-8836000" },
    { id: 3, name: "Apollo Hospital", location: "Dhaka", contact: "+880-2-8401661" },
  ];

  return (
    <div>
      <DashboardHeader title="Hospitals & Ambulances" />
      <div className="bg-white p-6 mt-4 rounded shadow">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-3">Hospital</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Contact</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map((h) => (
              <tr key={h.id} className="border-b hover:bg-blue-50">
                <td className="px-4 py-3">{h.name}</td>
                <td className="px-4 py-3">{h.location}</td>
                <td className="px-4 py-3">{h.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
