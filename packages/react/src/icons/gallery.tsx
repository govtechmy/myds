import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Gallery Icon
 * @param className
 * @returns GalleryIcon
 */
export const GalleryIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/gallery">
        <path
          id="Vector"
          d="M2.5 14.5L5.49619 10.5067C6.2749 9.5161 7.76453 9.4837 8.5856 10.4395M8 12C8.86745 10.8966 10.6321 8.60207 11.5013 7.50017C12.2815 6.51598 13.7663 6.48581 14.5856 7.43947L17.5 11M4 17H16C17.1046 17 18 16.1046 18 15V5C18 3.89543 17.1046 3 16 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M7 6.5C7 7.05228 6.55228 7.5 6 7.5C5.44772 7.5 5 7.05228 5 6.5C5 5.94772 5.44772 5.5 6 5.5C6.55228 5.5 7 5.94772 7 6.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
