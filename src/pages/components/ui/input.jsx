import React from "react";

export const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full rounded-md border border-neutral-800 bg-black px-3 py-2 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white ${className}`.trim()}
      {...props}
    />
  );
};
