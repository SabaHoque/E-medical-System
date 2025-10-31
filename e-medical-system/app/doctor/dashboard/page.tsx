export default function DoctorDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Doctor Dashboard</h1>
      <p className="text-gray-700 mb-6">Overview of your appointments and patients.</p>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow rounded-lg border border-gray-100">
          <h2 className="text-lg font-semibold">Appointments of Today</h2>
          <p className="text-3xl text-blue-600 font-bold mt-2">8</p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg border border-gray-100">
          <h2 className="text-lg font-semibold">Patients this Month</h2>
          <p className="text-3xl text-green-600 font-bold mt-2">42</p>
        </div>
      </div>
    </div>
  );
}
