import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Section Icon
 * @param className
 * @returns SectionIcon
 */
export const SectionIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/section">
        <path
          id="Vector"
          d="M4 3H16M4 17H16M4 14H16C17.1046 14 18 13.1046 18 12V8C18 6.89543 17.1046 6 16 6H4C2.89543 6 2 6.89543 2 8V12C2 13.1046 2.89543 14 4 14Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
