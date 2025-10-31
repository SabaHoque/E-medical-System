"use client";
import DashboardHeader from "../../components/layout/Header";

export default function HomeDoctorRequests() {
  const requests = [
    { id: 1, patient: "Saba Hoque", area: "Dhanmondi", time: "Tomorrow 10 AM" },
    { id: 2, patient: "Kamal Uddin", area: "Banani", time: "Today 5 PM" },
  ];

  return (
    <div>
      <DashboardHeader title="My Requests" />
      <div className="bg-white p-6 mt-4 rounded shadow">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-3">Patient</th>
              <th className="px-4 py-3">Area</th>
              <th className="px-4 py-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((r) => (
              <tr key={r.id} className="border-b hover:bg-blue-50">
                <td className="px-4 py-3">{r.patient}</td>
                <td className="px-4 py-3">{r.area}</td>
                <td className="px-4 py-3">{r.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
