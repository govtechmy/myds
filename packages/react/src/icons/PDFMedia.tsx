import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * PDFMedia Icon
 * @param className
 * @returns PDFMediaIcon
 */
export const PDFMediaIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="Icon/file/PDF">
        <path
          id="Rectangle 212"
          d="M43 14.894V46C43 47.7949 41.5449 49.25 39.75 49.25H10.25C8.45512 49.25 7.00004 47.7949 7.00004 46L7 4C7 2.20508 8.45508 0.75 10.25 0.75H28.856L43 14.894Z"
          fill="white"
          stroke="#E4E4E7"
          strokeWidth="1.5"
        />
        <path
          id="Vector 159"
          d="M23.2154 24.664L23.6492 19.4769C23.7384 18.4117 22.7963 17.5498 21.7432 17.7331C20.6245 17.9278 20.041 19.1765 20.6095 20.1595L23.1263 24.5116C23.1558 24.5625 23.1855 24.6133 23.2154 24.664ZM23.2154 24.664L23.0331 26.8427C22.8381 29.1735 22.3457 31.4698 21.5677 33.6756L21.3912 34.1759M23.2154 24.664C24.6048 27.0172 26.4673 29.041 28.6722 30.6148M21.3912 34.1759L19.6297 39.1703C19.2519 40.2413 17.878 40.5384 17.0916 39.7191C16.471 39.0726 16.539 38.0329 17.2386 37.4728L20.5957 34.7849C20.8568 34.5759 21.122 34.3728 21.3912 34.1759ZM21.3912 34.1759C23.5918 32.5658 26.0576 31.3613 28.6722 30.6148M28.6722 30.6148C29.6023 31.2786 30.5932 31.8623 31.6352 32.357L32.9722 32.9917C34.009 33.4839 35.217 32.7821 35.3031 31.6376C35.3923 30.4511 34.3411 29.4974 33.1688 29.7014L31.0481 30.0705C30.245 30.2102 29.452 30.3921 28.6722 30.6148Z"
          stroke="#DC2626"
          strokeWidth="2"
        />
        <path
          id="Vector 158"
          d="M43.7499 22.9167L30.2083 13.5417L41.6666 12.5L43.7499 14.5833V22.9167Z"
          fill="#E4E4E7"
        />
        <g id="Vector 157">
          <path
            d="M29.1667 12.5833V0L43.7501 14.5833H31.1667C30.0622 14.5833 29.1667 13.6879 29.1667 12.5833Z"
            fill="#DC2626"
          />
          <path
            d="M29.1667 12.5833V0L43.7501 14.5833H31.1667C30.0622 14.5833 29.1667 13.6879 29.1667 12.5833Z"
            fill="url(#paint0_linear_2648_6503)"
            fillOpacity="0.3"
            style={{ mixBlendMode: "hard-light" }}
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2648_6503"
          x1="36.5"
          y1="7"
          x2="32.5"
          y2="11"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
