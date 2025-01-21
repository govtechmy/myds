import { ComponentProps, FunctionComponent } from "react";
import { CalendarIcon } from "../icons/calendar";
import { cva, VariantProps } from "class-variance-authority";

const datefield_container_cva = cva(
  [
    "flex items-center gap-2 border rounded-md text-txt-black-900 shadow-button focus:outline-none font-body font-normal",
    "focus-within:border-otl-primary-300 focus-within:ring focus-within:ring-fr-primary",
  ],
  {
    variants: {
      size: {
        small: "px-[10px] py-[6px] text-sm",
        medium: "px-[12px] py-[8px] text-base",
        large: "px-[14px] py-[10px] text-lg",
      },
      disabled: {
        true: "bg-bg-washed text-txt-black-500 cursor-not-allowed",
        false: "bg-bg-white",
      },
      invalid: {
        true: "border-otl-danger-300 ring-fr-danger ring",
        false: "border-otl-gray-200",
      },
    },
    defaultVariants: {
      size: "small",
      disabled: false,
    },
  },
);

const datefield_cva = cva([
  "bg-transparent focus:outline-none",
  "disabled:bg-bg-washed disabled:text-txt-black-500 disabled:cursor-not-allowed",
  "[&::-webkit-calendar-picker-indicator]:hidden",
  "[&::-webkit-datetime-edit]:max-w-fit",
  "[&::-webkit-datetime-edit-text]:mx-[2px]",
  "[&::-webkit-datetime-edit-day-field:focus]:bg-primary-500 [&::-webkit-datetime-edit-day-field:focus]:text-txt-white",
  "[&::-webkit-datetime-edit-month-field:focus]:bg-primary-500 [&::-webkit-datetime-edit-month-field:focus]:text-txt-white ",
  "[&::-webkit-datetime-edit-year-field:focus]:bg-primary-500 [&::-webkit-datetime-edit-year-field:focus]:text-txt-white",
]);

const icon_cva = cva([], {
  variants: {
    size: {
      small: "size-4",
      medium: "size-4.5",
      large: "size-5",
    },
    disabled: {
      true: "text-txt-black-500",
      false: "text-txt-black-700",
    },
  },
  defaultVariants: {
    size: "small",
    disabled: false,
  },
});

type DateFieldProps = Omit<ComponentProps<"input">, "type" | "size"> &
  VariantProps<typeof datefield_container_cva>;

const DateField: FunctionComponent<DateFieldProps> = ({
  className,
  size,
  disabled,
  invalid,
  ...props
}) => {
  return (
    <div
      className={datefield_container_cva({
        size,
        disabled,
        invalid,
        className,
      })}
    >
      <CalendarIcon className={icon_cva({ size, disabled })} />
      <input
        type="date"
        className={datefield_cva()}
        disabled={disabled}
        aria-invalid={invalid ?? undefined}
        {...props}
      />
    </div>
  );
};

export { DateField };
