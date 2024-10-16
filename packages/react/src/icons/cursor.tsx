import React from "react";
import { FunctionComponent, SVGProps } from "react";

/**
* Cursor Icon
* @param className
* @returns CursorIcon
*/
export const CursorIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g id="Icon/cursor">
<path id="Vector" d="M11.25 11.25L9.25 16.5L4 4L16.5 9.25L11.25 11.25ZM11.25 11.25L15.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>

}