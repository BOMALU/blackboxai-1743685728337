import React from 'react';
import { FaChartLine, FaChartBar, FaChartPie, FaDownload } from 'react-icons/fa';

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
        <button className="flex items-center space-x-2 bg-indigo-600 text-white px-