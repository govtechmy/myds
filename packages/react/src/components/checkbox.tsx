"use client";
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "../icons/check";
import { MinusIcon } from "../icons/minus";
import { clx } from "../utils";
import { cva, type VariantProps } from "class-variance-authority";

const checkboxVariants = cva(
  [
    "peer rounded-sm outline-none flex items-center justify-center",
    "border data-[state!=checked]:border-otl-gray-200 text-txt-black-900 hover:border-gray-300 shadow-button",
    "data-[state=checked]:bg-primary-600 data-[state=checked]:border-none data-[state=checked]:hover:border-primary-700 data-[state=checked]:hover:bg-primary-700",
    "focus-visible:ring-[3px] focus-visible:ring-fr-primary",
    "focus:ring-[3px] focus:ring-fr-primary",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-bg-washed data-[state=checked]:disabled:bg-primary-600",
  ],
  {
    variants: {
      size: {
        small: "size-4",
        medium: "size-5",
      },
    },
    defaultVariants: {
      size: "small",
    },
  },
);

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  indeterminate?: boolean;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size, indeterminate, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={clx(checkboxVariants({ size, className }))}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={clx(
        "flex items-center justify-center text-white",
        size === "medium" ? "size-4" : "size-3",
      )}
    >
      {indeterminate ? (
        <MinusIcon
          className={clx(
            size === "medium" ? "stroke-[2.0px]" : "stroke-[1.5px]",
          )}
        />
      ) : (
        <CheckIcon
          className={clx(
            size === "medium" ? "stroke-[2.0px]" : "stroke-[1.5px]",
          )}
        />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, checkboxVariants };
