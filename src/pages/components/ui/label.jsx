import React from "react";

export const Label = ({ className = "", ...props }) => {
  return <label className={`text-sm font-medium ${className}`.trim()} {...props} />;
};

