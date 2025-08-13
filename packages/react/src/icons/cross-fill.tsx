import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * CrossFill Icon
 * @param className
 * @returns CrossFillIcon
 */
export const CrossFillIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/fill/cross">
        <path
          id="cross-opaque"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L8.93934 10L6.46967 12.4697C6.17678 12.7626 6.17678 13.2374 6.46967 13.5303C6.76256 13.8232 7.23744 13.8232 7.53033 13.5303L10 11.0607L12.4697 13.5303C12.7626 13.8232 13.2374 13.8232 13.5303 13.5303C13.8232 13.2374 13.8232 12.7626 13.5303 12.4697L11.0607 10L13.5303 7.53033C13.8232 7.23744 13.8232 6.76256 13.5303 6.46967C13.2374 6.17678 12.7626 6.17678 12.4697 6.46967L10 8.93934L7.53033 6.46967Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
