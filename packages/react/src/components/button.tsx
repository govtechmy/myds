import React, {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
  MouseEventHandler,
  ReactNode,
} from "react";
import { clx } from "../utils";
/**
 * Props for Button component.
 * @typedef ButtonProps
 * @property {type} propName - Description of propName
 */
interface ButtonProps extends ComponentProps<"button"> {
  className?: string;
  type?: "button" | "reset" | "submit";
  size?: "normal" | "mini";
  variant?: keyof typeof style;
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  children?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}

const style = {
  base: "flex select-none items-center gap-1.5 rounded-md text-start text-sm font-medium outline-none transition disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1.5",
  reset: "",
  default:
    "border border-outline hover:border-outlineHover active:bg-washed bg-white text-black",
  danger:
    "border border-red-600 bg-red-600 hover:bg-red-700 hover:border-red-700 text-white focus:border-red-600 focus:ring focus:ring-offset-0 focus:ring-red-600/20 shadow-button disabled:bg-red-300 disabled:border-red-300 text-white",
  primary:
    "from-brand-600 to-brand-700 shadow-button bg-gradient-to-t text-white hover:to-brand-700",
  ghost: "hover:bg-washed text-dim hover:text-black",
  "ghost-primary": "hover:bg-blue-50 text-primary",
  "ghost-danger":
    "hover:bg-danger/20 disabled:bg-danger/20 disabled:text-danger text-dim hover:text-danger",
};

/**
 * Button component description.
 * @component
 * @example
 * <Button propName="value" />
 */
const Button: ForwardRefExoticComponent<ButtonProps> = forwardRef(
  (
    {
      className,
      icon,
      type = "button",
      variant = "base",
      size = "normal",
      children,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        type={type}
        className={clx(
          variant !== "reset" && style.base,
          style[variant],
          size === "mini" && "h-7",
          className
        )}
        {...props}
      >
        {icon}
        {children}
      </button>
    );
  }
);

export default Button;
