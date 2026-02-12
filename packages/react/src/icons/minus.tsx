import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Minus Icon
 * @param className
 * @returns MinusIcon
 */
export const MinusIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/minus">
        <path
          id="Vector"
          d="M16 10H4"
          stroke="currentColor"
          strokeWidth="10%"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
