import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Map Icon
 * @param className
 * @returns MapIcon
 */
export const MapIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Icon/map">
        <path
          id="Vector"
          d="M7.25 2.75L2.75 4.75V17.25L7.25 15.25M7.25 2.75V15.25M7.25 2.75L12.75 4.75M7.25 15.25L12.75 17.25M12.75 4.75L17.25 2.75V15.25L12.75 17.25M12.75 4.75V17.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
