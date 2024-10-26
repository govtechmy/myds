"use client";

import React from "react";
import { DateRange, Matcher } from "react-day-picker";
import { enGB, ms } from "date-fns/locale";
import { format, isAfter, isBefore, isSameMonth } from "date-fns";
import { useControllableState } from "../hooks/use-controllable-state";
import { Button, button_cva } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { VariantProps } from "class-variance-authority";

export type DateRangePickerProps = {
  defaultDateRange?: DateRange;
  disabled?: Matcher | Matcher[];
  excludeDisabled?: boolean;
  formatStr?: string;
  fromLabel?: string;
  locale?: "en" | "ms";
  onSelect?: (date: DateRange) => void;
  placeholder?: string;
  selected?: DateRange;
  size?: VariantProps<typeof button_cva>["size"];
  toLabel?: string;
};

/**
 * The DateRangePicker component allows users to select a range of dates from an interactive calendar.
 * @see {@link https://design.digital.gov.my/?path=/docs/myds-react-daterangepicker--docs}
 */
function DateRangePicker({
  defaultDateRange,
  disabled = { after: new Date() },
  excludeDisabled = true,
  formatStr = "dd MMM yyy",
  fromLabel,
  locale = "en",
  onSelect,
  placeholder,
  selected,
  size,
  toLabel,
}: DateRangePickerProps) {
  const [selectedDateRange, setSelectedDateRange] = useControllableState({
    prop: selected,
    onChange: onSelect,
    defaultProp: defaultDateRange,
  });

  const isMS = locale === "ms";
  const _locale = isMS ? ms : enGB;
  const formatDate = (date: Date) =>
    format(date, formatStr, {
      locale: _locale,
    });

  return (
    <div className="text-txt-black-900 flex items-center gap-1.5">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="default-outline" size={size}>
            <span className="text-txt-black-500">
              {fromLabel ? fromLabel : isMS ? "Dari:" : "From:"}
            </span>
            {selectedDateRange?.from
              ? formatDate(selectedDateRange.from)
              : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[304px] p-0" align="start">
          <Calendar
            disabled={
              selectedDateRange?.to
                ? {
                    after: selectedDateRange.to,
                  }
                : disabled
            }
            excludeDisabled={excludeDisabled}
            isDisabled={(date) =>
              selectedDateRange?.to
                ? isSameMonth(date, selectedDateRange.to)
                  ? false
                  : isAfter(date, selectedDateRange?.to)
                : false
            }
            locale={_locale}
            mode="range"
            month={selectedDateRange?.from}
            onSelect={({ from, to }) => {
              const date = from === selectedDateRange?.from ? to : from;
              setSelectedDateRange({ ...selectedDateRange, from: date });
            }}
            required
            selected={selectedDateRange}
          />
        </PopoverContent>
      </Popover>
      -
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="default-outline" size={size}>
            <span className="text-txt-black-500">
              {toLabel ? toLabel : isMS ? "Hingga:" : "To:"}
            </span>
            {selectedDateRange?.to
              ? formatDate(selectedDateRange.to)
              : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[304px] p-0" align="end">
          <Calendar
            disabled={
              selectedDateRange?.from
                ? {
                    before: selectedDateRange.from,
                    after: new Date(),
                  }
                : disabled
            }
            excludeDisabled={excludeDisabled}
            isDisabled={(date) =>
              selectedDateRange?.from
                ? isSameMonth(date, selectedDateRange.from)
                  ? false
                  : isBefore(date, selectedDateRange.from)
                : false
            }
            locale={_locale}
            mode="range"
            month={selectedDateRange?.to}
            onSelect={setSelectedDateRange}
            required
            selected={selectedDateRange}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
DateRangePicker.displayName = "DateRangePicker";

export { DateRangePicker };

export type { DateRange };
