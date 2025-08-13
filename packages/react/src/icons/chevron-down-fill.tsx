import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * ChevronDownFill Icon
 * @param className
 * @returns ChevronDownFillIcon
 */
export const ChevronDownFillIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/chevron-down-opaque">
        <path
          id="Vector"
          d="M6.25251 7C5.13887 7 4.58117 8.34643 5.36862 9.13388L9.16152 12.9268C9.64967 13.4149 10.4411 13.4149 10.9293 12.9268L14.7222 9.13388C15.5096 8.34643 14.9519 7 13.8383 7H6.25251Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
