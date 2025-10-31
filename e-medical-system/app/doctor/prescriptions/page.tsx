"use client";
import DashboardHeader from "../../components/layout/Header";

export default function DoctorPrescriptions() {
  const prescriptions = [
    { id: 1, patient: "Kamal Uddin", date: "Oct 28, 2025", meds: "Latanoprost 0.005%" },
    { id: 2, patient: "Saba Hoque", date: "Oct 29, 2025", meds: "Timolol Eye Drops" },
  ];

  return (
    <div>
      <DashboardHeader title="Prescriptions" />
      <div className="bg-white p-6 mt-4 rounded shadow">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-3">Patient</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Medication</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((p) => (
              <tr key={p.id} className="border-b hover:bg-blue-50">
                <td className="px-4 py-3">{p.patient}</td>
                <td className="px-4 py-3">{p.date}</td>
                <td className="px-4 py-3">{p.meds}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
