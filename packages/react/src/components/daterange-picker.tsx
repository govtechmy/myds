import React, { FC } from "react";
import { DateAfter, DateBefore, DateRange, Matcher } from "react-day-picker";
import { enGB, ms } from "date-fns/locale";
import { format } from "date-fns";
import { useControllableState } from "../hooks";
import { Button, button_cva } from "./button";
import { Calendar } from "./calendar";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { VariantProps } from "class-variance-authority";

export type DateRangePickerProps = {
  defaultDateRange?: DateRange;
  disabled?: Matcher | Matcher[];
  excludeDisabled?: boolean;
  formatStr?: string;
  fromLabel?: string;
  locale?: "en" | "ms";
  maxYear?: number;
  minYear?: number;
  onValueChange?: (date: DateRange) => void;
  placeholder?: string;
  value?: DateRange;
  size?: VariantProps<typeof button_cva>["size"];
  toLabel?: string;
  yearOrder?: "asc" | "desc";
};

/**
 * The DateRangePicker component allows users to select a range of dates from an interactive calendar.
 * @see {@link https://design.digital.gov.my/?path=/docs/myds-react-daterangepicker--docs}
 */
const DateRangePicker: FC<DateRangePickerProps> = ({
  defaultDateRange,
  disabled,
  formatStr = "dd MMM yyy",
  fromLabel,
  locale = "en",
  onValueChange,
  placeholder,
  value,
  size,
  toLabel,
  ...props
}) => {
  const [selectedDateRange, setSelectedDateRange] = useControllableState({
    prop: value,
    onChange: onValueChange,
    defaultProp: defaultDateRange,
  });

  const isMS = locale === "ms";
  const _locale = isMS ? ms : enGB;
  const formatDate = (date: Date) =>
    format(date, formatStr, {
      locale: _locale,
    });

  const dateBefore: DateBefore = {
    before: selectedDateRange?.from!,
  };
  const dateAfter: DateAfter = {
    after: selectedDateRange?.to!,
  };

  return (
    <>
      {/* Mobile */}
      <div className="text-txt-black-900 flex items-center gap-1.5 lg:hidden">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="default-outline"
              size={size}
              className="whitespace-nowrap"
            >
              <span className="text-txt-black-500">
                {fromLabel ? fromLabel : isMS ? "Dari:" : "From:"}
              </span>
              {selectedDateRange?.from
                ? formatDate(selectedDateRange.from)
                : placeholder}
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[304px] p-0">
            <Calendar
              disabled={
                selectedDateRange?.to
                  ? disabled
                    ? Array.isArray(disabled)
                      ? [...disabled, dateAfter]
                      : [disabled, dateAfter]
                    : dateAfter
                  : disabled
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
              {...props}
            />
          </DialogContent>
        </Dialog>
        -
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="default-outline"
              size={size}
              className="whitespace-nowrap"
            >
              <span className="text-txt-black-500">
                {toLabel ? toLabel : isMS ? "Hingga:" : "To:"}
              </span>
              {selectedDateRange?.to
                ? formatDate(selectedDateRange.to)
                : placeholder}
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[304px] p-0">
            <Calendar
              disabled={
                selectedDateRange?.from
                  ? disabled
                    ? Array.isArray(disabled)
                      ? [...disabled, dateBefore]
                      : [disabled, dateBefore]
                    : dateBefore
                  : disabled
              }
              locale={_locale}
              mode="range"
              month={selectedDateRange?.to}
              onSelect={setSelectedDateRange}
              required
              selected={selectedDateRange}
              {...props}
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* Desktop */}
      <div className="text-txt-black-900 hidden items-center gap-1.5 lg:flex">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="default-outline"
              size={size}
              className="whitespace-nowrap"
            >
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
                  ? disabled
                    ? Array.isArray(disabled)
                      ? [...disabled, dateAfter]
                      : [disabled, dateAfter]
                    : dateAfter
                  : disabled
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
              {...props}
            />
          </PopoverContent>
        </Popover>
        -
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="default-outline"
              size={size}
              className="whitespace-nowrap"
            >
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
                  ? disabled
                    ? Array.isArray(disabled)
                      ? [...disabled, dateBefore]
                      : [disabled, dateBefore]
                    : dateBefore
                  : disabled
              }
              locale={_locale}
              mode="range"
              month={selectedDateRange?.to}
              onSelect={setSelectedDateRange}
              required
              selected={selectedDateRange}
              {...props}
            />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};
DateRangePicker.displayName = "DateRangePicker";

export { DateRangePicker };

export type { DateRange };
