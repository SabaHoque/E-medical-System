"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Stethoscope,
  Settings,
  MapPin,
  FileText,
  User,
  Activity,
  Users,
  Hospital,
} from "lucide-react";

type Props = {
  role: "paitient" | "doctor" | "homeDoctor" | "admin";
};

export default function Sidebar({ role }: Props) {
  const pathname = usePathname();

  const menus = {
    paitient: [
      { name: "Dashboard", path: "/paitient/dashboard", icon: LayoutDashboard },
      { name: "AI Screening", path: "/paitient/upload", icon: Activity },
      { name: "Appointments", path: "/paitient/appointments", icon: Stethoscope },
      { name: "Reports", path: "/paitient/medical-records", icon: FileText },
      { name: "My Profile", path: "/paitient/profile", icon: User },
      { name: "Map & Emergency", path: "/paitient/map", icon: MapPin },
      { name: "Doctor Service Info", path: "/paitient/emergency", icon: Stethoscope },
      { name: "Settings", path: "/paitient/settings", icon: Settings },
    ],
    doctor: [
      { name: "Dashboard", path: "/doctor/dashboard", icon: LayoutDashboard },
      { name: "AI Screening", path: "/doctor/ai-screen", icon: Activity },
      { name: "Patient Cases", path: "/doctor/patients", icon: Users },
      { name: "Teleconsultations", path: "/doctor/teleconsult", icon: Activity },
      { name: "Prescriptions", path: "/doctor/prescriptions", icon: FileText },
      { name: "Availability", path: "/doctor/availability", icon: MapPin },
      { name: "Settings", path: "/doctor/settings", icon: Settings },
    ],
    homeDoctor: [
      { name: "Dashboard", path: "/home-doctor/dashboard", icon: LayoutDashboard },
      { name: "My Requests", path: "/home-doctor/appointments", icon: FileText },
      { name: "Availability", path: "/home-doctor/schedule", icon: MapPin },
      { name: "Service Area", path: "/home-doctor/service-area", icon: Activity },
      { name: "Settings", path: "/home-doctor/settings", icon: Settings },
    ],
    admin: [
      { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
      { name: "User Management", path: "/admin/users", icon: Users },
      { name: "Hospitals & Ambulances", path: "/admin/hospitals", icon: Hospital },
      { name: "AI Monitoring", path: "/admin/ai-models", icon: Activity },
      { name: "Settings", path: "/admin/settings", icon: Settings },
    ],
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg p-5 flex flex-col justify-between z-50">
      {/* Brand */}
      <div>
        <Link
          href="/"
          className="block text-2xl font-bold text-blue-700 mb-8 text-center hover:text-blue-900 transition"
        >
          EyeCare<span className="text-gray-800">AI</span>
        </Link>
        {/* Menu Links */}
        <ul className="space-y-1 overflow-y-auto max-h-[80vh] pr-2">
          {menus[role].map((item, idx) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            return (
              <li key={idx}>
                <Link
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 font-medium transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "hover:bg-blue-100 hover:text-blue-600"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer / Logout */}
      <div className="border-t pt-4 text-center">
     <button
      onClick={() => {
      localStorage.removeItem("user");
      window.location.href = "/";
    }}
    className="text-sm text-gray-500 hover:text-blue-600 transition"
  >
    Logout
  </button>
      </div>
    </aside>
  );
}
