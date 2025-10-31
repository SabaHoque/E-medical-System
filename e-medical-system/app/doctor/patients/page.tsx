"use client";
import DashboardHeader from "../../components/layout/Header";

export default function DoctorPatients() {
  const patients = [
    { id: 1, name: "Sababa Hoque", age: 25, condition: "Diabetic Retinopathy" },
    { id: 2, name: "Kamal Uddin", age: 45, condition: "Glaucoma" },
    { id: 3, name: "Aisha Rahman", age: 32, condition: "Cataract" },
  ];

  return (
    <div>
      <DashboardHeader title="My Patients" />
      <div className="bg-white p-6 mt-4 rounded shadow">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Age</th>
              <th className="px-4 py-3">Condition</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.id} className="border-b hover:bg-blue-50">
                <td className="px-4 py-3">{p.name}</td>
                <td className="px-4 py-3">{p.age}</td>
                <td className="px-4 py-3">{p.condition}</td>
                <td className="px-4 py-3">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
                    View Report
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
