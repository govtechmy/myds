import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * WarningDiamond Icon
 * @param className
 * @returns WarningDiamondIcon
 */
export const WarningDiamondIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/warning-diamond">
        <path
          id="Vector"
          d="M10 7V10M10 12.95V13M3.41422 11.4142L8.58579 16.5858C9.36684 17.3668 10.6332 17.3668 11.4142 16.5858L16.5858 11.4142C17.3668 10.6332 17.3668 9.36684 16.5858 8.58579L11.4142 3.41422C10.6332 2.63317 9.36684 2.63317 8.58579 3.41422L3.41422 8.58579C2.63317 9.36684 2.63317 10.6332 3.41422 11.4142Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
