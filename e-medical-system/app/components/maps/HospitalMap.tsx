"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { LatLngExpression, Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

export default function HospitalMap() {
  type Hospital = { id:number; name:string; contact:string; position: LatLngExpression; };

  const hospitalIcon: Icon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2967/2967350.png",
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -32]
  });

  const hospitals: Hospital[] = [
    { id:1, name:"Square Hospitals Ltd.", contact:"+880-2-8144400", position:[23.7520, 90.3925] },
    { id:2, name:"Popular Diagnostic Centre", contact:"+880-2-9636426", position:[23.7583, 90.3894] },
    { id:3, name:"United Hospital Limited", contact:"+880-2-8836000", position:[23.7935, 90.4145] },
    { id:4, name:"Labaid Specialized Hospital", contact:"+880-2-9676356", position:[23.7390, 90.3828] },
    { id:5, name:"BSMMU", contact:"+880-2-55165001", position:[23.7381, 90.3965] }
  ];

  const center: LatLngExpression = [23.78, 90.40];

  return (
    <div className="rounded-xl overflow-hidden shadow-md">
      <MapContainer center={center} zoom={12} scrollWheelZoom style={{ height: "70vh", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {hospitals.map(h => (
          <Marker key={h.id} position={h.position} icon={hospitalIcon}>
            <Popup>
              <div className="max-w-xs">
                <h3 className="font-semibold text-blue-700">{h.name}</h3>
                <p className="text-sm text-gray-700">☎️ {h.contact}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
