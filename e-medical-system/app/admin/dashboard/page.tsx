export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Admin Dashboard</h1>
      <p className="text-gray-700 mb-6">Welcome to the system overview panel.</p>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">452</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
          <h2 className="text-lg font-semibold">Active Doctors</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">34</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
          <h2 className="text-lg font-semibold">Home Visits</h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">128</p>
        </div>
      </div>
    </div>
  );
}
