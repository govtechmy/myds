import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * ArrowForwardClose Icon
 * @param className
 * @returns ArrowForwardCloseIcon
 */
export const ArrowForwardCloseIcon: FunctionComponent<
  SVGProps<SVGSVGElement>
> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Icon/arrow-forward-close">
        <path
          id="Vector"
          d="M10.75 4.75L16.25 10M16.25 10L10.75 15.25M16.25 10H2.75M17.25 5V15.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
