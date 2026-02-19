import React from "react";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

export const Notification = ({ notification }) => {
  if (!notification.show) return null;

  const styles = {
    success: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    error: "bg-red-500/10 border-red-500/20 text-red-400",
    warning: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  };

  const icons = {
    success: <CheckCircle2 size={20} />,
    error: <XCircle size={20} />,
    warning: <AlertCircle size={20} />,
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right-4">
      <div
        className={`
          flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg
          ${styles[notification.type] || styles.error}
        `}
      >
        {icons[notification.type] || icons.error}
        <span className="font-medium text-sm">{notification.message}</span>
      </div>
    </div>
  );
};
