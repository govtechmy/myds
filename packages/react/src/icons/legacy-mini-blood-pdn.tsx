import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * MiniBloodPDN Icon
 * @param className
 * @returns MiniBloodPDNIcon
 */
export const MiniBloodPDNIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
  props,
) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="agency-icons/mini/blood-pdn">
        <path
          id="Subtract"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.1778 3.1875L6.42085 10.0586C4.46814 12.8792 4.92778 16.7135 7.49182 18.9927C10.0628 21.278 13.9371 21.278 16.5081 18.9927C19.0721 16.7135 19.5318 12.8792 17.579 10.0586L12.8221 3.1875C12.4245 2.61312 11.5754 2.61312 11.1778 3.1875ZM8.1679 10.4453C8.47425 9.98577 9.09512 9.8616 9.55465 10.1679C10.0142 10.4743 10.1384 11.0952 9.832 11.5547L9.66405 11.8066C9.23102 12.4562 8.99995 13.2193 8.99995 14C8.99995 14.5523 8.55223 15 7.99995 15C7.44766 15 6.99995 14.5523 6.99995 14C6.99995 12.8245 7.3479 11.6753 7.99995 10.6972L8.1679 10.4453Z"
          fill="#27272A"
        />
      </g>
    </svg>
  );
};
