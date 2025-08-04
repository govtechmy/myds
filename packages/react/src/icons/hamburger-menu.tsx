import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * HamburgerMenu Icon
 * @param className
 * @returns HamburgerMenuIcon
 */
export const HamburgerMenuIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/hamburger-menu">
        <path
          id="Vector"
          d="M2.75 4H17.25M2.75 16H17.25M2.75 10H17.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
