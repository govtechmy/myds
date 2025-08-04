import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Share Icon
 * @param className
 * @returns ShareIcon
 */
export const ShareIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/share">
        <path
          id="Vector"
          d="M7 9L13 6M7 11L13 14M7 10C7 11.3807 5.88071 12.5 4.5 12.5C3.11929 12.5 2 11.3807 2 10C2 8.61929 3.11929 7.5 4.5 7.5C5.88071 7.5 7 8.61929 7 10ZM18 4.5C18 5.88071 16.8807 7 15.5 7C14.1193 7 13 5.88071 13 4.5C13 3.11929 14.1193 2 15.5 2C16.8807 2 18 3.11929 18 4.5ZM18 15.5C18 16.8807 16.8807 18 15.5 18C14.1193 18 13 16.8807 13 15.5C13 14.1193 14.1193 13 15.5 13C16.8807 13 18 14.1193 18 15.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
