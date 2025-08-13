import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Book Icon
 * @param className
 * @returns BookIcon
 */
export const BookIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Icon/book">
        <path
          id="Vector"
          d="M10 4.75C10 3.64543 10.8954 2.75 12 2.75H16.25C16.8023 2.75 17.25 3.19772 17.25 3.75V14.25C17.25 14.8023 16.8023 15.25 16.25 15.25H13.6569C12.596 15.25 11.5786 15.6714 10.8284 16.4216L10 17.25M10 4.75V17.25M10 4.75C10 3.64543 9.1046 2.75 8 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H6.34315C7.40401 15.25 8.4214 15.6714 9.1716 16.4216L10 17.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
