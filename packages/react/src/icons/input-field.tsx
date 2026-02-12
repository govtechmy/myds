import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * InputField Icon
 * @param className
 * @returns InputFieldIcon
 */
export const InputFieldIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/forms-field">
        <path
          id="Vector"
          d="M4.5 6.5H4C2.89543 6.5 2 7.39543 2 8.5V11.5C2 12.6046 2.89543 13.5 4 13.5H4.5M11.5 6.5H16C17.1046 6.5 18 7.39543 18 8.5V11.5C18 12.6046 17.1046 13.5 16 13.5H11.5M8 16V4M8 16H6M8 16H10M8 4H6.00001M8 4H10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
