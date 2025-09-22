import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Printer Icon
 * @param className
 * @returns PrinterIcon
 */
export const PrinterIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/printer">
        <path
          id="Vector"
          d="M4.75 8.5V2.75H15.25V8.5M5.75 14.25H14.25M2.75 8.75H17.25V15.25C17.25 16.3546 16.3546 17.25 15.25 17.25H4.75C3.64543 17.25 2.75 16.3546 2.75 15.25V8.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
