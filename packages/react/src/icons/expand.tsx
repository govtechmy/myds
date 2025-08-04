import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Expand Icon
 * @param className
 * @returns ExpandIcon
 */
export const ExpandIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/expand">
        <path
          id="Vector"
          d="M3 3V6.81818M3 3H6.81818M3 3L7.45455 7.45455M3 17V13.1818M3 17H6.81818M3 17L7.45455 12.5455M17 3H13.1818M17 3V6.81818M17 3L12.5455 7.45455M17 17H13.1818M17 17V13.1818M17 17L12.5455 12.5455"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
