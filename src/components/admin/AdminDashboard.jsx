// ==================================================
// FILE: src/components/admin/AdminDashboard.jsx
// ==================================================
import React from 'react';

export const AdminDashboard = ({ portfolioData }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-semibold mb-4 text-blue-400">Website Statistics</h3>
      <div className="space-y-4">
        <div>
          <p className="text-gray-400">Total Images</p>
          <p className="text-3xl font-bold text-white">
            {portfolioData.churchPhotography.length + 
             portfolioData.eventPhotography.length + 
             portfolioData.organizationalWork.length}
          </p>
        </div>
        <div>
          <p className="text-gray-400">Last Updated</p>
          <p className="text-white">{new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
    
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-semibold mb-4 text-blue-400">Quick Actions</h3>
      <div className="space-y-3">
        <button 
          onClick={() => document.dispatchEvent(new Event('navigateToHero'))}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
        >
          Update Hero Section
        </button>
        <button 
          onClick={() => document.dispatchEvent(new Event('navigateToAbout'))}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
        >
          Edit About Text
        </button>
        <button 
          onClick={() => document.dispatchEvent(new Event('navigateToContact'))}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
        >
          Update Contact Info
        </button>
      </div>
    </div>
  </div>
);
// ==================================================