import React from "react";

export const Card = ({ className = "", ...props }) => {
  return <div className={`rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-100 ${className}`.trim()} {...props} />;
};

export const CardHeader = ({ className = "", ...props }) => {
  return <div className={`p-6 ${className}`.trim()} {...props} />;
};

export const CardTitle = ({ className = "", ...props }) => {
  return <h3 className={`font-semibold leading-none tracking-tight ${className}`.trim()} {...props} />;
};

export const CardContent = ({ className = "", ...props }) => {
  return <div className={`p-6 pt-0 ${className}`.trim()} {...props} />;
};
