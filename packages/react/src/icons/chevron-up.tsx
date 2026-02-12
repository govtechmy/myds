import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * ChevronUp Icon
 * @param className
 * @returns ChevronUpIcon
 */
export const ChevronUpIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/chevron-up">
        <path
          id="Vector 146"
          d="M5 12L10 7L15 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
