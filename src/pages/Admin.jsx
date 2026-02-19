import React, { useState, useEffect } from "react";
import { AdminLayout } from "./components/admin/AdminLayout";
import { LoginForm } from "./components/admin/LoginForm";
import { DashboardView } from "./components/admin/views/DashboardView";
import { ContactView } from "./components/admin/views/ContactView";
import { ResourceView } from "./components/admin/views/ResourceView";
import { Notification } from "./components/admin/Notification";
import { fetchContent, updateContentSection } from "../lib/contentApi";
import { loginAdmin } from "../lib/publicApi";
import {
  adminCreate,
  adminDelete,
  adminList,
  adminUpdate,
  clearAdminToken,
  getAdminToken,
  setAdminToken,
  verifyAdminSession,
} from "../lib/adminApi";
import { resourceConfigs, sectionTabs, emptyContent } from "./utils/constants";
import { withFallback } from "./utils/helpers";

const App = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [formData, setFormData] = useState(emptyContent);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: "", message: "" });
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [resourceItems, setResourceItems] = useState({
    team: [],
    projects: [],
    events: [],
    services: [],
    blogs: [],
    contact: [],
  });
  const [resourceForms, setResourceForms] = useState(
    Object.fromEntries(
      Object.keys(resourceConfigs).map((key) => [key, { ...resourceConfigs[key].empty }])
    )
  );
  const [editingIds, setEditingIds] = useState(
    Object.fromEntries(Object.keys(resourceConfigs).map((key) => [key, null]))
  );

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => setNotification({ show: false, type: "", message: "" }), 3500);
  };

  const loadContent = async () => {
    try {
      setIsLoading(true);
      const content = await fetchContent();
      setFormData(withFallback(content));
    } catch (error) {
      showNotification("error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loadResource = async (resource) => {
    try {
      const items = await adminList(resource);
      setResourceItems((prev) => ({ ...prev, [resource]: Array.isArray(items) ? items : [] }));
    } catch (error) {
      showNotification("error", `${resourceConfigs[resource].label}: ${error.message}`);
    }
  };

  const loadAllResources = async () => {
    await Promise.all(Object.keys(resourceConfigs).map((key) => loadResource(key)));
  };

  useEffect(() => {
    const checkSession = async () => {
      const token = getAdminToken();
      if (!token) {
        setIsAuthenticated(false);
        setIsAuthLoading(false);
        setIsLoading(false);
        return;
      }

      try {
        await verifyAdminSession();
        setIsAuthenticated(true);
        await Promise.all([loadContent(), loadAllResources()]);
      } catch (_error) {
        clearAdminToken();
        setIsAuthenticated(false);
      } finally {
        setIsAuthLoading(false);
      }
    };

    checkSession();
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);
    try {
      const data = await loginAdmin(credentials.username, credentials.password);
      setAdminToken(data.token);
      setIsAuthenticated(true);
      setIsAuthLoading(false);
      await Promise.all([loadContent(), loadAllResources()]);
      setCredentials({ username: "", password: "" });
      showNotification("success", "Welcome back!");
    } catch (error) {
      const message = error.message || "Login failed.";
      setLoginError(message);
      showNotification("error", message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    clearAdminToken();
    setIsAuthenticated(false);
    showNotification("success", "Logged out successfully");
  };

  const handleFormChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleContentSave = async (section, payload) => {
    try {
      setIsSaving(true);
      const body = payload ?? formData[section];
      const updated = await updateContentSection(section, body);
      setFormData(withFallback(updated));
      showNotification("success", "Changes saved successfully");
    } catch (error) {
      showNotification("error", error.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleResourceFormChange = (resource, field, value) => {
    setResourceForms((prev) => ({
      ...prev,
      [resource]: {
        ...prev[resource],
        [field]: value,
      },
    }));
  };

  const resetResourceForm = (resource) => {
    setResourceForms((prev) => ({
      ...prev,
      [resource]: { ...resourceConfigs[resource].empty },
    }));
    setEditingIds((prev) => ({ ...prev, [resource]: null }));
  };

  const saveResourceItem = async (resource) => {
    try {
      const form = resourceForms[resource];
      const editingId = editingIds[resource];

      const payload = { ...form };

      if (resource === "projects") {
        payload.tags = String(form.tags || "").split(",").map(t => t.trim()).filter(Boolean);
        try {
          payload.gallery = JSON.parse(form.galleryJson || "[]").map((item) => ({
            src: item?.src || item?.url || "",
            alt: item?.alt || item?.caption || "",
          }));
        } catch {
          throw new Error("Invalid gallery JSON");
        }
        if (!payload.coverImage && payload.gallery[0]?.src) {
          payload.coverImage = payload.gallery[0].src;
        }
        delete payload.galleryJson;
      }

      if (resource === "services") {
        payload.features = String(form.features || "").split(",").map(t => t.trim()).filter(Boolean);
      }

      if (editingId) {
        await adminUpdate(resource, editingId, payload);
        showNotification("success", `${resourceConfigs[resource].label} updated`);
      } else {
        await adminCreate(resource, payload);
        showNotification("success", `${resourceConfigs[resource].label} created`);
      }

      await loadResource(resource);
      resetResourceForm(resource);
    } catch (error) {
      showNotification("error", error.message);
    }
  };

  const startEditResourceItem = (resource, item) => {
    setEditingIds((prev) => ({ ...prev, [resource]: item._id }));
    const form = { ...resourceConfigs[resource].empty, ...item };
    if (resource === "projects") {
      form.tags = Array.isArray(item.tags) ? item.tags.join(", ") : "";
      form.galleryJson = JSON.stringify(item.gallery || [], null, 2);
    }
    if (resource === "services") {
      form.features = Array.isArray(item.features) ? item.features.join(", ") : "";
    }
    setResourceForms((prev) => ({ ...prev, [resource]: form }));
  };

  const removeResourceItem = async (resource, id) => {
    if (!confirm(`Delete this ${resourceConfigs[resource].label.toLowerCase()}?`)) return;
    try {
      await adminDelete(resource, id);
      showNotification("success", `${resourceConfigs[resource].label} deleted`);
      await loadResource(resource);
      if (editingIds[resource] === id) {
        resetResourceForm(resource);
      }
    } catch (error) {
      showNotification("error", error.message);
    }
  };

  if (isAuthLoading || isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-neutral-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <LoginForm
        credentials={credentials}
        setCredentials={setCredentials}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        isLoggingIn={isLoggingIn}
        loginError={loginError}
        onLogin={handleLogin}
      />
    );
  }

  const renderActiveView = () => {
    const portfolioData = {
      churchPhotography: formData.churchPhotography || [],
      eventPhotography: formData.eventPhotography || [],
      organizationalWork: formData.organizationalWork || [],
    };

    switch (activeTab) {
      case "dashboard":
        return (
          <DashboardView
            portfolioData={portfolioData}
            resourceItems={resourceItems}
            onNavigate={setActiveTab}
          />
        );
      case "contactContent":
        return (
          <ContactView
            formData={formData}
            onFormChange={handleFormChange}
            onSave={() => handleContentSave("contact")}
            isSaving={isSaving}
          />
        );
      default:
        if (Object.keys(resourceConfigs).includes(activeTab)) {
          return (
            <ResourceView
              resource={activeTab}
              config={resourceConfigs[activeTab]}
              items={resourceItems[activeTab] || []}
              form={resourceForms[activeTab]}
              isEditing={!!editingIds[activeTab]}
              onFormChange={handleResourceFormChange}
              onSave={() => saveResourceItem(activeTab)}
              onReset={() => resetResourceForm(activeTab)}
              onRefresh={() => loadResource(activeTab)}
              onEdit={(item) => startEditResourceItem(activeTab, item)}
              onDelete={(id) => removeResourceItem(activeTab, id)}
            />
          );
        }
        return null;
    }
  };

  return (
    <AdminLayout
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onLogout={handleLogout}
      tabs={sectionTabs}
    >
      <Notification notification={notification} />
      {renderActiveView()}
    </AdminLayout>
  );
};

export default App;
