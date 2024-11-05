import React, { FunctionComponent } from "react";
import {
  DateValue,
  DateFieldProps as PrimitiveDateFieldProps,
  DateField as PrimitiveDateField,
  DateInput as PrimitiveDateInput,
  DateSegment as PrimitiveDateSegment,
  I18nProvider,
} from "react-aria-components";
import { CalendarIcon } from "../icons/calendar";
import { cva, VariantProps } from "class-variance-authority";
import { clx } from "../utils";
import { CalendarDate, getLocalTimeZone } from "@internationalized/date";

const DEFAULT_SIZE = "medium";

const datefield_cva = cva(
  [
    "flex items-center gap-2 rounded-md border border-otl-gray-200 bg-bg-white text-txt-black-900 shadow-button",
    "focus-within:border-otl-primary-300 focus-within:ring focus-within:ring-fr-primary",
    "has-[[data-disabled]]:bg-bg-washed has-[[data-disabled]]:text-txt-black-500 has-[[data-disabled]]:cursor-not-allowed",
    "has-[[data-invalid]]:border-otl-danger-300 has-[[data-invalid]]:ring-fr-danger has-[[data-invalid]]:ring",
  ],
  {
    variants: {
      size: {
        small: "px-[10px] py-[6px] text-sm",
        medium: "px-[12px] py-[8px] text-base",
        large: "px-[14px] py-[10px] text-lg",
      },
    },
    defaultVariants: {
      size: DEFAULT_SIZE,
    },
  },
);

const icon_cva = cva([], {
  variants: {
    size: {
      small: "size-4",
      medium: "size-4",
      large: "size-5",
    },
  },
  defaultVariants: {
    size: DEFAULT_SIZE,
  },
});

// Exclude these props from react-aria-components' DateField because they use
// object instances from the `@internationalized/date` pacakage. We'll adapt
// them to use the native JavaScript Date object instead.
type ExcludedPrimitiveDateFieldProps =
  | "value"
  | "defaultValue"
  | "onChange"
  | "minValue"
  | "maxValue"
  | "validate"
  | "isDateUnavailable"
  | "placeholderValue";

type BaseProps = Omit<
  PrimitiveDateFieldProps<DateValue>,
  ExcludedPrimitiveDateFieldProps
> &
  VariantProps<typeof datefield_cva>;

interface DateFieldProps extends BaseProps {
  className?: string;
  locale?: string;
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}

function toCalendarDate(date: Date): CalendarDate {
  return new CalendarDate(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  );
}

/**
 * Adapt props to be compatible with react-aria-components' API.
 */
function adaptProps({
  value,
  defaultValue,
  onChange,
}: Pick<DateFieldProps, "value" | "defaultValue" | "onChange">): Pick<
  PrimitiveDateFieldProps<DateValue>,
  "value" | "defaultValue" | "onChange"
> {
  return {
    value: value ? toCalendarDate(value) : undefined,
    defaultValue: defaultValue ? toCalendarDate(defaultValue) : undefined,
    onChange: onChange
      ? (dateValue) => onChange(dateValue.toDate(getLocalTimeZone()))
      : undefined,
  };
}

/**
 * Based on react-aria-components' DateField.
 * @see {@link https://react-spectrum.adobe.com/react-aria/DateField.html}
 */
const DateField: FunctionComponent<DateFieldProps> = ({
  className,
  size,
  locale = "en-MS",
  value,
  defaultValue,
  onChange,
  ...props
}) => {
  return (
    <I18nProvider locale={locale}>
      <PrimitiveDateField
        className={datefield_cva({ size, className })}
        shouldForceLeadingZeros
        {...adaptProps({ value, defaultValue, onChange })}
        {...props}
      >
        <CalendarIcon className={icon_cva({ size })} />
        <PrimitiveDateInput className="flex items-center gap-0.5">
          {(segment) => (
            <PrimitiveDateSegment
              className={clx(
                "focus-visible:outline-none",
                "data-[placeholder]:text-txt-black-500 data-[type=literal]:text-txt-black-500",
                "data-[focused]:bg-primary-500 data-[focused]:data-[placeholder]:text-txt-white data-[focused]:text-txt-white",
              )}
              segment={segment}
            />
          )}
        </PrimitiveDateInput>
      </PrimitiveDateField>
    </I18nProvider>
  );
};

export { DateField };
