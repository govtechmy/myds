import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Table Icon
 * @param className
 * @returns TableIcon
 */
export const TableIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/table">
        <path
          id="Vector"
          d="M3 8H17M3 8C2.44772 8 2 7.55228 2 7V5C2 4.44772 2.44772 4 3 4H17C17.5523 4 18 4.44772 18 5V7C18 7.55228 17.5523 8 17 8M3 8H9C9.55228 8 10 8.44772 10 9M3 8C2.44772 8 2 8.44772 2 9V11C2 11.5523 2.44772 12 3 12M17 8H11C10.4477 8 10 8.44772 10 9M17 8C17.5523 8 18 8.44772 18 9V11C18 11.5523 17.5523 12 17 12M11 12H17M11 12C10.4477 12 10 11.5523 10 11M11 12C10.4477 12 10 12.4477 10 13M10 11V9M10 11C10 11.5523 9.55228 12 9 12M17 12C17.5523 12 18 12.4477 18 13V15C18 15.5523 17.5523 16 17 16H10M10 16V13M10 16H3C2.44772 16 2 15.5523 2 15V13C2 12.4477 2.44772 12 3 12M10 13C10 12.4477 9.55228 12 9 12M3 12H9"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
};
