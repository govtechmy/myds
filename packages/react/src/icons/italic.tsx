import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * Italic Icon
 * @param className
 * @returns ItalicIcon
 */
export const ItalicIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="WYSIWYG Icon">
        <path
          id="Vector"
          d="M3.79419 16.825V15.1173H7.61144L10.9519 4.8828H7.03469V3.17505H16.3884V4.8828H12.6787L9.33844 15.1173H13.1479V16.825H3.79419Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
