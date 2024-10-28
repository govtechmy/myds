import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "../icons/check";
import { MinusIcon } from "../icons/minus";
import { clx } from "../utils";
import { cva, type VariantProps } from "class-variance-authority";

const checkbox_cva = cva(
  [
    "rounded-sm outline-none flex items-center justify-center",
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
        small: "size-4",
        medium: "size-5",
        large: "size-5",
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
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkbox_cva> {
  description?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size, description, ...props }, ref) => {
  const ariaProps = description ? { "aria-description": description } : {};

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={clx(checkbox_cva({ size, className }))}
      {...ariaProps}
      {...props}
    >
      <CheckboxPrimitive.Indicator className={checkbox_icon_cva({ size })}>
        <MinusIcon className="minus-icon" />
        <CheckIcon className="checked-icon" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };
