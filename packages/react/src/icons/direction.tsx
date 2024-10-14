import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
* Direction Icon
* @param className
* @returns DirectionIcon
*/
export const DirectionIcon: FunctionComponent<SVGProps<SVGSVGElement>> = ({ className }) => {
    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<g id="Icon/direction">
<path id="Vector" d="M15 3L3 11.4H9.46154L12.2308 17L15 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
</g>
</svg>

}