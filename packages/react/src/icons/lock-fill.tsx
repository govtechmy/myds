import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * LockFill Icon
 * @param className
 * @returns LockFillIcon
 */
export const LockFillIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/lock-opaque">
        <g id="Vector">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 3.75C8.20507 3.75 6.75 5.20507 6.75 7V8C6.75 8.41421 6.41421 8.75 6 8.75C5.58579 8.75 5.25 8.41421 5.25 8V7C5.25 4.37665 7.37665 2.25 10 2.25C12.6234 2.25 14.75 4.37665 14.75 7V8C14.75 8.41421 14.4142 8.75 14 8.75C13.5858 8.75 13.25 8.41421 13.25 8V7C13.25 5.20507 11.7949 3.75 10 3.75Z"
            fill="currentColor"
          />
          <path
            d="M5.00354 7.75C4.03706 7.75 3.25354 8.53348 3.25354 9.5V15.25C3.25354 16.7688 4.48476 18 6.00354 18H14C15.5188 18 16.75 16.7688 16.75 15.25V9.5C16.75 8.53349 15.9665 7.75 15 7.75H5.00354Z"
            fill="currentColor"
          />
        </g>
      </g>
    </svg>
  );
};
