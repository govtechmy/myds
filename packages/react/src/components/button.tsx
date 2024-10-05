import React, {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
  MouseEventHandler,
  ReactNode,
} from "react";
import { clx } from "../utils";

interface ButtonProps extends ComponentProps<"button"> {
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: Exclude<keyof typeof variants, "base">;
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  children?: ReactNode;
  icon?: {
    lead?: ReactNode;
    trail?: ReactNode;
  };
}

/**
 * Button component that supports various styles and sizes.
 *
 * @example
 * <Button variant="primary-fill" size="medium" onClick={() => alert('Button clicked!')}>
 *   Click Me
 * </Button>
 */
const Button: ForwardRefExoticComponent<ButtonProps> = forwardRef(
  (
    {
      className,
      icon,
      type = "button",
      variant = "primary-fill",
      size = "small",
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clx(
          variant !== "reset" && variants.base,
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {icon?.lead}
        {children}
        {icon?.trail}
      </button>
    );
  },
);

const variants = {
  base: "flex select-none items-center gap-1.5 rounded-lg w-fit font-medium outline-none transition disabled:cursor-not-allowed text-center shadow-button",
  reset: "",
  "default-outline": clx(
    "bg-bg-white border border-otl-gray-200 text-txt-black-700",
    "hover:bg-bg-white-hover hover:border-otl-gray-300 hover:text-txt-black-900",
    "ring ring-fr-primary/0 focus:ring-fr-primary",
    "disabled:bg-bg-white-disabled disabled:text-txt-black-disabled disabled:border-transparent",
  ),

  "default-ghost": clx(
    "bg-transparent border border-transparent text-txt-black-700",
    "hover:bg-bg-white-hover",
    "ring ring-fr-primary/0 focus:ring-fr-primary",
    "disabled:bg-bg-white-disabled disabled:text-txt-black-disabled disabled:border-transparent",
  ),

  "danger-fill": clx(
    "bg-danger-600 border border-danger-600 text-white",
    "hover:bg-danger-700",
    "ring ring-fr-primary/0 focus:ring-fr-primary",
    "disabled:bg-bg-danger-disabled disabled:text-white-disabled disabled:border-bg-danger-disabled",
  ),
  "danger-outline": clx(
    "bg-bg-white border border-otl-danger-200 text-txt-danger",
    "hover:bg-bg-danger-50",
    "ring ring-fr-primary/0 focus:ring-fr-primary",
    "disabled:bg-bg-white-disabled disabled:text-txt-danger-disabled disabled:border-transparent",
  ),
  "danger-ghost": clx(
    "bg-transparent border border-transparent text-txt-danger",
    "hover:bg-bg-danger-50",
    "ring ring-fr-primary/0 focus:ring-fr-primary",
    "disabled:bg-bg-white-disabled disabled:text-txt-danger-disabled disabled:border-transparent",
  ),

  "primary-fill": clx(
    "bg-primary-600 border border-primary-600 text-white",
    "hover:bg-primary-700",
    "ring ring-fr-primary/0 focus:ring-fr-primary",
    "disabled:bg-bg-primary-disabled disabled:text-white-disabled disabled:border-bg-primary-disabled",
  ),

  "primary-outline": clx(
    "bg-bg-white border border-otl-primary-200 text-txt-primary",
    "hover:bg-bg-primary-50",
    "ring ring-fr-primary/0 focus:ring-fr-primary",
    "disabled:bg-bg-white-disabled disabled:text-txt-primary-disabled disabled:border-transparent",
  ),

  "primary-ghost": clx(
    "bg-transparent border border-transparent text-txt-primary",
    "hover:bg-bg-primary-50",
    "ring ring-fr-primary/0 focus:ring-fr-primary",
    "disabled:bg-bg-white-disabled disabled:text-txt-primary-disabled disabled:border-transparent",
  ),
};

const sizes: Record<"small" | "medium" | "large", string> = {
  small: "py-1.5 px-2.5 text-sm",
  medium: "py-2 px-3 text-base",
  large: "py-2.5 px-4 text-base",
};

export default Button;
