import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * EyeShow Icon
 * @param className
 * @returns EyeShowIcon
 */
export const EyeShowIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/eye-show">
        <g id="Vector">
          <path
            d="M18.25 10C18.25 11 15.5 16.25 10 16.25C4.5 16.25 1.75 11 1.75 10C1.75 9 4.5 3.75 10 3.75C15.5 3.75 18.25 9 18.25 10Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};
