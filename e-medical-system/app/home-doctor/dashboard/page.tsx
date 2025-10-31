export default function HomeDoctorDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Home Doctor Dashboard</h1>
      <p className="text-gray-700 mb-6">Manage your Dhaka home visit services.</p>

      <div className="bg-white shadow p-6 rounded-lg border border-gray-100">
        <h2 className="text-lg font-semibold">Upcoming Home Visits</h2>
        <ul className="mt-3 text-gray-600">
          <li>🕒 10:00 AM Patient: Saba (Dhanmondi)</li>
          <li>🕒 1:00 PM Patient: Omor (Banani)</li>
          <li>🕒 5:30 PM Patient: Rafi (Mirpur)</li>
        </ul>
      </div>
    </div>
  );
}
