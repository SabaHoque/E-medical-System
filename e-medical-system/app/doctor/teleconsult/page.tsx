"use client";

import DashboardHeader from "../../components/layout/Header";
export default function DoctorTeleconsult() {
  const sessions = [
    { id: 1, patient: "Saba Hoque", date: "Oct 31, 2025", time: "10:00 AM" },
    { id: 2, patient: "Aisha Rahman", date: "Nov 1, 2025", time: "2:00 PM" },
  ];

  return (
    <div>
      <DashboardHeader title="Teleconsultations" />
      <div className="bg-white p-6 mt-4 rounded shadow">
        <h3 className="text-lg font-medium mb-4">Upcoming Appointments</h3>
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-3">Patient</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((s) => (
              <tr key={s.id} className="border-b hover:bg-blue-50">
                <td className="px-4 py-3">{s.patient}</td>
                <td className="px-4 py-3">{s.date}</td>
                <td className="px-4 py-3">{s.time}</td>
                <td className="px-4 py-3">
                  <button className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700">
                    Join Call
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
