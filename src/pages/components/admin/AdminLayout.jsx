import React, { useState } from "react";
import {
  LogOut,
  Menu,
  X,
  LayoutDashboard,
  PanelLeftClose,
  PanelLeftOpen,
  Rocket,
  Info,
  Phone,
  Church,
  Image,
  Building2,
  Users,
  FolderKanban,
  CalendarDays,
  BriefcaseBusiness,
  FileText,
  ContactRound,
} from "lucide-react";

const tabIcons = {
  dashboard: LayoutDashboard,
  hero: Rocket,
  about: Info,
  contact: Phone,
  church: Church,
  eventGallery: Image,
  organization: Building2,
  team: Users,
  projects: FolderKanban,
  events: CalendarDays,
  services: BriefcaseBusiness,
  blogs: FileText,
  contactResource: ContactRound,
};

export const AdminLayout = ({ activeTab, onTabChange, onLogout, tabs = [], children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const overviewIds = new Set(["dashboard"]);
  const contentIds = new Set(["contactContent"]);
  const groupedTabs = [
    { group: "Overview", tabs: tabs.filter((tab) => overviewIds.has(tab.id)) },
    { group: "Content", tabs: tabs.filter((tab) => contentIds.has(tab.id)) },
    {
      group: "Resources",
      tabs: tabs.filter((tab) => !overviewIds.has(tab.id) && !contentIds.has(tab.id)),
    },
  ];


  return (
    <div className="min-h-screen bg-black antialiased">
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-neutral-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/AHJBM logo.png" alt="AHJBM logo" className="w-8 h-8 object-contain rounded-md" />
          <h1 className="text-lg font-semibold text-white tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Admin</h1>
        </div>
        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-neutral-400 hover:text-white hover:bg-neutral-900"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className="flex">
        <aside
          className={`
            fixed lg:sticky top-0 left-0 z-40 h-screen bg-neutral-950 border-r border-neutral-800/70
            transform transition-all duration-300 ease-in-out
            w-72 ${sidebarCollapsed ? "lg:w-20" : "lg:w-72"}
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
        >
          <div className="flex flex-col h-full">
            <div className={`p-4 border-b border-neutral-800/70 hidden lg:flex items-center ${sidebarCollapsed ? "justify-center" : "justify-between"}`}>
              <div className={`flex items-center gap-3 ${sidebarCollapsed ? "hidden" : "flex"}`}>
                <img src="/AHJBM logo.png" alt="AHJBM logo" className="w-9 h-9 object-contain rounded-lg" />
                <div>
                  <h1 className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Content Manager</h1>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>Photography Portfolio</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSidebarCollapsed((v) => !v)}
                className="h-9 w-9 rounded-md inline-flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-900"
                title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {sidebarCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4 space-y-8">
              {groupedTabs.map((group) => (
                <div key={group.group}>
                  {!sidebarCollapsed && (
                    <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3 px-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {group.group}
                    </h3>
                  )}
                  <div className="space-y-1">
                    {group.tabs.map((tab) => {
                      const isActive = activeTab === tab.id;
                      const Icon = tabIcons[tab.iconKey] || LayoutDashboard;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          title={tab.label}
                          onClick={() => {
                            onTabChange(tab.id);
                            setSidebarOpen(false);
                          }}
                          className={`
                            w-full flex items-center ${sidebarCollapsed ? "justify-center" : ""} gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                            ${
                              isActive
                                ? "bg-white text-black"
                                : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                            }
                          `}
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          <Icon size={18} />
                          {!sidebarCollapsed && <span>{tab.label}</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>

            <div className="p-4 border-t border-neutral-800/70">
              {!sidebarCollapsed && (
                <div className="flex items-center gap-3 mb-4 px-2">
                  <div className="h-9 w-9 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 text-xs font-medium flex items-center justify-center">
                    AD
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Admin User</p>
                    <p className="text-xs text-neutral-500 truncate">admin@portfolio.com</p>
                  </div>
                </div>
              )}
              <button
                type="button"
                onClick={onLogout}
                title="Logout"
                className={`inline-flex items-center ${sidebarCollapsed ? "justify-center w-12 h-10" : "justify-start w-full px-3 py-2"} gap-2 rounded-md border border-neutral-700 text-neutral-300 hover:text-white hover:border-white hover:bg-neutral-900 transition-colors`}
              >
                <LogOut size={16} />
                {!sidebarCollapsed && "Logout"}
              </button>
            </div>
          </div>
        </aside>

        <main className="flex-1 min-w-0 pt-16 lg:pt-0">
          <div className="p-6 lg:p-10 max-w-7xl mx-auto">{children}</div>
        </main>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};
