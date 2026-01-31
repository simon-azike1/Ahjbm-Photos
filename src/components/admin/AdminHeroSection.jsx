// ==================================================
// FILE: src/components/admin/AdminHeroSection.jsx
// ==================================================
import React from 'react';

export const AdminHeroSection = ({ formData, handleFormChange, handleSave, notification }) => (
  <form onSubmit={handleSave} className="space-y-6 bg-gray-800 p-6 rounded-lg border border-gray-700">
    <div>
      <label className="block text-gray-300 mb-2">Title</label>
      <input
        type="text"
        value={formData.hero.title}
        onChange={(e) => handleFormChange('hero', 'title', e.target.value)}
        className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-gray-300 mb-2">Subtitle</label>
      <input
        type="text"
        value={formData.hero.subtitle}
        onChange={(e) => handleFormChange('hero', 'subtitle', e.target.value)}
        className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-gray-300 mb-2">Hero Image URL</label>
      <input
        type="url"
        value={formData.hero.image}
        onChange={(e) => handleFormChange('hero', 'image', e.target.value)}
        className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="https://example.com/image.jpg"
      />
    </div>
    <button
      type="submit"
      className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded transition-colors"
    >
      Save Changes
    </button>
    
    {notification.show && notification.type === 'success' && (
      <p className="text-green-400">{notification.message}</p>
    )}
  </form>
);
// ==================================================