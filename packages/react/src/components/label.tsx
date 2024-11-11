import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps, ForwardRefExoticComponent } from "react";

const label_cva = cva(
  [
    "inline-flex gap-1 text-txt-black-700",
    "group-disabled:text-txt-black-disabled group-disabled:cursor-not-allowed group-disabled:shadow-none",
    "peer-disabled:text-txt-black-disabled peer-disabled:cursor-not-allowed peer-disabled:shadow-none",
  ],
  {
    variants: {
      size: {
        small: "text-body-sm",
        medium: "text-body-md",
        large: "text-body-lg",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

interface LabelProps
  extends ComponentProps<"label">,
    VariantProps<typeof label_cva> {
  asChild?: boolean;
}

const Label: ForwardRefExoticComponent<LabelProps> = React.forwardRef(
  ({ asChild, size, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "label";
    return (
      <Comp className={label_cva({ size, className })} ref={ref} {...props} />
    );
  },
);
Label.displayName = "Label";

export { Label };
