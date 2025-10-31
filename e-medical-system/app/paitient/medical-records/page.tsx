"use client";
import DashboardHeader from "../../components/layout/Header";

export default function MedicalRecords() {
  const records = [
    { id: 1, date: "Oct 15, 2025", diagnosis: "Glaucoma", doctor: "Dr. Rahman" },
    { id: 2, date: "Sep 10, 2025", diagnosis: "Diabetic Retinopathy", doctor: "Dr. Ahmed" },
  ];

  return (
    <div>
      <DashboardHeader title="Medical Records" />
      <div className="bg-white p-6 mt-4 rounded shadow">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Diagnosis</th>
              <th className="px-4 py-3">Doctor</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r) => (
              <tr key={r.id} className="border-b hover:bg-blue-50">
                <td className="px-4 py-3">{r.date}</td>
                <td className="px-4 py-3">{r.diagnosis}</td>
                <td className="px-4 py-3">{r.doctor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
