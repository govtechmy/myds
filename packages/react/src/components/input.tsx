import {
  Children,
  ComponentProps,
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  ReactNode,
  createContext,
  forwardRef,
  isValidElement,
  useContext,
  useMemo,
} from "react";
import { cva, VariantProps } from "class-variance-authority";
import { clx } from "../utils";
import { Slot } from "@radix-ui/react-slot";

type InputContextProps = {
  size: "small" | "medium" | "large" | null;
};

const InputContext = createContext<InputContextProps>({
  size: "medium",
});

interface InputProps
  extends Omit<ComponentProps<"input">, "size">,
    VariantProps<typeof input_cva> {
  prepend?: ReactNode;
  append?: ReactNode;
  children?: ReactNode;
}

const input_cva = cva(
  [
    "bg-bg-white border border-transparent outline-none box-border rounded-md",
    "placeholder:text-txt-black-500 text-txt-black-700 transition-colors",
    "focus:ring focus:ring-fr-primary focus:border-otl-primary-300",
    "disabled:bg-bg-washed disabled:cursor-not-allowed disabled:text-txt-black-disabled",
    "data-[has-prepend=true]:rounded-l-none data-[has-append=true]:rounded-r-none",
    "data-[has-left-icon=true]:pl-10 data-[has-right-icon=true]:pr-10",
  ],
  {
    variants: {
      size: {
        small: "py-1.5 px-3 text-body-sm",
        medium: "py-2 px-3 text-body-md",
        large: "py-2.5 px-3.5 text-body-lg",
      },
    },
  },
);

const Input: ForwardRefExoticComponent<InputProps> = forwardRef(
  (
    { className, prepend, append, children, size = "medium", ...props },
    ref,
  ) => {
    const has_icon = useMemo(() => {
      if (!children) return { left: false, right: false };
      const _children = Children.toArray(children);
      return {
        left: _children.some(
          (child) =>
            isValidElement<ComponentPropsWithRef<typeof InputIcon>>(child) &&
            /* @ts-expect-error */
            child.type.displayName == InputIcon.displayName &&
            child.props.position === "left",
        ),
        right: _children.some(
          (child) =>
            isValidElement<ComponentPropsWithRef<typeof InputIcon>>(child) &&
            /* @ts-expect-error */
            child.type.displayName === InputIcon.displayName &&
            child.props.position === "right",
        ),
      };
    }, [children]);

    return (
      <div
        className={clx(
          "border-otl-gray-200 relative rounded-md border outline-none",
          className,
        )}
      >
        {/* TODO: check if aria-describedBy is required or not */}
        <div className="flex flex-row">
          <InputContext.Provider value={{ size }}>
            {prepend}
            <div className="relative">
              <input
                ref={ref}
                className={input_cva({
                  size,
                  className,
                })}
                data-has-prepend={!!prepend}
                data-has-append={!!append}
                data-has-left-icon={has_icon.left}
                data-has-right-icon={has_icon.right}
                {...props}
              />
              {children}
            </div>
            {append}
          </InputContext.Provider>
        </div>
      </div>
    );
  },
);
Input.displayName = "Input";

/*========================================================================================================================*/

const input_addon_cva = cva(
  [
    "flex items-center",
    "border border-transparent outline-none box-border ",
    "[&:not(:last-child)]:border-r-otl-gray-200 [&:not(:first-child)]:border-l-otl-gray-200",
  ],
  {
    variants: {
      size: {
        small: "py-1.5 px-3 text-body-sm",
        medium: "py-2 px-3 text-body-md",
        large: "py-2.5 px-3.5 text-body-md",
      },
    },
  },
);

interface InputAddonProps extends ComponentProps<"div"> {
  asChild?: boolean;
}

const InputAddon: ForwardRefExoticComponent<InputAddonProps> = forwardRef(
  ({ className, asChild = false, ...props }, ref) => {
    const { size } = useContext(InputContext);
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        className={input_addon_cva({ size, className })}
        {...props}
      />
    );
  },
);

InputAddon.displayName = "InputAddon";

/*========================================================================================================================*/

const input_icon_cva = cva(["absolute top-0 bottom-0 my-auto"], {
  variants: {
    size: {
      small: "size-4.5",
      medium: "size-5",
      large: "size-6",
    },
    position: {
      left: "left-3",
      right: "right-3",
    },
  },
  defaultVariants: {
    position: "left",
  },
});

interface InputIconProps extends ComponentProps<"div"> {
  position: "left" | "right";
}

const InputIcon: ForwardRefExoticComponent<InputIconProps> = forwardRef(
  ({ className, position = "left", ...props }, ref) => {
    const { size } = useContext(InputContext);

    return (
      <Slot
        ref={ref}
        className={input_icon_cva({ position, size, className })}
        {...props}
      />
    );
  },
);

InputIcon.displayName = "InputIcon";

/*========================================================================================================================*/

const input_label_cva = cva(["text-txt-black-700"], {
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
});
// TODO: modify this if required (simplify)
interface InputLabelProps
  extends Omit<React.ComponentPropsWithoutRef<"label">, "size">,
    VariantProps<typeof input_label_cva> {
  // htmlFor is already included in label props, but we'll make it required
  htmlFor: string;
  asChild?: boolean;
}

const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>(
  ({ className, children, size, htmlFor, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "label";

    return (
      <Comp
        ref={ref}
        htmlFor={htmlFor}
        className={input_label_cva({ size, className })}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
InputLabel.displayName = "InputLabel";

/*========================================================================================================================*/

const input_hint_cva = cva("", {
  variants: {
    size: {
      small: "text-body-xs",
      medium: "text-body-sm",
      large: "text-body-md",
    },
  },
});

// TODO: modify this
interface InputHintProps
  extends React.ComponentPropsWithoutRef<"p">,
    VariantProps<typeof input_hint_cva> {
  error?: boolean;
  asChild?: boolean;
}

const InputHint = forwardRef<HTMLParagraphElement, InputHintProps>(
  ({ className, children, error, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";

    return (
      <Comp
        ref={ref}
        className={clx(
          input_hint_cva({ size, className }),
          error ? "text-txt-danger" : "text-txt-black-500",
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

InputHint.displayName = "InputHint";

/*========================================================================================================================*/

const input_text_cva = cva(
  [
    "w-full rounded border border-gray-200 bg-bg-white",
    "placeholder:text-txt-black-500 text-txt-black-700 transition-colors",
    // TODO: recheck classes for focus and disabled
    "focus:ring focus:ring-fr-primary focus:border-otl-primary-300",
    "disabled:bg-bg-washed disabled:cursor-not-allowed disabled:text-txt-black-disabled",
  ],
  {
    variants: {
      size: {
        small: "min-h-[100px] p-2.5 text-body-sm placeholder:text-body-sm",
        medium: "min-h-[120px] p-3 text-body-md placeholder:text-body-md",
        large: "min-h-[150px] p-3.5 text-body-lg placeholder:text-body-lg",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

interface InputTextProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof input_text_cva> {
  // You might want to add more specific props here
  error?: boolean;
}
// TODO: check the interface

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ className, size, error, ...props }, ref) => {
    return (
      <input
        type="text"
        ref={ref}
        className={clx(
          input_text_cva({ size, className }),
          error &&
            // TODO: check shadow applied or not
            // TODO: check if border and focus got or not
            // TODO: check if there is another way to use clx with cva
            "border-ot-danger-300 focus:border-otl-danger-300 shadow-button",
        )}
        {...props}
      />
    );
  },
);

InputText.displayName = "InputText";

export { Input, InputAddon, InputIcon, InputLabel, InputHint, InputText };
