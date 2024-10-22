"use client";
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "../icons/check";
import { MinusIcon } from "../icons/minus";
import { clx } from "../utils";
import { cva, type VariantProps } from "class-variance-authority";

const checkboxVariants = cva(
  [
    "rounded-sm outline-none flex items-center justify-center",
    "border border-otl-gray-200 hover:border-otl-gray-300 shadow-button",
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
  description?: string;
}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size, description, ...props }, ref) => {
  const ariaProps = description ? { "aria-description": description } : {};

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={clx(checkboxVariants({ size, className }))}
      {...ariaProps}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={clx(
          "flex items-center justify-center text-white",
          size === "medium" ? "size-4" : "size-3",
          "[&_.minus-icon]:hidden",
          "[&_.checked-icon]:hidden",
          "[&[data-state=checked]_.checked-icon]:inline-block",
          "[&[data-state=indeterminate]_.minus-icon]:inline-block",
        )}
      >
        <MinusIcon
          className={clx(
            size === "medium" ? "stroke-[2.0px]" : "stroke-[1.5px]",
            "minus-icon",
          )}
        />
        <CheckIcon
          className={clx(
            size === "medium" ? "stroke-[2.0px]" : "stroke-[1.5px]",
            "checked-icon",
          )}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = "Checkbox";
