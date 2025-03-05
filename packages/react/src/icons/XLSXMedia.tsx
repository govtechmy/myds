import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * XLSXMedia Icon
 * @param className
 * @returns XLSXMediaIcon
 */
export const XLSXMediaIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
  props,
) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Icon/file/XLSX">
        <path
          id="Rectangle 211"
          d="M6.25 3.125C6.25 1.39911 7.64911 0 9.375 0H29.1667L43.75 14.5833V46.875C43.75 48.6009 42.3509 50 40.625 50H9.375C7.64911 50 6.25 48.6009 6.25 46.875V3.125Z"
          fill="white"
        />
        <path
          id="Rectangle 213"
          d="M43 14.894V46C43 47.7949 41.5449 49.25 39.75 49.25H10.25C8.45512 49.25 7.00004 47.7949 7.00004 46L7 4C7 2.20508 8.45508 0.75 10.25 0.75H28.856L43 14.894Z"
          fill="white"
          stroke="#E4E4E7"
          strokeWidth="1.5"
        />
        <path
          id="Vector 158"
          d="M43.7499 22.9167L30.2083 13.5417L41.6666 12.5L43.7499 14.5833V22.9167Z"
          fill="#E4E4E7"
        />
        <g id="Vector 157">
          <path
            d="M29.1667 12.5833V0L43.7501 14.5833H31.1667C30.0622 14.5833 29.1667 13.6879 29.1667 12.5833Z"
            fill="#16A34A"
          />
          <path
            d="M29.1667 12.5833V0L43.7501 14.5833H31.1667C30.0622 14.5833 29.1667 13.6879 29.1667 12.5833Z"
            fill="url(#paint0_linear_2648_7283)"
            fillOpacity="0.3"
            style={{ mixBlendMode: "hard-light" }}
          />
        </g>
        <path
          id="Vector"
          d="M12.5 29.1666H37.5M12.5 29.1666V35.4166M12.5 29.1666V24.4791C12.5 23.6162 13.1996 22.9166 14.0625 22.9166H25M37.5 29.1666V24.4791C37.5 23.6162 36.8004 22.9166 35.9375 22.9166H25M37.5 29.1666V35.4166M12.5 35.4166H25M12.5 35.4166V40.1041C12.5 40.9671 13.1996 41.6666 14.0625 41.6666H25M37.5 35.4166H25M37.5 35.4166V40.1041C37.5 40.9671 36.8004 41.6666 35.9375 41.6666H25M25 22.9166V35.4166M25 35.4166V41.6666"
          stroke="#16A34A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2648_7283"
          x1="36.5"
          y1="7"
          x2="32.5"
          y2="11"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
