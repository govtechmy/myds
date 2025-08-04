import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Warning Icon
 * @param className
 * @returns WarningIcon
 */
export const WarningIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/warning">
        <path
          id="Vector"
          d="M10 8V11M10 13.95V14M2.95221 14.3536L8.21521 3.85659C8.95311 2.38482 11.0539 2.38521 11.7913 3.85724L17.0495 14.3543C17.7156 15.6841 16.7487 17.25 15.2613 17.25H4.74008C3.25235 17.25 2.28541 15.6835 2.95221 14.3536Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
