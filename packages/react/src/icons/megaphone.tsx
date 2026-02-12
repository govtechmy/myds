import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Megaphone Icon
 * @param className
 * @returns MegaphoneIcon
 */
export const MegaphoneIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/megaphone">
        <path
          id="Vector"
          d="M6.24498 6.54272L13.9507 3.29792M6.24498 6.54272L6.24498 11.7344M6.24498 6.54272L4.32875 6.54273C2.90455 6.54273 1.75 7.70493 1.75 9.13857C1.75 10.5722 2.90455 11.7344 4.32875 11.7344H4.57485M13.9507 3.29792L13.9507 14.3303M13.9507 3.29792C13.9507 2.5811 14.5279 2 15.24 2L15.8503 2C16.8995 2 17.75 2.85615 17.75 3.91226V13.7159C17.75 14.772 16.8995 15.6282 15.8503 15.6282H15.24C14.5279 15.6282 13.9507 15.0471 13.9507 14.3303M13.9507 14.3303L7.75 12.2414M6.24498 11.7344H4.57485M6.24498 11.7344L7.75 12.2414M4.57485 11.7344L5.65989 17.5254C5.72526 17.799 5.96555 17.9938 6.24498 17.9999L8.75 17.9999C9.10746 18.0076 9.29764 17.5248 9.27078 17.1403C9.26431 17.0477 9.21523 16.9652 9.14957 16.8996L8.25 16L7.75 12.2414"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
