"use client";
import DashboardHeader from "../../components/layout/Header";
import ImageUploader from "../../components/medical/ImageUploader";
export default function AIPage() {
  return (
    <div>
      <DashboardHeader title="AI Eye Screening" />
      <div className="mt-4">
        <ImageUploader />
      </div>
    </div>
  );
}
