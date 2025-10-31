"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Phone, MapPin, Hospital, Ambulance } from "lucide-react";

// Custom icons
const hospitalIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2967/2967350.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -28],
});

const ambulanceIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -28],
});

export default function EmergencyPage() {
  const services = [
    {
      id: 1,
      name: "Square Hospital",
      type: "hospital",
      phone: "+880-2-8144466",
      address: "18/F, Bir Uttam Qazi Nuruzzaman Sarak, Dhaka",
      lat: 23.7520,
      lng: 90.3925,
    },
    {
      id: 2,
      name: "Dhaka Medical College Hospital",
      type: "hospital",
      phone: "+880-2-55165088",
      address: "Secretariat Road, Dhaka",
      lat: 23.7261,
      lng: 90.3932,
    },
    {
      id: 3,
      name: "United Hospital Limited",
      type: "hospital",
      phone: "+880-2-8836000",
      address: "Plot 15, Road 71, Gulshan, Dhaka",
      lat: 23.7935,
      lng: 90.4145,
    },
    {
      id: 4,
      name: "Fire Service Ambulance",
      type: "ambulance",
      phone: "199",
      address: "Dhaka Fire Service Headquarters",
      lat: 23.7265,
      lng: 90.4107,
    },
    {
      id: 5,
      name: "Red Crescent Ambulance Service",
      type: "ambulance",
      phone: "+880-2-9351577",
      address: "684-686 Bara Moghbazar, Dhaka",
      lat: 23.7412,
      lng: 90.4098,
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        🚨 Emergency & Map Services (Dhaka)
      </h1>

      {/* OpenStreetMap */}
      <div className="w-full h-[70vh] rounded-lg overflow-hidden shadow mb-8">
        <MapContainer
          center={[23.78, 90.40]} // Center on Dhaka
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {services.map((s) => (
            <Marker
              key={s.id}
              position={[s.lat, s.lng]}
              icon={s.type === "hospital" ? hospitalIcon : ambulanceIcon}
            >
              <Popup>
                <div>
                  <h3 className="font-semibold text-blue-700">{s.name}</h3>
                  <p className="text-sm text-gray-600">{s.address}</p>
                  <p className="text-sm font-medium">
                    ☎️ <a href={`tel:${s.phone}`}>{s.phone}</a>
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Emergency Numbers Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Phone className="text-blue-600" /> Emergency Contact Numbers
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li>🚓 Police: <strong>999</strong></li>
          <li>🚑 Ambulance: <strong>199</strong></li>
          <li>🔥 Fire Service: <strong>9555555</strong></li>
          <li>📞 Red Crescent Ambulance: <strong>+880-2-9351577</strong></li>
        </ul>
      </div>

      {/* List of Services */}
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div
            key={s.id}
            className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-2">
              {s.type === "hospital" ? (
                <Hospital className="text-green-600" />
              ) : (
                <Ambulance className="text-red-600" />
              )}
              <h3 className="text-lg font-semibold text-gray-800">{s.name}</h3>
            </div>
            <p className="text-gray-600 text-sm mb-1">
              <MapPin className="inline-block w-4 h-4 mr-1 text-gray-500" />
              {s.address}
            </p>
            <p className="text-gray-700">
              <Phone className="inline-block w-4 h-4 mr-1 text-blue-600" />
              <a href={`tel:${s.phone}`} className="hover:underline">
                {s.phone}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
