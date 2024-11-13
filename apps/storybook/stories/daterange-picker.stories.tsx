import { DateRangePicker } from "@myds/react/daterange-picker";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { createStory } from "../utils";

/**
 * ### Overview
 * The Date Range Picker component allows users to select a range of dates from an interactive calendar.
 *
 * ### Usage
 * ```ts
 * import * as React from "react"
 * import { DateRange, DateRangePicker } from "@myds/react/daterange-picker";
 *
 * export function DateRangePickerDemo() {
 *    const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
 *        from: new Date(),
 *        to: new Date(),
 *    });
 *
 *    return (
 *      <DateRangePicker selected={dateRange} onValueChange={setDateRange} />
 *    )
 * }
 * ```
 */
const meta = {
  title: "@myds/react/DateRangePicker",
  component: DateRangePicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: { onValueChange: fn() },
  argTypes: {
    defaultDateRange: {
      description:
        "The date range when initially rendered. Use when you do not need to control the state of the date range picker.",
    },
    disabled: {
      description:
        "A value or a function that matches a specific day. See: https://daypicker.dev/api/type-aliases/Matcher",
    },
    excludeDisabled: {
      table: {
        defaultValue: {
          summary: "true",
        },
      },
      description:
        "When `true`, the range will reset when including a disabled day.",
    },
    fromLabel: {
      table: {
        defaultValue: {
          summary: "From",
        },
      },
      description: "The button label for the start date picker.",
    },
    formatStr: {
      table: {
        defaultValue: {
          summary: "dd MMM yyy",
        },
      },
      description:
        "Returns the formatted date string in the given format. The result may vary by locale. ⚠️ Please note that the format tokens used are from date-fns, which differ from Moment.js and other libraries. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
    },
    locale: {
      table: {
        defaultValue: {
          summary: "en",
        },
        type: {
          summary: "enum",
        },
      },
      description: "Controls which locale the date range picker is in.",
      control: "inline-radio",
      options: ["en", "ms"],
    },
    maxYear: {
      table: {
        defaultValue: {
          summary: "2099",
        },
      },
      description: "Maximum selectable year.",
    },
    minYear: {
      table: {
        defaultValue: {
          summary: "1900",
        },
      },
      description: "Minimum selectable year.",
    },
    onValueChange: {
      table: {
        type: {
          summary: "function",
        },
      },
      description: "Event handler when a date is selected.",
    },
    placeholder: {
      description: "Text that appears when no value is set.",
    },
    value: {
      description:
        "The controlled date range currently selected. Should be used in conjunction with `onValueChange`.",
    },
    size: {
      table: {
        defaultValue: {
          summary: "small",
        },
        type: {
          summary: "enum",
        },
      },
      description: "Controls the size of the button.",
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
    toLabel: {
      table: {
        defaultValue: {
          summary: "To",
        },
      },
      description: "The button label for the end date picker.",
    },
    yearOrder: {
      table: {
        defaultValue: {
          summary: "asc",
        },
        type: {
          summary: "enum",
        },
      },
      description:
        "Controls the order of the years displayed. It is in ascending (chronological) order by default.",
      control: "inline-radio",
      options: ["asc", "desc"],
    },
  },
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default DateRangePicker
 */
export const Default: Story = createStory({
  defaultDateRange: { from: new Date(1957, 7, 31), to: new Date(1963, 8, 16) },
});
