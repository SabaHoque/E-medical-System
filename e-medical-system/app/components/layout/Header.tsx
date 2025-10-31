"use client";

import { UserCircle } from "lucide-react";

export default function DashboardHeader({ title }: { title: string }) {
  return (
    <header className="h-16 bg-white shadow-sm flex justify-between items-center px-6 sticky top-0 z-40">
      <h1 className="text-xl font-bold text-blue-700">{title}</h1>
      <div className="flex items-center gap-3">
        <UserCircle className="w-8 h-8 text-gray-600" />
        <span className="font-medium text-gray-800">Welcome Back!</span>
      </div>
    </header>
  );
}
