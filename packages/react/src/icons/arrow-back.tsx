import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
* ArrowBack Icon
* @param className
* @returns ArrowBackIcon
*/
export const ArrowBackIcon: FunctionComponent<SVGProps<SVGSVGElement>> = ({ className }) => {
    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<g id="Icon/arrow-back">
<path id="Vector" d="M8.25 4.75L2.75 10M2.75 10L8.25 15.25M2.75 10H17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>

}