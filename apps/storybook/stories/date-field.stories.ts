import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { DateField } from "@myds/react/date-field";
import { CalendarDate } from "@internationalized/date";
import { fn } from "@storybook/test";

/**
 * ### Overview
 * The Date Field component allows users to input a date in a structured format
 * using separate fields for day, month, and year.
 *
 * _Uses react-aria-components' DateField API [(docs)](https://react-spectrum.adobe.com/react-aria/DateField.html)_
 *
 * ### Usage
 * ```ts
 * import DateField from "@myds/react/date-field";
 *
 * <DateField />
 * ```
 */
const meta = {
  title: "@myds/react/DateField",
  component: DateField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    size: "medium",
    locale: "en-MS",
  },
  argTypes: {
    locale: {
      control: "select",
      options: ["en-MS", "en-GB", "ms-MY"],
    },
    size: {
      table: {
        defaultValue: {
          summary: "medium",
        },
        type: {
          summary: "enum",
          detail: "small, medium, large",
        },
      },
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof DateField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = createStory({
  defaultValue: new CalendarDate(1957, 8, 31),
});

export const DisabledLight: Story = createStory({ isDisabled: true });

export const ErrorLight: Story = createStory({ isInvalid: true });

export const Dark: Story = createStory(
  {
    className: "dark",
    defaultValue: new CalendarDate(1957, 8, 31),
  },
  "dark",
);

export const DisabledDark: Story = createStory(
  { isDisabled: true, className: "dark" },
  "dark",
);

export const ErrorDark: Story = createStory(
  { isInvalid: true, className: "dark" },
  "dark",
);
