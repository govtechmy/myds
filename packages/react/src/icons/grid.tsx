import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Grid Icon
 * @param className
 * @returns GridIcon
 */
export const GridIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Icon/grid">
        <g id="Vector">
          <path
            d="M2.5 3.7375C2.5 3.05405 3.05406 2.5 3.73752 2.5H7.26248C7.94594 2.5 8.5 3.05405 8.5 3.7375V7.2625C8.5 7.94595 7.94594 8.5 7.26248 8.5H3.73752C3.05406 8.5 2.5 7.94595 2.5 7.2625V3.7375Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M11.5 3.7375C11.5 3.05405 12.0541 2.5 12.7375 2.5H16.2625C16.9459 2.5 17.5 3.05405 17.5 3.7375V7.2625C17.5 7.94595 16.9459 8.5 16.2625 8.5H12.7375C12.0541 8.5 11.5 7.94595 11.5 7.2625V3.7375Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M11.5 12.7375C11.5 12.054 12.0541 11.5 12.7375 11.5H16.2625C16.9459 11.5 17.5 12.054 17.5 12.7375V16.2625C17.5 16.946 16.9459 17.5 16.2625 17.5H12.7375C12.0541 17.5 11.5 16.946 11.5 16.2625V12.7375Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M2.5 12.7375C2.5 12.054 3.05406 11.5 3.73752 11.5H7.26248C7.94594 11.5 8.5 12.054 8.5 12.7375V16.2625C8.5 16.946 7.94594 17.5 7.26248 17.5H3.73752C3.05406 17.5 2.5 16.946 2.5 16.2625V12.7375Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </g>
      </g>
    </svg>
  );
};
