import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Mobile Icon
 * @param className
 * @returns MobileIcon
 */
export const MobileIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/mobile">
        <g id="Vector">
          <path
            d="M10.5 14.5C10.5 14.7761 10.2761 15 10 15C9.72386 15 9.5 14.7761 9.5 14.5C9.5 14.2239 9.72386 14 10 14C10.2761 14 10.5 14.2239 10.5 14.5Z"
            fill="currentColor"
          />
          <path
            d="M5 4C5 2.89543 5.89543 2 7 2H13C14.1046 2 15 2.89543 15 4V16C15 17.1046 14.1046 18 13 18H7C5.89543 18 5 17.1046 5 16V4Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M10.5 14.5C10.5 14.7761 10.2761 15 10 15C9.72386 15 9.5 14.7761 9.5 14.5C9.5 14.2239 9.72386 14 10 14C10.2761 14 10.5 14.2239 10.5 14.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </g>
      </g>
    </svg>
  );
};
