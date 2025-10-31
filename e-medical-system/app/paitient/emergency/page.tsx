"use client";

import { Phone, MapPin, Stethoscope } from "lucide-react";

export default function EyeDoctorInfo() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Md. Khaled Hasan",
      qualification: "MBBS, FCPS (Ophthalmology)",
      hospital: "Bangladesh Eye Hospital & Institute",
      address: "78, Satmasjid Road, Dhanmondi, Dhaka",
      phone: "+880-2-9102020",
    },
    {
      id: 2,
      name: "Dr. Nazneen Islam",
      qualification: "MBBS, DO, MS (Eye)",
      hospital: "Ispahani Islamia Eye Institute & Hospital",
      address: "Farmgate, Dhaka",
      phone: "+880-2-9119315",
    },
    {
      id: 3,
      name: "Dr. A.K.M. Rezaul Karim",
      qualification: "MBBS, MS (Ophthalmology)",
      hospital: "National Institute of Ophthalmology & Hospital",
      address: "Sher-e-Bangla Nagar, Dhaka",
      phone: "+880-2-9118336",
    },
    {
      id: 4,
      name: "Dr. Shahnaz Rahman",
      qualification: "MBBS, FCPS (Eye), Fellow (Retina)",
      hospital: "Vision Eye Hospital",
      address: "House 8/A, Road 14, Dhanmondi, Dhaka",
      phone: "+880-2-9123456",
    },
    {
      id: 5,
      name: "Dr. M. Kamrul Islam",
      qualification: "MBBS, DO, PhD (Japan)",
      hospital: "Dhaka Eye Care Hospital",
      address: "Mirpur-1, Dhaka",
      phone: "+880-2-9005451",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-2">
        <Stethoscope className="text-blue-600" /> Eye Specialist Doctors (Dhaka)
      </h1>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-blue-100 text-gray-800 text-md">
            <tr>
              <th className="px-4 py-3">Doctor Name</th>
              <th className="px-4 py-3">Qualification</th>
              <th className="px-4 py-3">Hospital/Clinic</th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3">Contact</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc) => (
              <tr
                key={doc.id}
                className="border-b hover:bg-blue-50 transition-colors"
              >
                <td className="px-4 py-3 font-semibold text-gray-800">{doc.name}</td>
                <td className="px-4 py-3">{doc.qualification}</td>
                <td className="px-4 py-3">{doc.hospital}</td>
                <td className="px-4 py-3 flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-gray-500" /> {doc.address}
                </td>
                <td className="px-4 py-3 flex items-center gap-1">
                  <Phone className="w-4 h-4 text-blue-600" />{" "}
                  <a
                    href={`tel:${doc.phone}`}
                    className="text-blue-600 hover:underline"
                  >
                    {doc.phone}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <p className="text-center text-gray-600 text-sm mt-6">
        📍 These doctors provide eye checkups, diabetic retinopathy screening, and home consultation
        services within **Dhaka, Bangladesh**.
      </p>
    </div>
  );
}
