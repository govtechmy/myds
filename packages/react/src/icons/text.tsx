import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Text Icon
 * @param className
 * @returns TextIcon
 */
export const TextIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Icon/text">
        <path
          id="Vector"
          d="M10 16.5V4M16 6.91304V4.5C16 4.22386 15.7761 4 15.5 4H4.5C4.22386 4 4 4.22386 4 4.5V6.91304M7.5 16.5H12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
