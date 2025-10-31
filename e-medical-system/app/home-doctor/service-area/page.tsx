"use client";
import HospitalMap from "../../components/maps/HospitalMap";
import DashboardHeader from "../../components/layout/Header";

export default function HomeDoctorServiceArea() {
  return (
    <div>
      <DashboardHeader title="Service Area Map (Dhaka)" />
      <div className="p-4 bg-white mt-4 rounded shadow">
        <HospitalMap />
      </div>
    </div>
  );
}
