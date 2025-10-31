"use client";
import DashboardHeader from "../../components/layout/Header";

export default function PatientAppointments() {
  const appointments = [
    { id: 1, doctor: "Dr. Ahmed Khan", date: "Nov 3, 2025", time: "10:30 AM", status: "Confirmed" },
    { id: 2, doctor: "Dr. Samira Rahman", date: "Nov 10, 2025", time: "2:00 PM", status: "Pending" },
  ];

  return (
    <div>
      <DashboardHeader title="My Appointments" />
      <div className="bg-white p-6 mt-4 rounded shadow">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-3">Doctor</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a.id} className="border-b hover:bg-blue-50">
                <td className="px-4 py-3">{a.doctor}</td>
                <td className="px-4 py-3">{a.date}</td>
                <td className="px-4 py-3">{a.time}</td>
                <td className="px-4 py-3">{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
