import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CreateReel from './components/CreateReel';
import Schedule from './components/Schedule';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import Login from './components/Login';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<CreateReel />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;