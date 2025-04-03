import React from 'react';
import { FaChartLine, FaChartBar, FaChartPie, FaDownload } from 'react-icons/fa';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Analytics() {
  // Sample data for charts
  const performanceData = [
    { month: 'Jan', views: 1200, engagement: 45 },
    { month: 'Feb', views: 1900, engagement: 52 },
    { month: 'Mar', views: 1500, engagement: 48 },
    { month: 'Apr', views: 2100, engagement: 60 },
    { month: 'May', views: 2800, engagement: 65 },
    { month: 'Jun', views: 3200, engagement: 70 }
  ];

  const topCategories = [
    { name: 'Technology', percentage: 35 },
    { name: 'Finance', percentage: 25 },
    { name: 'Historical', percentage: 20 },
    { name: 'Mythology', percentage: 15 },
    { name: 'Other', percentage: 5 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h1>
        <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          <FaDownload />
          <span>Export Data</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center space-x-2">
              <FaChartLine />
              <span>Performance Overview</span>
            </h2>
            <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
              <option>Last 6 Months</option>
              <option>Last Year</option>
              <option>All Time</option>
            </select>
          </div>
          <div className="h-64">
            <Line 
              data={{
                labels: performanceData.map(data => data.month),
                datasets: [{
                  label: 'Views',
                  data: performanceData.map(data => data.views),
                  borderColor: 'rgb(99, 102, 241)',
                  backgroundColor: 'rgba(99, 102, 241, 0.2)',
                  tension: 0.3
                }, {
                  label: 'Engagement %',
                  data: performanceData.map(data => data.engagement),
                  borderColor: 'rgb(16, 185, 129)',
                  backgroundColor: 'rgba(16, 185, 129, 0.2)',
                  tension: 0.3
                }]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  tooltip: {
                    mode: 'index',
                    intersect: false,
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }}
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="bg-indigo-50 p-3 rounded-lg">
              <p className="text-sm text-indigo-600">Total Views</p>
              <p className="text-2xl font-bold">14,700</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-green-600">Avg. Engagement</p>
              <p className="text-2xl font-bold">56.7%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center space-x-2">
              <FaChartPie />
              <span>Top Categories</span>
            </h2>
          </div>
          <div className="h-64">
            <Pie
              data={{
                labels: topCategories.map(cat => cat.name),
                datasets: [{
                  data: topCategories.map(cat => cat.percentage),
                  backgroundColor: [
                    'rgba(99, 102, 241, 0.7)',
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(245, 158, 11, 0.7)',
                    'rgba(239, 68, 68, 0.7)',
                    'rgba(139, 92, 246, 0.7)'
                  ],
                  borderColor: [
                    'rgba(99, 102, 241, 1)',
                    'rgba(16, 185, 129, 1)',
                    'rgba(245, 158, 11, 1)',
                    'rgba(239, 68, 68, 1)',
                    'rgba(139, 92, 246, 1)'
                  ],
                  borderWidth: 1
                }]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'right',
                  }
                }
              }}
            />
          </div>
          <div className="mt-4 space-y-2">
            {topCategories.map((category) => (
              <div key={category.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                  <span>{category.name}</span>
                </div>
                <span className="font-medium">{category.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center space-x-2">
            <FaChartBar />
            <span>Top Performing Reels</span>
          </h2>
          <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
            <option>All Platforms</option>
            <option>YouTube</option>
            <option>TikTok</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {performanceData.slice().reverse().map((data, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">AI Reel #{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{data.views}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{data.engagement}%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      index % 2 === 0 ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {index % 2 === 0 ? 'YouTube' : 'TikTok'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}