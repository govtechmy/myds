import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { clx } from "../utils";
import { cva } from "class-variance-authority";
import { ChevronDownFillIcon } from "../icons/chevron-down-fill";
import { CheckCircleFillIcon } from "../icons/check-circle-fill";
import { Checkbox } from "./checkbox";

type SelectBase = Omit<
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>,
  "value" | "defaultValue" | "onValueChange"
> & {
  variant: "outline" | "ghost" | null;
  size: "small" | "medium" | "large" | null;
};

type SelectSingle = SelectBase & {
  multiple: false;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

type SelectMultiple = SelectBase & {
  multiple: true;
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
};

const isMultiple = (props: SelectProps): props is SelectMultiple =>
  Boolean(props.multiple);

type SelectProps = SelectSingle | SelectMultiple;

type SelectInternalProps = {
  _handleClose: (open: boolean) => void;
  _value: string | string[];
};

const SelectContext = React.createContext<SelectProps & SelectInternalProps>({
  _value: "",
  _handleClose: () => {},
  multiple: false,
  value: "",
  defaultValue: "",
  onValueChange: () => {},
  variant: "outline",
  size: "small",
});

const Select: React.ForwardRefExoticComponent<SelectProps> = React.forwardRef(
  (props, ref) => {
    const [_value, _setValue] = React.useState(
      isMultiple(props)
        ? props.value || props.defaultValue || []
        : props.value || props.defaultValue || "",
    );
    const [_open, _setOpen] = React.useState<boolean | undefined>(
      props.open || false,
    );

    React.useEffect(() => {
      if (props.multiple && !Array.isArray(_value)) _setValue([]);
      if (!props.multiple && Array.isArray(_value)) _setValue("");
    }, [props.multiple]);

    React.useEffect(() => {
      if (props.value) _setValue(props.value);
    }, [props.value]);

    React.useEffect(() => {
      _setOpen(props.open);
    }, [props.open]);

    const handleValueChange = (value: string | undefined | null) => {
      if (value === undefined || value === null) return;

      if (isMultiple(props)) {
        let temp = [];
        if (!_value.includes(value)) temp = [..._value, value];
        else temp = (_value as string[]).filter((v) => v !== value);

        _setValue(temp);
        props.onValueChange?.(temp);
      } else {
        _setValue(value);
        props.onValueChange?.(value);
      }
    };

    const handleClose = (open: boolean) => {
      if (isMultiple(props) && !open) return;
      _setOpen(open);
      props.onOpenChange?.(open);
    };

    return (
      <SelectContext.Provider
        value={{ ...props, _value, _handleClose: _setOpen }}
      >
        <SelectPrimitive.Root
          ref={ref}
          {...props}
          /* @ts-expect-error */
          value={_value}
          onValueChange={handleValueChange}
          open={_open}
          onOpenChange={handleClose}
        />
      </SelectContext.Provider>
    );
  },
);

const SelectGroup = SelectPrimitive.Group;

/*========================================================================================================================*/

const select_icon_cva = cva(["text-txt-black-900"], {
  variants: {
    size: {
      small: "size-4",
      medium: "size-5",
      large: "size-5",
    },
  },
});

interface SelectValueProps
  extends Omit<
    React.ComponentProps<typeof SelectPrimitive.Value>,
    "children" | "asChild"
  > {
  label?: React.ReactNode;
  icon?: React.JSXElementConstructor<any>;
  children?: (value: string | string[]) => React.ReactNode | React.ReactNode;
}
const SelectValue: React.ForwardRefExoticComponent<SelectValueProps> =
  React.forwardRef(({ label, icon, children, className, ...props }, ref) => {
    const rootProps = React.useContext(SelectContext);
    const Icon = icon || ChevronDownFillIcon;

    if (!isMultiple(rootProps))
      return (
        <>
          {typeof label === "string" ? (
            <SelectLabel>{label}</SelectLabel>
          ) : (
            label
          )}
          <SelectPrimitive.Value
            ref={ref}
            {...props}
            className={clx("text-inherit", className)}
          >
            {children && children(rootProps._value)}
          </SelectPrimitive.Value>
          <SelectPrimitive.Icon asChild>
            <Icon className={select_icon_cva({ size: rootProps.size })} />
          </SelectPrimitive.Icon>
        </>
      );

    return (
      <>
        {typeof label === "string" ? <SelectLabel>{label}</SelectLabel> : label}
        <SelectPrimitive.Value
          ref={ref}
          {...props}
          className={clx("text-inherit", className)}
        >
          {children && children(rootProps._value)}
        </SelectPrimitive.Value>

        {!children && <SelectCounter>{rootProps._value?.length}</SelectCounter>}

        <SelectPrimitive.Icon asChild>
          <Icon className={select_icon_cva({ size: rootProps.size })} />
        </SelectPrimitive.Icon>
      </>
    );
  });

/*========================================================================================================================*/

const select_counter_cva = cva(
  [
    "flex aspect-square shrink-0 leading-none items-center justify-center bg-primary-600",
    "rounded-full px-1 leading-none text-white",
    "group-disabled:bg-bg-white-disabled group-disabled:text-inherit",
  ],
  {
    variants: {
      size: {
        small: "text-body-sm",
        medium: "text-body-md",
        large: "text-body-md",
      },
    },
    defaultVariants: {
      size: "small",
    },
  },
);

interface SelectCounterProps extends React.ComponentProps<"span"> {}

const SelectCounter: React.ForwardRefExoticComponent<SelectCounterProps> =
  React.forwardRef(({ children, className, ...props }, ref) => {
    const { size } = React.useContext(SelectContext);

    return (
      <span ref={ref} className={clx(select_counter_cva({ size }))} {...props}>
        {children}
      </span>
    );
  });

SelectCounter.displayName = "SelectCounter";
/*========================================================================================================================*/

const select_trigger_cva = cva(
  [
    "group inline-flex select-none items-center gap-1.5 outline-none rounded-md w-fit text-txt-black-900",
    "focus:ring focus:ring-fr-primary",
    "disabled:bg-bg-white-disabled disabled:text-txt-black-disabled disabled:border-transparent disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        outline: [
          "bg-bg-white border border-otl-gray-200 shadow-button",
          "hover:bg-bg-white-hover hover:border-otl-gray-300",
        ],
        ghost: [
          "bg-transparent border border-transparent",
          "hover:bg-bg-white-hover",
        ],
      },
      size: {
        small: "py-1.5 px-2.5 text-body-sm",
        medium: "py-2 px-3 text-body-md",
        large: "py-2.5 px-4 text-body-lg",
      },
    },
    defaultVariants: { variant: "outline", size: "small" },
  },
);

const SelectTrigger: React.ForwardRefExoticComponent<
  React.ComponentProps<typeof SelectPrimitive.Trigger>
> = React.forwardRef(({ className, children, ...props }, ref) => {
  const { variant, size } = React.useContext(SelectContext);

  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={select_trigger_cva({
        variant,
        size,
        className,
      })}
      {...props}
    >
      {children}
    </SelectPrimitive.Trigger>
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

/*========================================================================================================================*/

const select_label_cva = cva(
  ["group-data-[disabled]:text-txt-black-disabled"],
  {
    variants: {
      size: {
        small: "text-body-sm",
        medium: "text-body-md",
        large: "text-body-lg",
      },
      multiple: {
        false: "text-txt-black-500",
        true: "text-txt-black-900",
      },
    },
    defaultVariants: { size: "small", multiple: false },
  },
);

const SelectLabel: React.ForwardRefExoticComponent<
  React.ComponentProps<"span">
> = React.forwardRef(({ className, ...props }, ref) => {
  const { size, multiple } = React.useContext(SelectContext);
  return (
    <span
      ref={ref}
      className={select_label_cva({ size, multiple, className })}
      {...props}
    />
  );
});
SelectLabel.displayName = "SelectLabel";

/*========================================================================================================================*/

const select_content_cva = cva(
  [
    "bg-bg-dialog relative z-50 py-1 max-h-64 min-w-[8rem] overflow-hidden ",
    "rounded-md border border-otl-gray-200 shadow-context-menu",
    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  ],
  {
    variants: {
      position: {
        popper:
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        "item-aligned": "",
      },
      size: {
        small: "max-h-64",
        medium: "max-h-72",
        large: "max-h-80",
      },
    },
    defaultVariants: { position: "popper", size: "small" },
  },
);

const SelectContent: React.ForwardRefExoticComponent<
  React.ComponentProps<typeof SelectPrimitive.Content>
> = React.forwardRef(
  ({ className, children, position = "popper", ...props }, ref) => {
    const { _handleClose, size } = React.useContext(SelectContext);
    return (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          ref={ref}
          className={select_content_cva({ position, size, className })}
          position={position}
          {...props}
          onPointerDownOutside={() => _handleClose?.(false)}
        >
          <SelectPrimitive.Viewport
            className={clx(
              position === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
            )}
          >
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    );
  },
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

/*========================================================================================================================*/

const SelectGroupTitle = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectXPad>
    <SelectPrimitive.Label
      ref={ref}
      className={clx(
        "text-body-xs px-2.5 py-1.5 font-semibold text-gray-400",
        className,
      )}
      {...props}
    />
  </SelectXPad>
));
SelectGroupTitle.displayName = SelectPrimitive.Label.displayName;

/*========================================================================================================================*/

const select_item_cva = cva(
  [
    "flex items-center w-full cursor-default select-none py-1.5 gap-2 font-medium outline-none text-txt-black-700 rounded-xs",
    "data-[highlighted]:bg-bg-washed",
  ],
  {
    variants: {
      size: {
        small: "text-body-xs",
        medium: "text-body-sm",
        large: "text-body-md",
      },
      multiple: {
        false: "pl-2.5 pr-[38px]",
        true: "px-2.5",
      },
      disabled: {
        false: "",
        true: "bg-bg-white-disabled text-txt-black-disabled border-transparent cursor-not-allowed hover:bg-none",
      },
    },
    defaultVariants: { size: "small", multiple: false, disabled: false },
  },
);

const SelectItem: React.ForwardRefExoticComponent<
  React.ComponentProps<typeof SelectPrimitive.Item>
> = React.forwardRef(({ className, children, disabled, ...props }, ref) => {
  const rootProps = React.useContext(SelectContext);
  if (!isMultiple(rootProps))
    return (
      <SelectXPad>
        <SelectPrimitive.Item
          ref={ref}
          className={clx(
            select_item_cva({
              size: rootProps.size,
              multiple: false,
              disabled,
            }),
            className,
          )}
          {...props}
        >
          <span className="absolute right-4 flex h-3.5 w-3.5 items-center justify-center">
            <SelectPrimitive.ItemIndicator>
              <CheckCircleFillIcon
                data-size={rootProps.size}
                className="text-primary-600 size-5 data-[size=small]:size-4"
              />
            </SelectPrimitive.ItemIndicator>
          </span>
          {children}
          <SelectPrimitive.ItemText asChild>
            {children}
          </SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
      </SelectXPad>
    );

  const checked = rootProps._value.includes(props.value);

  return (
    <SelectXPad>
      <SelectPrimitive.Item
        ref={ref}
        className={clx(
          select_item_cva({
            size: rootProps.size,
            multiple: true,
            disabled,
            className,
          }),
          className,
        )}
        {...props}
        data-state={checked ? "checked" : "unchecked"}
      >
        <Checkbox checked={checked} />
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    </SelectXPad>
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;

/*========================================================================================================================*/

const SelectSeparator: React.ForwardRefExoticComponent<
  React.ComponentProps<typeof SelectPrimitive.Separator>
> = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={clx("bg-otl-divider -mx-1 my-1 h-px", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

/*========================================================================================================================*/

const SelectHeader: React.ForwardRefExoticComponent<
  React.ComponentProps<"div">
> = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <SelectXPad
      ref={ref}
      className={clx("bg-bg-dialog sticky top-0 z-50 pb-1", className)}
      {...props}
    />
  );
});
SelectHeader.displayName = "SelectHeader";

/*========================================================================================================================*/

const SelectFooter: React.ForwardRefExoticComponent<
  React.ComponentProps<"div">
> = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <SelectXPad
      ref={ref}
      className={clx(
        "bg-bg-dialog border-otl-gray-200 sticky bottom-0 z-50 border-t py-1",
        className,
      )}
      {...props}
    />
  );
});
SelectFooter.displayName = "SelectFooter";

/*========================================================================================================================*/

const SelectXPad: React.FunctionComponent<React.ComponentProps<"div">> = ({
  children,
  className,
}) => <div className={clx("px-1", className)}>{children}</div>;

export {
  Select,
  SelectGroup,
  SelectGroupTitle,
  SelectValue,
  SelectTrigger,
  SelectLabel,
  SelectContent,
  SelectHeader,
  SelectFooter,
  SelectItem,
  SelectSeparator,
  // SelectScrollUpButton,
  // SelectScrollDownButton,
};
