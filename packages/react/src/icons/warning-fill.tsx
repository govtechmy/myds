import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * WarningFill Icon
 * @param className
 * @returns WarningFillIcon
 */
export const WarningFillIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/warning-opaque">
        <path
          id="Subtract"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.21521 3.85659L2.95221 14.3536C2.28541 15.6835 3.25235 17.25 4.74008 17.25H15.2613C16.7487 17.25 17.7156 15.6841 17.0495 14.3543L11.7913 3.85724C11.0539 2.38521 8.95311 2.38482 8.21521 3.85659ZM10.75 8C10.75 7.58579 10.4142 7.25 10 7.25C9.58579 7.25 9.25 7.58579 9.25 8V11C9.25 11.4142 9.58579 11.75 10 11.75C10.4142 11.75 10.75 11.4142 10.75 11V8ZM10.75 13.95C10.75 13.5358 10.4142 13.2 10 13.2C9.58579 13.2 9.25 13.5358 9.25 13.95V14C9.25 14.4142 9.58579 14.75 10 14.75C10.4142 14.75 10.75 14.4142 10.75 14V13.95Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
