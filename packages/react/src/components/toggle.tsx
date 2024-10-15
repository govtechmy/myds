import React, { createContext, useContext, useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clx } from "../utils";

const toggleVariants = cva(
  "relative inline-flex items-center rounded-full transition-colors focus:ring-fr-primary focus-visible:ring-fr-primary outline-none focus:ring-[3px] focus-visible:ring-[3px] data-[state=checked]:bg-bg-primary-600 data-[state=checked]:hover:bg-bg-primary-700 data-[state=unchecked]:bg-otl-gray-200 data-[state=unchecked]:hover:bg-otl-gray-300 data-[disabled]:cursor-not-allowed data-[disabled]:data-[state=checked]:bg-bg-primary-disabled data-[disabled]:data-[state=unchecked]:bg-bg-washed",
  {
    variants: {
      size: {
        medium: "w-[30px] h-[20px]",
        large: "w-9 h-6",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

const thumbVariants = cva(
  "absolute left-[3px] top-[3px] z-10 rounded-full transition-transform duration-200 ease-in-out data-[state=checked]:bg-white data-[state=unchecked]:bg-white data-[disabled]:bg-bg-white",
  {
    variants: {
      size: {
        medium: "w-[14px] h-[14px] data-[state=checked]:translate-x-[10px]",
        large: "w-[18px] h-[18px] data-[state=checked]:translate-x-3",
      },
    },
    defaultVariants: {
      size: "medium",
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

export interface ToggleProps extends VariantProps<typeof toggleVariants> {
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
      className={clx(toggleVariants({ size: context.size }), className)}
      data-state={context.checked ? "checked" : "unchecked"}
      data-disabled={context.disabled || undefined}
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
        className={thumbVariants({ size: context.size })}
        data-state={context.checked ? "checked" : "unchecked"}
        data-disabled={context.disabled || undefined}
      />
    </label>
  );
};
