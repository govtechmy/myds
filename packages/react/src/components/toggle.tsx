import React from "react";
import { clx } from "../utils";

type ToggleSize = "medium" | "large";

export interface ToggleProps {
  label?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  size?: ToggleSize;
  disabled?: boolean;
  className?: string;
  asChild?: boolean;
  value?: string;
}

const sizes: Record<ToggleSize, { toggle: string; thumb: string }> = {
  medium: {
    toggle: "w-[30px] h-[20px]",
    thumb: "w-[14px] h-[14px]",
  },
  large: {
    toggle: "w-9 h-6",
    thumb: "w-[18px] h-[18px]",
  },
};

const Toggle: React.FC<ToggleProps> = ({
  label,
  defaultChecked = false,
  checked,
  onCheckedChange,
  size = "medium",
  disabled = false,
  className = "",
  asChild = false,
  value,
}) => {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked);

  React.useEffect(() => {
    setInternalChecked(defaultChecked);
  }, [defaultChecked]);

  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      const newChecked = event.target.checked;
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      onCheckedChange?.(newChecked);
    }
  };

  const { toggle, thumb } = sizes[size];
  const SwitchRoot = asChild ? React.Fragment : "div";

  return (
    <SwitchRoot
      className={clx(
        "flex w-full items-center",
        label ? "justify-between" : "justify-center",
        className,
      )}
    >
      {label && (
        <span
          className={clx(
            "text-txt-black-700",
            size === "medium" ? "text-sm" : "text-lg leading-[26px]",
          )}
        >
          {label}
        </span>
      )}
      <label
        className={clx(
          "relative inline-block rounded-full focus:outline-none",
          "focus:ring-[3px]",
          toggle,
          isChecked
            ? "bg-bg-primary-600 hover:bg-primary-700"
            : "bg-otl-gray-200 hover:bg-otl-gray-300",
          disabled
            ? isChecked
              ? "bg-bg-primary-disabled cursor-not-allowed"
              : "bg-bg-washed cursor-not-allowed"
            : "cursor-pointer",
        )}
        tabIndex={disabled ? -1 : 0}
        role="switch"
        aria-checked={isChecked}
        data-state={isChecked ? "checked" : "unchecked"}
        data-disabled={disabled ? "" : undefined}
      >
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          value={value}
        />
        <span
          className={clx(
            "absolute left-[3px] top-[3px] z-10 rounded-full bg-white transition-transform duration-200 ease-in-out",
            thumb,
            isChecked
              ? size === "medium"
                ? "translate-x-[10px]"
                : "translate-x-3"
              : "",
            disabled ? "bg-bg-white" : "bg-white",
          )}
        />
      </label>
    </SwitchRoot>
  );
};

export default Toggle;
