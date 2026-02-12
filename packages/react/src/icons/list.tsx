import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * List Icon
 * @param className
 * @returns ListIcon
 */
export const ListIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Icon/list">
        <g id="Vector">
          <path
            d="M2.5 3.5C2.5 2.94772 2.94772 2.5 3.5 2.5H16.5C17.0523 2.5 17.5 2.94772 17.5 3.5V4.5C17.5 5.05228 17.0523 5.5 16.5 5.5H3.5C2.94772 5.5 2.5 5.05228 2.5 4.5V3.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M2.5 9.5C2.5 8.94772 2.94772 8.5 3.5 8.5H16.5C17.0523 8.5 17.5 8.94772 17.5 9.5V10.5C17.5 11.0523 17.0523 11.5 16.5 11.5H3.5C2.94772 11.5 2.5 11.0523 2.5 10.5V9.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M2.5 15.5C2.5 14.9477 2.94772 14.5 3.5 14.5H16.5C17.0523 14.5 17.5 14.9477 17.5 15.5V16.5C17.5 17.0523 17.0523 17.5 16.5 17.5H3.5C2.94772 17.5 2.5 17.0523 2.5 16.5V15.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </g>
      </g>
    </svg>
  );
};
