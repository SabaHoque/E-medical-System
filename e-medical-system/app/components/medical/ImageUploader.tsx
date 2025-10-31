"use client";

import React, { useState } from "react";
import axios from "axios";
import AIPredictionCard from "./AIPredictionCard";
import Image from "next/image";

// ✅ Move type outside the component
export type PredictionResult = {
  disease: string;
  confidence: number;
  heatmapUrl?: string;
};

export default function ImageUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);

  // ✅ Handle image file selection
  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    setFile(f);
    if (f) {
      setPreview(URL.createObjectURL(f));
      setResult(null); // clear previous result when selecting a new image
    }
  };

  // ✅ Handle upload and AI analysis
  const upload = async () => {
    if (!file) {
      alert("Please select an image before uploading!");
      return;
    }

    setLoading(true);
    const fd = new FormData();
    fd.append("image", file);

    try {
      // 👇 Replace with your actual backend API
      const response = await axios.post("/api/ai", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Example placeholder result:
      setResult({ disease: "Diabetic Retinopathy", confidence: 0.92 });

    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Reset form
  const reset = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* File Upload */}
        <label className="flex-1 border rounded p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition">
          <div className="text-sm text-gray-600 mb-2 font-medium">
            Choose Fundus Image (JPG or PNG)
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={onFile}
            className="mt-2"
          />
          {preview && (
            <Image
              src={preview}
              alt="Fundus preview"
              width={400}
              height={300}
              unoptimized
              className="mt-3 max-h-48 w-full object-contain rounded border"
            />
          )}
        </label>

        {/* Buttons */}
        <div className="w-full sm:w-48 flex flex-col gap-2">
          <button
            onClick={upload}
            disabled={!file || loading}
            className={`p-3 rounded text-white font-medium transition ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Processing..." : "Upload & Analyze"}
          </button>
          <button
            onClick={reset}
            className="p-3 border rounded font-medium hover:bg-gray-100 transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="mt-6">
        {result ? (
          <AIPredictionCard result={result} />
        ) : (
          <div className="text-gray-500 text-center italic">
            No results yet. Upload an image to begin analysis.
          </div>
        )}
      </div>
    </div>
  );
}
