"use client";

import React, {
  ComponentProps,
  createContext,
  FunctionComponent,
  useContext,
} from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { clx } from "../utils";

type RadioSize = "small" | "medium" | "large";
const DEFAULT_SIZE = "medium";

/**
 * Extends Radix UI's RadioGroup.Root props.
 * @see https://www.radix-ui.com/primitives/docs/components/radio-group#root
 */
export interface RadioProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  size?: RadioSize;
}

const RadioContext = createContext<
  Required<Pick<RadioProps, "size" | "disabled">>
>({
  size: DEFAULT_SIZE,
  disabled: false,
});

// An item needs it's own context because labels and radio buttons need to be
// aware if only the specific item was disabled.
const RadioItemContext = createContext<
  Required<Pick<ComponentProps<typeof RadioItem>, "disabled">>
>({ disabled: false });

/**
 * Uses RadixUI's RadioGroup.Root API.
 * @see https://www.radix-ui.com/primitives/docs/components/radio-group#api-reference
 */
const Radio = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioProps
>(({ className, size = DEFAULT_SIZE, disabled = false, ...props }, ref) => {
  return (
    <RadioContext.Provider value={{ size, disabled }}>
      <RadioGroupPrimitive.Root
        className={clx("grid gap-3", className)}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    </RadioContext.Provider>
  );
});
Radio.displayName = RadioGroupPrimitive.Root.displayName;

const RadioItem: FunctionComponent<
  ComponentProps<"div"> & { disabled?: boolean }
> = ({ className, children, ...props }) => {
  const { disabled } = useContext(RadioContext);
  return (
    <RadioItemContext.Provider value={{ disabled: props.disabled ?? disabled }}>
      <div className={clx("flex items-center gap-3", className)} {...props}>
        {children}
      </div>
    </RadioItemContext.Provider>
  );
};
RadioItem.displayName = "RadioItem";

/**
 * Uses RadixUI's RadioGroup.Item API.
 * @see https://www.radix-ui.com/primitives/docs/components/radio-group#item
 */
const RadioButton = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  const { size } = useContext(RadioContext);
  const { disabled } = useContext(RadioItemContext);
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={clx(
        "shadow-button hover:border-otl-gray-300 border-otl-gray-200 aspect-square rounded-full border",
        "focus-visible:ring-fr-primary focus:outline-none focus-visible:ring-4 focus-visible:ring-opacity-40",
        "disabled:bg-bg-washed disabled:cursor-not-allowed",
        "data-[state=checked]:bg-primary-600 data-[state=checked]:border-none",
        "data-[state=checked]:disabled:bg-primary-600 data-[state=checked]:disabled:opacity-30",
        size === "small" && "w-4",
        size === "medium" && "w-5",
        size === "large" && "w-5",
        className,
      )}
      disabled={props.disabled ?? disabled}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div
          className="bg-bg-white aspect-square w-2/5 rounded-full"
          aria-hidden="true"
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioButton.displayName = RadioGroupPrimitive.Item.displayName;

const RadioLabel = ({
  className,
  children,
  ...props
}: ComponentProps<"label">) => {
  const { size } = useContext(RadioContext);
  const { disabled } = useContext(RadioItemContext);
  return (
    <label
      className={clx(
        "text-txt-black-700 font-medium",
        size === "small" && "text-body-sm",
        size === "medium" && "text-body-md",
        size === "large" && "text-lg",
        disabled && "text-txt-black-disabled",
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
};
RadioLabel.displayName = "RadioLabel";

const RadioHintText = ({
  className,
  children,
  ...props
}: ComponentProps<"label">) => {
  const { size } = useContext(RadioContext);
  const { disabled } = useContext(RadioItemContext);
  return (
    <label
      className={clx(
        "text-txt-black-500",
        size === "small" && "text-xs",
        size === "medium" && "text-body-sm",
        size === "large" && "text-body-md",
        disabled && "text-otl-gray-300",
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
};
RadioHintText.displayName = "RadioHintText";

export { Radio, RadioItem, RadioButton, RadioLabel, RadioHintText };
