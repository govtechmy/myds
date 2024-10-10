import React from "react";
import { clx } from "../utils";

type ToggleSize = "medium" | "large";

export interface ToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: ToggleSize;
  disabled?: boolean;
}

const sizes: Record<ToggleSize, { toggle: string; thumb: string }> = {
  medium: {
    toggle: "w-[30px] h-[20px]",
    thumb: "w-[14px] h-[14px]",
  },
  large: {
    toggle: "w-[36px] h-[24px]",
    thumb: "w-[18px] h-[18px]",
  },
};

const Toggle: React.FC<ToggleProps> = ({
  checked = false,
  onChange,
  size = "medium",
  disabled = false,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && !disabled) {
      onChange(event.target.checked);
    }
  };

  const { toggle, thumb } = sizes[size];

  return (
    <label
      className={clx(
        "relative inline-block rounded-full focus:outline-none",
        "focus:ring-[3px]",
        toggle,
        checked
          ? "bg-primary-600 hover:bg-primary-700"
          : "bg-otl-gray-200 hover:bg-otl-gray-300",
        disabled
          ? "bg-bg-primary-disabled cursor-not-allowed"
          : "cursor-pointer",
      )}
      tabIndex={disabled ? -1 : 0}
      role="switch"
      aria-checked={checked}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <span
        className={clx(
          "absolute left-[3px] top-[3px] z-10 rounded-full bg-white transition-transform duration-200 ease-in-out",
          thumb,
          checked
            ? size === "medium"
              ? "translate-x-[10px]"
              : "translate-x-3"
            : "",
        )}
      />
    </label>
  );
};

export default Toggle;
