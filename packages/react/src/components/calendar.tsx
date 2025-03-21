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
  DateRange,
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
  daterange?: "from" | "to";
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
        view === "day" ? "sm:w-fit" : "h-[342px]",
        className,
      )}
      classNames={{
        months: "relative flex flex-col h-full",
        month: "flex flex-col h-full gap-y-1.5",
        month_caption: "",
        caption_label: "text-sm font-medium",
        nav: "absolute right-0 flex gap-2 items-center",
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
        weekdays: "",
        weekday: "text-txt-black-500 font-normal sm:w-10 text-body-xs py-2",
        week: "w-full mt-1.5",
        day: "aspect-square p-0",
        day_button: clx(
          buttonVariants({ variant: "default-ghost" }),
          "aspect-square h-full w-full font-normal justify-center disabled:bg-transparent",
          "[.selected:not(.in-range)_&]:bg-primary-600 [.selected:not(.in-range)_&]:text-white",
          "[.today:not(.selected)_&]:text-txt-primary [.today:selected)_&]:text-white",
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
            <table role="grid" className="table h-full">
              <tbody>
                {[0, 1, 2, 3].map((row_index) => (
                  <tr>
                    {[0, 1, 2].map((col_index) => {
                      const date = new Date();
                      date.setHours(0, 0, 0, 0);

                      let selected_date = date;
                      if (props.mode !== undefined)
                        selected_date = getSelectedDate(
                          props.selected,
                          props.daterange,
                        );

                      const i = row_index * 3 + col_index;

                      date.setFullYear(year, i, selected_date.getDate());

                      const isSelected =
                        month.getMonth() === i && month.getFullYear() === year;

                      return (
                        <td role="gridcell">
                          <Button
                            data-selected={isSelected}
                            variant={
                              isSelected ? "primary-fill" : "default-ghost"
                            }
                            disabled={
                              props.disabled
                                ? dateMatchers("month", date, props.disabled)
                                : false
                            }
                            className="h-full w-full justify-center disabled:data-[selected=false]:bg-transparent"
                            onClick={(e) => {
                              setMonth(date);
                              setView("day");

                              if (props.mode !== undefined && props.onSelect) {
                                if (props.mode === "single")
                                  props.onSelect(date, date, {}, e);
                                if (props.mode === "range") {
                                  if (props.selected) {
                                    const { from, to } = props.selected;
                                    props.onSelect(
                                      props.daterange === "from"
                                        ? { from: date, to }
                                        : { from, to: date },
                                      date,
                                      {},
                                      e,
                                    );
                                  } else
                                    props.onSelect(
                                      props.daterange === "from"
                                        ? { from: date, to: undefined }
                                        : { from: undefined, to: date },
                                      date,
                                      {},
                                      e,
                                    );
                                }
                              }
                            }}
                          >
                            {formatDate(date, "MMM")}
                          </Button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="overflow-y-auto">
              <table role="grid" className="w-full">
                <tbody>
                  {Array(Math.ceil((maxYear - minYear) / 3))
                    .fill(null)
                    .map((_, row_index) => (
                      <tr>
                        {[0, 1, 2].map((col_index) => {
                          const i = row_index * 3 + col_index;

                          const displayYear =
                            yearOrder === "asc" ? minYear + i : maxYear - i;
                          const isSelected =
                            month.getFullYear() === displayYear;

                          const date = new Date();
                          date.setHours(0, 0, 0, 0);

                          let selected_date = date;

                          if (props.mode !== undefined)
                            selected_date = getSelectedDate(
                              props.selected,
                              props.daterange,
                            );

                          date.setFullYear(
                            displayYear,
                            selected_date.getMonth(),
                            selected_date.getDate(),
                          );

                          return (
                            <td role="gridcell">
                              <Button
                                ref={isSelected ? yearRef : null}
                                data-selected-date={date}
                                data-selected={isSelected}
                                variant={
                                  isSelected ? "primary-fill" : "default-ghost"
                                }
                                className="h-full min-h-11 w-full justify-center disabled:data-[selected=false]:bg-transparent"
                                disabled={
                                  props.disabled
                                    ? dateMatchers("year", date, props.disabled)
                                    : false
                                }
                                onClick={(e) => {
                                  setYear(displayYear);
                                  month.setFullYear(displayYear);
                                  setMonth(month);
                                  setView("month");

                                  if (
                                    props.mode !== undefined &&
                                    props.onSelect
                                  ) {
                                    if (props.mode === "single")
                                      props.onSelect(date, date, {}, e);
                                    if (props.mode === "range") {
                                      if (props.selected) {
                                        const { from, to } = props.selected;
                                        props.onSelect(
                                          props.daterange === "from"
                                            ? { from: date, to }
                                            : { from, to: date },
                                          date,
                                          {},
                                          e,
                                        );
                                      } else
                                        props.onSelect(
                                          props.daterange === "from"
                                            ? { from: date, to: undefined }
                                            : { from: undefined, to: date },
                                          date,
                                          {},
                                          e,
                                        );
                                    }
                                  }
                                }}
                              >
                                {displayYear}
                              </Button>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
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

function getSelectedDate(
  selected?: Date | Date[] | DateRange,
  daterange?: "from" | "to",
): Date {
  const date = new Date();
  if (selected === undefined) return date;
  if (isDate(selected)) return selected;
  if (isDateRange(selected)) {
    if (daterange === "from" && selected.from) return selected.from;
    if (daterange === "to" && selected.to) return selected.to;
    return date;
  }
  if (selected.length > 0 && selected[0]) return selected[0];
  return date;
}
