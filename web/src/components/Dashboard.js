import React from 'react';
import { FaMagic, FaChartLine, FaCalendarAlt, FaMobileAlt } from 'react-icons/fa';
import FeatureCard from './FeatureCard';

export default function Dashboard() {
  const categories = [
    { name: 'Mythology', icon: '🧙', color: 'bg-purple-100' },
    { name: 'Historical', icon: '🏛️', color: 'bg-amber-100' },
    { name: 'Finance', icon: '💰', color: 'bg-emerald-100' },
    { name: 'Technology', icon: '🤖', color: 'bg-blue-100' }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard 
          icon={<FaMagic className="text-indigo-600 text-2xl" />}
          title="AI Generation"
          description="Create videos from text with AI-powered visuals and voiceovers"
        />
        <FeatureCard 
          icon={<FaCalendarAlt className="text-indigo-600 text-2xl" />}
          title="Auto Scheduling"
          description="Schedule months in advance with YouTube integration"
        />
        <FeatureCard 
          icon={<FaChartLine className="text-indigo-600 text-2xl" />}
          title="Smart Analytics"
          description="Track performance and get optimization suggestions"
        />
        <FeatureCard 
          icon={<FaMobileAlt className="text-indigo-600 text-2xl" />}
          title="Cross Platform"
          description="Available on web, desktop and mobile"
        />
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Popular Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category.name} className={`${category.color} p-4 rounded-lg flex items-center space-x-3`}>
              <span className="text-2xl">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">Ready to Create?</h2>
        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium">
          Start Creating AI Reels
        </button>
      </div>
    </div>
  );
}
