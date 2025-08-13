import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Placeholder Icon
 * @param className
 * @returns PlaceholderIcon
 */
export const PlaceholderIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/placeholder">
        <path
          id="Vector"
          d="M8.61962 3.57177C9.38198 2.80941 10.618 2.80941 11.3804 3.57177L16.4282 8.61962C17.1906 9.38198 17.1906 10.618 16.4282 11.3804L11.3804 16.4282C10.618 17.1906 9.38198 17.1906 8.61962 16.4282L3.57177 11.3804C2.80941 10.618 2.80941 9.38198 3.57177 8.61962L8.61962 3.57177Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
