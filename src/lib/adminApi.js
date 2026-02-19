const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
const TOKEN_KEY = "ahjbm_admin_token";

export const getAdminToken = () => localStorage.getItem(TOKEN_KEY);
export const setAdminToken = (token) => localStorage.setItem(TOKEN_KEY, token);
export const clearAdminToken = () => localStorage.removeItem(TOKEN_KEY);

const adminFetch = async (path, options = {}) => {
  const token = getAdminToken();
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || "Request failed.");
  }

  return response.json();
};

export const verifyAdminSession = async () => adminFetch("/api/auth/me");

export const adminList = (resource) => adminFetch(`/api/admin/${resource}`);
export const adminGet = (resource, id) => adminFetch(`/api/admin/${resource}/${id}`);
export const adminCreate = (resource, payload) =>
  adminFetch(`/api/admin/${resource}`, { method: "POST", body: JSON.stringify(payload) });
export const adminUpdate = (resource, id, payload) =>
  adminFetch(`/api/admin/${resource}/${id}`, { method: "PUT", body: JSON.stringify(payload) });
export const adminDelete = (resource, id) =>
  adminFetch(`/api/admin/${resource}/${id}`, { method: "DELETE" });
