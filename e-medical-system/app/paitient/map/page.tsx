"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
//import { Phone, MapPin, Hospital, Ambulance } from "lucide-react";

// Custom icons
const hospitalIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2967/2967350.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -28],
});

// const ambulanceIcon = new L.Icon({
 // iconUrl: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
 // iconSize: [32, 32],
  //iconAnchor: [16, 32],
//  popupAnchor: [0, -28],
//});

export default function EmergencyPage() {
  const services = [
    {
      id: 1,
      name: "Square Hospital",
      address: "18 Bir Uttam Qazi Nuruzzaman Sarak, West Panthapath",
      phone: "09610010616",
      type: "hospital",
      lat: 23.751654,
      lng: 90.386987,
    },
    {
      id: 2,
      name: "Better Life Hospital",
      address: "1, Shahid Faruk Iqbal Road, Dhaka 1219",
      phone: "09678786787",
      type: "hospital",
      lat: 23.736905,
      lng: 90.414727,
    },
    {
      id: 3,
      name: "Bangladesh Specialized Hospital",
      address: "21 Mirpur Road, Dhaka 1207",
      phone: "09666700100",
      type: "hospital",
      lat: 23.778172,
      lng: 90.374110,
    },
    {
      id: 4,
      name: "IBN Sina Specialized Hospital",
      address: "House 68, Road 15, Dhanmondi",
      phone: "10615",
      type: "hospital",
      lat: 23.742721,
      lng: 90.373902,
    },
    {
      id: 5,
      name: "Dhaka Medical College Hospital",
      address: "Secretariat Road, Dhaka 1000",
      phone: "02-55165130",
      type: "hospital",
      lat: 23.725225,
      lng: 90.392858,
    },
    {
      id: 6,
      name: "Green Life Hospital",
      address: "32 Green Road, Dhaka 1205",
      phone: "+88029612345",
      type: "hospital",
      lat: 23.748520,
      lng: 90.386820,
    },
    {
      id: 7,
      name: "National Gastroliver Institute & Hospital",
      address: "Inside NIDCH, Mohakhali",
      phone: "+8801618800088",
      type: "hospital",
      lat: 23.778612,
      lng: 90.400249,
    },
    {
      id: 8,
      name: "National Institute of Burn & Plastic Surgery",
      address: "PCF2+JJ7, Agargaon",
      phone: "01819220180",
      type: "hospital",
      lat: 23.777600,
      lng: 90.374200,
    },
    {
      id: 9,
      name: "BIRDEM General Hospital",
      address: "122 Kazi Nazrul Islam Ave",
      phone: "02-41060479",
      type: "hospital",
      lat: 23.739865,
      lng: 90.396662,
    },
    {
      id: 10,
      name: "Sir Salimullah Medical College Mitford Hospital",
      address: "Mitford Road, Dhaka",
      phone: "+8801322465805",
      type: "hospital",
      lat: 23.708197,
      lng: 90.399291,
    },
    {
      id: 11,
      name: "Islami Bank Specialized General Hospital",
      address: "71/72 VIP Road, Nayapaltan",
      phone: "09601560101",
      type: "hospital",
      lat: 23.732411,
      lng: 90.415509,
    },
    {
      id: 12,
      name: "Bangladesh Eye Hospital Shantinagar Ltd.",
      address: "24/1 Chamelibagh, Shantinagar",
      phone: "09613966966",
      type: "hospital",
      lat: 23.739126,
      lng: 90.419272,
    },
    {
      id: 13,
      name: "Mohakhali Cancer and General Hospital",
      address: "73 Ba/A Wireless Gate, Mohakhali",
      phone: "029880078",
      type: "hospital",
      lat: 23.780650,
      lng: 90.402952,
    },
    {
      id: 14,
      name: "ICDDR,B",
      address: "68 Shaheed Tajuddin Ahmed Sarani, Mohakhali",
      phone: "+8802222277001",
      type: "hospital",
      lat: 23.780283,
      lng: 90.400293,
    },
    {
      id: 15,
      name: "Labaid Specialized Hospital",
      address: "House 06, Road 04, Dhanmondi",
      phone: "+880241060908",
      type: "hospital",
      lat: 23.746032,
      lng: 90.374799,
    },
    {
      id: 16,
      name: "Gulshan Specialized Eye Hospital",
      address: "SWB-1, Road 7, Gulshan-1",
      phone: "09678121288",
      type: "hospital",
      lat: 23.780447,
      lng: 90.416894,
    },
    {
      id: 17,
      name: "Evercare Hospital Dhaka",
      address: "Plot 81, Bashundhara R/A",
      phone: "10678",
      type: "hospital",
      lat: 23.815285,
      lng: 90.431654,
    },
    {
      id: 18,
      name: "AMZ Hospital",
      address: "Cha-80/3 Pragati Sarani, North Badda",
      phone: "01847331010",
      type: "hospital",
      lat: 23.792903,
      lng: 90.425672,
    },
    {
      id: 19,
      name: "Ispahani Islamia Eye Institute & Hospital",
      address: "Sher-E-Bangla Nagar, Farmgate",
      phone: "+880222243244",
      type: "hospital",
      lat: 23.757410,
      lng: 90.386553,
    },
    {
      id: 20,
      name: "United Hospital Limited",
      address: "Plot 15, Road 71, Gulshan-2",
      phone: "01914001234",
      type: "hospital",
      lat: 23.790207,
      lng: 90.414825,
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        🚨 Emergency & Hospital Map (Dhaka)
      </h1>

      <div className="w-full h-[75vh] rounded-lg overflow-hidden shadow mb-8">
        <MapContainer
          center={[23.75, 90.39]}
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {services.map((s) => (
            <Marker
              key={s.id}
              position={[s.lat, s.lng]}
              icon={hospitalIcon}
            >
              <Popup>
                <h3 className="font-bold text-blue-700">{s.name}</h3>
                <p>{s.address}</p>
                <p>
                  📞 <a href={`tel:${s.phone}`}>{s.phone}</a>
                </p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
