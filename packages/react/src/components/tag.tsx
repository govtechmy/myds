import React, { ComponentProps, forwardRef, FunctionComponent } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { clx } from "../utils";

const tag_cva = cva(
  ["inline-flex gap-[5px] font-medium font-body justify-center items-center"],
  {
    variants: {
      variant: {
        gray: "text-txt-black-500 bg-bg-washed",
        brand: "bg-bg-primary-50 text-txt-primary",
        success: "bg-bg-success-50 text-txt-success",
        danger: "bg-bg-danger-50 text-txt-danger",
        warning: "bg-bg-warning-50 text-txt-warning",
      },
      size: {
        small: "py-0.5 px-2 text-body-xs h-[22px]",
        medium: "py-1 px-2 text-body-sm h-[28px]",
        large: "py-1 px-2.5 text-body-md h-8",
      },
      tagStyle: {
        style1: "rounded-full",
        style2: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "gray",
      size: "small",
      tagStyle: "style1",
    },
  },
);

/**
 * Props for Tag component.
 * @typedef TagProps
 * @property {React.ReactNode} children - The content of the tag (text or HTML elements)
 * @property {boolean} [showStatusDot=false] - Whether to show a status dot
 * @property {"gray" | "brand" | "success" | "danger" | "warning"} variant - The visual style variant of the tag
 * @property {"small" | "medium" | "large"} size - The size of the tag
 * @property {"style1" | "style2"} tagStyle - The style of the tag (rounded or not)
 */
interface TagProps extends ComponentProps<"div">, VariantProps<typeof tag_cva> {
  showStatusDot?: boolean;
  variant: "gray" | "brand" | "success" | "danger" | "warning";
  size: "small" | "medium" | "large";
  tagStyle: "style1" | "style2";
}

const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      children,
      variant,
      size,
      tagStyle,
      showStatusDot = false,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clx(tag_cva({ variant, size, tagStyle }), className)}
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

export { Tag };
