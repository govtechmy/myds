import React from "react";
import { clx } from "../utils";

type ToggleSize = "medium" | "large";

export interface ToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: ToggleSize;
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
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  const { toggle, thumb } = sizes[size];

  return (
    <label
      className={clx("relative inline-block rounded-full bg-gray-200", toggle)}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={handleChange}
      />
      <span
        className={clx(
          "absolute left-[3px] top-[3px] rounded-full bg-white transition-transform duration-200 ease-in-out",
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
