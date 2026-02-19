const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const apiRequest = async (path, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || `Request failed with status ${response.status}`);
  }

  return response.json();
};

export const fetchContent = async () => apiRequest("/api/content");

export const updateContentSection = async (section, payload) =>
  apiRequest(`/api/content/${section}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });

export const submitInquiry = async (payload) =>
  apiRequest("/api/inquiries", {
    method: "POST",
    body: JSON.stringify(payload),
  });
