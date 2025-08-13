import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * MiniAmbulanceMERS Icon
 * @param className
 * @returns MiniAmbulanceMERSIcon
 */
export const MiniAmbulanceMERSIcon: FunctionComponent<
  SVGProps<SVGSVGElement>
> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="agency-icons/mini/ambulance-mers">
        <g id="Group 35">
          <path
            id="Subtract"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM10.2 10.2V5.7H13.8V10.2H18.3V13.8H13.8V18.3H10.2V13.8H5.7L5.7 10.2H10.2Z"
            fill="#27272A"
          />
        </g>
      </g>
    </svg>
  );
};
