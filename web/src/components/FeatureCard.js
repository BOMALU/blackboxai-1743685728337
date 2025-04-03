import React from 'react';

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-indigo-50 rounded-full">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}