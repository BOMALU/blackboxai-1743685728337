import React, { useState } from 'react';
import { FaCalendarAlt, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Schedule() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [platform, setPlatform] = useState('youtube');
  const [scheduledPosts, setScheduledPosts] = useState([]);

  const handleSchedule = () => {
    const newPost = {
      id: Date.now(),
      date,
      time,
      platform,
      status: 'pending'
    };
    setScheduledPosts([...scheduledPosts, newPost]);
    setDate('');
    setTime('');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Schedule Reels</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">New Schedule</h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="time"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setPlatform('youtube')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                    platform === 'youtube' 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <FaYoutube />
                  <span>YouTube</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPlatform('tiktok')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                    platform === 'tiktok' 
                      ? 'bg-black text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <FaTiktok />
                  <span>TikTok</span>
                </button>
              </div>
            </div>

            <button
              onClick={handleSchedule}
              disabled={!date || !time}
              className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                !date || !time
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90'
              }`}
            >
              Schedule Post
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Scheduled Posts</h2>
          
          {scheduledPosts.length > 0 ? (
            <div className="space-y-3">
              {scheduledPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {post.platform === 'youtube' ? (
                      <FaYoutube className="text-red-600" />
                    ) : (
                      <FaTiktok className="text-black" />
                    )}
                    <div>
                      <p className="font-medium">
                        {new Date(`${post.date}T${post.time}`).toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-500 capitalize">{post.platform}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    post.status === 'pending' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {post.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
              <p className="text-gray-500">No scheduled posts yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}