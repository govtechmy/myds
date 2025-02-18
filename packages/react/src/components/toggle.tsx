import React, { createContext, useContext, useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clx } from "../utils";

const thumbVariants = cva(
  [
    "block outline-none focus:ring-[3px] focus:ring-fr-primary bg-otl-gray-200 hover:bg-otl-gray-300 data-[state=checked]:bg-bg-primary-600 cursor-pointer rounded-full transition-color duration-200 z-10",
    "before:content-[''] before:left-[3px] before:bottom-[3px] before:bg-white before:absolute before:rounded-full before:transition-all before:duration-200",
    "peer-disabled:data-[state=checked]:bg-bg-primary-disabled peer-disabled:cursor-not-allowed peer-disabled:before:data-[state=checked]:bg-bg-white",
    "peer-disabled:data-[state=unchecked]:bg-bg-washed peer-disabled:before:data-[state=unchecked]:bg-bg-white",
  ],
  {
    variants: {
      size: {
        small:
          "h-[16px] w-[24px] before:size-[10px] before:data-[state=checked]:translate-x-2",
        medium:
          "h-[20px] w-[30px] before:size-[14px] before:data-[state=checked]:translate-x-[10px]",
        large:
          "h-[24px] w-[36px] before:size-[18px] before:data-[state=checked]:translate-x-3",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

interface ToggleContextType extends VariantProps<typeof thumbVariants> {
  checked: boolean;
  disabled: boolean;
  onChange: () => void;
  id: string;
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

export interface ToggleProps extends VariantProps<typeof thumbVariants> {
  id?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Toggle: React.FC<ToggleProps> = ({
  id,
  defaultChecked = false,
  checked,
  onCheckedChange,
  size = "medium",
  disabled = false,
  className = "",
  children,
}) => {
  const [_checked, set_checked] = React.useState(
    checked || defaultChecked || false,
  );

  React.useEffect(() => {
    if (checked === undefined) return;
    set_checked(checked);
  }, [checked]);

  const handleChange = () => {
    if (disabled) return;

    set_checked(!_checked);
    onCheckedChange?.(!_checked);
  };

  return (
    <ToggleContext.Provider
      value={{
        checked: _checked,
        disabled,
        size,
        onChange: handleChange,
        id: id || useId(),
      }}
    >
      <div
        tabIndex={-1}
        className={clx("flex items-start justify-between gap-2.5", className)}
      >
        {children}
      </div>
    </ToggleContext.Provider>
  );
};

interface ToggleThumbProps {
  className?: string;
}

const ToggleThumb: React.FC<ToggleThumbProps> = ({ className }) => {
  const context = useContext(ToggleContext);
  if (!context) throw new Error("ToggleThumb must be used within Toggle");

  //* Handles keyboard interaction: Enter | Space
  const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      context.onChange();
    }
  };

  return (
    <label tabIndex={-1} className="relative inline-block">
      <input
        id={context.id}
        type="checkbox"
        className="peer sr-only"
        checked={context.checked}
        onChange={context.onChange}
        disabled={context.disabled}
      />
      <span
        tabIndex={0}
        role="switch"
        className={thumbVariants({ size: context.size })}
        onKeyDown={handleKeyDown}
        data-state={context.checked ? "checked" : "unchecked"}
        aria-checked={context.checked}
        aria-disabled={context.disabled}
        aria-label="Toggle"
      />
    </label>
  );
};

export { Toggle, ToggleThumb };
