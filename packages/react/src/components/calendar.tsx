"use client";

import { format, FormatOptions, Locale } from "date-fns";
import { useState } from "react";
import { DayPicker, DayPickerProps } from "react-day-picker";
import { ChevronLeftIcon } from "../icons/chevron-left";
import { ChevronRightIcon } from "../icons/chevron-right";
import { clx } from "../utils";
import { Button, button_cva as buttonVariants } from "./button";

type CalendarProps = DayPickerProps & {
  isDisabled?: (date: Date) => boolean;
};

function Calendar({
  className,
  classNames,
  isDisabled,
  locale,
  showOutsideDays = true,
  month: _month,
  ...props
}: CalendarProps) {
  const [view, setView] = useState<"day" | "month" | "year">("day");

  const today = new Date();
  const [month, setMonth] = useState<Date>(_month ?? today);

  const thisYear = _month?.getFullYear() ?? today.getFullYear();
  const [year, setYear] = useState<number>(thisYear);

  const [yearGroup, setYearGroup] = useState<number>(
    thisYear - (thisYear % 18) + 1,
  );

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
      className={clx("pb-4.5 p-3", view !== "day" && "h-[326px]", className)}
      classNames={{
        months: "flex flex-col h-full",
        month: "flex flex-col h-full gap-y-1.5",
        month_caption: "",
        caption_label: "text-sm font-medium",
        nav: "absolute right-3 flex gap-2 items-center",
        button_previous: clx(
          buttonVariants({ variant: "default-outline" }),
          "size-8 p-2",
        ),
        button_next: clx(
          buttonVariants({ variant: "default-outline" }),
          "size-8 p-2",
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: "flex",
        weekday: "text-txt-black-500 font-normal w-10 text-body-xs py-2",
        week: "flex w-full mt-1.5",
        day: "size-10",
        day_button: clx(
          buttonVariants({ variant: "default-ghost" }),
          "size-10 p-0 font-normal justify-center disabled:bg-transparent",
        ),
        selected:
          props.mode === "single"
            ? "*:bg-primary-600 *:text-white *:hover:bg-primary-600 *:hover:text-white *:focus:bg-primary-600 *:focus:text-white"
            : "",
        today: "bg-bg-black-50 text-txt-black-900",
        outside: "text-txt-black-900 opacity-50",
        disabled: "",
        range_start:
          "rounded-l-md bg-bg-primary-100 *:bg-primary-600 *:text-white *:hover:bg-primary-600 *:hover:text-white *:focus:bg-primary-600 *:focus:text-white",
        range_middle: "bg-bg-primary-100 *:hover:bg-bg-primary-200",
        range_end:
          "rounded-r-md bg-bg-primary-100 *:bg-primary-600 *:text-white *:hover:bg-primary-600 *:hover:text-white *:focus:bg-primary-600 *:focus:text-white",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron(props) {
          if (props.orientation === "left") {
            return <ChevronLeftIcon className="size-4" {...props} />;
          }
          return <ChevronRightIcon className="size-4" {...props} />;
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
              {view === "month" && monthOrYear === "year"
                ? year
                : formatDate(month, formatStr)}
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
        MonthGrid(props) {
          return view === "day" ? (
            <table {...props} />
          ) : (
            <div role="grid" className="grid grow grid-cols-3">
              {view === "month"
                ? Array(12)
                    .fill(null)
                    .map((_, i) => {
                      const date = new Date();
                      date.setFullYear(year, i);
                      date.setHours(0, 0, 0, 0);
                      return (
                        <Button
                          variant={
                            month.getMonth() === i &&
                            month.getFullYear() === year
                              ? "primary-fill"
                              : "default-ghost"
                          }
                          disabled={isDisabled ? isDisabled(date) : false}
                          className="w-full justify-center disabled:bg-transparent"
                          onClick={() => {
                            setMonth(date);
                            setView("day");
                          }}
                        >
                          {format(date, "MMM")}
                        </Button>
                      );
                    })
                : Array(18)
                    .fill(null)
                    .map((_, i) => {
                      const year = yearGroup + i;
                      const date = new Date();
                      date.setFullYear(year, month.getMonth());
                      date.setHours(0, 0, 0, 0);
                      return (
                        <Button
                          variant={
                            month.getFullYear() === year
                              ? "primary-fill"
                              : "default-ghost"
                          }
                          className="w-full justify-center disabled:bg-transparent"
                          disabled={isDisabled ? isDisabled(date) : false}
                          onClick={() => {
                            setMonth(date);
                            setYear(year);
                            setView("day");
                          }}
                        >
                          {year}
                        </Button>
                      );
                    })}
            </div>
          );
        },
        NextMonthButton(props) {
          return view === "day" ? (
            <Button {...props} />
          ) : (
            <Button
              {...props}
              aria-label={
                view === "month"
                  ? "Go to the Next Year"
                  : "Go to the Next 18 Year Group"
              }
              onClick={() =>
                view === "month"
                  ? setYear(year + 1)
                  : setYearGroup(yearGroup + 18)
              }
            />
          );
        },
        PreviousMonthButton(props) {
          return view === "day" ? (
            <Button {...props} />
          ) : (
            <Button
              {...props}
              aria-label={
                view === "month"
                  ? "Go to the Previous Year"
                  : "Go to the Previous 18 Year Group"
              }
              onClick={() =>
                view === "month"
                  ? setYear(year - 1)
                  : setYearGroup(yearGroup - 18)
              }
            />
          );
        },
      }}
      formatters={{
        formatWeekdayName: (date, options) => formatDate(date, "ccc", options),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
