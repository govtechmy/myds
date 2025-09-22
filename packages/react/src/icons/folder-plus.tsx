import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * FolderPlus Icon
 * @param className
 * @returns FolderPlusIcon
 */
export const FolderPlusIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/folder-plus">
        <path
          id="Vector"
          d="M10 8.5V14.5M13 11.5H7M10.5 6L9.5685 4.2923C9.2181 3.64977 8.5446 3.25 7.8127 3.25H4C2.89543 3.25 2 4.14543 2 5.25V9.5M18 14.7551V8.25C18 7.14543 17.1046 6.25 16 6.25H2V14.7551C2 15.8597 2.89543 16.7551 4 16.7551H16C17.1046 16.7551 18 15.8597 18 14.7551Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
