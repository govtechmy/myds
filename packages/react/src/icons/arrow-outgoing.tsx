import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * ArrowOutgoing Icon
 * @param className
 * @returns ArrowOutgoingIcon
 */
export const ArrowOutgoingIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/arrow-outgoing">
        <path
          id="Vector 147"
          d="M5 15L15 5M15 5L15 13.3333M15 5L6.66667 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
