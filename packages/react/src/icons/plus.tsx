import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
* Plus Icon
* @param className
* @returns PlusIcon
*/
export const PlusIcon: FunctionComponent<SVGProps<SVGSVGElement>> = ({ className }) => {
    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<g id="Icon/plus">
<path id="Vector" d="M10 4V16M16 10H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>

}