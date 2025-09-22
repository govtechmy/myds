import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * ChevronRightFill Icon
 * @param className
 * @returns ChevronRightFillIcon
 */
export const ChevronRightFillIcon: FunctionComponent<
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
      <g id="Icon/chevron-right-opaque">
        <path
          id="Vector"
          d="M9.13388 5.36862C8.34643 4.58117 7 5.13887 7 6.25251V13.8383C7 14.9519 8.34643 15.5096 9.13388 14.7222L12.9268 10.9293C13.4149 10.4411 13.4149 9.64967 12.9268 9.16152L9.13388 5.36862Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
