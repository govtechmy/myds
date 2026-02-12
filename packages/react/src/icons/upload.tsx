import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Upload Icon
 * @param className
 * @returns UploadIcon
 */
export const UploadIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/upload">
        <path
          id="Vector"
          d="M2.75 11.75V14.25C2.75 15.9069 4.09315 17.25 5.75 17.25H14.25C15.9069 17.25 17.25 15.9069 17.25 14.25V11.75M10 12.25V3M6.75 6.25L10 2.75L13.25 6.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
