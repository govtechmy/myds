import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * ChevronLeftFill Icon
 * @param className
 * @returns ChevronLeftFillIcon
 */
export const ChevronLeftFillIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/chevron-left-opaque">
        <path
          id="Vector"
          d="M11.159 14.7222C11.9465 15.5096 13.2929 14.9519 13.2929 13.8383L13.2929 6.25251C13.2929 5.13888 11.9465 4.58117 11.159 5.36862L7.36612 9.16152C6.87796 9.64967 6.87796 10.4411 7.36612 10.9293L11.159 14.7222Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
