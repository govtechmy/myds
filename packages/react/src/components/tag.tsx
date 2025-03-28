import React, {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";
import { cva, VariantProps } from "class-variance-authority";
import { clx } from "../utils";

const tag_cva = cva(
  [
    "inline-flex gap-[5px] font-medium font-body justify-center items-center",
    "flex-shrink-0 whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        default: "text-txt-black-500 bg-bg-washed border-gray-600/20 border",
        primary:
          "bg-bg-primary-50 text-txt-primary border-primary-600/20 border",
        success:
          "bg-bg-success-50 text-txt-success border-success-700/20 border",
        danger: "bg-bg-danger-50 text-txt-danger border-danger-600/20 border",
        warning:
          "bg-bg-warning-50 text-txt-warning border-warning-700/20 border",
      },
      size: {
        small: "py-0.5 px-2 text-body-xs h-[22px]",
        medium: "py-1 px-2 text-body-sm h-[28px]",
        large: "py-1 px-2.5 text-body-md h-8",
      },
      mode: {
        pill: "rounded-full",
        default: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "small",
      mode: "pill",
    },
  },
);

const dot_cva = cva(["inline-block rounded-full text-inherit bg-current"], {
  variants: {
    size: {
      small: "size-1.5",
      medium: "size-2",
      large: "size-2.5",
    },
  },
});

/**
 * Props for Tag component.
 * @typedef TagProps
 * @property {React.ReactNode} children - The content of the tag (text or HTML elements)
 * @property {boolean} [dot=false] - Whether to show a status dot
 * @property {"default" | "primary" | "success" | "danger" | "warning"} variant - The visual style variant of the tag
 * @property {"small" | "medium" | "large" } size - The size of the tag
 * @property {"pill" | "default"} mode - The style of the tag (rounded or not)
 */
interface TagProps extends ComponentProps<"div">, VariantProps<typeof tag_cva> {
  dot?: boolean;
  variant?: "default" | "primary" | "success" | "danger" | "warning";
  size?: "small" | "medium" | "large";
  mode?: "pill" | "default";
}

const Tag: ForwardRefExoticComponent<TagProps & RefAttributes<HTMLDivElement>> =
  forwardRef(
    (
      {
        children,
        variant = "default",
        size = "medium",
        mode = "default",
        dot = false,
        className,
        ...props
      },
      ref,
    ) => {
      return (
        <div
          ref={ref}
          className={clx(tag_cva({ variant, size, mode }), className)}
          {...props}
        >
          {dot && <span className={clx(dot_cva({ size }))} />}
          {children}
        </div>
      );
    },
  );

Tag.displayName = "Tag";

export { Tag };
