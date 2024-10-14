import React, { FC } from "react";
import { clx } from "../utils";

const ChevronRight: FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#18181B"
      {...props}
    >
      <g id="Icon/chevron-right">
        <path
          id="Vector 146"
          d="M8 5L13 10L8 15"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default ChevronRight;
