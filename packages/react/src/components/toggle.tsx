import React, { createContext, useContext, useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clx } from "../utils";

const toggleVariants = cva(
  "relative inline-flex items-center rounded-full transition-colors ",
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

interface ToggleContextType extends VariantProps<typeof toggleVariants> {
  checked: boolean;
  disabled: boolean;
  onChange: () => void;
  id: string;
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

export interface ToggleProps
  extends Omit<VariantProps<typeof toggleVariants>, "checked" | "disabled"> {
  defaultChecked?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
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
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
  const id = useId();

  React.useEffect(() => {
    if (controlledChecked !== undefined) {
      setInternalChecked(controlledChecked);
    }
  }, [controlledChecked]);

  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const handleChange = () => {
    if (!disabled) {
      const newChecked = !checked;
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      onCheckedChange?.(newChecked);
    }
  };

  return (
    <ToggleContext.Provider
      value={{ checked, disabled, size, onChange: handleChange, id }}
    >
      <div className={clx("flex items-center", className)}>{children}</div>
    </ToggleContext.Provider>
  );
};

export interface ToggleLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const ToggleLabel: React.FC<ToggleLabelProps> = ({
  children,
  className,
}) => {
  const context = useContext(ToggleContext);
  if (!context) throw new Error("ToggleLabel must be used within a Toggle");

  return (
    <label
      htmlFor={context.id}
      className={clx(
        "text-txt-black-700 pr-2.5",
        context.size === "medium" ? "text-sm" : "text-lg leading-[26px]",
        className,
      )}
    >
      {children}
    </label>
  );
};

export interface ToggleThumbProps {
  className?: string;
}

export const ToggleThumb: React.FC<ToggleThumbProps> = ({ className }) => {
  const context = useContext(ToggleContext);
  if (!context) throw new Error("ToggleThumb must be used within a Toggle");

  return (
    <label
      htmlFor={context.id}
      tabIndex={0}
      className={clx(
        toggleVariants({
          size: context.size,
          checked: context.checked,
          disabled: context.disabled,
        }),
        "focus:ring-primary-600 focus-visible:ring-primary-600 outline-none focus:ring-[3px] focus-visible:ring-[3px]",
        "focus:ring-primary-600 focus-visible:ring-primary-600 outline-none focus:ring-[3px] focus-visible:ring-[3px]",

        className,
      )}
    >
      <input
        id={context.id}
        type="checkbox"
        className="sr-only"
        checked={context.checked}
        onChange={context.onChange}
        disabled={context.disabled}
      />
      <span
        className={thumbVariants({
          size: context.size,
          checked: context.checked,
          disabled: context.disabled,
        })}
      />
    </label>
  );
};
