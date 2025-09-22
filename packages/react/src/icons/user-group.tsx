import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * UserGroup Icon
 * @param className
 * @returns UserGroupIcon
 */
export const UserGroupIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/user-group">
        <path
          id="Vector"
          d="M13.75 12C15.8288 12 16.6802 14.1479 17.0239 15.696C17.2095 16.532 16.5333 17.25 15.6769 17.25H14.75M12.75 8.25C14.2688 8.25 15.25 7.01878 15.25 5.5C15.25 3.98122 14.2688 2.75 12.75 2.75M3.78167 17.25H11.2183C11.7828 17.25 12.227 16.7817 12.1145 16.2285C11.804 14.7012 10.7897 12 7.49999 12C4.2103 12 3.19604 14.7012 2.88548 16.2285C2.77299 16.7817 3.21717 17.25 3.78167 17.25ZM10.25 5.5C10.25 7.01878 9.01877 8.25 7.49999 8.25C5.98121 8.25 4.74999 7.01878 4.74999 5.5C4.74999 3.98122 5.98121 2.75 7.49999 2.75C9.01877 2.75 10.25 3.98122 10.25 5.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
