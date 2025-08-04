import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Flag Icon
 * @param className
 * @returns FlagIcon
 */
export const FlagIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Icon/flag">
        <path
          id="Vector"
          d="M3.75 17.25V12.25M3.75 12.25V3.75C3.75 3.75 6.5 1.5 10 3.75C13.5 6 16.25 3.75 16.25 3.75V12.25C16.25 12.25 13.5 14.5 10 12.25C6.5 10 3.75 12.25 3.75 12.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
