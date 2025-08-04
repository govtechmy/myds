import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * StarFill Icon
 * @param className
 * @returns StarFillIcon
 */
export const StarFillIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/fill/star">
        <path
          id="Star 3"
          d="M9.99999 2L11.7869 7.54059L17.6084 7.52786L12.8912 10.9394L14.7023 16.4721L9.99999 13.04L5.29771 16.4721L7.10878 10.9394L2.39154 7.52786L8.21313 7.54059L9.99999 2Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
