import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Sun Icon
 * @param className
 * @returns SunIcon
 */
export const SunIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Icon/sun" clipPath="url(#clip0_31_12089)">
        <path
          id="Vector"
          d="M10 0.75V2.25M16.25 3.75L15.0659 4.93416M19.25 10.0001H17.75M17.25 16.2501L16.0659 15.066M10 17.75V19.25M4.93411 15.0659L3.74997 16.25M2.25 10.0001H0.75M4.93405 4.93423L3.74991 3.75003M15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_31_12089">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
