export default function PatientDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Patient Dashboard</h1>
      <p className="text-gray-700 mb-6">Welcome to your health portal.</p>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
          <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
          <p className="text-3xl text-blue-600 font-bold mt-2">2</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
          <h2 className="text-lg font-semibold">AI Reports</h2>
          <p className="text-3xl text-purple-600 font-bold mt-2">5</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
          <h2 className="text-lg font-semibold">Prescriptions</h2>
          <p className="text-3xl text-green-600 font-bold mt-2">12</p>
        </div>
      </div>
    </div>
  );
}
