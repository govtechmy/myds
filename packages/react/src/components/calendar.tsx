import {
  addMonths,
  addYears,
  format,
  FormatOptions,
  isDate,
  isSameMonth,
  isSameYear,
  Locale,
  subMonths,
  subYears,
} from "date-fns";
import { FC, useEffect, useRef, useState } from "react";
import {
  DateLib,
  DayPicker,
  DayPickerProps,
  defaultDateLib,
  isDateAfterType,
  isDateBeforeType,
  isDateInterval,
  isDateRange,
  isDatesArray,
  isDayOfWeekType,
  Matcher,
  rangeIncludesDate,
} from "react-day-picker";
import { ChevronLeftIcon } from "../icons/chevron-left";
import { ChevronRightIcon } from "../icons/chevron-right";
import { clx } from "../utils";
import { Button, button_cva as buttonVariants } from "./button";

type CalendarProps = DayPickerProps & {
  maxYear?: number;
  minYear?: number;
  yearOrder?: "asc" | "desc";
};

const Calendar: FC<CalendarProps> = ({
  className,
  classNames,
  locale,
  maxYear = 2099,
  month: _month,
  minYear = 1900,
  showOutsideDays = true,
  yearOrder = "asc",
  ...props
}) => {
  const [view, setView] = useState<"day" | "month" | "year">("day");

  const today = new Date();
  const [month, setMonth] = useState<Date>(_month ?? today);

  const thisYear = _month?.getFullYear() ?? today.getFullYear();
  const [year, setYear] = useState<number>(thisYear);

  const yearRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (view === "year")
      if (yearRef && yearRef.current)
        yearRef.current.scrollIntoView({
          block: "center",
        });
  }, [view]);

  const formatDate = (date: Date, formatStr: string, options?: FormatOptions) =>
    format(date, formatStr, {
      ...options,
      locale: locale as Locale,
    });

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      month={month}
      onMonthChange={setMonth}
      className={clx(
        "pb-4.5 w-full p-3",
        view !== "day" && "h-[326px]",
        className,
      )}
      classNames={{
        months: "relative flex flex-col h-full",
        month: "flex flex-col h-full gap-y-1.5",
        month_caption: "",
        caption_label: "text-sm font-medium",
        nav: "absolute left-52 flex gap-2 items-center",
        button_previous: buttonVariants({
          variant: "default-outline",
          iconOnly: true,
          className: "size-8",
        }),
        button_next: buttonVariants({
          variant: "default-outline",
          iconOnly: true,
          className: "size-8",
        }),
        chevron: "size-4",
        month_grid: "w-full border-collapse space-y-1",
        weekdays: "flex",
        weekday: "text-txt-black-500 font-normal w-10 text-body-xs py-2",
        week: "flex w-full mt-1.5",
        day: "p-0",
        day_button: clx(
          buttonVariants({ variant: "default-ghost" }),
          "size-10 font-normal justify-center disabled:bg-transparent",
          "[.selected:not(.in-range)_&]:bg-primary-600 [.selected:not(.in-range)_&]:text-white",
          "[.today:not(.selected)_&]:text-primary-600 [.today:selected)_&]:text-white",
        ),
        selected: clx(
          "selected",
          props.mode === "single"
            ? "*:bg-primary-600 *:text-white *:hover:bg-primary-600 *:hover:text-white *:focus:bg-primary-600 *:focus:text-white"
            : "",
        ),
        today: "today",
        outside: "text-txt-black-900 opacity-50",
        disabled: "",
        range_start:
          "rounded-l-md bg-bg-primary-100 *:bg-primary-600 *:text-white *:hover:bg-primary-600 *:hover:text-white *:focus:bg-primary-600 *:focus:text-white",
        range_middle:
          "in-range bg-bg-primary-100 *:hover:bg-bg-primary-200 *:focus:bg-bg-primary-200",
        range_end:
          "rounded-r-md bg-bg-primary-100 *:bg-primary-600 *:text-white *:hover:bg-primary-600 *:hover:text-white *:focus:bg-primary-600 *:focus:text-white",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron(props) {
          if (props.orientation === "left") {
            return <ChevronLeftIcon {...props} />;
          }
          return <ChevronRightIcon {...props} />;
        },
        CaptionLabel(props) {
          const toggle = (monthOrYear: "month" | "year", formatStr: string) => (
            <Button
              variant={view === monthOrYear ? "unset" : "default-ghost"}
              className={clx(
                "px-1.5 py-1 text-base font-semibold",
                view === monthOrYear
                  ? "text-txt-primary bg-bg-primary-50 ring-fr-primary focus:ring"
                  : "border-none",
              )}
              onClick={() =>
                setView(view === monthOrYear ? "day" : monthOrYear)
              }
            >
              {formatDate(month, formatStr)}
            </Button>
          );

          return (
            <span
              {...props}
              className="text-bg-black-400 relative flex w-fit select-none items-center gap-0.5"
            >
              {toggle("month", "LLLL")}/{toggle("year", "yyy")}
            </span>
          );
        },
        MonthGrid(tableProps) {
          return view === "day" ? (
            <table {...tableProps} />
          ) : view === "month" ? (
            <table role="grid" className="grid grow grid-cols-3">
              {Array(12)
                .fill(null)
                .map((_, i) => {
                  const date = new Date();
                  date.setFullYear(year, i);
                  date.setHours(0, 0, 0, 0);

                  const isSelected =
                    month.getMonth() === i && month.getFullYear() === year;

                  return (
                    <td role="gridcell">
                      <Button
                        data-selected={isSelected}
                        variant={isSelected ? "primary-fill" : "default-ghost"}
                        disabled={
                          props.disabled
                            ? dateMatchers("month", date, props.disabled)
                            : false
                        }
                        className="h-full w-full justify-center disabled:data-[selected=false]:bg-transparent"
                        onClick={() => {
                          setMonth(date);
                          setView("day");
                        }}
                      >
                        {formatDate(date, "MMM")}
                      </Button>
                    </td>
                  );
                })}
            </table>
          ) : (
            <table role="grid" className="grid grid-cols-3 overflow-y-auto">
              {Array(maxYear - minYear + 1)
                .fill(null)
                .map((_, i) => {
                  const displayYear =
                    yearOrder === "asc" ? minYear + i : maxYear - i;
                  const isSelected = month.getFullYear() === displayYear;

                  const date = new Date();
                  date.setFullYear(displayYear, 0, 1);
                  date.setHours(0, 0, 0, 0);

                  return (
                    <td role="gridcell">
                      <Button
                        ref={isSelected ? yearRef : null}
                        data-selected={isSelected}
                        variant={isSelected ? "primary-fill" : "default-ghost"}
                        className="h-11 w-full justify-center disabled:data-[selected=false]:bg-transparent"
                        disabled={
                          props.disabled
                            ? dateMatchers("year", date, props.disabled)
                            : false
                        }
                        onClick={() => {
                          setYear(displayYear);
                          setMonth(new Date(displayYear, month.getMonth()));
                          setView("month");
                        }}
                      >
                        {displayYear}
                      </Button>
                    </td>
                  );
                })}
            </table>
          );
        },
        NextMonthButton(props) {
          return view === "day" ? (
            <Button
              {...props}
              onClick={() => {
                const date = addMonths(month, 1);
                setMonth(date);
                setYear(date.getFullYear());
              }}
              disabled={addMonths(month, 1).getFullYear() > maxYear}
            />
          ) : view === "month" ? (
            <Button
              {...props}
              aria-label="Go to the Next Year"
              onClick={() => {
                const date = addYears(month, 1);
                setMonth(date);
                setYear(year + 1);
              }}
              disabled={year >= maxYear}
            />
          ) : (
            <></>
          );
        },
        PreviousMonthButton(props) {
          return view === "day" ? (
            <Button
              {...props}
              onClick={() => {
                const date = subMonths(month, 1);
                setMonth(date);
                setYear(date.getFullYear());
              }}
              disabled={subMonths(month, 1).getFullYear() < minYear}
            />
          ) : view === "month" ? (
            <Button
              {...props}
              aria-label="Go to the Previous Year"
              onClick={() => {
                const date = subYears(month, 1);
                setMonth(date);
                setYear(year - 1);
              }}
              disabled={year <= minYear}
            />
          ) : (
            <></>
          );
        },
      }}
      formatters={{
        formatWeekdayName: (date, options) => formatDate(date, "ccc", options),
      }}
      {...props}
    />
  );
};
Calendar.displayName = "Calendar";

export { Calendar };

function dateMatchers(
  view: "month" | "year",
  date: Date,
  matchers: Matcher | Matcher[],
  dateLib: DateLib = defaultDateLib,
): boolean {
  const matchersArr = !Array.isArray(matchers) ? [matchers] : matchers;
  const { isSameDay, differenceInCalendarDays, isAfter } = dateLib;
  return matchersArr.some((matcher: Matcher) => {
    if (typeof matcher === "boolean") {
      return matcher;
    }
    if (isDate(matcher)) {
      return isSameDay(date, matcher);
    }
    if (isDatesArray(matcher, dateLib)) {
      return matcher.includes(date);
    }
    if (isDateRange(matcher)) {
      if (view === "month") {
        if (isSameMonth(date, matcher.from!)) return false;
        if (isSameMonth(date, matcher.to!)) return false;
      }
      if (view === "year") {
        if (isSameYear(date, matcher.from!)) return false;
        if (isSameYear(date, matcher.to!)) return false;
      }
      return rangeIncludesDate(matcher, date, false, dateLib);
    }
    if (isDayOfWeekType(matcher)) {
      if (!Array.isArray(matcher.dayOfWeek)) {
        return matcher.dayOfWeek === date.getDay();
      }
      return matcher.dayOfWeek.includes(date.getDay());
    }
    if (isDateInterval(matcher)) {
      const diffBefore = differenceInCalendarDays(matcher.before, date);
      const diffAfter = differenceInCalendarDays(matcher.after, date);
      const isDayBefore = diffBefore > 0;
      const isDayAfter = diffAfter < 0;
      const isClosedInterval = isAfter(matcher.before, matcher.after);
      if (view === "month") {
        if (isSameMonth(date, matcher.before)) return false;
        if (isSameMonth(date, matcher.after)) return false;
      }
      if (view === "year") {
        if (isSameYear(date, matcher.before)) return false;
        if (isSameYear(date, matcher.after)) return false;
      }
      if (isClosedInterval) {
        return isDayAfter && isDayBefore;
      } else {
        return isDayBefore || isDayAfter;
      }
    }
    if (isDateAfterType(matcher)) {
      if (view === "month" && isSameMonth(date, matcher.after)) return false;
      if (view === "year" && isSameYear(date, matcher.after)) return false;
      return differenceInCalendarDays(date, matcher.after) > 0;
    }
    if (isDateBeforeType(matcher)) {
      if (view === "month" && isSameMonth(matcher.before, date)) return false;
      if (view === "year" && isSameYear(matcher.before, date)) return false;
      return differenceInCalendarDays(matcher.before, date) > 0;
    }
    if (typeof matcher === "function") {
      return matcher(date);
    }
    return false;
  });
}
