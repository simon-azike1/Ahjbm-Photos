// ==================================================
// FILE: src/components/admin/AdminAboutSection.jsx
// ==================================================
import React from 'react';

export const AdminAboutSection = ({ formData, handleFormChange, handleSave, notification }) => (
  <form onSubmit={handleSave} className="space-y-6 bg-gray-800 p-6 rounded-lg border border-gray-700">
    <div>
      <label className="block text-gray-300 mb-2">About Text</label>
      <textarea
        value={formData.about.text}
        onChange={(e) => handleFormChange('about', 'text', e.target.value)}
        rows="6"
        className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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