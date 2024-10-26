"use client";

import { ReactElement } from "react";
import { Matcher } from "react-day-picker";
import { enGB, ms } from "date-fns/locale";
import { format } from "date-fns";
import { useControllableState } from "../hooks/use-controllable-state";
import { CalendarIcon } from "../icons/calendar";
import { Button, button_cva, ButtonIcon } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { VariantProps } from "class-variance-authority";

type DatePickerProps = {
  defaultDate?: Date;
  disabled?: Matcher | Matcher[];
  formatStr?: string;
  icon?: ReactElement;
  locale?: "en" | "ms";
  onSelect?: (date: Date) => void;
  placeholder?: string;
  selected?: Date;
  size?: VariantProps<typeof button_cva>["size"];
};

/**
 * The DatePicker component allows users to select a date from an interactive calendar.
 * @see {@link https://design.digital.gov.my/?path=/docs/myds-react-datepicker--docs}
 */
function DatePicker({
  defaultDate,
  disabled = { after: new Date() },
  formatStr = "dd MMM yyy",
  icon,
  locale = "en",
  onSelect,
  placeholder,
  selected,
  size,
}: DatePickerProps) {
  const [date, setDate] = useControllableState({
    prop: selected,
    onChange: onSelect,
    defaultProp: defaultDate,
  });

  const _locale = locale === "en" ? enGB : ms;
  const formatDate = (date: Date) =>
    format(date, formatStr, {
      locale: _locale,
    });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="default-outline" size={size} >
          <ButtonIcon>
            {icon ?? <CalendarIcon />}
          </ButtonIcon>
          {date ? formatDate(date) : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[304px] p-0" align="start">
        <Calendar
          disabled={disabled}
          locale={_locale}
          mode="single"
          month={date}
          onSelect={setDate}
          required
          selected={date}
        />
      </PopoverContent>
    </Popover>
  );
}
DatePicker.displayName = "DatePicker";

export { DatePicker };
