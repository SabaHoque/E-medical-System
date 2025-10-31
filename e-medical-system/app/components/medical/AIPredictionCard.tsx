"use client";

import React from "react";
import Image from "next/image";
type PredictionResult = {
  disease: string;
  confidence: number;
  heatmapUrl?: string; // optional: display Grad-CAM or AI visualization image
};

export default function AIPredictionCard({ result }: { result: PredictionResult }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-3">AI Analysis Result</h4>

      <div className="space-y-2">
        <p className="text-sm text-gray-700">
          <span className="font-medium text-gray-900">Diagnosis:</span> {result.disease}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-medium text-gray-900">Confidence:</span>{" "}
          {(result.confidence * 100).toFixed(1)}%
        </p>
      </div>

      <div className="mt-5">
        <h5 className="font-medium text-gray-800 mb-2">AI Heatmap Visualization</h5>

        {result.heatmapUrl ? (
          <Image
            src={result.heatmapUrl}
            alt="AI Heatmap"
            className="w-full h-56 object-contain rounded border"
          />
        ) : (
          <div className="border rounded p-2 h-56 flex items-center justify-center text-gray-400">
            (Grad-CAM heatmap placeholder)
          </div>
        )}
      </div>

      <div className="mt-5 flex gap-3">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
          Download Report
        </button>
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">
          Refer to Specialist
        </button>
      </div>
    </div>
  );
}
