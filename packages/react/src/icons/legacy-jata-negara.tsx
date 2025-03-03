import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
 * LegacyJataNegara Icon
 * @param className
 * @returns LegacyJataNegaraIcon
 */
export const LegacyJataNegaraIcon: FunctionComponent<
  SVGProps<SVGSVGElement>
> = (props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="agency-icon/jata-negara">
        <g id="Brand/Jata Negara" clipPath="url(#clip0_14237_1211)">
          <rect
            id="Jata Negara"
            x="0.738525"
            y="3.99231"
            width="30.5782"
            height="23.6308"
            fill="url(#pattern0_14237_1211)"
          />
        </g>
      </g>
      <defs>
        <pattern
          id="pattern0_14237_1211"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.0015456 0.002)" />
        </pattern>
        <clipPath id="clip0_14237_1211">
          <rect
            width="32"
            height="24.6154"
            fill="white"
            transform="translate(0 3.5)"
          />
        </clipPath>
        <image
          id="image0_14237_1211"
          data-name="Jata Negara.png"
          width="647"
          height="500"
          preserveAspectRatio="none"
        />
      </defs>
    </svg>
  );
};
