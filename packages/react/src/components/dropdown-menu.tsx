import React, { FunctionComponent } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

/**
 * Props for DropdownMenu component.
 * @typedef DropdownMenuProps
 * @property {type} propName - Description of propName
 */
interface DropdownMenuProps {
  // Define your props here
}

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export { DropdownMenu, DropdownMenuTrigger };