import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Copy Icon
 * @param className
 * @returns CopyIcon
 */
export const CopyIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Icon/copy">
        <path
          id="Vector"
          d="M4.25 12.75C3.2835 12.75 2.5 12.2165 2.5 11.25V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H11.25C12.2165 2.5 13 3.2835 13 4.25M9 7H15.5C16.6046 7 17.5 7.89543 17.5 9V15.5C17.5 16.6046 16.6046 17.5 15.5 17.5H9C7.89543 17.5 7 16.6046 7 15.5V9C7 7.89543 7.89543 7 9 7Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
