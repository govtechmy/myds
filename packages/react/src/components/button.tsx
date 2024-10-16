import React, {
  ComponentProps,
  createContext,
  forwardRef,
  ForwardRefExoticComponent,
  cloneElement,
  ReactNode,
  useContext,
  LegacyRef,
} from "react";
import { clx } from "../utils";
import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

/*========================================================================================================================*/

/**
 * Button component that supports various styles and sizes.
 *
 * @example
 * <Button variant="primary-fill" size="medium" onClick={() => alert('Button clicked!')}>
 *   Click Me
 * </Button>
 */
const button_cva = cva(
  [
    "group flex select-none items-center gap-1.5 rounded-md w-fit",
    "font-body font-medium outline-none transition disabled:cursor-not-allowed",
    "text-center active:translate-y-[0.5px]",
  ],
  {
    variants: {
      variant: {
        "default-outline": [
          "bg-bg-white border border-otl-gray-200 text-txt-black-700 shadow-button",
          "hover:bg-bg-white-hover hover:border-otl-gray-300 hover:text-txt-black-900",
          "focus:ring focus:ring-fr-primary",
          "disabled:bg-bg-white-disabled disabled:text-txt-black-disabled disabled:border-transparent",
        ],
        "default-ghost": [
          "bg-transparent border border-transparent text-txt-black-700",
          "hover:bg-bg-white-hover",
          "focus:ring focus:ring-fr-primary",
          "disabled:bg-bg-white-disabled disabled:text-txt-black-disabled disabled:border-transparent",
        ],
        "danger-fill": [
          "bg-danger-600 border border-danger-600 text-white shadow-button",
          "hover:bg-danger-700",
          "focus:ring focus:ring-fr-primary",
          "disabled:bg-bg-danger-disabled disabled:text-white-disabled disabled:border-bg-danger-disabled",
        ],
        "danger-outline": [
          "bg-bg-white border border-otl-danger-200 text-txt-danger shadow-button",
          "hover:bg-bg-danger-50",
          "focus:ring focus:ring-fr-primary",
          "disabled:bg-bg-white-disabled disabled:text-txt-danger-disabled disabled:border-transparent",
        ],
        "danger-ghost": [
          "bg-transparent border border-transparent text-txt-danger",
          "hover:bg-bg-danger-50",
          "focus:ring focus:ring-fr-primary",
          "disabled:bg-bg-white-disabled disabled:text-txt-danger-disabled disabled:border-transparent",
        ],
        "primary-fill": [
          "bg-primary-600 border border-primary-600 text-white shadow-button",
          "hover:bg-primary-700",
          "focus:ring focus:ring-fr-primary",
          "disabled:bg-bg-primary-disabled disabled:text-white-disabled disabled:border-bg-primary-disabled",
        ],
        "primary-outline": [
          "bg-bg-white border border-otl-primary-200 text-txt-primary shadow-button",
          "hover:bg-bg-primary-50",
          "focus:ring focus:ring-fr-primary",
          "disabled:bg-bg-white-disabled disabled:text-txt-primary-disabled disabled:border-transparent",
        ],
        "primary-ghost": [
          "bg-transparent border border-transparent text-txt-primary",
          "hover:bg-bg-primary-50",
          "focus:ring focus:ring-fr-primary",
          "disabled:bg-bg-white-disabled disabled:text-txt-primary-disabled disabled:border-transparent",
        ],
        unset: null,
      },

      size: {
        small: "py-1.5 px-2.5 text-sm",
        medium: "py-2 px-3 text-base",
        large: "py-2.5 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "primary-fill",
      size: "small",
    },
  },
);

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof button_cva> {
  asChild?: boolean;
}

const Button: ForwardRefExoticComponent<ButtonProps> = forwardRef(
  (
    {
      className,
      type = "button",
      variant = "primary-fill",
      size = "small",
      children,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const iconOnly = (size: ButtonProps["size"]) => {
      if (!size) return;
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
    const Comp = asChild ? Slot : "button";

    return (
      <ButtonContext.Provider value={{ variant, size }}>
        <Comp
          ref={ref}
          type={type}
          className={clx(
            iconOnly(size),
            button_cva({ variant, size, className }),
          )}
          {...props}
        >
          {children}
        </Comp>
      </ButtonContext.Provider>
    );
  },
);

/*========================================================================================================================*/

const ButtonContext = createContext<VariantProps<typeof button_cva>>({
  variant: "primary-fill",
  size: "small",
});

/*========================================================================================================================*/

/**
 * ButtonCounter component is a forward-ref exotic component that utilizes the ButtonContext
 * to apply variant and size styles to a span element.
 *
 * @param {ButtonCounterProps} props - The properties for the ButtonCounter component.
 * @param {React.Ref} ref - The ref to be forwarded to the span element.
 * @returns {JSX.Element} The rendered span element with applied styles and children.
 */

const button_counter_cva = cva(
  [
    "flex aspect-square shrink-0 items-center justify-center",
    "rounded-full px-1 leading-none bg-bg-primary-600 text-txt-white",
    "group-disabled:bg-bg-white-disabled group-disabled:text-inherit",
  ],
  {
    variants: {
      variant: {
        "primary-fill": ["bg-white text-primary-600"],
        "danger-fill": ["bg-white text-danger-600"],
        "default-outline": "",
        "default-ghost": "",
        "danger-outline": "",
        "danger-ghost": "",
        "primary-outline": "",
        "primary-ghost": "",
        unset: "",
      },
      size: {
        small: "h-4.5 w-4.5 text-sm",
        medium: "h-5 w-5 text-sm",
        large: "h-6 w-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary-fill",
      size: "small",
    },
  },
);

/*========================================================================================================================*/

interface ButtonCounterProps {
  children: ReactNode;
  ref?: LegacyRef<HTMLSpanElement | null>;
}

const ButtonCounter: ForwardRefExoticComponent<ButtonCounterProps> = forwardRef(
  ({ children }, ref) => {
    const { variant, size } = useContext(ButtonContext);

    return (
      <span ref={ref} className={clx(button_counter_cva({ variant, size }))}>
        {children}
      </span>
    );
  },
);

ButtonCounter.displayName = "ButtonCounter";

/*========================================================================================================================*/

/**
 * `ButtonIcon` forwards a ref to its child and applies a class based on the button size.
 *
 * @component
 * @param {ButtonIconProps} props - The properties for the ButtonIcon component.
 * @param {React.ReactNode} props.children - The child element to which the ref will be forwarded.
 * @param {React.Ref} ref - The ref to be forwarded to the child element.
 * @returns {React.ReactElement} The cloned child element with the forwarded ref and applied class name.
 */

const button_icon_cva = cva(
  "block stroke-inherit text-inherit stroke-[1.5px]",
  {
    variants: {
      size: {
        small: "h-4 w-4",
        medium: "h-5 w-5",
        large: "h-5 w-5",
      },
    },
    defaultVariants: {
      size: "small",
    },
  },
);

interface ButtonIconProps {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const ButtonIcon: ForwardRefExoticComponent<ButtonIconProps> = forwardRef(
  ({ children }, ref) => {
    const { size } = useContext(ButtonContext);

    return cloneElement(children, {
      ref,
      className: clx(button_icon_cva({ size })),
    });
  },
);

ButtonIcon.displayName = "ButtonIcon";

export { Button, ButtonIcon, ButtonCounter, button_cva };
