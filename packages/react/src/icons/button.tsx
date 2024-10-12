import { FunctionComponent, SVGProps } from "react";

/**
* Button Icon
* @param className
* @returns ButtonIcon
*/
export const ButtonIcon: FunctionComponent<SVGProps<SVGSVGElement>> = ({ className }) => {
    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<g id="Icon/button">
<path id="Vector" d="M6 9H14M10 13H5C3.34315 13 2 11.6569 2 10V8C2 6.34315 3.34315 5 5 5H15C16.6569 5 18 6.34315 18 8V10C18 10.1704 17.9858 10.3374 17.9585 10.5M15.48 14.48L14.1387 17.3813L12 11L18.3813 13.1387L15.48 14.48ZM15.48 14.48L17.52 16.52" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>

}