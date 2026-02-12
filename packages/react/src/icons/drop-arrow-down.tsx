import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * DropArrowDown Icon
 * @param className
 * @returns DropArrowDownIcon
 */
export const DropArrowDownIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/drop-arrow-down">
        <path
          id="Vector"
          d="M14.25 11.75L9 17.25M9 17.25L3.75 11.75M9 17.25V8.75C9 6.54086 10.7909 4.75 13 4.75H16.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
