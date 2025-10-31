"use client";

import Sidebar from "../components/layout/Sidebar";
import DashboardHeader from "../components/layout/Header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role="admin" />
      <main className="ml-64 flex-1 flex flex-col">
        <DashboardHeader title="Admin Dashboard" />
        <div className="p-8 flex-1">{children}</div>
      </main>
    </div>
  );
}
