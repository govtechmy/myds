import {
  Checkbox as CheckboxRoot,
  CheckboxIndicator,
} from "@radix-ui/react-checkbox";
import { CheckIcon } from "../icons/check";
import { MinusIcon } from "../icons/minus";
import { clx } from "../utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, ForwardRefExoticComponent } from "react";

const checkbox_cva = cva(
  [
    "outline-none flex items-center justify-center",
    "border border-otl-gray-200 hover:border-otl-gray-300 shadow-button bg-bg-white",
    "data-[state=checked]:bg-primary-600 data-[state=checked]:border-none data-[state=checked]:hover:border-primary-700 data-[state=checked]:hover:bg-primary-700",
    "data-[state=indeterminate]:bg-primary-600 data-[state=indeterminate]:border-none data-[state=indeterminate]:hover:border-primary-700 data-[state=indeterminate]:hover:bg-primary-700",
    "focus-visible:ring-[3px] focus-visible:ring-fr-primary",
    "focus:ring-[3px] focus:ring-fr-primary",
    "disabled:opacity-30 disabled:cursor-not-allowed disabled:bg-bg-washed data-[state=checked]:disabled:bg-primary-600",
  ],
  {
    variants: {
      size: {
        small: "size-4 rounded-xs",
        medium: "size-5 rounded-[5px]",
        large: "size-5 rounded-[5px]",
      },
    },
    defaultVariants: {
      size: "small",
    },
  },
);

const checkbox_icon_cva = cva(
  [
    "flex items-center justify-center text-white",
    "[&_.minus-icon]:hidden",
    "[&_.checked-icon]:hidden",
    "[&[data-state=checked]_.checked-icon]:inline-block",
    "[&[data-state=indeterminate]_.minus-icon]:inline-block",
  ],
  {
    variants: {
      size: {
        small: "size-3 stroke-[1.5px]",
        medium: "size-4 stroke-[2px]",
        large: "size-4 stroke-[2px]",
      },
    },
    defaultVariants: {
      size: "small",
    },
  },
);

interface CheckboxProps
  extends ComponentProps<typeof CheckboxRoot>,
    VariantProps<typeof checkbox_cva> {}

const Checkbox: ForwardRefExoticComponent<CheckboxProps> = forwardRef(
  ({ className, size, ...props }, ref) => {
    return (
      <CheckboxRoot
        ref={ref}
        className={clx(checkbox_cva({ size }), className)}
        role="checkbox"
        {...props}
      >
        <CheckboxIndicator className={checkbox_icon_cva({ size })}>
          <MinusIcon className="minus-icon" />
          <CheckIcon className="checked-icon" />
        </CheckboxIndicator>
      </CheckboxRoot>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
