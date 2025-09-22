import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Accessible Icon
 * @param className
 * @returns AccessibleIcon
 */
export const AccessibleIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/accessible">
        <path
          id="Vector"
          d="M8.5 11.8L8.5 10.9V8.79507L8.5 8.53234C8.5 7.93066 8.14046 7.3872 7.58671 7.15185L4 5.5L5.54331 6.11733C8.40425 7.2617 11.5958 7.2617 14.4567 6.11733L16 5.5L12.4 7.15185C11.8463 7.3872 11.4867 7.93066 11.4867 8.53235V8.79507L11.4867 10.9L11.502 11.8M8.5 11.8L7.6 17.5M8.5 11.8L9 11.5C9.62489 11.1334 10.3751 11.1334 11 11.5L11.502 11.8M11.502 11.8L12.4 17.5M11 3.5C11 4.05228 10.5523 4.5 10 4.5C9.44772 4.5 9 4.05228 9 3.5C9 2.94772 9.44772 2.5 10 2.5C10.5523 2.5 11 2.94772 11 3.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
