import React, { useState } from 'react';
import { FaMagic, FaPlay, FaDownload } from 'react-icons/fa';

export default function CreateReel() {
  const [script, setScript] = useState('');
  const [category, setCategory] = useState('Technology');
  const [tone, setTone] = useState('professional');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedReel, setGeneratedReel] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setUploadError(null);
    
    if (!file) return;

    // Validate file type
    const validTypes = ['video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/webm'];
    if (!validTypes.includes(file.type)) {
      setUploadError('Please upload a valid video file (MP4, MOV, AVI, or WEBM)');
      return;
    }

    // Validate file size (100MB max)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      setUploadError('File size must be less than 100MB');
      return;
    }

    setIsUploading(true);
    // Simulate upload process
    setTimeout(() => {
      const videoUrl = URL.createObjectURL(file);
      setUploadedVideo({
        name: file.name,
        url: videoUrl,
        size: (file.size / (1024 * 1024)).toFixed(2) + 'MB'
      });
      setIsUploading(false);
    }, 1500);
  };

  const categories = [
    { name: 'Mythology', icon: '🧙' },
    { name: 'Historical', icon: '🏛️' },
    { name: 'Finance', icon: '💰' },
    { name: 'Technology', icon: '🤖' }
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation delay
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedReel({
        title: `${category} Reel`,
        duration: '0:45',
        url: 'https://cdn.pexels.com/videos/12345/ai-reel.mp4'
      });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Create New Reel</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Reel Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Script</label>
              <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="6"
              value={script}
              onChange={(e) => setScript(e.target.value)}
              placeholder="Enter your script here..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Video (Optional)</label>
            <div className="flex items-center space-x-4">
              <label className="flex-1 cursor-pointer">
                <div className={`flex items-center justify-center px-4 py-2 border-2 border-dashed rounded-md ${isUploading ? 'border-gray-300' : 'border-indigo-300 hover:border-indigo-500'} transition-colors`}>
                  {isUploading ? (
                    <span className="text-gray-500">Uploading...</span>
                  ) : (
                    <>
                      <span className="text-indigo-600">Choose File</span>
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="video/*" 
                        onChange={handleVideoUpload}
                      />
                    </>
                  )}
                </div>
              </label>
              {uploadedVideo && (
                <div className="text-sm text-gray-600">
                  {uploadedVideo.name} ({uploadedVideo.size})
                </div>
              )}
            </div>
            {uploadError && (
              <p className="mt-1 text-sm text-red-600">{uploadError}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">
              Supported formats: MP4, MOV, AVI, WEBM (Max 100MB)
            </p>
          </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat.name} value={cat.name}>
                      {cat.icon} {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Voice Tone</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                >
                  <option value="professional">Professional</option>
                  <option value="casual">Casual</option>
                  <option value="enthusiastic">Enthusiastic</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !script}
              className={`flex items-center justify-center w-full py-3 px-4 rounded-md text-white font-medium ${
                isGenerating || !script
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90'
              }`}
            >
              {isGenerating ? (
                'Generating...'
              ) : (
                <>
                  <FaMagic className="mr-2" />
                  Generate Reel
                </>
              )}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Preview</h2>
          
          {generatedReel || uploadedVideo ? (
            <div className="space-y-4">
              <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
                <video
                  className="absolute inset-0 w-full h-full"
                  controls
                  src={uploadedVideo?.url || generatedReel.url}
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{generatedReel.title}</h3>
                  <p className="text-sm text-gray-500">{generatedReel.duration}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="flex items-center space-x-1 bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700">
                    <FaPlay className="text-xs" />
                    <span>Play</span>
                  </button>
                  <button className="flex items-center space-x-1 bg-white border border-indigo-600 text-indigo-600 px-3 py-1 rounded-md hover:bg-indigo-50">
                    <FaDownload className="text-xs" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
              <p className="text-gray-500">
                {isGenerating ? 'Generating your reel...' : 'Your generated reel will appear here'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}