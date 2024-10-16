import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Cross Icon
 * @param className
 * @returns CrossIcon
 */
export const CrossIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/cross">
        <path
          id="Vector"
          d="M14.8 5.20001L5.20001 14.8M5.20001 5.20001L14.8 14.8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
