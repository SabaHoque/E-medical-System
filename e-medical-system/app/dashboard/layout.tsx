"use client";

import React from "react";
import Sidebar from "../components/layout/Sidebar";
import { usePathname } from "next/navigation";
import { UserCircle } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // In a real app, get role from auth or localStorage
  const role =
    typeof window !== "undefined"
      ? (localStorage.getItem("role") as
          | "paitient"
          | "doctor"
          | "homeDoctor"
          | "admin") || "paitient"
      : "paitient";

  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed Sidebar */}
      <Sidebar role={role} />

      {/* Main Content Area */}
      <main className="ml-64 flex-1 flex flex-col">
        {/* ===== Top Header ===== */}
        <header className="h-16 bg-white shadow-sm flex justify-between items-center px-6 sticky top-0 z-40">
          <div>
            <h1 className="text-xl font-semibold text-blue-700 capitalize">
              {role} Dashboard
            </h1>
            <p className="text-sm text-gray-500">{pathname}</p>
          </div>
          <div className="flex items-center gap-3">
            <UserCircle className="w-8 h-8 text-gray-600" />
            <span className="font-medium text-gray-800">
              {role === "paitient"
                ? "Patient User"
                : role === "doctor"
                ? "Dr. Smith"
                : role === "homeDoctor"
                ? "Home Doctor"
                : "Admin User"}
            </span>
          </div>
        </header>

        {/* ===== Page Content ===== */}
        <div className="flex-1 p-8">{children}</div>

        {/* ===== Footer ===== */}
        <footer className="text-center py-4 text-gray-500 text-sm border-t bg-white">
          © {new Date().getFullYear()} EyeCareAI — All Rights Reserved
        </footer>
      </main>
    </div>
  );
}
