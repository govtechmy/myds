import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
* Filter Icon
* @param className
* @returns FilterIcon
*/
export const FilterIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g id="Icon/filter">
<path id="Vector" d="M3 6H17M5 10H15M7 14H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
</g>
</svg>

}