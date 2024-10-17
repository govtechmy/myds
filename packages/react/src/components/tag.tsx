import React, { forwardRef, FunctionComponent } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { clx } from "../utils";

/**
 * Props for Tag component.
 * @typedef TagProps
 * @property {type} propName - Description of propName
 */

const tag_cva = cva(["flex gap-[5px] font-medium font-body h-6"], {
  variants: {
    variant: {
      gray: "text-txt-black-500 bg-bg-washed",
      brand: "bg-bg-primary-50 text-txt-primary",
      success: "bg-bg-success-50 text-txt-success",
      danger: "bg-bg-danger-50 text-txt-danger",
      warning: "bg-bg-warning-50 text-txt-warning",
      unset: null,
    },
    size: {
      small: "py-0.5 px-0.5 body-xs",
      medium: "py-1 px-2 body-sm",
      large: "py-1 px-2.5 body-md",
    },
    style: {
      style1: "rounded-full",
      style2: "rounded-md",
    },
  },
  defaultVariants: {
    variant: "gray",
    size: "small",
    style: "style1",
  },
});

interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tag_cva> {
  showStatusDot?: boolean;
  variant: "gray" | "brand" | "succes" | "danger" | "warning" | "unset";
  size: "small" | "medium" | "large";
}

const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    { children, variant, size, style, showStatusDot, className, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clx(tag_cva({ variant, size, style }), className)}
        {...props}
      >
        {showStatusDot && (
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
        )}
        {children}
      </div>
    );
  },
);

Tag.displayName = "Tag";

export default Tag;
