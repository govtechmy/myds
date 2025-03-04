import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * DOCXMedia Icon
 * @param className
 * @returns DOCXMediaIcon
 */
export const DOCXMediaIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/file/DOCX">
        <path
          id="Rectangle 212"
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
            fill="#2563EB"
          />
          <path
            d="M29.1667 12.5833V0L43.7501 14.5833H31.1667C30.0622 14.5833 29.1667 13.6879 29.1667 12.5833Z"
            fill="url(#paint0_linear_2648_6591)"
            fillOpacity="0.3"
            style={{ mixBlendMode: "hard-light" }}
          />
        </g>
        <path
          id="Vector"
          d="M14.5833 23.9584H35.4166M14.5833 32.2917H35.4166M14.5833 40.625H35.4166"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2648_6591"
          x1="36.5"
          y1="7"
          x2="32.5"
          y2="11"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
