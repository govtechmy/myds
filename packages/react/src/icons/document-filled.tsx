import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * DocumentFilled Icon
 * @param className
 * @returns DocumentFilledIcon
 */
export const DocumentFilledIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/document-filled">
        <path
          id="Vector"
          d="M16 7.25H11.75V3M7 13.5H13M7 10.5L10 10.5M5.75 17.25H14.25C15.3546 17.25 16.25 16.3546 16.25 15.25V7L12 2.75H5.75C4.64543 2.75 3.75 3.64543 3.75 4.75V15.25C3.75 16.3546 4.64543 17.25 5.75 17.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
