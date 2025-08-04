import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Star Icon
 * @param className
 * @returns StarIcon
 */
export const StarIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Icon/star">
        <path
          id="Star 3"
          d="M10 2L11.7869 7.54059L17.6085 7.52786L12.8912 10.9394L14.7023 16.4721L10 13.04L5.29772 16.4721L7.10879 10.9394L2.39155 7.52786L8.21313 7.54059L10 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
