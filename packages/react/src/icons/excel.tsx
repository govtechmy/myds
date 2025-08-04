import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Excel Icon
 * @param className
 * @returns ExcelIcon
 */
export const ExcelIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/excel-file">
        <g id="Vector">
          <path
            id="Vector_2"
            d="M6.79999 17.25H15.3C16.4046 17.25 17.3 16.3546 17.3 15.25V7L13.05 2.75H6.79999C5.69542 2.75 4.79999 3.64543 4.79999 4.75V15.25C4.79999 16.3546 5.69542 17.25 6.79999 17.25Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_3"
            d="M17.05 7.25H12.8V3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Rect"
            d="M1 10C1 9.17157 1.67157 8.5 2.5 8.5H9.5C10.3284 8.5 11 9.17157 11 10V14C11 14.8284 10.3284 15.5 9.5 15.5H2.5C1.67157 15.5 1 14.8284 1 14V10Z"
            fill="#16A34A"
          />
          <path
            id="X"
            d="M4.63135 10L5.97081 11.3633H6.0227L7.36865 10H8.9546L6.92757 12L9 14H7.38487L6.0227 12.6348H5.97081L4.60865 14H3L5.07892 12L3.03892 10H4.63135Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
};
