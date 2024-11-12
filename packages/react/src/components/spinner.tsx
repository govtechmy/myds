import React from "react";
import { clx } from "../utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "grey" | "white";
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "sm",
  color = "grey",
  className = "",
}) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };
  const colorClasses = {
    grey: "to-txt-black-500",
    white: "to-white",
  };

  return (
    <div className="relative flex items-center justify-center">
      <div
        className={clx(
          sizeClasses[size],
          "animate-spin rounded-full [animation-duration:600ms]",
          "bg-[conic-gradient(var(--tw-gradient-stops))]",
          "from-transparent",
          colorClasses[color],
          "[mask:radial-gradient(transparent_56%,#000_56%)]",
          className,
        )}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
