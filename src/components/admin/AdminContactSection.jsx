// ==================================================
// FILE: src/components/admin/AdminContactSection.jsx
// ==================================================
import React from 'react';

export const AdminContactSection = ({ formData, handleFormChange, handleSave, notification }) => (
  <form onSubmit={handleSave} className="space-y-4 bg-gray-800 p-6 rounded-lg border border-gray-700">
    <div>
      <label className="block text-gray-300 mb-1">Full Name</label>
      <input
        type="text"
        value={formData.contact.name}
        onChange={(e) => handleFormChange('contact', 'name', e.target.value)}
        className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-gray-300 mb-1">Specialty</label>
      <input
        type="text"
        value={formData.contact.specialty}
        onChange={(e) => handleFormChange('contact', 'specialty', e.target.value)}
        className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-gray-300 mb-1">Email</label>
      <input
        type="email"
        value={formData.contact.email}
        onChange={(e) => handleFormChange('contact', 'email', e.target.value)}
        className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-gray-300 mb-1">Phone/WhatsApp</label>
      <input
        type="tel"
        value={formData.contact.phone}
        onChange={(e) => handleFormChange('contact', 'phone', e.target.value)}
        className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-gray-300 mb-1">Instagram Handle</label>
      <input
        type="text"
        value={formData.contact.instagram}
        onChange={(e) => handleFormChange('contact', 'instagram', e.target.value)}
        className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <button
      type="submit"
      className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded transition-colors mt-4"
    >
      Save Contact Info
    </button>
    
    {notification.show && notification.type === 'success' && (
      <p className="text-green-400">{notification.message}</p>
    )}
  </form>
);