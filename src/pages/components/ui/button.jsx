import React from "react";

const base =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  default: "bg-white text-black hover:bg-neutral-200",
  outline: "border border-neutral-700 text-neutral-300 hover:bg-neutral-900",
  ghost: "text-neutral-300 hover:bg-neutral-900",
  destructive: "bg-red-500 text-white hover:bg-red-600",
};

const sizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3",
  icon: "h-10 w-10",
};

export const Button = ({
  className = "",
  variant = "default",
  size = "default",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className}`.trim()}
      {...props}
    />
  );
};
