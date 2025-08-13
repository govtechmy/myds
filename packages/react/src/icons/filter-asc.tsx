import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * FilterAsc Icon
 * @param className
 * @returns FilterAscIcon
 */
export const FilterAscIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
  props,
) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 6H16M7 10H13M10 14H10.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
