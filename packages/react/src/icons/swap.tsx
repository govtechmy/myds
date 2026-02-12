import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Swap Icon
 * @param className
 * @returns SwapIcon
 */
export const SwapIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Icon/swap">
        <path
          id="Vector"
          d="M3.29997 3V7L7.29997 7M16.8 17L16.8 13L12.8 13M3.6736 7C4.79707 4.63505 7.20758 3 9.99997 3C13.5264 3 16.4439 5.60771 16.9291 9M16.3263 13C15.2029 15.3649 12.7924 17 9.99997 17C6.4735 17 3.55609 14.3923 3.07086 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
