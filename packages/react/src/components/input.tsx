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
  size: "small",
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
    "placeholder:text-txt-black-500 text-txt-black-700 transition-colors w-full",
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
    defaultVariants: {
      size: "small",
    },
  },
);

const Input: ForwardRefExoticComponent<InputProps> = forwardRef(
  ({ className, prepend, append, children, size = "small", ...props }, ref) => {
    const has_icon = useMemo(() => {
      if (!children) return { left: false, right: false };
      const _children = Children.toArray(children);
      return {
        left: _children.some(
          (child) =>
            isValidElement<ComponentPropsWithRef<typeof InputIcon>>(child) &&
            child.props.position === "left",
        ),
        right: _children.some(
          (child) =>
            isValidElement<ComponentPropsWithRef<typeof InputIcon>>(child) &&
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
        <div className="flex w-full flex-row">
          <InputContext.Provider value={{ size }}>
            {prepend}
            <div className="relative w-full">
              <input
                ref={ref}
                className={input_cva({ size })}
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

export { Input, InputAddon, InputIcon };
