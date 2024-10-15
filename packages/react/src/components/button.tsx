import React, {
  ComponentProps,
  createContext,
  forwardRef,
  ForwardRefExoticComponent,
  MouseEventHandler,
  cloneElement,
  ReactNode,
  useContext,
  LegacyRef,
} from "react";
import { clx } from "../utils";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = Exclude<keyof typeof variants, "base">;

export const variants = {
  base: "group flex select-none items-center gap-1.5 rounded-lg w-fit font-body font-medium outline-none transition disabled:cursor-not-allowed text-center active:translate-y-[0.5px]",
  reset: "active:translate-y-[0.5px]",
  "default-outline": clx(
    "bg-bg-white border border-otl-gray-200 text-txt-black-700 shadow-button",
    "hover:bg-bg-white-hover hover:border-otl-gray-300 hover:text-txt-black-900",
    "focus:ring ring-fr-primary/0 focus:ring-fr-primary",
    "disabled:bg-bg-white-disabled disabled:text-txt-black-disabled disabled:border-transparent",
  ),

  "default-ghost": clx(
    "bg-transparent border border-transparent text-txt-black-700",
    "hover:bg-bg-white-hover",
    "focus:ring ring-fr-primary/0 focus:ring-fr-primary",
    "disabled:bg-bg-white-disabled disabled:text-txt-black-disabled disabled:border-transparent",
  ),

  "danger-fill": clx(
    "bg-danger-600 border border-danger-600 text-white shadow-button",
    "hover:bg-danger-700",
    "focus:ring ring-fr-primary/0 focus:ring-fr-primary",
    "disabled:bg-bg-danger-disabled disabled:text-white-disabled disabled:border-bg-danger-disabled",
  ),
  "danger-outline": clx(
    "bg-bg-white border border-otl-danger-200 text-txt-danger shadow-button",
    "hover:bg-bg-danger-50",
    "focus:ring ring-fr-primary/0 focus:ring-fr-primary",
    "disabled:bg-bg-white-disabled disabled:text-txt-danger-disabled disabled:border-transparent",
  ),
  "danger-ghost": clx(
    "bg-transparent border border-transparent text-txt-danger",
    "hover:bg-bg-danger-50",
    "focus:ring ring-fr-primary/0 focus:ring-fr-primary",
    "disabled:bg-bg-white-disabled disabled:text-txt-danger-disabled disabled:border-transparent",
  ),

  "primary-fill": clx(
    "bg-primary-600 border border-primary-600 text-white shadow-button",
    "hover:bg-primary-700",
    "focus:ring ring-fr-primary/0 focus:ring-fr-primary",
    "disabled:bg-bg-primary-disabled disabled:text-white-disabled disabled:border-bg-primary-disabled",
  ),

  "primary-outline": clx(
    "bg-bg-white border border-otl-primary-200 text-txt-primary shadow-button",
    "hover:bg-bg-primary-50",
    "focus:ring ring-fr-primary/0 focus:ring-fr-primary",
    "disabled:bg-bg-white-disabled disabled:text-txt-primary-disabled disabled:border-transparent",
  ),

  "primary-ghost": clx(
    "bg-transparent border border-transparent text-txt-primary",
    "hover:bg-bg-primary-50",
    "focus:ring ring-fr-primary/0 focus:ring-fr-primary",
    "disabled:bg-bg-white-disabled disabled:text-txt-primary-disabled disabled:border-transparent rounded-sm",
  ),
};

export const sizes: Record<"small" | "medium" | "large", string> = {
  small: "py-1.5 px-2.5 text-sm rounded-sm",
  medium: "py-2 px-3 text-base rounded-md",
  large: "py-2.5 px-4 text-base rounded-md",
};

interface ButtonProps extends ComponentProps<"button"> {
  className?: string;
  size?: ButtonSize;
  variant?: Exclude<ButtonVariant, "base">;
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  children?: ReactNode;
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
      type = "button",
      variant = "primary-fill",
      size = "small",
      children,
      ...props
    },
    ref,
  ) => {
    const iconOnly = (size: ButtonSize) => {
      if (Array.isArray(children)) return;
      if (!React.isValidElement(children)) return;

      // @ts-expect-error
      if (children.type.displayName !== ButtonIcon.displayName) return;
      return clx(
        "aspect-square rounded-lg",
        {
          small: "p-2",
          medium: "p-2.5",
          large: "p-3",
        }[size],
      );
    };

    return (
      <ButtonContext.Provider value={{ variant, size }}>
        <button
          ref={ref}
          type={type}
          className={clx(
            variant !== "reset" && variants.base,
            variants[variant],
            sizes[size],
            iconOnly(size),
            className,
          )}
          {...props}
        >
          {children}
        </button>
      </ButtonContext.Provider>
    );
  },
);

type ButtonContextProps = {
  variant: ButtonVariant;
  size: ButtonSize;
};

const ButtonContext = createContext<ButtonContextProps>({
  variant: "primary-fill",
  size: "small",
});

interface ButtonCounterProps {
  children: ReactNode;
  ref?: LegacyRef<HTMLSpanElement | null>;
}

const ButtonCounter: ForwardRefExoticComponent<ButtonCounterProps> = forwardRef(
  ({ children }, ref) => {
    const { variant, size } = useContext(ButtonContext);
    const default_style =
      "bg-bg-primary-600 text-txt-white group-disabled:bg-bg-white-disabled group-disabled:text-inherit";
    const variants = {
      reset: "",
      "primary-fill":
        "bg-white text-primary-600 group-disabled:bg-bg-white-disabled group-disabled:text-inherit",
      "primary-outline": default_style,
      "primary-ghost": default_style,
      "default-outline": default_style,
      "default-ghost": default_style,
      "danger-fill":
        "bg-white text-danger-600 group-disabled:bg-bg-white-disabled group-disabled:text-inherit",
      "danger-outline": default_style,
      "danger-ghost": default_style,
    };
    const sizes = {
      small: "h-4.5 w-4.5 text-sm",
      medium: "h-5 w-5 text-sm",
      large: "h-6 w-6 text-base",
    };
    return (
      <span
        ref={ref}
        className={clx(
          "flex aspect-square shrink-0 items-center justify-center rounded-full px-1 leading-none",
          variants[variant],
          sizes[size],
        )}
      >
        {children}
      </span>
    );
  },
);

ButtonCounter.displayName = "ButtonCounter";

interface ButtonIconProps {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const ButtonIcon: ForwardRefExoticComponent<ButtonIconProps> = forwardRef(
  ({ children }, ref) => {
    const { size } = useContext(ButtonContext);

    const sizes = {
      small: "h-4 w-4",
      medium: "h-5 w-5",
      large: "h-5 w-5",
    };

    return cloneElement(children, {
      ref,
      className: clx(
        "block stroke-inherit text-inherit stroke-[1.5px]",
        sizes[size],
      ),
    });
  },
);

ButtonIcon.displayName = "ButtonIcon";

export { Button, ButtonIcon, ButtonCounter };
