import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * MiniPhcorp Icon
 * @param className
 * @returns MiniPhcorpIcon
 */
export const MiniPhcorpIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
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
      <g id="agency-icons/mini/phcorp">
        <g id="Vector">
          <path
            d="M16.722 8.86111C16.722 11.5557 15.1686 13.8875 12.9086 15.0099L9.86098 17.0417V12.5556C11.9013 12.5556 13.5554 10.9015 13.5554 8.86111C13.5554 6.82073 11.9013 5.16667 9.86098 5.16667C7.82064 5.16667 6.16661 6.82073 6.16661 8.86111V18.8889L3 21V8.86111C3 5.07182 6.07177 2 9.86098 2C13.6502 2 16.722 5.07182 16.722 8.86111Z"
            fill="#27272A"
          />
          <path
            d="M14.6109 15.1944L4.5833 21H15.1387L15.1382 20.9948C18.9513 20.8564 22 17.7215 22 13.8746C22 10.9139 20.1942 8.37494 17.6239 7.29917C17.7249 7.80399 17.7779 8.32616 17.7779 8.86069C17.7779 11.4509 16.5339 13.7501 14.6109 15.1944Z"
            fill="#27272A"
          />
        </g>
      </g>
    </svg>
  );
};
