import React, {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
} from "react";
import {
  OTPInput as PrimitiveInputOTP,
  OTPInputContext as PrimitiveInputOTPContext,
} from "input-otp";
import { clx } from "../utils";
import { cva } from "class-variance-authority";

interface BaseInputOTPProps {
  maxLength: number;
  value?: string;
  onChange?: (value: string) => void;
  containerClassName?: string;
  children: React.ReactNode;
  invalid?: boolean;
}

interface InputOTPProps
  extends BaseInputOTPProps,
    Omit<ComponentProps<"input">, keyof BaseInputOTPProps> {}

const InputOTP = React.forwardRef<
  ElementRef<typeof PrimitiveInputOTP>,
  InputOTPProps
>(({ className, containerClassName, children, invalid, ...props }, ref) => (
  <PrimitiveInputOTP
    ref={ref}
    containerClassName={clx(
      "group flex items-center gap-1.5",
      containerClassName,
    )}
    className={clx("disabled:cursor-not-allowed", className)}
    aria-invalid={invalid}
    {...props}
  >
    {children}
  </PrimitiveInputOTP>
));
InputOTP.displayName = "InputOTP";

const slot_cva = cva(
  [
    "relative flex h-[68px] w-[50px] items-center justify-center rounded-md border bg-bg-white text-4xl font-medium text-txt-black-900 transition-all",
    "border-otl-gray-200 group-has-[input[aria-invalid=true]]:border-otl-danger-300",
    "group-has-[:disabled]:bg-bg-washed group-has-[:disabled]:text-txt-black-500",
  ],
  {
    variants: {
      active: {
        true: "z-10 border-otl-primary-300 ring ring-otl-primary-200 group-has-[input[aria-invalid=true]]:ring-otl-danger-200",
        false: "",
      },
    },
    defaultVariants: {},
  },
);

const InputOTPSlot = React.forwardRef<
  ElementRef<"div">,
  ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const { slots } = React.useContext(PrimitiveInputOTPContext);
  const { char, hasFakeCaret, isActive } = slots[index]!;

  return (
    <div
      ref={ref}
      className={slot_cva({ active: isActive, className })}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-bg-black-900 h-11 w-px duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

export { InputOTP, InputOTPSlot };
