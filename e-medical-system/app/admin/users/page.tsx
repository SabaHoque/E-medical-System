"use client";
import DashboardHeader from "../../components/layout/Header";

export default function AdminUsers() {
  const users = [
    { id: 1, name: "Dr. Rahman", role: "Doctor" },
    { id: 2, name: "Sababa Hoque", role: "Patient" },
    { id: 3, name: "Dr. Kamal", role: "Home Doctor" },
  ];

  return (
    <div>
      <DashboardHeader title="User Management" />
      <div className="bg-white p-6 mt-4 rounded shadow">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-blue-50">
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
