import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "grey" | "white";
  classname?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "sm",
  color = "grey",
  classname = "",
}) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };
  const colorClasses = {
    grey: "#FFFFFF",
    white: "#FFFFFF",
  };

  return (
    <div className="relative flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-[${colorClasses[color]}] from-white [mask:radial-gradient(transparent_56%,#000_56%)]`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
