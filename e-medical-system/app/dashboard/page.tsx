'use client';
import React from 'react';
import ImageUploader from '../components/medical/ImageUploader';


export default function Dashboard() {
return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="col-span-2 bg-white p-6 rounded shadow">
<h2 className="text-xl font-semibold mb-4">Upload fundus image</h2>
<ImageUploader />
</div>
<div className="bg-white p-6 rounded shadow">
<h3 className="text-lg font-semibold">AI Predictions</h3>
<p className="text-sm text-gray-600 mt-2">Results will appear here after upload.</p>
</div>
</div>
);
}