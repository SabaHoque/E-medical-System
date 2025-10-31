"use client";
import DashboardHeader from "../../components/layout/Header";

export default function AdminAIModels() {
  const models = [
    { id: 1, name: "Eye Disease Detector v2.0", status: "Active" },
    { id: 2, name: "Diabetic Retinopathy Classifier", status: "Training" },
  ];

  return (
    <div>
      <DashboardHeader title="AI Model Monitoring" />
      <div className="bg-white p-6 mt-4 rounded shadow">
        <ul className="space-y-2">
          {models.map((m) => (
            <li key={m.id} className="flex justify-between border-b py-2">
              <span>{m.name}</span>
              <span
                className={`${
                  m.status === "Active" ? "text-green-600" : "text-yellow-600"
                } font-medium`}
              >
                {m.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
