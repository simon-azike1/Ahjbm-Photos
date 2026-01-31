// ==================================================
// FILE: src/components/admin/AdminChurchSection.jsx
// ==================================================
import React from 'react';

export const AdminChurchSection = ({ formData, handleImageChange, handleSave, notification }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-white">Church Photography Gallery</h3>
    {formData.churchPhotography.map((image, index) => (
      <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 mb-1">Image URL</label>
            <input
              type="url"
              value={image.src}
              onChange={(e) => handleImageChange('churchPhotography', index, 'src', e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Alt Text</label>
            <input
              type="text"
              value={image.alt}
              onChange={(e) => handleImageChange('churchPhotography', index, 'alt', e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    ))}
    <button
      onClick={handleSave}
      className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded transition-colors"
    >
      Save Gallery Changes
    </button>
    
    {notification.show && notification.type === 'success' && (
      <p className="text-green-400">{notification.message}</p>
    )}
  </div>
);