import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * User Icon
 * @param className
 * @returns UserIcon
 */
export const UserIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Icon/user">
        <g id="Vector">
          <path
            d="M10 9.25C11.7949 9.25 13.25 7.79493 13.25 6C13.25 4.20507 11.7949 2.75 10 2.75C8.20508 2.75 6.75 4.20507 6.75 6C6.75 7.79493 8.20508 9.25 10 9.25Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.8475 17.25H15.1525C16.2944 17.25 17.174 16.2681 16.6408 15.2584C15.8563 13.7731 14.068 12 10 12C5.93201 12 4.14367 13.7731 3.35924 15.2584C2.82597 16.2681 3.70558 17.25 4.8475 17.25Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};
