import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clx } from "../utils";

const toggleVariants = cva(
  "relative inline-flex items-center rounded-full focus:outline-none focus:ring-[3px]",
  {
    variants: {
      size: {
        medium: "w-[30px] h-[20px]",
        large: "w-9 h-6",
      },
      checked: {
        true: "bg-bg-primary-600 hover:bg-primary-700",
        false: "bg-otl-gray-200 hover:bg-otl-gray-300",
      },
      disabled: {
        true: "cursor-not-allowed",
        false: "cursor-pointer",
      },
    },
    compoundVariants: [
      {
        checked: true,
        disabled: true,
        className: "bg-bg-primary-disabled",
      },
      {
        checked: false,
        disabled: true,
        className: "bg-bg-washed",
      },
    ],
    defaultVariants: {
      size: "medium",
      checked: false,
      disabled: false,
    },
  },
);

const thumbVariants = cva(
  "absolute left-[3px] top-[3px] z-10 rounded-full transition-transform duration-200 ease-in-out",
  {
    variants: {
      size: {
        medium: "w-[14px] h-[14px]",
        large: "w-[18px] h-[18px]",
      },
      checked: {
        true: "",
        false: "",
      },
      disabled: {
        true: "bg-bg-white",
        false: "bg-white",
      },
    },
    compoundVariants: [
      {
        size: "medium",
        checked: true,
        className: "translate-x-[10px]",
      },
      {
        size: "large",
        checked: true,
        className: "translate-x-3",
      },
    ],
    defaultVariants: {
      size: "medium",
      checked: false,
      disabled: false,
    },
  },
);

export interface ToggleProps
  extends Omit<VariantProps<typeof toggleVariants>, "checked"> {
  defaultChecked?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  children?: React.ReactNode;
}

export const Toggle: React.FC<ToggleProps> = ({
  defaultChecked = false,
  checked: controlledChecked,
  onCheckedChange,
  size = "medium",
  disabled = false,
  className = "",
  children,
}) => {
  const isControlled = controlledChecked !== undefined;
  const [internalChecked, setInternalChecked] = React.useState(
    isControlled ? controlledChecked : defaultChecked,
  );
  const id = React.useId();

  React.useEffect(() => {
    if (isControlled) {
      setInternalChecked(controlledChecked);
    }
  }, [isControlled, controlledChecked]);

  const checked = isControlled ? controlledChecked : internalChecked;
  const isDisabled = disabled === true;

  const handleChange = () => {
    if (!isDisabled) {
      const newChecked = !checked;
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      onCheckedChange?.(newChecked);
    }
  };

  return (
    <div className={clx("flex items-center", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              checked,
              disabled: isDisabled,
              size,
              onChange: handleChange,
              id,
            } as any)
          : child,
      )}
    </div>
  );
};

export interface ToggleLabelProps {
  children: React.ReactNode;
  className?: string;
  size?: "medium" | "large";
  id?: string;
}

export const ToggleLabel: React.FC<ToggleLabelProps> = ({
  children,
  className,
  size = "medium",
  id,
}) => {
  return (
    <label
      htmlFor={id}
      className={clx(
        "text-txt-black-700",
        size === "medium" ? "text-sm" : "text-lg leading-[26px]",
        className,
      )}
    >
      {children}
    </label>
  );
};

export interface ToggleThumbProps
  extends Omit<ToggleProps, "children" | "defaultChecked" | "onCheckedChange"> {
  onChange?: () => void;
  id?: string;
}

export const ToggleThumb: React.FC<ToggleThumbProps> = ({
  checked,
  disabled,
  size = "medium",
  onChange,
  className,
  id,
}) => {
  const isDisabled = disabled === true;

  return (
    <label
      htmlFor={id}
      className={clx(
        toggleVariants({ size, checked, disabled: isDisabled }),
        className,
      )}
    >
      <input
        id={id}
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
        disabled={isDisabled}
      />
      <span
        className={thumbVariants({ size, checked, disabled: isDisabled })}
      />
    </label>
  );
};
