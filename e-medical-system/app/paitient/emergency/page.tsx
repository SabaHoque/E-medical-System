"use client";

import { Phone, MapPin, Stethoscope } from "lucide-react";

export default function EyeDoctorInfo() {
  const doctors = [
    {
      id: 1,
      name: "Assoc. Prof. Dr. Tamjida Farhana",
      qualification: "MBBS ,FCPS, MCPS, DO (Ophthalmologist)",
      hospital: "Apollo Clinic Dhanmondi & JMI Specialized Hospital",
      address: "64 Satmasjid Road, Dhanmondi, Dhaka-1209",
      phone: "09611530530",
    },
    {
      id: 2,
      name: "Dr. Jamsed Faridi Jami",
      qualification:
        "MBBS (DU), D-OPHTH (BSMMU), CCD (BIRDEM), Phaco, Squint & Child Eye Specialist",
      hospital: "Vision Eye Hospital, Dhaka",
      address: "229 Green Road, Dhanmondi, Dhaka-1205",
      phone: "+8809610244123",
    },
    {
      id: 3,
      name: "Prof. Dr. Sarwar Alam",
      qualification: "MBBS, DO, FCPS (EYE) — Cornea & Cataract Surgeon",
      hospital: "Anwer Khan Modern Medical College Hospital",
      address: "House 17, Road 8, Dhanmondi, Dhaka-1205",
      phone: "+8801721558220",
    },
    {
      id: 4,
      name: "Prof. Dr. Golam Haider",
      qualification:
        "MBBS, FCPS, MCPS, Fellow in Oculoplasty — Eye Lid, Orbit & Oculoplastic Surgeon",
      hospital: "Harun Eye Foundation Hospital",
      address: "House 12/A, Road 5, Dhanmondi, Dhaka",
      phone: "+8801728148434",
    },
    {
      id: 5,
      name: "Brig. Gen. (Retd) Prof. Dr. Md. Sayedur Rahman",
      qualification:
        "MBBS, DO, FCPS (EYE), MCPS, FICO (UK) — Glaucoma, Squint, Oculoplastic Surgeon",
      hospital: "Evercare Hospital Dhaka",
      address: "Plot 81, Bashundhara R/A, Dhaka",
      phone: "10678",
    },
    {
      id: 6,
      name: "Dr. Sanjay Kumar Sarker",
      qualification:
        "MBBS (DMC), FCPS (EYE), MCPS, Fellow (Vitreo-Retina), Phaco Surgeon",
      hospital: "National Institute of Ophthalmology & Hospital",
      address: "Rupayan Khan Plaza, Road 7, Dhanmondi, Dhaka-1205",
      phone: "+8801770408060",
    },
    {
      id: 7,
      name: "Dr. Kazi Shabbir Anwar",
      qualification:
        "MBBS, DO (DU), MD, Fellow (Pediatric Ophthalmology)",
      hospital: "Bangladesh Eye Hospital & Institute",
      address:
        "78 Satmasjid Road (West of Road 27), Dhanmondi, Dhaka-1205",
      phone: "+8809666787878",
    },
    {
      id: 8,
      name: "Dr. Harun Ur Rashid",
      qualification:
        "MBBS (IPGMR), MS (Ophthalmology), DO, LASIK, Cataract Specialist",
      hospital: "Dhaka Eye Care Hospital, Uttara",
      address: "32 Rabindra Sarani, Sector 7, Uttara, Dhaka-1230",
      phone: "+8801787681500",
    },
    {
      id: 9,
      name: "Dr. Shayamal Kumar Sarkar",
      qualification:
        "MBBS (SSMC), MS (EYE), ICO (UK), Neuro-Ophthalmologist",
      hospital: "Green Eye Hospital",
      address: "Rupayan Khan Plaza, Road 7, Dhanmondi, Dhaka",
      phone: "+8801711377523",
    },
    {
      id: 10,
      name: "Dr. Zahida Jabbar",
      qualification:
        "MBBS, FCPS (EYE), DO, Fellowship in Pediatric Ophthalmology",
      hospital: "Ibn Sina Diagnostic Center, Badda",
      address: "Cha-72/1, Progoti Soroni, Badda, Dhaka-1212",
      phone: "+8809610009614",
    },
    {
      id: 11,
      name: "Dr. Syed A. Hassan",
      qualification:
        "MBBS, DO, FCA (Japan), FICO (Japan), Cornea & LASIK Specialist",
      hospital: "Harun Eye Foundation Hospital",
      address: "House 12/A, Road 5, Dhanmondi, Dhaka",
      phone: "+88029613930",
    },
    {
      id: 12,
      name: "Dr. Mafruha Afrin",
      qualification:
        "MBBS, MCPS (Eye), FICO, FCPS, FRCS — Uvea & Retina Specialist",
      hospital: "Khidmah Hospital",
      address: "C-287/2-3 Khilgaon Bishwa Road, Dhaka",
      phone: "+8809606063030",
    },
    {
      id: 13,
      name: "Prof. Brig Gen. Dr. Ismail Hossain",
      qualification:
        "MBBS, MCPS, DO, FCPS, Retinal Surgery Specialist",
      hospital: "Bangladesh Eye Hospital, Dhanmondi",
      address:
        "78 Satmasjid Road (West of Road 27), Dhanmondi, Dhaka-1205",
      phone: "+8809666787878",
    },
    {
      id: 14,
      name: "Dr. Zakia Sultana Shahid",
      qualification:
        "MBBS, DO, FCPS (Ophthalmology), MS — Glaucoma Specialist",
      hospital: "Anwer Khan Modern Medical College Hospital",
      address:
        "House 17, Road 8, Dhanmondi, Dhaka-1205",
      phone: "+8801953203799",
    },
    {
      id: 15,
      name: "Dr. Chandana Sultana",
      qualification:
        "MBBS, DO, MD (Russia), FCPS — Cornea & Cataract Surgeon",
      hospital:
        "Ispahani Islamia Eye Institute & Hospital",
      address: "Khamarbari, Farmgate, Dhaka-1215",
      phone: "+8809610998333",
    },
    {
      id: 16,
      name: "Dr. Zakia Farhana",
      qualification:
        "MBBS (RU), DO, Fellowship in Glaucoma, Cataract & Refractive Surgery",
      hospital: "Ibn Sina Medical College Hospital",
      address: "Kallyanpur, Mirpur Road, Dhaka-1216",
      phone: "+8801703725590",
    },
    {
      id: 17,
      name: "Dr. Shah-Noor Hassan",
      qualification:
        "MBBS, FCPS, ICO, FRCS — Vitreo Retina Specialist",
      hospital: "Bangladesh Eye Hospital, Dhanmondi",
      address:
        "78 Satmasjid Road, Dhanmondi, Dhaka-1205",
      phone: "+8809666787878",
    },
    {
      id: 18,
      name: "Dr. Rehnuma Sadia Siddiqua",
      qualification:
        "MBBS, MCPS, FCPS, Fellow Cornea & LASIK Surgeon",
      hospital: "Vision Eye Hospital, Dhaka",
      address: "229 Green Road, Dhanmondi, Dhaka-1205",
      phone: "+8801846633759",
    },
    {
      id: 19,
      name: "Prof. Dr. Puravi Rani Dev Nath",
      qualification: "MBBS, MS (Ophthalmology)",
      hospital: "BIRDEM Specialized Complex",
      address:
        "122 Kazi Nazrul Islam Avenue, Shahbag, Dhaka",
      phone: "+8801847259770",
    },
    {
      id: 20,
      name: "Prof. Dr. Shah Alam",
      qualification:
        "MBBS, FCPS (Eye), WHO Fellow — Eye Diseases Specialist",
      hospital: "Square Hospital, Dhaka",
      address:
        "8/F Kazi Nuruzzaman Road, Panthapath, Dhaka",
      phone: "10616",
    },
    {
      id: 21,
      name: "Dr. Md. Musharaf Hossain",
      qualification:
        "MBBS, FCPS, MS (Eye), Fellow (LVPEI), Phaco Surgeon",
      hospital: "Harun Eye Foundation Hospital",
      address: "House 12/A, Road 5, Dhanmondi, Dhaka",
      phone: "+8801788622568",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-2">
        <Stethoscope className="text-blue-600" /> Eye Specialist Doctors (Dhaka)
      </h1>

      <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
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
                <td className="px-4 py-3 font-semibold text-gray-800">
                  {doc.name}
                </td>
                <td className="px-4 py-3">{doc.qualification}</td>
                <td className="px-4 py-3">{doc.hospital}</td>
                <td className="px-4 py-3 flex gap-1">
                  <MapPin className="w-4 h-4 text-gray-500" /> {doc.address}
                </td>
                <td className="px-4 py-3">
                  <a
                    href={`tel:${doc.phone}`}
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <Phone className="w-4 h-4 text-blue-600" /> {doc.phone}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center text-gray-600 text-sm mt-6">
        All listed doctors provide services in **Dhaka, Bangladesh**, including diabetic
        retinopathy screening, cataract surgery, retina care, and general eye treatment.
      </p>
    </div>
  );
}
