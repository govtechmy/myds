import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Redo Icon
 * @param className
 * @returns RedoIcon
 */
export const RedoIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Icon/redo">
        <path
          id="Vector"
          d="M12.75 2.75L17.25 7M17.25 7L12.75 11.25M17.25 7C17.25 7 11.9207 7 7.49987 7C4.87652 7 2.75 9.12665 2.75 11.75C2.75 14.3734 4.87665 16.5 7.5 16.5H12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
