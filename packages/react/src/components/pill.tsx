import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps, ForwardRefExoticComponent } from "react";
import { CrossIcon } from "../icons/cross";
import { Button, ButtonIcon } from "./button";

const pill_cva = cva(
  "rounded-sm border font-medium text-txt-black-700 shadow-button inline-flex justify-between items-center",
  {
    variants: {
      size: {
        small: "px-[6px] py-[2px] text-body-xs gap-[2px]",
        medium: "px-[8px] py-[4px] text-body-sm gap-[4px]",
        large: "px-[10px] py-[4px] text-body-md gap-[4px]",
      },
      disabled: {
        false: "border-otl-gray-300 bg-bg-dialog",
        true: "border-otl-gray-200 bg-bg-white-disabled text-txt-black-disabled",
      },
    },
    defaultVariants: {
      size: "medium",
      disabled: false,
    },
  },
);

interface PillProps
  extends ComponentProps<"div">,
    VariantProps<typeof pill_cva> {
  asChild?: boolean;
  disabled?: boolean;
  onDelete?: ComponentProps<typeof Button>["onClick"];
}

export const Pill: ForwardRefExoticComponent<PillProps> = React.forwardRef(
  (
    { asChild, children, disabled, size, className, onDelete, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={pill_cva({ size, disabled, className })}
        ref={ref}
        {...props}
      >
        <Slottable>{children}</Slottable>
        {onDelete && !disabled && (
          <Button
            variant="default-ghost"
            size="small"
            className="p-0"
            onClick={onDelete}
          >
            <ButtonIcon>
              <CrossIcon className="text-txt-black-500 size-4" />
            </ButtonIcon>
          </Button>
        )}
      </Comp>
    );
  },
);
Pill.displayName = "Pill";
