import React from "react";
import { Users, FolderKanban, CalendarDays, TrendingUp, Compass } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

export const DashboardView = ({ portfolioData, resourceItems = {}, onNavigate }) => {
  const teamCount = (resourceItems.team || []).length;
  const projectCount = (resourceItems.projects || []).length;
  const eventCount = (resourceItems.events || []).length;
  const serviceCount = (resourceItems.services || []).length;
  const blogCount = (resourceItems.blogs || []).length;
  const totalResources = teamCount + projectCount + eventCount + serviceCount + blogCount;

  const getLatestTimestamp = (items = []) => {
    const values = items
      .map((item) => item?.updatedAt || item?.createdAt)
      .filter(Boolean)
      .map((value) => new Date(value).getTime())
      .filter((value) => Number.isFinite(value));
    if (!values.length) return null;
    return new Date(Math.max(...values));
  };

  const formatTimestamp = (dateValue) =>
    dateValue ? dateValue.toLocaleString() : "No updates yet";

  const latestTeamUpdate = getLatestTimestamp(resourceItems.team || []);
  const latestProjectUpdate = getLatestTimestamp(resourceItems.projects || []);
  const latestEventUpdate = getLatestTimestamp(resourceItems.events || []);
  const latestAnyResourceUpdate = getLatestTimestamp([
    ...(resourceItems.team || []),
    ...(resourceItems.projects || []),
    ...(resourceItems.events || []),
    ...(resourceItems.services || []),
    ...(resourceItems.blogs || []),
  ]);

  const stats = [
    {
      title: "Team Members",
      value: teamCount,
      tabId: "team",
      updatedAt: latestTeamUpdate,
      icon: Users,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      title: "Projects",
      value: projectCount,
      tabId: "projects",
      updatedAt: latestProjectUpdate,
      icon: FolderKanban,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
    {
      title: "Events",
      value: eventCount,
      tabId: "events",
      updatedAt: latestEventUpdate,
      icon: CalendarDays,
      color: "text-violet-400",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-500/20",
    },
    {
      title: "Total Resources",
      value: totalResources,
      updatedAt: latestAnyResourceUpdate,
      icon: TrendingUp,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-1">
        <h2 className="text-4xl font-bold text-white tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Dashboard</h2>
        <p className="text-neutral-400">Welcome back. Here's an overview of your portfolio.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className={`bg-neutral-950 border ${stat.borderColor} hover:border-neutral-700 transition-colors duration-200`}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-sm font-medium text-neutral-400 uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>{stat.title}</CardTitle>
              <div className={`p-2.5 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
              <p className="text-xs text-neutral-500 mt-1">Updated: {formatTimestamp(stat.updatedAt)}</p>
              {stat.tabId && (
                <button
                  type="button"
                  onClick={() => onNavigate?.(stat.tabId)}
                  className="mt-3 text-xs uppercase tracking-wider text-neutral-300 hover:text-white"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Open {stat.title}
                </button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-neutral-950 border-neutral-800 overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-white via-neutral-300 to-neutral-700" />
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Compass size={20} />
            Quick Start Guide
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            Use the navigation sidebar to manage your live resources. Add or update team members,
            projects, events, services, and blogs to keep the frontend synchronized.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-black border border-neutral-800/50">
              <h4 className="font-semibold text-white text-sm mb-1">1. Team & Projects</h4>
              <p className="text-xs text-neutral-500">Manage members and featured work.</p>
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => onNavigate?.("team")}
                  className="px-3 py-1 text-xs uppercase tracking-wider border border-neutral-700 text-neutral-300 hover:text-white hover:border-white"
                >
                  Team
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate?.("projects")}
                  className="px-3 py-1 text-xs uppercase tracking-wider border border-neutral-700 text-neutral-300 hover:text-white hover:border-white"
                >
                  Projects
                </button>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-black border border-neutral-800/50">
              <h4 className="font-semibold text-white text-sm mb-1">2. Events & Services</h4>
              <p className="text-xs text-neutral-500">Keep offerings and event content updated.</p>
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => onNavigate?.("events")}
                  className="px-3 py-1 text-xs uppercase tracking-wider border border-neutral-700 text-neutral-300 hover:text-white hover:border-white"
                >
                  Events
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate?.("services")}
                  className="px-3 py-1 text-xs uppercase tracking-wider border border-neutral-700 text-neutral-300 hover:text-white hover:border-white"
                >
                  Services
                </button>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-black border border-neutral-800/50">
              <h4 className="font-semibold text-white text-sm mb-1">3. Blogs & Publishing</h4>
              <p className="text-xs text-neutral-500">Publish insights and latest updates.</p>
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => onNavigate?.("blogs")}
                  className="px-3 py-1 text-xs uppercase tracking-wider border border-neutral-700 text-neutral-300 hover:text-white hover:border-white"
                >
                  Blogs
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate?.("contact")}
                  className="px-3 py-1 text-xs uppercase tracking-wider border border-neutral-700 text-neutral-300 hover:text-white hover:border-white"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-neutral-950 border-neutral-800">
        <CardHeader>
          <CardTitle className="text-sm font-medium text-neutral-400 uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Extra Counts
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-black border border-neutral-800 rounded-lg">
            <p className="text-neutral-400 text-xs uppercase tracking-wider">Services</p>
            <p className="text-white text-2xl font-bold">{serviceCount}</p>
          </div>
          <div className="p-4 bg-black border border-neutral-800 rounded-lg">
            <p className="text-neutral-400 text-xs uppercase tracking-wider">Blogs</p>
            <p className="text-white text-2xl font-bold">{blogCount}</p>
          </div>
          <div className="p-4 bg-black border border-neutral-800 rounded-lg">
            <p className="text-neutral-400 text-xs uppercase tracking-wider">Gallery Items</p>
            <p className="text-white text-2xl font-bold">
              {(portfolioData.churchPhotography || []).length +
                (portfolioData.eventPhotography || []).length +
                (portfolioData.organizationalWork || []).length}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
